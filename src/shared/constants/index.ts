
export const APP_CONFIG = {
  name: 'JCI Maamoura Store',
  description: 'Votre destination e-commerce moderne',
  currency: 'TND',
  defaultPageSize: 12,
  maxCartItems: 99,
  social: {
    facebook: 'https://www.facebook.com/JCI.Maamoura/?locale=fr_FR',
    instagram: 'https://www.instagram.com/jci_maamoura/',
    logo: 'https://www.facebook.com/photo/?fbid=728846722694408&set=a.421490393430044&locale=fr_FR'
  },
  contact: {
    email: 'jci.maamoura@gmail.com',
    phone: '24 106 798',
    address: 'Tunisie, Nabeul, Maamoura'
  }
};

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
  CART: '/cart',
  CHECKOUT: '/checkout',
} as const;

export const PRODUCT_CATEGORIES = [
  { id: '1', name: 'Pins', slug: 'pins' },
  { id: '2', name: 'Vêtements', slug: 'clothes' },
  { id: '3', name: 'Cadeaux', slug: 'gifts' },
  { id: '4', name: 'Récompenses JCI', slug: 'jci-rewards' },
  { id: '5', name: 'Porte-clés', slug: 'keyrings' },
] as const;
