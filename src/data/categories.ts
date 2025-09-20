import { Category } from '../types/types';
import mobcategoryimg from '../assets/jpg/Mobile_Accessories_cover_image.webp';
import comcategoryimg from '../assets/jpg/Computer_Accessories_cover_image.jpg';
import homcategoryimg from '../assets/jpg/Small Home Electronics cover image.jpg';

export const categories: Category[] = [
  { 
    id: '1',
    name: 'إكسسوارات الموبايل',
    englishName: 'Mobile Accessories',
    image: mobcategoryimg,
    subcategories: [
      {
        id: '1-1',
        name: 'سماعات',
        englishName: 'Headphones',
      },
      {
        id: '1-2',
        name: 'شواحن',
        englishName: 'Chargers',
      },
      {
        id: '1-6',
        name: 'كابلات/وصلات',
        englishName: 'Cables & Connectors',
      },
      {
        id: '1-3',
        name: 'حافظات وأغطية',
        englishName: 'Cases and Covers',
      },
      {
        id: '1-4',
        name: 'حوامل وستاندات',
        englishName: 'Stands and Holders',
      },
      {
        id: '1-5',
        name: 'ميكروفون',
        englishName: 'Microphone',
      },
    ],
  },
  {
    id: '2',
    name: 'إكسسوارات الكمبيوتر',
    englishName: 'Computer Accessories',
    image: comcategoryimg,
    subcategories: [
      {
        id: '2-1',
        name: 'لوحات مفاتيح',
        englishName: 'Keyboards',
      },
      {
        id: '2-2',
        name: 'ماوس وأجهزة تأشير',
        englishName: 'Mice and Pointing Devices',
      },
      {
        id: '2-3',
        name: 'سماعات رأس',
        englishName: 'Headsets',
      },
      {
        id: '2-8',
        name: 'كابلات',
        englishName: 'Cables',
      },
      {
        id: '2-5',
        name: 'محول طاقة',
        englishName: 'Power Adapter',
      },
      {
        id: '2-6',
        name: 'ميكروفون',
        englishName: 'Microphone',
      },
      {
        id: '2-7',
        name: 'حوامل + اجهزة تبريد',
        englishName: 'Stands + Cooling Devices',
      },
    ],
  },
  {
    id: '3',
    name: 'إلكترونيات منزلية صغيرة',
    englishName: 'Small Home Electronics',
    image: homcategoryimg,
    subcategories: [
      {
        id: '3-2',
        name: 'أجهزة الصوت والموسيقى',
        englishName: 'Audio and Music Devices',
      },
      {
        id: '3-3',
        name: 'أجهزة منزلية ذكية',
        englishName: 'Smart Home Devices',
      },
      {
        id: '3-4',
        name: 'مشتركات',
        englishName: 'Power Strips',
      },
      {
        id: '3-5',
        name: 'اجهزة توصيل عن بعد',
        englishName: 'Remote Control',
      },
    ],
  },
];

export const getAllCategories = () => {
  return categories;
};

export const getCategoryById = (id: string) => {
  return categories.find(category => category.id === id);
};

export const getSubcategoriesByCategoryId = (categoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories || [];
};