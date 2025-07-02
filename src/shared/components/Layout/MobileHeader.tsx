import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Phone } from "lucide-react";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-1">
        <Link to="/" className="flex items-center">
          <div className="w-36 h-16 overflow-hidden rounded-full">
            <img
              src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/417436500_728846719361075_2376986869935744299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=60kRAJy3Ln8Q7kNvwGQPQ2E&_nc_oc=AdkaBviDgkPD59iZ-VdgDrlifXApK6_PLkQye5UU9pxQiPzb2Q4glrfZ7y-kasCKFQE&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=aokm3gUR97z8t3Vb4f0Lwg&oh=00_AfPT6RIcTf_MTbJ5NrJamVCy0u8WIi-3QuPuWkqgX0W9cg&oe=6867A836"
              alt="JCI Maamoura"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          className="p-2 text-gray-700 hover:text-brand-600 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-700 hover:text-brand-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              <span>Accueil</span>
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
