import React from 'react';
import { CategoryId } from '../types';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { 
  ShoppingBag, 
  Baby, 
  Home, 
  Wallet, 
  FileText, 
  HeartHandshake, 
  Users, 
  Briefcase,
  ArrowRight,
  BookOpen,
  Heart
} from 'lucide-react';

interface CategoryTilesProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const CategoryTiles: React.FC<CategoryTilesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Wallet': return <Wallet className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Heart': return <Heart className="w-6 h-6 text-[#9B414C]" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 bg-[#F8F0E5]/40 border-b border-[#EADDDD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8E3E5] text-[#9B414C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>KUMPULAN TOPIK PILIHAN</span>
          </div>
          <h2 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112] tracking-tight">
            Mau Membaca Tentang Apa?
          </h2>
          <p className="text-sm sm:text-base text-[#524446] font-medium leading-relaxed">
            Pilih topik persiapan spesifik di bawah ini untuk langsung membaca panduan dan artikel terkait.
          </p>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              id={`category-tile-${cat.id}`}
              onClick={() => {
                onSelectCategory(cat.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border-2 border-[#EADDDD] hover:border-[#B9626D] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Icon Circle */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs font-bold"
                  style={{ 
                    backgroundColor: cat.colorBg, 
                    color: cat.colorAccent 
                  }}
                >
                  {getIcon(cat.iconName)}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="ad-title text-lg font-bold text-[#1A1112] group-hover:text-[#B9626D] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#8C4B53] font-bold mt-0.5 line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#241B1C] line-clamp-2 leading-relaxed font-medium">
                  {cat.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-4 pt-3 border-t border-[#EADDDD] flex items-center justify-between text-xs sm:text-sm font-black" style={{ color: cat.colorAccent }}>
                <span>Jelajahi Topik</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
