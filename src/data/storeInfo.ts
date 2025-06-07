import { StoreInfo } from '../types/types';

export const storeInfo: StoreInfo = {
  name: 'متجر الجندي',
  address: 'مدينة العبور - الحي الثامن - اسكان الشباب - نزهة العبور - مول نزهة العبور الدور الاول - بجوار مسجد الخلفاء الراشدين، كود البريد : 11828',
  phone: '+20 101 113 1639',
  email: 'Melgendy071@gmail.com',
  workingHours: [
    {
      days: 'جميع أيام الاسبوع',
      hours: '12:00 صباحاً - 12:00 مساءً',
    },
  ],
  socialMedia: {
    facebook: 'https://www.facebook.com/share/16SGy2qGGD/',
    instagram: 'https://instagram.com/elgendystore',
    whatsapp: 'https://wa.me/+201011131639',
  },
};

export const getStoreInfo = () => {
  return storeInfo;
};