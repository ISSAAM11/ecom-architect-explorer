
export const APP_CONFIG = {
  name: 'JCI Maamoura Store',
  description: 'Your modern e-commerce destination',
  currency: 'USD',
  defaultPageSize: 12,
  maxCartItems: 99,
  social: {
    facebook: 'https://www.facebook.com/JCI.Maamoura/?locale=fr_FR',
    instagram: 'https://www.instagram.com/jci_maamoura/',
    logo: 'https://www.facebook.com/photo/?fbid=728846722694408&set=a.421490393430044&locale=fr_FR'
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
  { id: '1', name: 'Electronics', slug: 'electronics' },
  { id: '2', name: 'Clothing', slug: 'clothing' },
  { id: '3', name: 'Home & Garden', slug: 'home-garden' },
  { id: '4', name: 'Books', slug: 'books' },
  { id: '5', name: 'Sports', slug: 'sports' },
] as const;
