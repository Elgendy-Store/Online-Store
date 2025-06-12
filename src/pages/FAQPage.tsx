import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getAllFAQs } from '../data/faqs';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const { t } = useTranslation();
  const faqs = getAllFAQs();
  const [openFAQs, setOpenFAQs] = useState<string[]>([]);

  // Get unique categories
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id) 
        : [...prev, id]
    );
  };

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{t('frequentlyAskedQuestions')}</h1>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">لديك سؤال؟ نحن هنا للمساعدة</h2>
              <p className="text-neutral-600 mb-6">
                اطلع على الأسئلة الشائعة أدناه، وإذا لم تجد إجابة لسؤالك، يمكنك دائمًا التواصل معنا مباشرة.
              </p>
              
              {categories.map(category => (
                <div key={category} className="mb-8 last:mb-0">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">
                    {category}
                  </h3>
                  
                  <div className="space-y-4">
                    {faqs
                      .filter(faq => faq.category === category)
                      .map(faq => (
                        <div 
                          key={faq.id} 
                          className="border border-neutral-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full flex justify-between items-center p-4 text-right hover:bg-neutral-50 transition-colors"
                          >
                            <span className="font-medium text-lg">{faq.question}</span>
                            {openFAQs.includes(faq.id) ? (
                              <ChevronUp size={20} className="text-neutral-500" />
                            ) : (
                              <ChevronDown size={20} className="text-neutral-500" />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {openFAQs.includes(faq.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="p-4 pt-0 border-t border-neutral-200 bg-neutral-50">
                                  <p className="text-neutral-700">{faq.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="text-center">
            <p className="text-neutral-600 mb-4">
              لم تجد إجابة لسؤالك؟ لا تتردد في التواصل معنا مباشرة
            </p>
              <Link to="/contact" className="btn btn-primary px-6 py-3 rounded-lg inline-block">
                {t('contactUs')}
              </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQPage;