
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez des
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Produits Incroyables
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-brand-100 max-w-2xl mx-auto">
            Achetez les dernières tendances et trouvez exactement ce que vous cherchez avec notre collection soigneusement sélectionnée
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Acheter Maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
