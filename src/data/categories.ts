import { Category } from '../types/types';
import mobcategoryimg from '../assets/jpg/Mobile_Accessories_cover_image.webp';
import comcategoryimg from '../assets/jpg/Computer_Accessories_cover_image.jpg';
import homcategoryimg from '../assets/jpg/Small Home Electronics cover image.jpg';
import headphones_cover from '../assets/headphones cover.png';
import chargers_cover from '../assets/chargers image.png';
import cables from '../assets/cables image.webp';
import covers from '../assets/mobile cover image.webp';
import microphone from '../assets/microphone image.jpg';
import stands from '../assets/mobile stands image2.jpg';
import keyboard from '../assets/keyboard image.webp';
import mouse from '../assets/mouse image.jpg';
import stand_colling from '../assets/stand colling image.jpg';
import hdmi from '../assets/cable hdmi image.webp';
import flashmemory from '../assets/flash memory imag.jpg';
import laptop_charge from '../assets/laptop charger image.jpg';
import speakers from '../assets/speakers image.jpg';
import mostarak from '../assets/moshtarak.jpg';
import smartwatch from '../assets/smart watch.webp';
import memory_cards from '../assets/memory_cards.jpg';



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
        image: headphones_cover,
      },
      {
        id: '1-2',
        name: 'شواحن',
        englishName: 'Chargers',
        image: chargers_cover,
      },
      {
        id: '1-6',
        name: 'كابلات & وصلات',
        englishName: 'Cables & Connectors',
        image: cables,
      },
      {
        id: '1-3',
        name: 'حافظات وأغطية',
        englishName: 'Cases and Covers',
        image: covers,
      },
      {
        id: '1-4',
        name: 'حوامل وستاندات',
        englishName: 'Stands and Holders',
        image: stands,
      },
      {
        id: '1-5',
        name: 'ميكروفون',
        englishName: 'Microphone',
        image: microphone,
      },
      {
        id: '1-7',
        name: 'كروت تخزين',
        englishName: 'Memory Cards',
        image: memory_cards,
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
        image: keyboard,
      },
      {
        id: '2-2',
        name: 'ماوس وأجهزة تأشير',
        englishName: 'Mice and Pointing Devices',
        image: mouse,
      },
      {
        id: '2-3',
        name: 'سماعات رأس',
        englishName: 'Headsets',
        image: headphones_cover,
      },
      {
        id: '2-8',
        name: 'كابلات',
        englishName: 'Cables',
        image: hdmi,
      },
      {
        id: '2-5',
        name: 'محول طاقة',
        englishName: 'Power Adapter',
        image: laptop_charge,
      },
      {
        id: '2-6',
        name: 'ميكروفون',
        englishName: 'Microphone',
        image: microphone,
      },
      {
        id: '2-7',
        name: 'حوامل + اجهزة تبريد',
        englishName: 'Stands + Cooling Devices',
        image: stand_colling,
      },
      {
        id: '2-9',
        name: 'فلاشة تخزين',
        englishName: 'Flash Drive',
        image: flashmemory,
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
        image: speakers,
      },
      {
        id: '3-3',
        name: 'أجهزة منزلية ذكية',
        englishName: 'Smart Home Devices',
        image: homcategoryimg,
      },
      {
        id: '3-4',
        name: 'مشتركات',
        englishName: 'Power Strips',
        image: mostarak,
      },
      {
        id: '3-5',
        name: "ساعة ذكية",
        englishName: 'Smart Watch',
        image: smartwatch,
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