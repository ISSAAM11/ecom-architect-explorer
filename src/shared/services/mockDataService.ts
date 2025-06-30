
import { Product, ProductCategory } from '../models/Product';
import { PRODUCT_CATEGORIES } from '../constants';

// Mock data for JCI Maamoura products
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Pin JCI Maamoura',
    description: 'Pin officiel JCI Maamoura en métal de haute qualité avec logo brodé.',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[0],
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
    tags: ['pin', 'officiel', 'métal'],
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '2',
    name: 'T-Shirt JCI Maamoura',
    description: 'T-shirt en coton premium avec logo JCI Maamoura. Disponible en plusieurs tailles.',
    price: 35.00,
    originalPrice: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[1],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    tags: ['t-shirt', 'coton', 'logo'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '3',
    name: 'Polo JCI Maamoura',
    description: 'Polo élégant avec broderie JCI Maamoura, parfait pour les événements officiels.',
    price: 55.00,
    imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[1],
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    tags: ['polo', 'broderie', 'officiel'],
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '4',
    name: 'Mug JCI Maamoura',
    description: 'Mug personnalisé JCI Maamoura en céramique, idéal pour vos pauses café.',
    price: 25.00,
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[2],
    rating: 4.5,
    reviewCount: 34,
    inStock: true,
    tags: ['mug', 'céramique', 'personnalisé'],
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '5',
    name: 'Carnet JCI Maamoura',
    description: 'Carnet de notes premium avec couverture JCI Maamoura, parfait pour les réunions.',
    price: 30.00,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[2],
    rating: 4.4,
    reviewCount: 56,
    inStock: true,
    tags: ['carnet', 'premium', 'réunions'],
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '6',
    name: 'Trophée JCI Excellence',
    description: 'Trophée de reconnaissance JCI pour récompenser les membres exceptionnels.',
    price: 120.00,
    imageUrl: 'https://images.unsplash.com/photo-1567427018141-95ea69de46ce?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[3],
    rating: 4.9,
    reviewCount: 23,
    inStock: true,
    tags: ['trophée', 'reconnaissance', 'excellence'],
    images: [
      'https://images.unsplash.com/photo-1567427018141-95ea69de46ce?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '7',
    name: 'Médaille JCI Mérite',
    description: 'Médaille de mérite JCI en bronze avec ruban officiel.',
    price: 80.00,
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[3],
    rating: 4.8,
    reviewCount: 41,
    inStock: true,
    tags: ['médaille', 'mérite', 'bronze'],
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '8',
    name: 'Porte-clés JCI Maamoura',
    description: 'Porte-clés métallique avec logo JCI Maamoura gravé.',
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[4],
    rating: 4.3,
    reviewCount: 78,
    inStock: true,
    tags: ['porte-clés', 'métallique', 'gravé'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
    ]
  },
  {
    id: '9',
    name: 'Porte-clés JCI Premium',
    description: 'Porte-clés premium en cuir avec logo JCI Maamoura embossé.',
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
    category: PRODUCT_CATEGORIES[4],
    rating: 4.6,
    reviewCount: 52,
    inStock: true,
    tags: ['porte-clés', 'cuir', 'premium'],
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
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
