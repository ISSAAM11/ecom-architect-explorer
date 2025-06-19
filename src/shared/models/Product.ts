
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  specifications?: ProductSpecification[];
  images?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface ProductSpecification {
  key: string;
  value: string;
}

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  rating?: number;
  searchQuery?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
