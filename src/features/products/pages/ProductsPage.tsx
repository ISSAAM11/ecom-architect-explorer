import Layout from "../../../shared/components/Layout/Layout";
import ProductGrid from "../components/ProductGrid";
import ProductFilters from "../components/ProductFilters";
import { useProductsViewModel } from "../viewmodels/ProductsViewModel";

const ProductsPage = () => {
  const {
    filteredProducts,
    isLoading,
    error,
    filters,
    applyFilters,
    clearFilters,
  } = useProductsViewModel();

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Voir tous les produits
            </h1>
            <p className="text-gray-600">
              Découvrez notre collection complète de produits incroyables
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProductFilters
                filters={filters}
                onFiltersChange={applyFilters}
                onClearFilters={clearFilters}
              />
            </div>

            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              <ProductGrid
                products={filteredProducts}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
