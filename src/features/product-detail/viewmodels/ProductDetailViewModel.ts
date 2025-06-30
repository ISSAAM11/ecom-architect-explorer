
import { useState, useEffect } from 'react';
import { Product } from '../../../shared/models/Product';
import { MockDataService } from '../../../shared/services/mockDataService';

export class ProductDetailViewModel {
  private _product: Product | null = null;
  private _isLoading: boolean = true;
  private _error: string | null = null;
  private _selectedImageIndex: number = 0;

  constructor(
    private productId: string,
    private setProduct: (product: Product | null) => void,
    private setIsLoading: (loading: boolean) => void,
    private setError: (error: string | null) => void,
    private setSelectedImageIndex: (index: number) => void
  ) {}

  get product() {
    return this._product;
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  get selectedImageIndex() {
    return this._selectedImageIndex;
  }

  get selectedImage() {
    if (!this._product) return '';
    const images = this._product.images || [this._product.imageUrl];
    return images[this._selectedImageIndex] || this._product.imageUrl;
  }

  async initialize() {
    try {
      this.updateLoading(true);
      this.updateError(null);
      
      const product = await MockDataService.getProductById(this.productId);
      
      if (!product) {
        this.updateError('Produit non trouvé');
        return;
      }
      
      this.updateProduct(product);
    } catch (error) {
      this.updateError('Échec du chargement des détails du produit');
      console.error('Erreur lors du chargement du produit:', error);
    } finally {
      this.updateLoading(false);
    }
  }

  selectImage(index: number) {
    this.updateSelectedImageIndex(index);
  }

  private updateProduct(product: Product) {
    this._product = product;
    this.setProduct(product);
  }

  private updateLoading(loading: boolean) {
    this._isLoading = loading;
    this.setIsLoading(loading);
  }

  private updateError(error: string | null) {
    this._error = error;
    this.setError(error);
  }

  private updateSelectedImageIndex(index: number) {
    this._selectedImageIndex = index;
    this.setSelectedImageIndex(index);
  }
}

export const useProductDetailViewModel = (productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const viewModel = new ProductDetailViewModel(
    productId,
    setProduct,
    setIsLoading,
    setError,
    setSelectedImageIndex
  );

  useEffect(() => {
    viewModel.initialize();
  }, [productId]);

  return {
    product,
    isLoading,
    error,
    selectedImageIndex,
    selectedImage: viewModel.selectedImage,
    selectImage: (index: number) => viewModel.selectImage(index),
    viewModel
  };
};
