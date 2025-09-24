// src/data/brands.ts
// Config file for brands section
import anker from '../assets/anker-vector-logo.png';
import jnuobi from '../assets/jnuobi_logo.jpeg';
import ldnio from '../assets/ldnio_logo.png';
import point from '../assets/point_logo.png';
import marshall from '../assets/Marshall-Logo.jpg';
import kingston from '../assets/Kingston-Emblem.png';

export interface Brand {
  name: string;
  logoUrl: string;
}

const brands: Brand[] = [
  {
    name: "Anker",
    logoUrl: anker,
  },
  {
    name: "Jnuobi",
    logoUrl: jnuobi,
  },
  {
    name: "Ldnio",
    logoUrl: ldnio,
  },
  {
    name: "Point",
    logoUrl: point,
  },
  {
    name: "Marshall",
    logoUrl: marshall,
  },
  {
    name: "Kingston",
    logoUrl: kingston,
  },
];

export default brands;
