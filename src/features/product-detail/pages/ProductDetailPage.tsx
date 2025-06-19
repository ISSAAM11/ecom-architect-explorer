
import { useParams, Link } from 'react-router-dom';
import Layout from '../../../shared/components/Layout/Layout';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductInfo from '../components/ProductInfo';
import LoadingSpinner from '../../../shared/components/LoadingSpinner';
import { useProductDetailViewModel } from '../viewmodels/ProductDetailViewModel';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  const {
    product,
    isLoading,
    error,
    selectedImageIndex,
    quantity,
    selectedImage,
    selectImage,
    updateQuantity,
    addToCart
  } = useProductDetailViewModel(id || '');

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner size="lg" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {error || 'Product not found'}
            </h1>
            <Link
              to="/products"
              className="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-brand-600">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-600">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <ProductImageGallery
                images={images}
                selectedIndex={selectedImageIndex}
                onImageSelect={selectImage}
                productName={product.name}
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <ProductInfo
                product={product}
                quantity={quantity}
                onQuantityChange={updateQuantity}
                onAddToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
