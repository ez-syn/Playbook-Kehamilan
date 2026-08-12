import React, { useState } from 'react';
import { PageView } from '../types';
import { MENJELANG_PERSALINAN_ITEMS, MENJELANG_DOCTOR_QUESTIONS } from '../data/journeyData';
import { 
  Hospital, 
  Car, 
  Heart, 
  FileText, 
  ShoppingBag, 
  Phone, 
  Calendar, 
  Home, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { BotanicalBranch } from './BotanicalDecoration';

interface MenjelangPersalinanViewProps {
  onNavigate: (page: PageView) => void;
}

export const MenjelangPersalinanView: React.FC<MenjelangPersalinanViewProps> = ({ onNavigate }) => {
  const [expandedItemId, setExpandedItemId] = useState<string | null>('prep-1');

  const toggleItem = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const getItemIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hospital': return <Hospital className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Phone': return <Phone className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="py-10 bg-[#FFF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADDDD] pb-4">
          <button
            id="menjelang-back-btn"
            onClick={() => {
              onNavigate('journey');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#776B6D] hover:text-[#3D3435] transition-colors bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#EADDDD]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Perjalanan</span>
          </button>

          <span className="text-xs text-[#776B6D] font-medium uppercase tracking-wider bg-[#F8F0E5] px-3 py-1 rounded-full">
            Panduan Masa Siaga
          </span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#F8F0E5] p-8 sm:p-10 rounded-3xl border-2 border-[#E6D7C3] relative overflow-hidden shadow-xs space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#8C633D] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>SIAGA PENUH HARI-H</span>
          </div>

          <h1 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112]">
            Menjelang Hari Kelahiran
          </h1>

          <p className="text-sm text-[#524446] font-medium max-w-2xl leading-relaxed">
            Masa siaga untuk merekapitulasi seluruh aspek logistik dan kesiapan. Klik setiap poin di bawah ini untuk membaca penjelasan lengkapnya.
          </p>

          <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none hidden sm:block">
            <BotanicalBranch className="w-36 h-36" color="#8C633D" />
          </div>
        </div>

        {/* Section 1: Hal yang Sebaiknya Sudah Dipersiapkan */}
        <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#EADDDD] shadow-xs space-y-6">
          <div className="border-b border-[#EADDDD] pb-4">
            <h2 className="ad-title text-2xl font-black text-[#1A1112]">
              Hal yang Sebaiknya Sudah Dipersiapkan
            </h2>
            <p className="text-xs text-[#524446] font-bold mt-1">
              Panduan interaktif kesiapan. Klik untuk membuka dan melihat detail kesiapan logistik Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MENJELANG_PERSALINAN_ITEMS.map((item) => {
              const isExpanded = expandedItemId === item.id;
              return (
                <div
                  key={item.id}
                  id={`menjelang-item-${item.id}`}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded 
                      ? 'bg-[#FFF9F6] border-[#8C633D] shadow-xs' 
                      : 'bg-[#FFFFFF] border-[#EADDDD] hover:border-[#8C633D]/50'
                  }`}
                >
                  {/* Header Bar */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isExpanded ? 'bg-[#8C633D] text-white' : 'bg-[#F8F0E5] text-[#8C633D]'
                      }`}>
                        {getItemIcon(item.iconName)}
                      </div>
                      <div>
                        <h3 className="ad-title text-base sm:text-lg font-bold text-[#1A1112]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#524446] font-bold">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-[#1A1112]">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-[#8C633D]" /> : <ChevronDown className="w-5 h-5 text-[#8C633D]" />}
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-[#EADDDD] space-y-3 animate-fadeIn">
                      <p className="text-sm text-[#1A1112] leading-relaxed font-medium">
                        {item.description}
                      </p>

                      <div className="bg-[#FFFFFF] p-3.5 rounded-xl border-2 border-[#EADDDD] space-y-2">
                        <span className="text-xs font-black uppercase text-[#8C633D] tracking-wider block">
                          Poin Utama Logistik:
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#241B1C] font-medium">
                          {item.keyDetails.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#3D5C37] mt-0.5 shrink-0 stroke-[2.5]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Yang Bisa Dibicarakan dengan Dokter/Bidan */}
        <section className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#EADDDD] shadow-xs space-y-6">
          <div className="border-b border-[#EADDDD] pb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F8E3E5] text-[#9B414C] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="ad-title text-2xl font-black text-[#1A1112]">
                Yang Bisa Dibicarakan dengan Dokter/Bidan
              </h2>
              <p className="text-xs sm:text-sm text-[#524446] font-bold">
                Gagasan topik percakapan umum untuk membangun kesepahaman dengan tim medis Anda.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {MENJELANG_DOCTOR_QUESTIONS.map((q, qIdx) => (
              <div 
                key={qIdx}
                className="bg-[#FFF9F6] p-4.5 rounded-2xl border-2 border-[#EADDDD] space-y-1.5 hover:border-[#B9626D] transition-colors shadow-2xs"
              >
                <p className="text-sm sm:text-base font-extrabold text-[#1A1112]">
                  • “{q.question}”
                </p>
                {q.contextNote && (
                  <p className="text-xs sm:text-sm text-[#524446] font-semibold italic leading-relaxed">
                    {q.contextNote}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="p-4.5 rounded-2xl bg-[#F8F0E5] border-2 border-[#E6D7C3] text-xs sm:text-sm text-[#3D3435] leading-relaxed font-medium">
            <span className="font-extrabold text-[#1A1112]">Pengingat Disclaimer:</span> Pertanyaan di atas tidak dijawab secara klinis dalam aplikasi ini. Setiap fasilitas kesehatan memiliki prosedur penanganan tersendiri. Bicarakan topik di atas secara langsung saat kunjungan kontrol Anda.
          </div>
        </section>

        {/* Bottom Switcher */}
        <div className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#EADDDD] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="ad-title text-lg font-bold text-[#1A1112]">Lanjut ke Panduan Pasca Melahirkan</h3>
            <p className="text-xs sm:text-sm text-[#524446] font-bold">Pelajari kesiapan rumah, administrasi bayi, dan ritme baru setelah si kecil lahir.</p>
          </div>

          <button
            id="menjelang-next-menyambut-btn"
            onClick={() => {
              onNavigate('menyambut');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-full bg-[#9B414C] text-white text-xs sm:text-sm font-extrabold hover:bg-[#82343e] transition-colors flex items-center gap-2 shadow-xs"
          >
            <span>MENYAMBUT SI KECIL</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
