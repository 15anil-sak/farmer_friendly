import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import api from '../utils/api';
import SchemeCard from '../components/SchemeCard';
import { Loader2, Info } from 'lucide-react';

const SchemesPage = () => {
  const { t } = useTranslation();
  const { data: schemes, isLoading, isError } = useQuery({
    queryKey: ['schemes'],
    queryFn: async () => {
      const { data } = await api.get('/api/schemes');
      return data;
    }
  });

  return (
    <div className="space-y-6 w-full">
      <header>
        <h2 className="text-2xl font-bold text-gray-800">{t('schemes.title')}</h2>
        <p className="text-gray-500">{t('schemes.subtitle')}</p>
      </header>

      <section className="bg-primary/5 p-5 rounded-3xl border border-primary/10 flex gap-4">
        <div className="bg-white p-2 rounded-xl shadow-sm self-start">
          <Info className="text-primary" size={20} />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 text-sm">{t('schemes.help_title')}</h4>
          <p className="text-gray-600 text-[13px] mt-1">{t('schemes.help_text')}</p>
        </div>
      </section>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin text-primary" size={40} />
          <p className="ml-3 font-medium text-primary">{t('schemes.loading')}</p>
        </div>
      ) : isError ? (
        <div className="text-center py-10 text-gray-400">
          <p>{t('schemes.error')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {schemes?.length > 0 ? (
            schemes.map(scheme => (
              <SchemeCard key={scheme._id} scheme={scheme} />
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400">{t('schemes.no_results')}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SchemesPage;
