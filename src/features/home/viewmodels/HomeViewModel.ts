
import { useState, useEffect } from 'react';
import { Product } from '../../../shared/models/Product';
import { MockDataService } from '../../../shared/services/mockDataService';

export class HomeViewModel {
  private _featuredProducts: Product[] = [];
  private _isLoading: boolean = true;
  private _error: string | null = null;

  constructor(
    private setFeaturedProducts: (products: Product[]) => void,
    private setIsLoading: (loading: boolean) => void,
    private setError: (error: string | null) => void
  ) {}

  get featuredProducts() {
    return this._featuredProducts;
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  async initialize() {
    try {
      this.updateLoading(true);
      this.updateError(null);
      
      const products = await MockDataService.getProducts();
      const featured = products.slice(0, 3); // Get first 3 products as featured
      
      this.updateFeaturedProducts(featured);
    } catch (error) {
      this.updateError('Failed to load featured products');
      console.error('Error loading featured products:', error);
    } finally {
      this.updateLoading(false);
    }
  }

  private updateFeaturedProducts(products: Product[]) {
    this._featuredProducts = products;
    this.setFeaturedProducts(products);
  }

  private updateLoading(loading: boolean) {
    this._isLoading = loading;
    this.setIsLoading(loading);
  }

  private updateError(error: string | null) {
    this._error = error;
    this.setError(error);
  }
}

export const useHomeViewModel = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const viewModel = new HomeViewModel(
    setFeaturedProducts,
    setIsLoading,
    setError
  );

  useEffect(() => {
    viewModel.initialize();
  }, []);

  return {
    featuredProducts,
    isLoading,
    error,
    viewModel
  };
};
