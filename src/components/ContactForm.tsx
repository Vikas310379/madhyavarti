'use client';

import React, { useState } from 'react';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';
import { MailIcon, PhoneIcon, UserIcon, MapPinIcon, MessageCircleIcon, SendIcon, CheckCircleIcon, AlertCircleIcon } from './ui/Icons';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          company: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    'General Inquiry',
    'Business Partnership',
    'Technical Support',
    'Investment Opportunity',
    'Media & Press',
    'Other'
  ];

return (
  <div className="w-full max-w-7xl mx-auto px-4 py-8">
    {/* Contact Info Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
      {/* Call Section */}
      <div>
        <div className="flex justify-center mb-2">
          <PhoneIcon className="text-green-600" size={32} />
        </div>
        <h3 className="text-lg font-semibold mb-1">Give us a Call</h3>
        <p className="text-gray-600 mb-2">
          Want to talk? We'd love to hear from you! Please call us on
        </p>
        <div className="font-medium text-gray-900">India: +91 9211301229</div>
      </div>

      {/* Email Section */}
      <div>
        <div className="flex justify-center mb-2">
          <MailIcon className="text-green-600" size={32} />
        </div>
        <h3 className="text-lg font-semibold mb-1">Drop us a Line</h3>
        <p className="text-gray-600 mb-2">
          If you have any questions or comments, please email us at
        </p>
        <div className="font-medium text-gray-900">
          info@madhyavartithebroker.com
        </div>
      </div>

      {/* Address & Working Hours Section */}
      <div>
        <div className="flex justify-center mb-2">
          <MapPinIcon className="text-green-600" size={32} />
        </div>
        <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
        <p className="text-gray-600 mb-2">
          You’re welcome to visit our office during business hours.
        </p>
        <div className="font-medium text-gray-900">
          Madhyavarti The Broker Pvt. Ltd.<br />
          123 Business Park, MG Road<br />
          New Delhi, India
        </div>
        <div className="mt-3 text-gray-700 text-sm">
          <span className="font-semibold">Working Hours:</span><br />
          Mon – Sat: 9:00 AM – 6:00 PM<br />
          Sunday: Closed
        </div>
      </div>
    </div>

    {/* Form Title */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">GET IN TOUCH</h2>
      <p className="text-gray-600">
        Contact us with any questions you may have or to discuss how we can help with your project.
      </p>
    </div>

    {/* Success/Error Messages */}
    {submitStatus === 'success' && (
      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-center">
        <CheckCircleIcon className="text-green-500 mr-3" size={20} />
        <span className="text-green-800 font-medium">Message sent successfully!</span>
      </div>
    )}
    {submitStatus === 'error' && (
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center">
        <AlertCircleIcon className="text-red-500 mr-3" size={20} />
        <span className="text-red-800 font-medium">Failed to send message. Please try again.</span>
      </div>
    )}

    {/* Contact Form */}
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Your name</label>
          <Input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            leftIcon={<UserIcon className="text-gray-400" size={20} />}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message subject</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <MessageCircleIcon size={20} />
            </span>
            <select
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            >
              <option value="">Select a subject</option>
              {subjectOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          {errors.subject && (
            <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Your Mobile No.</label>
          <Input
            name="phone"
            type="tel"
            placeholder="Enter your mobile number"
            required
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            leftIcon={<PhoneIcon className="text-gray-400" size={20} />}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your email</label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            leftIcon={<MailIcon className="text-gray-400" size={20} />}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Company (Optional)</label>
          <Input
            name="company"
            type="text"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your message</label>
          <Textarea
            name="message"
            placeholder="Type your message here..."
            required
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          size="lg"
          className="w-full md:w-auto"
          leftIcon={!isSubmitting ? <SendIcon size={20} /> : undefined}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </div>
    </form>

    {/* Google Map */}
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center">Our Location</h3>
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.772444673015!2d77.0366478!3d28.4261224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1968745e87f7%3A0x895948e4e65dd444!2sMADHYAVARTI%20TECHNOLOGIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1757328689544!5m2!1sen!2sin" 
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
);
};

export default ContactForm;