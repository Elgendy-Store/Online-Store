import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { getStoreInfo } from '../../data/storeInfo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const storeInfo = getStoreInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">{storeInfo.name}</h3>
            <p className="text-neutral-300 mb-4">
              {t('slogan')}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={55} className="text-primary-400 ml-2" />
                <span className="text-neutral-300">{storeInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 ml-2" />
                <span className="text-neutral-300">{storeInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 ml-2" />
                <span className="text-neutral-300">{storeInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('workingHours')}</h3>
            <ul className="space-y-3">
              {storeInfo.workingHours.map((schedule, index) => (
                <li key={index} className="flex items-start">
                  <Clock size={18} className="text-primary-400 ml-2 mt-1" />
                  <div>
                    <p className="text-neutral-300">{schedule.days}</p>
                    <p className="text-neutral-400">{schedule.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('categories')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('followUs')}</h3>
            <div className="flex space-x-4 space-x-reverse mb-6">
              {storeInfo.socialMedia.facebook && (
                <a
                  href={storeInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
              {storeInfo.socialMedia.instagram && (
                <a
                  href={storeInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {storeInfo.socialMedia.whatsapp && (
                <a
                  href={storeInfo.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-neutral-400 text-sm">
              {t('stayConnected')}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-8 pt-6 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} {storeInfo.name} - {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;