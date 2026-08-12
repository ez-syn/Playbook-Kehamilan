import React from 'react';
import { PageView } from '../types';
import { Heart, Compass, HelpCircle, Sparkles } from 'lucide-react';
import { BabyFaceIcon } from './BabyIllustrations';

interface BottomNavProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
  const isPersiapanActive = 
    activePage === 'trimester1' || 
    activePage === 'trimester2' || 
    activePage === 'trimester3' || 
    activePage === 'menjelang' || 
    activePage === 'menyambut' ||
    activePage === 'category' ||
    activePage === 'baby-blues';

  const navItems = [
    {
      id: 'home' as PageView,
      label: 'Beranda',
      icon: <Heart className="w-5 h-5" />,
      isActive: activePage === 'home'
    },
    {
      id: 'journey' as PageView,
      label: 'Perjalanan',
      icon: <Compass className="w-5 h-5" />,
      isActive: activePage === 'journey'
    },
    {
      id: 'affirmation' as PageView,
      label: 'Afirmasi',
      icon: <Sparkles className="w-5 h-5" />,
      isActive: activePage === 'affirmation'
    },
    {
      id: 'trimester1' as PageView,
      label: 'Persiapan',
      icon: <BabyFaceIcon className="w-5 h-5" />,
      isActive: isPersiapanActive
    },
    {
      id: 'dictionary' as PageView,
      label: 'Kamus',
      icon: <HelpCircle className="w-5 h-5" />,
      isActive: activePage === 'dictionary'
    }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F6]/95 backdrop-blur-md border-t border-[#EADDDD] py-2 px-4 shadow-lg">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            id={`bottom-nav-${item.id}`}
            onClick={() => {
              onNavigate(item.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              item.isActive
                ? 'text-[#9B414C] font-black bg-[#F8E3E5]'
                : 'text-[#524446] font-bold hover:text-[#1A1112]'
            }`}
          >
            {item.icon}
            <span className="text-xs font-extrabold mt-0.5">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
