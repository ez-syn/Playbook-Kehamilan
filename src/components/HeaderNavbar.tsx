import React, { useState, useRef, useEffect } from 'react';
import { PageView } from '../types';
import { 
  Menu, 
  X, 
  Heart, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Baby, 
  Info, 
  HelpCircle, 
  LayoutGrid, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { BabyFaceIcon } from './BabyIllustrations';
import { LogOut } from 'lucide-react';

interface HeaderNavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  onLogout?: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ activePage, onNavigate, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stageDropdownOpen, setStageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setStageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const stageItems: { id: PageView; label: string; period: string; color: string; badgeBg: string }[] = [
    { id: 'promil', label: 'Persiapan Promil', period: 'Sebelum Hamil', color: '#8A3B72', badgeBg: '#FAF2F9' },
    { id: 'trimester1', label: 'Trimester 1', period: '0 - 12 Minggu', color: '#D9828B', badgeBg: '#FFF5F6' },
    { id: 'trimester2', label: 'Trimester 2', period: '13 - 27 Minggu', color: '#3D5C37', badgeBg: '#F4F8F3' },
    { id: 'trimester3', label: 'Trimester 3', period: '28 - 40+ Minggu', color: '#8C4B2F', badgeBg: '#FFF9F0' },
    { id: 'menjelang', label: 'Menjelang Persalinan', period: 'H-30 Persiapan', color: '#8C633D', badgeBg: '#F8F0E5' },
    { id: 'menyambut', label: 'Menyambut Bayi', period: 'Pasca Lahir', color: '#9B414C', badgeBg: '#F4D5D8' },
  ];

  const activeStage = stageItems.find((s) => s.id === activePage);
  const isStageActive = Boolean(activeStage);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setStageDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F6]/95 backdrop-blur-md border-b border-[#EADDDD]">
      {/* Top Bar Disclaimer Banner */}
      <div className="bg-[#F8E3E5]/80 border-b border-[#EADDDD] py-1 px-4 text-center text-[11px] sm:text-xs text-[#524446] font-extrabold flex items-center justify-center gap-2 truncate">
        <BabyFaceIcon className="w-4 h-4 text-[#9B414C] shrink-0" />
        <span className="truncate">Playbook Teman Kehamilan untuk Calon Orang Tua</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo & Tagline */}
          <button 
            id="nav-brand-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left focus:outline-none group py-1 shrink-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#B9626D] border-2 border-[#EADDDD] flex items-center justify-center text-white shadow-xs transition-transform group-hover:scale-105 shrink-0">
              <BabyFaceIcon className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#9B414C] font-black bg-[#F8E3E5] px-1.5 py-0.5 rounded-full border border-[#EADDDD] w-fit lg:hidden xl:inline-block">
                Playbook by EZPlan
              </span>
              <h1 className="ad-title text-sm sm:text-lg lg:text-base xl:text-lg 2xl:text-xl font-black text-[#1A1112] tracking-tight leading-tight">
                Teman Kehamilan
              </h1>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2 shrink-0">
            <button
              id="desktop-nav-home"
              onClick={() => handleNavClick('home')}
              className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-bold transition-all ${
                activePage === 'home'
                  ? 'bg-[#B9626D] text-white shadow-2xs'
                  : 'text-[#1A1112] hover:bg-[#F8E3E5]/60 hover:text-[#B9626D]'
              }`}
            >
              Beranda
            </button>

            <button
              id="desktop-nav-journey"
              onClick={() => handleNavClick('journey')}
              className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-bold transition-all ${
                activePage === 'journey'
                  ? 'bg-[#B9626D] text-white shadow-2xs'
                  : 'text-[#1A1112] hover:bg-[#F8E3E5]/60 hover:text-[#B9626D]'
              }`}
            >
              Perjalanan
            </button>

            <button
              id="desktop-nav-category"
              onClick={() => handleNavClick('category')}
              className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-bold transition-all ${
                activePage === 'category'
                  ? 'bg-[#B9626D] text-white shadow-2xs'
                  : 'text-[#1A1112] hover:bg-[#F8E3E5]/60 hover:text-[#B9626D]'
              }`}
            >
              Topik
            </button>

            <button
              id="desktop-nav-baby-blues"
              onClick={() => handleNavClick('baby-blues')}
              className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-black transition-all flex items-center gap-1 xl:gap-1.5 ${
                activePage === 'baby-blues'
                  ? 'bg-[#9B414C] text-white shadow-xs scale-105'
                  : 'text-[#9B414C] bg-[#FFF0F2] border border-[#F8D2D6] hover:bg-[#9B414C] hover:text-white hover:border-[#9B414C]'
              }`}
            >
              <Heart className={`w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 ${activePage === 'baby-blues' ? 'fill-white text-white' : 'fill-[#9B414C] text-[#9B414C]'}`} />
              <span>Mengenal Baby Blues</span>
            </button>

            {/* Stage Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="desktop-nav-stages-dropdown"
                onClick={() => setStageDropdownOpen(!stageDropdownOpen)}
                className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-black transition-all flex items-center gap-1 xl:gap-1.5 border ${
                  isStageActive
                    ? 'bg-[#B9626D] text-white border-[#B9626D] shadow-2xs'
                    : 'bg-[#F8F0E5] text-[#524446] border-[#EADDDD] hover:border-[#B9626D] hover:text-[#9B414C]'
                }`}
              >
                <span>
                  {activeStage ? `Tahapan: ${activeStage.label}` : 'Panduan Tahapan'}
                </span>
                <ChevronDown className={`w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 transition-transform ${stageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Flyout */}
              {stageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl border-2 border-[#EADDDD] shadow-xl p-2 z-50 animate-fadeIn space-y-1">
                  <div className="px-3 py-1 text-[10px] uppercase font-black tracking-wider text-[#9B414C]">
                    Pilih Tahapan Panduan
                  </div>

                  {stageItems.map((stage) => {
                    const isCurrent = activePage === stage.id;
                    return (
                      <button
                        key={stage.id}
                        onClick={() => handleNavClick(stage.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                          isCurrent
                             ? 'bg-[#B9626D] text-white'
                             : 'hover:bg-[#FFF9F6] text-[#1A1112]'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span>{stage.label}</span>
                          <span className={`text-[10px] font-medium ${isCurrent ? 'text-white/80' : 'text-[#776B6D]'}`}>
                            {stage.period}
                          </span>
                        </div>
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: stage.color }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              id="desktop-nav-affirmation"
              onClick={() => handleNavClick('affirmation')}
              className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-bold transition-all flex items-center gap-1 ${
                activePage === 'affirmation'
                  ? 'bg-[#B9626D] text-white shadow-2xs'
                  : 'text-[#1A1112] hover:bg-[#F8E3E5]/60 hover:text-[#B9626D]'
              }`}
            >
              <Sparkles className={`w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 ${activePage === 'affirmation' ? 'text-white' : 'text-[#B9626D]'}`} />
              <span>Afirmasi & Ide Obrolan</span>
            </button>

            <button
              id="desktop-nav-dictionary"
              onClick={() => handleNavClick('dictionary')}
              className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-bold transition-all flex items-center gap-1 ${
                activePage === 'dictionary'
                  ? 'bg-[#B9626D] text-white shadow-2xs'
                  : 'text-[#1A1112] hover:bg-[#F8E3E5]/60 hover:text-[#B9626D]'
              }`}
            >
              <BookOpen className={`w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 ${activePage === 'dictionary' ? 'text-white' : 'text-[#8C633D]'}`} />
              <span>Kamus</span>
            </button>

            <button
              id="desktop-nav-about"
              onClick={() => handleNavClick('about')}
              className={`px-1.5 xl:px-2.5 2xl:px-3 py-1.5 rounded-full text-[10px] xl:text-xs 2xl:text-sm font-bold transition-all flex items-center gap-1 ${
                activePage === 'about'
                  ? 'bg-[#3D3435] text-white shadow-2xs'
                  : 'text-[#776B6D] hover:bg-[#EADDDD]/50 hover:text-[#3D3435]'
              }`}
            >
              <Info className={`w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 ${activePage === 'about' ? 'text-white' : 'text-[#776B6D]'}`} />
              <span>Tentang</span>
            </button>

            {onLogout && (
              <button
                id="desktop-nav-logout"
                onClick={onLogout}
                className="px-1.5 xl:px-2 py-1.5 rounded-full text-[10px] xl:text-xs font-bold text-[#9B414C] hover:bg-[#FFF0F2] transition-colors flex items-center gap-1 border border-transparent hover:border-[#F8D2D6]"
                title="Keluar dari akun"
              >
                <LogOut className="w-3 h-3 text-[#9B414C]" />
                <span>Keluar</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#3D3435] bg-[#F8E3E5]/60 border border-[#EADDDD] hover:bg-[#F8E3E5] transition-colors"
              aria-label="Menu Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF9F6] border-b border-[#EADDDD] px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Main Pages */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-wider text-[#9B414C] font-black px-2 py-1">
              Navigasi Utama
            </div>
            {[
              { id: 'home' as PageView, label: 'Beranda', icon: <LayoutGrid className="w-4 h-4" /> },
              { id: 'journey' as PageView, label: 'Perjalanan', icon: <Compass className="w-4 h-4" /> },
              { id: 'category' as PageView, label: 'Topik Pilihan', icon: <LayoutGrid className="w-4 h-4 text-[#8C633D]" /> },
              { id: 'baby-blues' as PageView, label: 'Mengenal Baby Blues', icon: <Heart className="w-4 h-4 text-[#9B414C] fill-current" /> },
              { id: 'affirmation' as PageView, label: 'Afirmasi & Ide Obrolan', icon: <Sparkles className="w-4 h-4" /> },
            ].map((item) => (
              <button
                key={item.id}
                id={`mobile-drawer-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePage === item.id
                    ? 'bg-[#B9626D] text-white shadow-2xs'
                    : 'text-[#3D3435] hover:bg-[#F8E3E5]/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Panduan Tahapan */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase tracking-wider text-[#8A3B72] font-black px-2 py-1">
              Panduan Per Tahapan
            </div>
            {stageItems.map((stage) => (
              <button
                key={stage.id}
                id={`mobile-drawer-stage-${stage.id}`}
                onClick={() => handleNavClick(stage.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePage === stage.id
                    ? 'bg-[#B9626D] text-white shadow-2xs'
                    : 'text-[#3D3435] hover:bg-[#F8E3E5]/50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: stage.color }} />
                  <span>{stage.label}</span>
                </div>
                <span className={`text-[10px] ${activePage === stage.id ? 'text-white/80' : 'text-[#776B6D]'}`}>
                  {stage.period}
                </span>
              </button>
            ))}
          </div>

          {/* Additional Pages */}
          <div className="space-y-1 pt-2 border-t border-[#EADDDD]">
            <div className="text-[10px] uppercase tracking-wider text-[#776B6D] font-black px-2 py-1">
              Informasi Tambahan
            </div>
            {[
              { id: 'dictionary' as PageView, label: 'Kamus Istilah Kehamilan', icon: <HelpCircle className="w-4 h-4" /> },
              { id: 'about' as PageView, label: 'Tentang Playbook ini', icon: <Info className="w-4 h-4" /> },
            ].map((item) => (
              <button
                key={item.id}
                id={`mobile-drawer-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePage === item.id
                    ? 'bg-[#3D3435] text-white shadow-2xs'
                    : 'text-[#3D3435] hover:bg-[#EADDDD]/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}

            {onLogout && (
              <button
                id="mobile-drawer-logout"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#9B414C] bg-[#FFF0F2] border border-[#F8D2D6] hover:bg-[#9B414C] hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar Akun</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

