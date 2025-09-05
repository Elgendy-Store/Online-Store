import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import storelogo from '../banar image/-5904417191535691899_121.jpg';
const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('welcome')}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-100">
              {t('slogan')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('categories-section')}
                className="btn bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg transition-colors font-medium text-lg"
              >
                {t('shopNow')}
              </button>
              <Link
                to="/about"
                className="btn bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors font-medium text-lg"
              >
                {t('aboutUs')}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-3 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src={storelogo}
                alt="Electronics showcase"
                className="w-[600px] h-[500px] rounded-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 right-0 bg-white/5 rounded-full w-64 h-64 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 bg-secondary-500/10 rounded-full w-96 h-96 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;