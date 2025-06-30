import Layout from "../../../shared/components/Layout/Layout";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import { useHomeViewModel } from "../viewmodels/HomeViewModel";

const HomePage = () => {
  const { featuredProducts, isLoading, error } = useHomeViewModel();

  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts
        products={featuredProducts}
        isLoading={isLoading}
        error={error}
      />
    </Layout>
  );
};

export default HomePage;
