
import { useState, useEffect } from 'react';
import { ProductFilter } from '../../../shared/models/Product';
import { PRODUCT_CATEGORIES } from '../../../shared/constants';

interface ProductFiltersProps {
  filters: ProductFilter;
  onFiltersChange: (filters: ProductFilter) => void;
  onClearFilters: () => void;
}

const ProductFilters = ({ filters, onFiltersChange, onClearFilters }: ProductFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState(filters.searchQuery || '');

  // Debounce search query
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery !== (filters.searchQuery || '')) {
        handleFilterChange('searchQuery', searchQuery);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Update local search state when filters change externally
  useEffect(() => {
    setSearchQuery(filters.searchQuery || '');
  }, [filters.searchQuery]);

  const handleFilterChange = (key: keyof ProductFilter, value: any) => {
    console.log('Filter change:', key, value);
    onFiltersChange({ [key]: value });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const hasActiveFilters = Object.keys(filters).some(key => 
    filters[key as keyof ProductFilter] !== undefined && filters[key as keyof ProductFilter] !== ''
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-brand-600 hover:text-brand-700 font-medium"
          >
            Tout effacer
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rechercher
          </label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Rechercher des produits..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select
            value={filters.category || ''}
            onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Toutes les catégories</option>
            {PRODUCT_CATEGORIES.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gamme de prix
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              value={filters.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
              placeholder="Min"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            />
            <input
              type="number"
              value={filters.maxPrice || ''}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
              placeholder="Max"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            />
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note minimum
          </label>
          <select
            value={filters.rating || ''}
            onChange={(e) => handleFilterChange('rating', e.target.value ? Number(e.target.value) : undefined)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
          >
            <option value="">Toute note</option>
            <option value="4">4+ Étoiles</option>
            <option value="3">3+ Étoiles</option>
            <option value="2">2+ Étoiles</option>
            <option value="1">1+ Étoiles</option>
          </select>
        </div>

        {/* Stock Status */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock === true}
              onChange={(e) => handleFilterChange('inStock', e.target.checked ? true : undefined)}
              className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
            />
            <span className="ml-2 text-sm text-gray-700">En stock seulement</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
