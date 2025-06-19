
export const APP_CONFIG = {
  name: 'EcoStore',
  description: 'Your modern e-commerce destination',
  currency: 'USD',
  defaultPageSize: 12,
  maxCartItems: 99,
};

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/products/:id',
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
