import React, { useState } from 'react';
import type { MetaFunction } from 'react-router';
import image from "~/components/images/Breda.jpg"

// Meta for the page
export const meta: MetaFunction = () => {
  return [
    { title: "Contact | DL SVD" },
    { name: "description", content: "Get in touch with DL SVD for court document search, verification, and request services in Ghana." },
    { name: "keywords", content: "contact, court documents, Ghana, legal services, document verification" },
  ];
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Prepare data for the email API
      const emailData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNumber: formData.phone,
        country: 'Ghana', // Default since this is for Ghana court services
        serviceType: 'contact', // General contact inquiry
        reasonForRequest: 'Contact Form Inquiry',
        instructions: `Company/Organization: ${formData.company || 'Not specified'}\n\nMessage:\n${formData.message}`,
        verificationDocuments: false,
        requestedDocument: '',
        fileCount: 0,
        attachments: []
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! We\'ll get back to you within 24 hours.'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section with Form */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold font-heading text-gray-900 leading-tight">
                  Ready to Streamline Your
                  Legal Document Process More
                  <span className="customed-text-color text-5xl lg:text-6xl"> Effectively?</span>
                </h1>
                <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                  Access Ghana's court system with ease. Our comprehensive document search, 
                  verification, and request services helps  law firms, litigators, banks,  businesses as well as  individuals and corporations   
                  navigate legal documentation efficiently.
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
               
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">⚡</span>
                  </div>
                  <span className="text-gray-700 font-medium">Fast & Reliable Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600">🔒</span>
                  </div>
                  <span className="text-gray-700 font-medium">Secure & Confidential</span>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={image}
                  alt="Professional legal team ready to help" 
                  className="w-full  h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="font-semibold text-lg">Expert Legal Document Team</div>
                  <div className="text-sm opacity-90">Our dedicated professionals provide reliable court document services across Ghana</div>
                </div>
              </div>
            </div>
            
            {/* Right Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold customed-text-color mb-2">Get in Touch</h3>
                <p className="text-gray-600">Contact us for court document services, consultations, or inquiries</p>
              </div>
              
              <form method="post" className="space-y-6" onSubmit={handleSubmit}>
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-lg border ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}>
                    <div className="flex items-center">
                      <span className="mr-2">
                        {submitStatus.type === 'success' ? '✅' : '❌'}
                      </span>
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                {/* First and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#32ADE6] focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#32ADE6] focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#32ADE6] focus:bg-white transition-all"
                    required
                  />
                </div>
                
                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+233 XXX XXX XXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#32ADE6] focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization/Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#32ADE6] focus:bg-white transition-all"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe the type of court document service you need (search, verification, or request)..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#32ADE6] focus:bg-white transition-all resize-none"
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`customed-button w-full py-4 px-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading customed-text-color mb-4">
              Get in Touch with DL SVD
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are strategically positioned to serve clients across the country. 
              Reach out for consultations, urgent requests, or to learn more about our 
              court document services.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#32ADE6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-xl customed-text-color mb-2">Phone & WhatsApp</h3>
              <p className="text-gray-600 mb-2">Available 24/7 for urgent requests</p>
              <p className="text-lg font-medium customed-text-color">+233 596 252 127</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#32ADE6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold text-xl customed-text-color mb-2">Email</h3>
              <p className="text-gray-600 mb-2">For detailed inquiries and follow-ups</p>
              <p className="text-lg font-medium customed-text-color">dlservices@dennislawgh.com</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#32ADE6] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-xl customed-text-color mb-2">Instant Support</h3>
              <p className="text-gray-600 mb-2">Instant support during business hours</p>
              <p className="text-lg font-medium customed-text-color">Available on website</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <iframe className='w-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3596342139604!2d-0.15926712501993817!3d5.661017432584766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99845295c801%3A0x3e4129e30da397b5!2sDennislaw%20Ghana!5e0!3m2!1sen!2sgh!4v1750970539619!5m2!1sen!2sgh" width="600" height="450"  loading="lazy" ></iframe>
            
            {/* Office Marker */}
            <div className="absolute top-6 left-6 bg-[#32ADE6] text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
              <span className="text-lg">📍</span>
              <span className="font-semibold text-sm">Dennislaw SVD Services Headquarters</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 