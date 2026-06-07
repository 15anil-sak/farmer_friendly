import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { Loader2, AlertCircle } from 'lucide-react';

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    if (location.state?.category) {
      setSearchTerm(location.state.category);
    }
  }, [location.state]);

  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await api.get('/api/products');
      return data;
    }
  });

  const filteredProducts = products?.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 w-full">
      <header>
        <h2 className="text-2xl font-bold text-gray-800">{t('search.title')}</h2>
        <p className="text-gray-500">{t('search.subtitle')}</p>
      </header>

      <SearchBar onSearch={setSearchTerm} />

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 text-primary">
          <Loader2 className="animate-spin mb-4" size={48} />
          <p className="font-medium">{t('search.loading')}</p>
        </div>
      ) : isError ? (
        <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex flex-col items-center text-center">
          <AlertCircle className="text-red-500 mb-2" size={32} />
          <h4 className="font-bold text-red-800">Connection Error</h4>
          <p className="text-red-600 text-sm">{t('search.error')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 font-medium">{t('search.no_results')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
