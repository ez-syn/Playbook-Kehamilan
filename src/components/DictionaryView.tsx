import React, { useState } from 'react';
import { PageView } from '../types';
import { DICTIONARY_TERMS } from '../data/dictionaryData';
import { ChevronDown, ChevronUp, HelpCircle, BookOpen, ArrowLeft } from 'lucide-react';
import { BotanicalBranch } from './BotanicalDecoration';
import { BabyFaceIcon } from './BabyIllustrations';

interface DictionaryViewProps {
  onNavigate: (page: PageView) => void;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({ onNavigate }) => {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(DICTIONARY_TERMS[0]?.term || null);

  const filteredTerms = DICTIONARY_TERMS.filter(
    item => item.letter.toUpperCase() === selectedLetter
  );

  const toggleTerm = (termName: string) => {
    setExpandedTerm(expandedTerm === termName ? null : termName);
  };

  return (
    <div className="py-10 bg-[#FFF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADDDD] pb-4">
          <button
            id="dict-back-home-btn"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#776B6D] hover:text-[#3D3435] transition-colors bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#EADDDD]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>

          <span className="text-xs text-[#776B6D] font-medium uppercase tracking-wider bg-[#F8E3E5] px-3 py-1 rounded-full text-[#B9626D]">
            Glosarium A–Z
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#F8E3E5]/80 p-8 sm:p-10 rounded-3xl border-2 border-[#EADDDD] relative overflow-hidden shadow-xs space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#9B414C] text-xs font-black uppercase tracking-wider shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>PANDUAN ISTILAH KEHAMILAN</span>
          </div>

          <h1 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112]">
            Kamus Kehamilan A–Z
          </h1>

          <p className="text-sm text-[#524446] font-medium max-w-2xl leading-relaxed">
            Mengenal arti istilah umum yang sering Anda dengar selama masa kehamilan dan persalinan. Pilih huruf alfabet di bawah untuk menjelajahi istilah.
          </p>

          <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none hidden sm:block">
            <BotanicalBranch className="w-36 h-36" color="#B9626D" />
          </div>
        </div>

        {/* Alphabet Bar Navigation (A - Z) */}
        <div className="bg-[#FFFFFF] p-3.5 rounded-2xl border-2 border-[#EADDDD] shadow-xs space-y-2">
          <div className="text-xs font-black uppercase tracking-wider text-[#1A1112] px-2">
            PILIH HURUF ALFABET:
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
            {ALPHABET.map((letter) => {
              const hasTerms = DICTIONARY_TERMS.some(t => t.letter === letter);
              const isSelected = selectedLetter === letter;

              return (
                <button
                  key={letter}
                  id={`alphabet-btn-${letter}`}
                  disabled={!hasTerms}
                  onClick={() => {
                    setSelectedLetter(letter);
                    const firstMatch = DICTIONARY_TERMS.find(t => t.letter === letter);
                    setExpandedTerm(firstMatch ? firstMatch.term : null);
                  }}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center cursor-pointer ${
                    isSelected
                      ? 'bg-[#B9626D] text-white shadow-xs scale-105'
                      : hasTerms
                      ? 'bg-[#FFF9F6] text-[#1A1112] border-2 border-[#EADDDD] hover:bg-[#F8E3E5]/60 hover:text-[#B9626D]'
                      : 'bg-[#F8F0E5]/40 text-[#1A1112]/30 border border-transparent cursor-not-allowed opacity-50'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms Accordion List for Selected Letter */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#EADDDD] pb-2">
            <h2 className="ad-title text-2xl font-black text-[#1A1112]">
              Istilah Berawalan Huruf “{selectedLetter}”
            </h2>
            <span className="text-xs sm:text-sm text-[#1A1112] bg-[#F8F0E5] px-3 py-1 rounded-full font-extrabold shadow-2xs">
              {filteredTerms.length} Istilah
            </span>
          </div>

          {filteredTerms.length > 0 ? (
            <div className="space-y-3">
              {filteredTerms.map((item) => {
                const isExpanded = expandedTerm === item.term;
                return (
                  <div
                    key={item.term}
                    id={`dict-term-${item.term.replace(/\s+/g, '-').toLowerCase()}`}
                    className={`bg-[#FFFFFF] rounded-2xl border-2 transition-all overflow-hidden ${
                      isExpanded 
                        ? 'border-[#B9626D] shadow-xs' 
                        : 'border-[#EADDDD] hover:border-[#B9626D]/50'
                    }`}
                  >
                    {/* Header Toggle */}
                    <button
                      onClick={() => toggleTerm(item.term)}
                      className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#B9626D] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
                          {item.letter}
                        </span>
                        <h3 className="ad-title text-lg font-bold text-[#1A1112]">
                          {item.term}
                        </h3>
                      </div>

                      <div className="text-[#1A1112]">
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-[#B9626D] stroke-[2.5]" /> : <ChevronDown className="w-5 h-5 stroke-[2.5]" />}
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-[#EADDDD] bg-[#FFF9F6] space-y-4 animate-fadeIn">
                        
                        {/* What it means */}
                        <div className="space-y-1">
                          <span className="text-xs font-black text-[#9B414C] uppercase tracking-wider block">
                            Apa artinya?
                          </span>
                          <p className="text-sm sm:text-base text-[#1A1112] font-medium leading-relaxed">
                            {item.meaning}
                          </p>
                        </div>

                        {/* Why you might hear it */}
                        <div className="space-y-1.5 bg-[#FFFFFF] p-4 rounded-xl border-2 border-[#EADDDD] shadow-2xs">
                          <span className="text-xs font-extrabold text-[#524446] uppercase tracking-wider block">
                            Kenapa istilah ini mungkin kamu dengar?
                          </span>
                          <p className="text-xs sm:text-sm text-[#241B1C] font-semibold italic leading-relaxed">
                            {item.whyHeard}
                          </p>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#FFFFFF] p-8 rounded-2xl border-2 border-[#EADDDD] text-center space-y-2">
              <HelpCircle className="w-8 h-8 text-[#B9626D] mx-auto opacity-60" />
              <p className="text-base font-extrabold text-[#1A1112]">Tidak Ada Istilah untuk Huruf “{selectedLetter}”</p>
              <p className="text-xs sm:text-sm text-[#524446] font-bold">Pilih huruf alfabet lainnya pada bilah di atas untuk membaca glosarium.</p>
            </div>
          )}
        </div>

        {/* Disclaimer Note Footer */}
        <div className="p-4.5 rounded-2xl bg-[#F8F0E5] border-2 border-[#E6D7C3] text-xs sm:text-sm text-[#3D3435] leading-relaxed font-medium">
          <span className="font-extrabold text-[#1A1112]">Edukasi Umum:</span> Kamus ini bertujuan memberikan pemahaman bahasa awam mengenai istilah umum kehamilan. Istilah medis personal dan keputusan kondisi klinis wajib dikonsultasikan dengan dokter spesialis atau bidan Anda.
        </div>

      </div>
    </div>
  );
};
