import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, ChevronRight, Check, Plus } from 'lucide-react';
import { getProductById } from '../data/products';
import { useBudget } from '../context/BudgetContext';
import ProductImageGallery from '../components/products/ProductImageGallery';
import ProductRating from '../components/products/ProductRating';
import emailjs from '@emailjs/browser';
import RelatedProductsCarousel from '../components/products/RelatedProductsCarousel';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const { addToBudget, isInBudget } = useBudget();
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'features'>('description');
  const [showRatingSuccess, setShowRatingSuccess] = useState(false);
  const [isAddedToBudget, setIsAddedToBudget] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPhoneValid, setIsPhoneValid] = useState(true); // New state for phone validation

  const product = getProductById(id || '');
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
        <p className="mb-8">عذراً، المنتج الذي تبحث عنه غير موجود.</p>
        <Link to="/categories" className="btn btn-primary">
          تصفح المنتجات
        </Link>
      </div>
    );
  }

  const inBudget = isInBudget(product.id);

  const handleAddToBudget = () => {
    if (!isAddedToBudget) {
      addToBudget(product);
      setIsAddedToBudget(true);
    }
  };

  const handleRate = (rating: number) => {
    setShowRatingSuccess(true);
    setTimeout(() => setShowRatingSuccess(false), 3000);
  };

  const discountedPrice = product.isPromotion && product.discount_value
    ? product.price - (product.price * (product.discount_value / 100))
    : null;

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage('');
    setError(null);

    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(phone.trim())) {
      setError(t('invalidPhone'));
      setIsSending(false);
      return;
    }

    const orderId = `ORDER-${Date.now()}`;
    const baseUrl = 'https://elgendy-store.github.io/Online-Store';
    const productLink = `${baseUrl}/products/${product.id}`;
    const templateParams = {
      name,
      phone,
      product_name: product.name,
      product_price: discountedPrice?.toFixed(2) || product.price.toString(),
      product_link: productLink,
      order_id: orderId,
      // Add recipient email here - please provide the store owner's email
      // e.g., email: 'storeowner@example.com'
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BUY_NOW,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage(t('purchaseRequestSent'));
          setName('');
          setPhone('');
          setIsSending(false);
          setTimeout(() => setIsModalOpen(false), 2000);
        },
        (error) => {
          setMessage(t('errorSendingPurchaseRequest') + `: ${error.text}`);
          setIsSending(false);
        }
      );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    const phoneRegex = /^[0-9]{11}$/;
    setIsPhoneValid(phoneRegex.test(newPhone.trim()));
    if (!isPhoneValid && phoneRegex.test(newPhone.trim())) {
      setError(null);
    }
  };

  return (
    <main className="bg-neutral-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center flex-wrap">
            <li className="flex items-center">
              <Link to="/" className="text-neutral-600 hover:text-primary-600">
                {t('home')}
              </Link>
              <ChevronRight size={16} className="mx-2 text-neutral-400" />
            </li>
            <li className="flex items-center">
              <Link to="/categories" className="text-neutral-600 hover:text-primary-600">
                {t('categories')}
              </Link>
              <ChevronRight size={16} className="mx-2 text-neutral-400" />
            </li>
            <li className="flex items-center">
              {product.categories.map((category, index) => (
                <React.Fragment key={category}>
                  <Link 
                    to={`/categories/${category}`} 
                    className="text-neutral-600 hover:text-primary-600"
                  >
                    {category}
                  </Link>
                  {index < product.categories.length - 1 && (
                    <span className="mx-2 text-neutral-400">|</span>
                  )}
                </React.Fragment>
              ))}
              <ChevronRight size={16} className="mx-2 text-neutral-400" />
            </li>
            <li className="text-neutral-900 font-medium">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <ProductImageGallery images={product.images} alt={product.name} />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
                {product.englishName && (
                  <p className="text-neutral-600">{product.englishName}</p>
                )}
                {/* Compare with another product button */}
                <button
                  onClick={() => navigate(`/compare/${product.id}`)}
                  className="w-full md:w-auto mt-4 mb-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow transition-colors flex items-center justify-center text-base focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                  aria-label="Compare with another product"
                >
                  <span className="mr-2" role="img" aria-label="compare">🔄</span>
                  قارن مع منتج آخر
                </button>
              </div>

              {/* Rating Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center text-secondary-500">
                      <ProductRating initialRating={product.rating} interactive={false} size={18} onRate={() => {}} />
                      <span className="mr-1 text-sm">{product.rating}</span>
                    </div>
                    <span className="text-neutral-500 text-sm mr-2">({product.reviewCount} تقييم)</span>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-4">
                  <p className="text-sm text-neutral-700 mb-2">قيّم هذا المنتج:</p>
                  <div className="flex items-center gap-4">
                    <ProductRating onRate={handleRate} size={24} />
                    {showRatingSuccess && (
                      <span className="text-success-600 text-sm">
                        شكراً لتقييمك!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-b border-neutral-200 py-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-right">
                    {product.isPromotion && product.discount_value && (
                      <span className="block mb-1 bg-secondary-500 text-secondary-1000 text-base font-medium px-2 py-1 rounded-full">
                        Sale -{product.discount_value}%
                      </span>
                    )}
                    {product.isPromotion && product.discount_value ? (
                      <div className="flex items-baseline space-x-2 space-x-reverse">
                        <span className="line-through text-xl font-semibold text-red-500">
                          {product.price}
                        </span>
                        <span className="text-2xl font-bold text-primary-600">
                          {discountedPrice?.toFixed(2)} {t('egp')}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold text-neutral-900">
                        {product.price} {t('egp')}
                      </span>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    product.isAvailable 
                      ? 'bg-success-100 text-success-700' 
                      : 'bg-error-100 text-error-700'
                  }`}>
                    {product.isAvailable ? t('availability') : t('outOfStock')}
                  </span>
                </div>

                <div className="flex space-x-2 space-x-reverse">
                  <button
                    onClick={handleAddToBudget}
                    disabled={!product.isAvailable || isAddedToBudget}
                    className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-colors ${
                      isAddedToBudget
                        ? 'bg-success-500 text-white cursor-not-allowed'
                        : product.isAvailable
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-neutral-300 text-neutral-600 cursor-not-allowed'
                    }`}
                  >
                    {isAddedToBudget ? (
                      <>
                        <Check size={20} className="mr-2" />
                        تمت الإضافة بنجاح
                      </>
                    ) : (
                      <>
                        <Plus size={20} className="mr-2" />
                        {t('addToBudget')}
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleBuyNow}
                    disabled={!product.isAvailable}
                    className={`w-full py-3 px-4 rounded-lg flex items-center justify-center ${
                      product.isAvailable
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-neutral-300 text-neutral-600 cursor-not-allowed'
                    }`}
                    aria-label={t('buyNow')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    {t('buyNow')}
                  </button>
                </div>
              </div>

              {/* Product Tabs */}
              <div>
                <div className="flex border-b border-neutral-200">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'description'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {t('details')}
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'specifications'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {t('specifications')}
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-4 py-2 font-medium ${
                      activeTab === 'features'
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-600 hover:text-primary-600'
                    }`}
                  >
                    {t('features')}
                  </button>
                </div>

                <div className="py-4">
                  {activeTab === 'description' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-neutral-700 leading-relaxed">
                        {product.description}
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'specifications' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <li key={key} className="flex justify-between border-b border-neutral-100 pb-2">
                            <span className="font-medium text-neutral-800">{key}</span>
                            <span className="text-neutral-600">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="bg-primary-100 text-primary-600 rounded-full p-1 mt-0.5 mr-2">
                              <Check size={14} />
                            </span>
                            <span className="text-neutral-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <RelatedProductsCarousel product={product} />
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">{t('buyNowDetails')}</h3>
              <form onSubmit={sendEmail}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">{t('name')}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">{t('phone')}</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange} // Updated to use validation handler
                    className="w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                {!isPhoneValid && <p className="text-center text-sm mb-2 text-red-600">{t('invalidPhone')}</p>}
                {error && <p className="text-center text-sm mb-2 text-red-600">{error}</p>}
                {message && <p className="text-center text-sm mb-2 text-green-600">{message}</p>}
                <div className="flex justify-end space-x-2 space-x-reverse">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-neutral-200 text-neutral-700 rounded-md hover:bg-neutral-300"
                    disabled={isSending}
                  >
                    {t('cancel')}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:bg-primary-300"
                    disabled={isSending || !name || !phone || !isPhoneValid} // Added isPhoneValid
                  >
                    {isSending ? t('sending') : t('submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
  export default ProductDetailPage;