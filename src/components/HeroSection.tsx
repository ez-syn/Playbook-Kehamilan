import React, { useState } from 'react';
import { PageView } from '../types';
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, Baby, Heart } from 'lucide-react';
import { BotanicalBranch, BotanicalFlower } from './BotanicalDecoration';
import { BabyFaceIcon, BabyFootprintsIllustration, BabyStrollerIllustration, BabyOnesieIcon, BabyBottleIcon } from './BabyIllustrations';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F6] via-[#F8F0E5]/40 to-[#FFF9F6] py-12 lg:py-20 border-b border-[#EADDDD]">
      {/* Decorative Organic Shapes in Background */}
      <div className="absolute top-10 left-[-5%] w-72 h-72 rounded-full bg-[#F8E3E5]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-[#E7EFE4]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8E3E5] border border-[#EADDDD] text-[#9B414C] text-xs font-black tracking-wider uppercase shadow-xs">
              <Baby className="w-4 h-4 text-[#9B414C]" />
              <span>PLAYBOOK TEMAN PERSIAPAN KEHAMILAN</span>
            </div>

            {/* Headline */}
            <h1 className="ad-title text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1112] leading-[1.15] tracking-tight">
              Lebih Siap Menjalani <br className="hidden sm:inline" />
              <span className="text-[#9B414C] font-black">Perjalanan Menuju</span> <br className="hidden sm:inline" />
              Hari Kelahiran Si Kecil
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#524446] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Panduan sederhana & terstruktur untuk membantu calon orang tua mengetahui
              persiapan praktis dari trimester awal hingga menyambut si kecil.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-explore-btn"
                onClick={() => {
                  onNavigate('journey');
                  window.scrollTo({ top: 500, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B9626D] text-white font-extrabold text-sm sm:text-base hover:bg-[#A34E59] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 group cursor-pointer tracking-wide"
              >
                <span>JELAJAHI PANDUAN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              <button
                id="hero-dictionary-btn"
                onClick={() => onNavigate('dictionary')}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-[#FFFFFF] text-[#1A1112] border-2 border-[#EADDDD] font-bold text-sm sm:text-base hover:bg-[#F8E3E5]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#B9626D]" />
                <span>Kamus Kehamilan A–Z</span>
              </button>
            </div>

            {/* Editorial Features Strip */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#EADDDD] flex items-center gap-2.5 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#E7EFE4] text-[#3D5C37] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                </div>
                <span className="text-xs text-[#1A1112] font-bold leading-snug">Praktis & Bebas Form</span>
              </div>

              <div className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#EADDDD] flex items-center gap-2.5 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#F8E3E5] text-[#9B414C] flex items-center justify-center shrink-0">
                  <BabyFaceIcon className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1A1112] font-bold leading-snug">Kebutuhan Si Kecil</span>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#EADDDD] flex items-center gap-2.5 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#F6DFD2] text-[#8C4B2F] flex items-center justify-center shrink-0">
                  <BabyStrollerIllustration className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#1A1112] font-bold leading-snug">Struktur Per Trimester</span>
              </div>
            </div>

          </div>

          {/* Editorial Artwork Showcase */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            
            {/* Background Frame */}
            <div className="relative w-full max-w-md bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#EADDDD] shadow-xl text-center space-y-4">
 
              {/* Graphic Illustrated Container - Cute Baby Showcase */}
              <div className="relative bg-gradient-to-b from-[#FFF2EE] via-[#F8E3E5] to-[#F6DFD2] p-6 sm:p-8 rounded-2xl border-2 border-[#EADDDD] overflow-hidden flex flex-col items-center justify-center min-h-[280px] shadow-inner">
                
                {/* Floating Baby Pills */}
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 px-2.5 py-1 rounded-full border border-[#EADDDD] text-[11px] font-extrabold text-[#9B414C] flex items-center gap-1.5 shadow-2xs">
                  <BabyFootprintsIllustration className="w-3.5 h-3.5" />
                  <span>Si Kecil</span>
                </div>
 
                <div className="absolute bottom-3 right-3 bg-[#FFFFFF]/90 px-2.5 py-1 rounded-full border border-[#EADDDD] text-[11px] font-extrabold text-[#3D5C37] flex items-center gap-1.5 shadow-2xs">
                  <BabyBottleIcon className="w-3.5 h-3.5" />
                  <span>Perlengkapan</span>
                </div>
 
                {/* Minimalist Baby Illustration Hero Badge - Square Rounded with Larger Photo */}
                <div className="relative z-10 space-y-4 my-2 w-full flex flex-col items-center">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-[#FFFFFF] mx-auto flex items-center justify-center shadow-lg border-2 border-[#EADDDD] overflow-hidden transition-all hover:scale-105 duration-300">
                    {!imgError ? (
                      <img 
                        src="https://lh3.googleusercontent.com/d/1bmmpXWKDzaCejU7qdhV1Wli221p_5fgo" 
                        alt="Baby Ilustrasi" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={() => {
                          setImgError(true);
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center space-y-2 bg-[#FFF0F2] w-full h-full">
                        <BabyFaceIcon className="w-20 h-20 text-[#B9626D]" />
                        <span className="text-xs font-black text-[#9B414C]">EZPlan Playbook</span>
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-[#F8E3E5] p-2 rounded-xl border border-[#EADDDD] shadow-md z-10">
                      <Heart className="w-4 h-4 fill-[#B9626D] text-[#B9626D]" />
                    </div>
                  </div>
 
                  <div>
                    <div className="flex items-center justify-center mb-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#9B414C] font-black bg-[#FFFFFF] px-3 py-0.5 rounded-full border border-[#EADDDD] shadow-2xs">
                        PLAYBOOK BY EZPLAN
                      </span>
                    </div>
                    <h3 className="ad-title text-xl sm:text-2xl font-black text-[#1A1112]">Teman Kehamilan</h3>
                    <p className="text-xs text-[#524446] font-extrabold italic mt-1">“Mempersiapkan hari bahagia dengan tenang dan terorganisir.”</p>
                  </div>
                </div>
 
                {/* Decorative overlay background icons */}
                <div className="absolute top-2 right-4 opacity-25 pointer-events-none">
                  <BabyStrollerIllustration className="w-10 h-10" />
                </div>
                <div className="absolute bottom-2 left-4 opacity-25 pointer-events-none">
                  <BabyOnesieIcon className="w-10 h-10" />
                </div>
              </div>
 
              {/* Editorial Quote Block */}
              <div className="text-left bg-[#F8F0E5] p-4 rounded-xl border border-[#EADDDD] space-y-1">
                <p className="text-xs text-[#1A1112] font-extrabold flex items-center gap-1.5">
                  <BabyOnesieIcon className="w-4 h-4 text-[#9B414C]" />
                  <span>Bukan Tracker / Aplikasi Form</span>
                </p>
                <p className="text-[12px] text-[#524446] font-medium leading-normal">
                  Aplikasi ini berfungsi murni sebagai buku panduan digital. Tidak ada data pribadi yang perlu diisi.
                </p>
              </div>
 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
