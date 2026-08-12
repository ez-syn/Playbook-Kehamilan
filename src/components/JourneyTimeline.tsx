import React from 'react';
import { PageView } from '../types';
import { STAGES_OVERVIEW } from '../data/journeyData';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface JourneyTimelineProps {
  onNavigate: (page: PageView) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FFF9F6] border-b border-[#EADDDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7EFE4] text-[#3D5C37] text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>ALUR WAKTU PERSIAPAN LENGKAP (00 - 05)</span>
          </div>
          <h2 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112] tracking-tight">
            6 Tahapan Perjalanan Orang Tua
          </h2>
          <p className="text-sm sm:text-base text-[#524446] font-medium leading-relaxed">
            Urutan langkah terstruktur dari perencanaan masa pra-konsepsi (promil) hingga menyambut kelahiran dan perawatan bayi baru lahir.
          </p>
        </div>

        {/* 6-Card Spacious Responsive Grid (3 columns x 2 rows on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STAGES_OVERVIEW.map((stage) => (
            <div
              key={stage.id}
              id={`stage-card-${stage.id}`}
              onClick={() => {
                onNavigate(stage.id as PageView);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#EADDDD] hover:border-[#B9626D] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between transform hover:-translate-y-1 h-full relative"
            >
              <div className="space-y-4">
                {/* Stage Number & Period Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0E4E4] pb-3">
                  <div className="flex items-center gap-2 shrink-0">
                    <span 
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-black text-white shadow-2xs shrink-0"
                      style={{ backgroundColor: stage.accentColor }}
                    >
                      {stage.stageNumber}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#776B6D]">
                      Tahap {stage.stageNumber}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs font-black text-[#1A1112] bg-[#F8F0E5] px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#EADDDD] max-w-full">
                    <Clock className="w-3.5 h-3.5 text-[#B9626D] shrink-0" />
                    <span className="break-words leading-tight">{stage.period}</span>
                  </span>
                </div>

                {/* Stage Title & Subtitle */}
                <div className="space-y-1 pt-1">
                  <h3 className="ad-title text-xl sm:text-2xl font-black text-[#1A1112] group-hover:text-[#B9626D] transition-colors leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-bold text-[#B9626D]">
                    “{stage.subtitle}”
                  </p>
                </div>

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-[#524446] font-medium leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Bottom Link CTA */}
              <div className="mt-6 pt-4 border-t border-[#EADDDD] flex items-center justify-between text-xs sm:text-sm font-black text-[#1A1112] group-hover:text-[#B9626D]">
                <span>Buka Panduan Tahap Ini</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
