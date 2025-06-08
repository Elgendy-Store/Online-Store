import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { getStoreInfo } from '../data/storeInfo';
import { ContactFormData } from '../types/types';
import emailjs from '@emailjs/browser';
import { useBudget } from '../context/BudgetContext';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const storeInfo = getStoreInfo();
  const formRef = useRef<HTMLFormElement>(null);
  const { budgetItems } = useBudget();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formRef.current) {
      setError(t('formError'));
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError(t('invalidEmail'));
      setIsSubmitting(false);
      return;
    }

    // Phone validation (required)
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      setError(t('invalidPhone'));
      setIsSubmitting(false);
      return;
    }

    // Use the correct base URL with /Online-Store/
    const baseUrl = `${window.location.origin}/Online-Store`;
    const budgetDetails = budgetItems.length > 0
      ? `${t('budgetItems')}:\n${budgetItems
          .map((item) => `- ${item.product.name} (${item.quantity}x): ${baseUrl}/products/${item.product.id}`)
          .join('\n')}`
      : t('noBudgetItems');

    const formDataWithBudget = {
      ...formData,
      budget_items: budgetDetails,
    };

    emailjs
      .send('service_zjtg9u5', 'template_1nlffsq', formDataWithBudget, 'bcjVTCGADnPxg5Op7')
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setError(t('submissionError') + `: ${error.text}`);
        }
      );
  };

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('contactUs')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">{t('sendMessage')}</h2>
              {isSubmitted ? (
                <div className="bg-success-50 border border-success-200 text-success-700 rounded-lg p-4 mb-6">
                  <p className="font-medium">{t('successMessage')}</p>
                  <p className="text-sm mt-1">{t('successMessageDetails')}</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        {t('name')} <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        {t('email')} <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      {t('phone')} <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  {error && (
                    <div className="bg-error-50 border border-error-200 text-error-700 rounded-lg p-4 mb-6">
                      <p>{error}</p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t('sending')}
                      </>
                    ) : (
                      <>
                        <Send size={18} className="ml-2" />
                        {t('send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-64 bg-primary-700 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.76310400773383!2d31.48346584706376!3d30.262594137960303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458057b606153f1%3A0x437f9317176d4fc6!2z2YXZiNmEINmG2LLZh9ipINin2YTYudio2YjYsQ!5e0!3m2!1sen!2seg!4v1749092658627!5m2!1sen!2seg"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">{t('contactInfo')}</h2>
              <ul className="space-y-6">
                <li className="flex">
                  <MapPin size={24} className="text-primary-600 ml-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('location')}</h3>
                    <p className="text-neutral-600">{storeInfo.address}</p>
                  </div>
                </li>
                <li className="flex">
                  <Phone size={24} className="text-primary-600 ml-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('phone')}</h3>
                    <p className="text-neutral-600">
                      <a href={`tel:${storeInfo.phone}`} className="hover:text-primary-600">
                        {storeInfo.phone}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <Mail size={24} className="text-primary-600 ml-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('email')}</h3>
                    <p className="text-neutral-600">
                      <a href={`mailto:${storeInfo.email}`} className="hover:text-primary-600">
                        {storeInfo.email}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <Clock size={24} className="text-primary-600 ml-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t('workingHours')}</h3>
                    <div className="text-neutral-600">
                      {storeInfo.workingHours.map((schedule, index) => (
                        <div key={index} className="mb-1 last:mb-0">
                          <p>
                            {schedule.days}: {schedule.hours}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;