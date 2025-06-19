
import { Product, ProductCategory } from '../models/Product';
import { PRODUCT_CATEGORIES } from '../constants';

// Mock data for demonstration
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    originalPrice: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[0],
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    tags: ['wireless', 'bluetooth', 'noise-cancelling'],
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'Smartphone Pro Max',
    description: 'Latest flagship smartphone with advanced camera system and all-day battery.',
    price: 999.99,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[0],
    rating: 4.8,
    reviewCount: 256,
    inStock: true,
    tags: ['smartphone', 'camera', 'flagship'],
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Designer Cotton T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt perfect for everyday wear.',
    price: 29.99,
    originalPrice: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[1],
    rating: 4.2,
    reviewCount: 89,
    inStock: true,
    tags: ['cotton', 'casual', 'comfortable'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '4',
    name: 'Modern Desk Lamp',
    description: 'Sleek LED desk lamp with adjustable brightness and USB charging port.',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[2],
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
    tags: ['LED', 'adjustable', 'modern'],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '5',
    name: 'Programming Fundamentals Book',
    description: 'Comprehensive guide to programming fundamentals for beginners and professionals.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[3],
    rating: 4.7,
    reviewCount: 167,
    inStock: true,
    tags: ['programming', 'education', 'reference'],
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    description: 'Non-slip premium yoga mat with extra cushioning for comfortable practice.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[4],
    rating: 4.4,
    reviewCount: 76,
    inStock: true,
    tags: ['yoga', 'fitness', 'non-slip'],
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop'
    ]
  }
];

export class MockDataService {
  static async getProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
  }

  static async getProductById(id: string): Promise<Product | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockProducts.find(product => product.id === id) || null;
  }

  static async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockProducts.filter(product => product.category.slug === categorySlug);
  }
}
