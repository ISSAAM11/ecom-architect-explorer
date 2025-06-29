
import Layout from '../shared/components/Layout/Layout';
import { APP_CONFIG } from '../shared/constants';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-xl text-gray-600 mb-8 text-center">
                Welcome to {APP_CONFIG.name}, your trusted destination for quality products and exceptional service.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    JCI Maamoura Store is more than just an e-commerce platform. We are a community-driven initiative 
                    that believes in providing quality products while supporting local development and entrepreneurship.
                  </p>
                  <p className="text-gray-600">
                    Our mission is to create a seamless shopping experience while fostering economic growth 
                    and community engagement in the Maamoura region.
                  </p>
                </div>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Our Story Image</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
                  <p className="text-gray-600">We carefully curate our product selection to ensure the highest quality for our customers.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Community Focus</h3>
                  <p className="text-gray-600">Supporting local businesses and fostering community development is at the heart of what we do.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Exceptional Service</h3>
                  <p className="text-gray-600">Our dedicated team is committed to providing outstanding customer service and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
