import React, { useState } from 'react';
import { PageView, CategoryId } from './types';
import { HeaderNavbar } from './components/HeaderNavbar';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CategoryTiles } from './components/CategoryTiles';
import { TrimesterView } from './components/TrimesterView';
import { MenjelangPersalinanView } from './components/MenjelangPersalinanView';
import { MenyambutBayiView } from './components/MenyambutBayiView';
import { TopicExploreView } from './components/TopicExploreView';
import { DictionaryView } from './components/DictionaryView';
import { AffirmationView } from './components/AffirmationView';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';
import { ShieldAlert, BookOpen, Compass, ArrowRight } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedTopicCategory, setSelectedTopicCategory] = useState<CategoryId>('tas-persalinan');

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
  };

  const handleSelectCategoryTile = (categoryId: CategoryId) => {
    setSelectedTopicCategory(categoryId);
    setActivePage('category');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#3D3435] flex flex-col font-sans selection:bg-[#F8E3E5] selection:text-[#B9626D]">
      
      {/* Header Navigation */}
      <HeaderNavbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Page Router */}
      <main className="flex-1">
        
        {/* BERANDA (HOME) VIEW */}
        {activePage === 'home' && (
          <div className="space-y-0 animate-fadeIn">
            {/* Hero Section */}
            <HeroSection onNavigate={handleNavigate} />

            {/* Stage Timeline */}
            <JourneyTimeline onNavigate={handleNavigate} />

            {/* Interactive Category Tiles ("Mau Membaca Tentang Apa?") */}
            <CategoryTiles onSelectCategory={handleSelectCategoryTile} />

            {/* Editorial Highlight & Position Card */}
            <section className="py-16 bg-[#FFF9F6]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#EADDDD] shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  <div className="md:col-span-8 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7EFE4] text-[#3D5C37] text-xs font-extrabold uppercase tracking-wider">
                      <ShieldAlert className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>PRINSIP UTAMA PLAYBOOK</span>
                    </div>

                    <h2 className="ad-title text-2xl sm:text-3xl font-bold text-[#1A1112]">
                      Pendamping Persiapan untuk Orang Tua Baru
                    </h2>

                    <p className="text-xs sm:text-sm text-[#524446] font-medium leading-relaxed">
                      Playbook ini bukan pengganti dokter, bidan, atau layanan faskes. Posisi aplikasi ini adalah murni membantu calon orang tua mengetahui apa saja yang dapat mulai dipersiapkan secara mandiri, finansial, dan logistik rumah tangga.
                    </p>

                    <div className="pt-2">
                      <button
                        id="home-about-link-btn"
                        onClick={() => {
                          handleNavigate('about');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#B9626D] hover:text-[#D9828B] transition-colors"
                      >
                        <span>Baca Posisi & Disclaimer Resmi Selengkapnya</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-[#F8F0E5] p-6 rounded-2xl border border-[#E6D7C3] text-center space-y-3">
                    <BookOpen className="w-8 h-8 text-[#8C633D] mx-auto" />
                    <h3 className="font-editorial text-lg font-bold text-[#3D3435]">
                      Kamus Kehamilan A–Z
                    </h3>
                    <p className="text-xs text-[#776B6D]">
                      Mengenal arti istilah umum seperti Braxton Hicks, ANC, CTG, hingga HPL.
                    </p>
                    <button
                      id="home-dictionary-link-btn"
                      onClick={() => {
                        handleNavigate('dictionary');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2.5 rounded-full bg-[#8C633D] text-white text-xs font-medium hover:bg-[#725031] transition-colors cursor-pointer"
                    >
                      Buka Kamus Kehamilan
                    </button>
                  </div>

                </div>
              </div>
            </section>
          </div>
        )}

        {/* PERJALANAN (JOURNEY) OVERVIEW VIEW */}
        {activePage === 'journey' && (
          <div className="py-12 bg-[#FFF9F6] animate-fadeIn">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8E3E5] text-[#B9626D] text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>ALUR PERJALANAN LENGKAP</span>
                </div>
                <h1 className="font-editorial text-4xl font-bold text-[#3D3435]">
                  Perjalanan Persiapan Kehamilan
                </h1>
                <p className="text-sm text-[#776B6D] max-w-xl mx-auto">
                  Pilih tahap yang ingin Anda pelajari. Aplikasi ini bersifat panduan terbuka tanpa perlu mengisi tanggal atau form apapun.
                </p>
              </div>

              <JourneyTimeline onNavigate={handleNavigate} />
            </div>
          </div>
        )}

        {/* PROMIL VIEW */}
        {activePage === 'promil' && (
          <TrimesterView stageId="promil" onNavigate={handleNavigate} />
        )}

        {/* TRIMESTER 1 VIEW */}
        {activePage === 'trimester1' && (
          <TrimesterView stageId="trimester1" onNavigate={handleNavigate} />
        )}

        {/* TRIMESTER 2 VIEW */}
        {activePage === 'trimester2' && (
          <TrimesterView stageId="trimester2" onNavigate={handleNavigate} />
        )}

        {/* TRIMESTER 3 VIEW */}
        {activePage === 'trimester3' && (
          <TrimesterView stageId="trimester3" onNavigate={handleNavigate} />
        )}

        {/* MENJELANG PERSALINAN VIEW */}
        {activePage === 'menjelang' && (
          <MenjelangPersalinanView onNavigate={handleNavigate} />
        )}

        {/* MENYAMBUT BAYI VIEW */}
        {activePage === 'menyambut' && (
          <MenyambutBayiView onNavigate={handleNavigate} />
        )}

        {/* TOPIC / CATEGORY EXPLORE VIEW */}
        {activePage === 'category' && (
          <TopicExploreView 
            initialCategoryId={selectedTopicCategory} 
            onNavigate={handleNavigate} 
          />
        )}

        {/* BABY BLUES DIRECT VIEW */}
        {activePage === 'baby-blues' && (
          <TopicExploreView 
            initialCategoryId="baby-blues" 
            onNavigate={handleNavigate} 
          />
        )}

        {/* DICTIONARY / KAMUS VIEW */}
        {activePage === 'dictionary' && (
          <DictionaryView onNavigate={handleNavigate} />
        )}

        {/* AFIRMASI KHUSUS VIEW */}
        {activePage === 'affirmation' && (
          <AffirmationView onNavigate={handleNavigate} />
        )}

        {/* ABOUT VIEW */}
        {activePage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Bottom Navigation */}
      <BottomNav activePage={activePage} onNavigate={handleNavigate} />

    </div>
  );
}
