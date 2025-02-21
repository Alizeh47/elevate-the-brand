import React, { useState, FormEvent } from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="size-6 text-purple-600" />,
    title: "Phone",
    content: "+1 (555) 123-4567"
  },
  {
    icon: <Mail className="size-6 text-purple-600" />,
    title: "Email",
    content: "contact@elevate.brand"
  },
  {
    icon: <MessageSquare className="size-6 text-purple-600" />,
    title: "Live Chat",
    content: "Available 24/7"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Have a question or want to work together? We&apos;d love to hear from you.
            Get in touch with us today.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-lg bg-purple-50 p-3">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="mb-4 font-medium text-gray-900">Office Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 