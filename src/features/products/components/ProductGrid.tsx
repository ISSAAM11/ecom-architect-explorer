
import { Link } from 'react-router-dom';
import { Product } from '../../../shared/models/Product';
import { formatPrice, calculateDiscount } from '../../../shared/utils/formatters';
import LoadingSpinner from '../../../shared/components/LoadingSpinner';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

const ProductGrid = ({ products, isLoading, error }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Link to={`/products/${product.id}`} className="block">
            <div className="relative overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {product.originalPrice && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  -{calculateDiscount(product.originalPrice, product.price)}%
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">Out of Stock</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-brand-600">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {product.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
