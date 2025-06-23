// src/components/LanguageSelector.tsx
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, label: 'EN', flag: '🇺🇸' },
    { code: 'es' as Language, label: 'ES', flag: '🇪🇸' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-300 hover:text-teal-400 transition-colors font-medium bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-600 hover:border-teal-400">
        <Globe size={16} />
        <span className="text-sm font-semibold">
          {languages.find(lang => lang.code === language)?.flag} {language.toUpperCase()}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[120px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code 
                ? 'text-teal-400 bg-slate-700/50' 
                : 'text-gray-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;