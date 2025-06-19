
import { Product } from '../../../shared/models/Product';
import { formatPrice, calculateDiscount } from '../../../shared/utils/formatters';

interface ProductInfoProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
}

const ProductInfo = ({ product, quantity, onQuantityChange, onAddToCart }: ProductInfoProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-gray-700 ml-1">{product.rating}</span>
            <span className="text-gray-500 ml-1">({product.reviewCount} reviews)</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
            product.inStock 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      <div className="border-t border-b border-gray-200 py-6">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-brand-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
                Save {calculateDiscount(product.originalPrice, product.price)}%
              </span>
            </>
          )}
        </div>
      </div>

      <div>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>

      {product.tags.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {product.specifications && product.specifications.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <dl className="space-y-2">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between">
                  <dt className="text-gray-600">{spec.key}:</dt>
                  <dd className="text-gray-900 font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="quantity" className="text-lg font-medium text-gray-900">
            Quantity
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => onQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              −
            </button>
            <span className="px-4 py-2 text-gray-900 font-medium border-l border-r border-gray-300">
              {quantity}
            </span>
            <button
              onClick={() => onQuantityChange(quantity + 1)}
              disabled={quantity >= 99}
              className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={onAddToCart}
          disabled={!product.inStock}
          className="w-full bg-brand-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-brand-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors transform hover:scale-105 hover:shadow-lg"
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
