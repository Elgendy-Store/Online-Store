import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Star, Check, Heart, ShoppingBag, ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../../types/types';
import { useBudget } from '../../context/BudgetContext';
import emailjs from '@emailjs/browser';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { addToBudget, isInBudget } = useBudget();
  const [isAddedToBudget, setIsAddedToBudget] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddToBudget = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAddedToBudget) {
      addToBudget(product);
      setIsAddedToBudget(true);
      setShowSuccessMessage(true); // Show the success message
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const discountedPrice = product.isPromotion && product.discount_value
    ? product.price - (product.price * (product.discount_value / 100))
    : null;

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
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

  // Hide success message after 3 seconds
  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <div className="card card-hover h-full flex flex-col">
      {showSuccessMessage && (
        <div className="bg-success-100 text-success-700 text-center py-2 text-sm font-medium">
          تمت الإضافة إلى السلة بنجاح
        </div>
      )}
      <Link to={`/products/${product.id}`} className="block overflow-hidden relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-[160px] md:h-[180px] object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
            جديد
          </span>
        )}
        {product.isPromotion && (
          <span className="absolute top-2 right-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-full">
            عرض خاص
          </span>
        )}
        {product.isBundle && (
          <span className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
            باقة
          </span>
        )}
        <button
          onClick={handleLike}
          className={`absolute top-2 left-2 p-2 rounded-full transition-colors ${
            isLiked 
              ? 'bg-error-100 text-error-600' 
              : 'bg-white/80 text-neutral-400 hover:text-error-600'
          }`}
          aria-label={isLiked ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
        >
          <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
        </button>
      </Link>
      
      <div className="p-3 md:p-4 flex-grow flex flex-col">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-semibold text-base md:text-lg mb-1 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          
        </Link>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="text-right">
            {product.isPromotion && product.discount_value && (
              <span className="block mb-1 bg-secondary-500 text-secondary-1000 text-base font-medium px-2 py-1 rounded-full">
                Sale -{product.discount_value}%
              </span>
            )}
            {product.isPromotion && product.discount_value ? (
              <div className="flex items-baseline justify-end space-x-2 space-x-reverse">
                <span className="font-bold text-lg text-primary-600">
                  {discountedPrice?.toFixed(1)} {t('egp')}
                </span>
                <span className="line-through text-md text-red-600 ml-2">
                  {product.price}
                </span>
              </div>
            ) : (
              <span className="font-bold text-lg">{product.price} {t('egp')}</span>
            )}
          </div>
          
          <div className="flex space-x-2 space-x-reverse">
            <button
              onClick={handleAddToBudget}
              disabled={isAddedToBudget}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                isAddedToBudget
                  ? 'bg-success-100 text-success-700 cursor-not-allowed'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
              aria-label={isAddedToBudget ? 'تمت الإضافة بنجاح' : t('addToBudget')}
            >
              {isAddedToBudget ? <Check size={18} /> : <Plus size={18} />}
            </button>
            <button
              onClick={handleBuyNow}
              className="px-3 py-1.5 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors"
              aria-label={t('buyNow')}
            >
              <ShoppingCart size={20} className="mr-2" />
              {t('buyNow')}
            </button>
          </div>
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
                    onChange={handlePhoneChange}
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
                    disabled={isSending || !name || !phone || !isPhoneValid}
                  >
                    {isSending ? t('sending') : t('submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;