import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-700 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:underline transition-all duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-700 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="hover:underline transition-all duration-300"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-700 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Location</h4>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-700 rounded-full">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">LinkedIn</h4>
                    <a 
                      href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline transition-all duration-300"
                    >
                      {personalInfo.linkedin}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className={`p-8 rounded-lg shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } transition-all duration-300`}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="mt-4 p-3 bg-green-600 text-white rounded-lg animate-fadeIn">
                    {submitMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;