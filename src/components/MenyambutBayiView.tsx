import React, { useState } from 'react';
import { PageView } from '../types';
import { MENYAMBUT_BAYI_DATA } from '../data/journeyData';
import { 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2,
  Heart,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Users,
  Sun,
  Clock,
  Moon
} from 'lucide-react';
import { BabyFaceIcon, BabyFootprintsIllustration, BabyOnesieIcon } from './BabyIllustrations';

interface MenyambutBayiViewProps {
  onNavigate: (page: PageView) => void;
}

export const MenyambutBayiView: React.FC<MenyambutBayiViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 bg-[#FFF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADDDD] pb-4">
          <button
            id="menyambut-back-btn"
            onClick={() => {
              onNavigate('journey');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#524446] hover:text-[#1A1112] transition-colors bg-[#FFFFFF] px-3.5 py-2 rounded-full border border-[#EADDDD] shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Perjalanan</span>
          </button>

          <span className="text-xs text-[#9B414C] font-black uppercase tracking-wider bg-[#F4D5D8] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-2xs">
            <BabyFaceIcon className="w-4 h-4" />
            <span>Masa Pasca Melahirkan</span>
          </span>
        </div>

        {/* Hero Banner */}
        <div className="bg-[#F4D5D8]/80 p-8 sm:p-10 rounded-3xl border-2 border-[#E3B9BE] relative overflow-hidden shadow-xs space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#9B414C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <BabyFootprintsIllustration className="w-4 h-4" />
            <span>PASCA KELAHIRAN SI KECIL</span>
          </div>

          <h1 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112] flex items-center gap-3 flex-wrap">
            <span>{MENYAMBUT_BAYI_DATA.title}</span>
            <BabyOnesieIcon className="w-8 h-8 text-[#9B414C]" />
          </h1>

          <p className="text-sm font-bold text-[#9B414C]">
            “{MENYAMBUT_BAYI_DATA.subtitle}”
          </p>

          <p className="text-sm text-[#524446] font-medium max-w-2xl leading-relaxed">
            {MENYAMBUT_BAYI_DATA.tagline}
          </p>

          <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none hidden sm:block">
            <BabyFaceIcon className="w-32 h-32 text-[#9B414C]" />
          </div>
        </div>

        {/* Chapters Grid / List */}
        <div className="space-y-8">
          {MENYAMBUT_BAYI_DATA.chapters.map((ch) => (
            <section 
              key={ch.id}
              id={`menyambut-ch-${ch.id}`}
              className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#EADDDD] shadow-xs space-y-6"
            >
              {/* Header */}
              <div className="border-b border-[#EADDDD] pb-4 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#F4D5D8] text-[#9B414C] px-3 py-1 rounded-full inline-block mb-1 shadow-2xs">
                    BAB {ch.number}
                  </span>
                  <h2 className="ad-title text-2xl font-black text-[#1A1112]">
                    {ch.title}
                  </h2>
                  {ch.subtitle && (
                    <p className="text-xs text-[#524446] font-bold italic">
                      {ch.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-3 text-base text-[#1A1112] leading-relaxed font-medium">
                {ch.contentParagraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Editorial Sections */}
              {ch.editorialSections && ch.editorialSections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-[#FFF9F6] p-5.5 rounded-2xl border-2 border-[#EADDDD] space-y-3">
                  <h3 className="ad-title text-base sm:text-lg font-bold text-[#1A1112]">
                    {sec.title}
                  </h3>
                  {sec.description && (
                    <p className="text-xs sm:text-sm text-[#524446] font-bold italic">{sec.description}</p>
                  )}
                  <ul className="space-y-2">
                    {sec.items.map((item, iIdx) => (
                      <li key={iIdx} className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EADDDD] text-xs sm:text-sm text-[#1A1112] flex items-start gap-2.5 shadow-2xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#9B414C] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Key Points */}
              {ch.keyPoints && (
                <div className="bg-[#F8F0E5] p-5.5 rounded-2xl border-2 border-[#E6D7C3] space-y-3">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A1112] block">
                    Poin Kunci Panduan:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#1A1112]">
                    {ch.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2.5 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#3D5C37] mt-0.5 shrink-0 stroke-[2.5]" />
                        <span className="leading-relaxed">{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </section>
          ))}
        </div>

        {/* Back to Home CTA */}
        <div className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#EADDDD] text-center space-y-3">
          <h3 className="ad-title text-xl font-black text-[#1A1112]">Selesai Membaca Panduan Menyambut Bayi</h3>
          <p className="text-xs sm:text-sm text-[#524446] font-bold max-w-lg mx-auto">
            Anda dapat kapan saja menjelajahi topik spesifik lainnya atau membaca Kamus Kehamilan A-Z untuk menambah pemahaman istilah.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              id="menyambut-to-dictionary-btn"
              onClick={() => {
                onNavigate('dictionary');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#B9626D] text-white text-xs sm:text-sm font-extrabold hover:bg-[#A34E59] transition-colors shadow-xs"
            >
              Jelajahi Kamus Kehamilan
            </button>

            <button
              id="menyambut-to-home-btn"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-[#FFF9F6] text-[#1A1112] border-2 border-[#EADDDD] text-xs sm:text-sm font-extrabold hover:bg-[#F8E3E5]/50 transition-colors"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

