
interface ProductImageGalleryProps {
  images: string[];
  selectedIndex: number;
  onImageSelect: (index: number) => void;
  productName: string;
}

const ProductImageGallery = ({ images, selectedIndex, onImageSelect, productName }: ProductImageGalleryProps) => {
  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
        <img
          src={images[selectedIndex]}
          alt={productName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                selectedIndex === index
                  ? 'border-brand-500 ring-2 ring-brand-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
