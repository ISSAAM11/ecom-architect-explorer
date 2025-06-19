
import { useState, useEffect } from 'react';
import { Product, ProductFilter } from '../../../shared/models/Product';
import { MockDataService } from '../../../shared/services/mockDataService';

export class ProductsViewModel {
  private _products: Product[] = [];
  private _filteredProducts: Product[] = [];
  private _isLoading: boolean = true;
  private _error: string | null = null;
  private _filters: ProductFilter = {};

  constructor(
    private setProducts: (products: Product[]) => void,
    private setFilteredProducts: (products: Product[]) => void,
    private setIsLoading: (loading: boolean) => void,
    private setError: (error: string | null) => void,
    private setFilters: (filters: ProductFilter) => void
  ) {}

  get products() {
    return this._products;
  }

  get filteredProducts() {
    return this._filteredProducts;
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  get filters() {
    return this._filters;
  }

  async initialize() {
    try {
      this.updateLoading(true);
      this.updateError(null);
      
      const products = await MockDataService.getProducts();
      this.updateProducts(products);
      this.updateFilteredProducts(products);
    } catch (error) {
      this.updateError('Failed to load products');
      console.error('Error loading products:', error);
    } finally {
      this.updateLoading(false);
    }
  }

  applyFilters(newFilters: ProductFilter) {
    this.updateFilters({ ...this._filters, ...newFilters });
    this.filterProducts();
  }

  clearFilters() {
    this.updateFilters({});
    this.updateFilteredProducts(this._products);
  }

  private filterProducts() {
    let filtered = [...this._products];

    if (this._filters.category) {
      filtered = filtered.filter(product => product.category.slug === this._filters.category);
    }

    if (this._filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= this._filters.minPrice!);
    }

    if (this._filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= this._filters.maxPrice!);
    }

    if (this._filters.inStock !== undefined) {
      filtered = filtered.filter(product => product.inStock === this._filters.inStock);
    }

    if (this._filters.rating !== undefined) {
      filtered = filtered.filter(product => product.rating >= this._filters.rating!);
    }

    if (this._filters.searchQuery) {
      const query = this._filters.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    this.updateFilteredProducts(filtered);
  }

  private updateProducts(products: Product[]) {
    this._products = products;
    this.setProducts(products);
  }

  private updateFilteredProducts(products: Product[]) {
    this._filteredProducts = products;
    this.setFilteredProducts(products);
  }

  private updateLoading(loading: boolean) {
    this._isLoading = loading;
    this.setIsLoading(loading);
  }

  private updateError(error: string | null) {
    this._error = error;
    this.setError(error);
  }

  private updateFilters(filters: ProductFilter) {
    this._filters = filters;
    this.setFilters(filters);
  }
}

export const useProductsViewModel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProductFilter>({});

  const viewModel = new ProductsViewModel(
    setProducts,
    setFilteredProducts,
    setIsLoading,
    setError,
    setFilters
  );

  useEffect(() => {
    viewModel.initialize();
  }, []);

  return {
    products,
    filteredProducts,
    isLoading,
    error,
    filters,
    applyFilters: (newFilters: ProductFilter) => viewModel.applyFilters(newFilters),
    clearFilters: () => viewModel.clearFilters(),
    viewModel
  };
};
