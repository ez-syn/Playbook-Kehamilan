import React from 'react';
import { PageView } from '../types';
import { Heart, ShieldCheck } from 'lucide-react';
import { BotanicalBranch, BotanicalFlower } from './BotanicalDecoration';
import { BabyFaceIcon } from './BabyIllustrations';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F0E5]/60 border-t border-[#EADDDD] pt-12 pb-24 lg:pb-12 text-[#3D3435]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Universal Health Disclaimer Banner */}
        <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#EADDDD] flex items-start gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-[#B9626D] shrink-0 mt-0.5" />
          <p className="text-xs text-[#776B6D] leading-relaxed">
            <span className="font-bold text-[#3D3435]">Pengingat Kesehatan:</span> Informasi ini bersifat edukasi umum. Untuk keputusan terkait kesehatan dan kehamilan, diskusikan dengan dokter, bidan, atau tenaga kesehatan.
          </p>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F8E3E5] border-2 border-[#EADDDD] flex items-center justify-center text-[#B9626D] shadow-2xs shrink-0">
                <BabyFaceIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#9B414C] font-black bg-[#F8E3E5] px-2.5 py-0.5 rounded-full border border-[#EADDDD]">
                    PLAYBOOK BY EZPLAN
                  </span>
                </div>
                <h3 className="ad-title text-xl font-black tracking-tight text-[#1A1112]">
                  Teman Kehamilan
                </h3>
              </div>
            </div>
            
            <p className="text-xs text-[#524446] font-bold italic">
              “Panduan Praktis dari Awal Kehamilan hingga Menyambut Si Kecil”
            </p>

            <p className="text-xs text-[#524446] leading-relaxed max-w-sm font-medium">
              Panduan digital interaktif yang membantu calon orang tua mengetahui apa saja yang dapat dipersiapkan secara mandiri dan terorganisir.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[#B8C9B4]">
              <BotanicalBranch className="w-5 h-5" color="#B8C9B4" />
              <BotanicalFlower className="w-5 h-5" color="#D9828B" />
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D3435]">
              Navigasi Panduan
            </h4>
            <div className="grid grid-cols-2 gap-y-1.5 text-xs text-[#776B6D]">
              <button 
                id="footer-link-home"
                onClick={() => handleNav('home')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Beranda
              </button>
              <button 
                id="footer-link-journey"
                onClick={() => handleNav('journey')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Perjalanan
              </button>
              <button 
                id="footer-link-affirmation"
                onClick={() => handleNav('affirmation')} 
                className="text-left font-bold text-[#9B414C] hover:text-[#B9626D] transition-colors"
              >
                Afirmasi Khusus
              </button>
              <button 
                id="footer-link-promil"
                onClick={() => handleNav('promil')} 
                className="text-left font-bold text-[#8A3B72] hover:text-[#B9626D] transition-colors"
              >
                Persiapan Promil
              </button>
              <button 
                id="footer-link-t1"
                onClick={() => handleNav('trimester1')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Trimester Pertama
              </button>
              <button 
                id="footer-link-t2"
                onClick={() => handleNav('trimester2')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Trimester Kedua
              </button>
              <button 
                id="footer-link-t3"
                onClick={() => handleNav('trimester3')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Trimester Ketiga
              </button>
              <button 
                id="footer-link-menjelang"
                onClick={() => handleNav('menjelang')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Menjelang Persalinan
              </button>
              <button 
                id="footer-link-menyambut"
                onClick={() => handleNav('menyambut')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Menyambut Bayi
              </button>
              <button 
                id="footer-link-dictionary"
                onClick={() => handleNav('dictionary')} 
                className="text-left hover:text-[#B9626D] transition-colors"
              >
                Kamus Kehamilan A–Z
              </button>
            </div>
          </div>

          {/* About & Position */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#1A1112]">
              Tentang Playbook
            </h4>
            <p className="text-xs text-[#524446] font-medium leading-relaxed">
              Bukan aplikasi kesehatan atau pencatatan medis. Didesain murni sebagai buku panduan digital statis bagi keluarga.
            </p>
            <button
              id="footer-link-about"
              onClick={() => handleNav('about')}
              className="inline-block pt-1 text-xs font-bold text-[#B9626D] underline hover:text-[#D9828B]"
            >
              Baca Selengkapnya
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#EADDDD] flex flex-col sm:flex-row items-center justify-between text-xs text-[#524446] font-semibold gap-2">
          <span>© {new Date().getFullYear()} Playbook Teman Kehamilan by ezplan.</span>
          <span className="flex items-center gap-1">
            Dibuat untuk kenyamanan calon orang tua <Heart className="w-3.5 h-3.5 text-[#B9626D] fill-[#F8E3E5]" />
          </span>
        </div>

      </div>
    </footer>
  );
};
