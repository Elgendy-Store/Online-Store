import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, ShoppingBag, Menu, X, User, Globe } from 'lucide-react';
import { useBudget } from '../../context/BudgetContext';
import { categories } from '../../data/categories';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { budgetItems } = useBudget();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageMenuOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    setIsLanguageMenuOpen(false);
  };

  // Show discount banner only on homepage (/Store)
  const showDiscountBanner = location.pathname === '/Store';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        {showDiscountBanner && (
          <div className="bg-primary-600 text-white text-center py-3 mb-4">
            <div className="inline-block">
              <p className="text-lg font-bold text-yellow-300">عرض خاص لفترة محدودة</p>
              <div className="border-b border-yellow-300 w-full my-1"></div>
            </div>
            <h2 className="text-xl font-bold">
              خصم <span className="text-2xl text-yellow-300 font-bold">5%</span> علي جميع المنتجات
            </h2>
          </div>
        )}

        <div className="flex items-center justify-between">
          {/* Logo - Updated to absolute path */}
          <Link to="/Store" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-700">Elgendy Store</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 space-x-reverse">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                location.pathname === '/' ? 'text-primary-700 font-medium' : 'text-neutral-700'
              }`}
            >
              {t('home')}
            </Link>

            <div className="relative group">
              <button
                className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                  location.pathname.includes('/categories')
                    ? 'text-primary-700 font-medium'
                    : 'text-neutral-700'
                }`}
              >
                {t('categories')}
              </button>
              <div className="absolute hidden group-hover:block right-0 w-64 mt-2 bg-white shadow-lg rounded-md py-2 z-20">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/categories/${category.id}`}
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                location.pathname === '/about' ? 'text-primary-700 font-medium' : 'text-neutral-700'
              }`}
            >
              {t('about')}
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                location.pathname === '/contact' ? 'text-primary-700 font-medium' : 'text-neutral-700'
              }`}
            >
              {t('contact')}
            </Link>

            <Link
              to="/faq"
              className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                location.pathname === '/faq' ? 'text-primary-700 font-medium' : 'text-neutral-700'
              }`}
            >
              {t('faq')}
            </Link>
          </nav>

          {/* Search, Budget, Language and Menu buttons */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex items-center border border-neutral-300 bg-white rounded-full px-3 py-1 focus-within:border-primary-500"
            >
              <input
                type="text"
                placeholder={t('search')}
                className="bg-transparent outline-none border-none text-sm w-36 lg:w-48"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-neutral-500 hover:text-primary-700">
                <Search size={18} />
              </button>
            </form>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 text-neutral-700 hover:text-primary-700 transition-colors"
              >
                <Globe size={22} />
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg py-2 w-32">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-right px-4 py-2 hover:bg-primary-50 ${
                        i18n.language === lang.code
                          ? 'text-primary-700 font-medium'
                          : 'text-neutral-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/budget"
              className="relative p-2 text-neutral-700 hover:text-primary-700 transition-colors"
            >
              <ShoppingBag size={22} />
              {budgetItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {budgetItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/account"
              className="hidden md:block p-2 text-neutral-700 hover:text-primary-700 transition-colors"
            >
              <User size={22} />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-primary-700 transition-colors"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 rounded-md shadow-lg p-4 fade-in">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center border border-neutral-300 rounded-full px-3 py-1 mb-4 focus-within:border-primary-500"
            >
              <input
                type="text"
                placeholder={t('search')}
                className="bg-transparent outline-none border-none text-sm flex-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-neutral-500 hover:text-primary-700">
                <Search size={18} />
              </button>
            </form>

            <nav className="flex flex-col space-y-2">
              <Link
                to="/Store"
                className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                  location.pathname === '/' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
                }`}
              >
                {t('home')}
              </Link>

              <div className="px-4 py-2 text-neutral-700 font-medium">{t('categories')}</div>
              <div className="pr-6 space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/categories/${category.id}`}
                    className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 rounded-md"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                  location.pathname === '/about' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
                }`}
              >
                {t('about')}
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                  location.pathname === '/contact' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
                }`}
              >
                {t('contact')}
              </Link>

              <Link
                to="/faq"
                className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                  location.pathname === '/faq' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
                }`}
              >
                {t('faq')}
              </Link>

              <Link
                to="/account"
                className={`px-4 py-2 rounded-md hover:bg-primary-50 transition-colors ${
                  location.pathname === '/account' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
                }`}
              >
                {t('myAccount')}
              </Link>

              {/* Mobile Language Selector */}
              <div className="px-4 py-2 text-neutral-700 font-medium">{t('language')}</div>
              <div className="pr-6 space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-right px-4 py-2 rounded-md hover:bg-primary-50 ${
                      i18n.language === lang.code
                        ? 'text-primary-700 font-medium'
                        : 'text-neutral-700'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;