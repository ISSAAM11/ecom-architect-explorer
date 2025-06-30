import { Link } from "react-router-dom";
import { Search, Home, Phone } from "lucide-react";
import { APP_CONFIG } from "../../constants";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-1 py-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-9 group">
            <div
              style={{
                width: "150px",
                height: "65px",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/417436500_728846719361075_2376986869935744299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=60kRAJy3Ln8Q7kNvwGQPQ2E&_nc_oc=AdkaBviDgkPD59iZ-VdgDrlifXApK6_PLkQye5UU9pxQiPzb2Q4glrfZ7y-kasCKFQE&_nc_zt=23&_nc_ht=scontent.ftun2-2.fna&_nc_gid=aokm3gUR97z8t3Vb4f0Lwg&oh=00_AfPT6RIcTf_MTbJ5NrJamVCy0u8WIi-3QuPuWkqgX0W9cg&oe=6867A836"
                alt="Cropped example"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-brand-600 transition-colors"
            >
              <Home size={18} />
              <span>Accueil</span>
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Produits
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              À Propos
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
