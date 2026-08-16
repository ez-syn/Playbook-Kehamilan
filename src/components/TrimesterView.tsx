import React, { useState } from 'react';
import { PageView, StageData } from '../types';
import { PROMIL_DATA, TRIMESTER_1_DATA, TRIMESTER_2_DATA, TRIMESTER_3_DATA, PACKING_GUIDE_DATA, DIAGRAM_STEPS_DATA } from '../data/journeyData';
import { 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  CheckCircle, 
  MapPin, 
  Car, 
  UserCheck, 
  FolderCheck, 
  ShoppingBag, 
  PhoneCall, 
  ShieldAlert,
  User,
  Baby,
  Users,
  FileCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { BotanicalBranch, BotanicalFlower } from './BotanicalDecoration';
import { BabyFaceIcon, BabyFootprintsIllustration, BabyOnesieIcon } from './BabyIllustrations';

interface TrimesterViewProps {
  stageId: 'promil' | 'trimester1' | 'trimester2' | 'trimester3';
  onNavigate: (page: PageView) => void;
}

export const TrimesterView: React.FC<TrimesterViewProps> = ({ stageId, onNavigate }) => {
  const [openChapterId, setOpenChapterId] = useState<string | null>(null);

  let stageData: StageData = TRIMESTER_1_DATA;
  if (stageId === 'promil') stageData = PROMIL_DATA;
  if (stageId === 'trimester2') stageData = TRIMESTER_2_DATA;
  if (stageId === 'trimester3') stageData = TRIMESTER_3_DATA;

  const toggleChapter = (id: string) => {
    setOpenChapterId(openChapterId === id ? null : id);
  };

  const getDiagramIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'FolderCheck': return <FolderCheck className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getPackingCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5" />;
      case 'Baby': return <BabyFaceIcon className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      default: return <ShoppingBag className="w-5 h-5" />;
    }
  };

  return (
    <div className="py-10 bg-[#FFF9F6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Navigation & Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADDDD] pb-4">
          <button
            id="trimester-back-btn"
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
            Bab Panduan Digital
          </span>
        </div>

        {/* Stage Header Hero */}
        <div 
          className="p-8 sm:p-10 rounded-3xl border-2 relative overflow-hidden shadow-xs"
          style={{ backgroundColor: stageData.bgColor, borderColor: stageData.borderColor }}
        >
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-xs font-black uppercase tracking-wider shadow-2xs" style={{ color: stageData.accentColor }}>
              <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>STAGE {stageData.stageNumber}</span>
            </div>
            
            <h1 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112]">
              {stageData.title}
            </h1>

            <p className="text-sm font-extrabold italic text-[#9B414C]">
              “{stageData.subtitle}”
            </p>

            <p className="text-sm text-[#524446] font-medium leading-relaxed pt-1">
              {stageData.tagline}
            </p>
          </div>

          <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none hidden sm:block">
            <BotanicalBranch className="w-40 h-40" color={stageData.accentColor} />
          </div>
        </div>

        {/* Chapters Content List */}
        <div className="space-y-10">
          
          {stageData.chapters.map((ch) => (
            <section 
              key={ch.id} 
              id={`chapter-section-${ch.id}`}
              className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#EADDDD] shadow-xs space-y-6"
            >
              {/* Chapter Header */}
              <div className="flex items-start justify-between gap-4 border-b border-[#EADDDD] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-black text-white shadow-2xs"
                      style={{ backgroundColor: stageData.accentColor }}
                    >
                      CHAPTER {ch.number}
                    </span>
                    {ch.subtitle && (
                      <span className="text-xs text-[#524446] font-bold hidden sm:inline">
                        • {ch.subtitle}
                      </span>
                    )}
                  </div>
                  <h2 className="ad-title text-2xl font-black text-[#1A1112] pt-1">
                    {ch.title}
                  </h2>
                </div>
              </div>

              {/* Chapter Main Paragraphs */}
              <div className="space-y-3 text-base text-[#1A1112] leading-relaxed font-medium">
                {ch.contentParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Special Component 1: Visual Packing Guide for Trimester 3 Chapter 01 */}
              {stageId === 'trimester3' && ch.number === '01' && (
                <div className="pt-4 space-y-6">
                  <div className="bg-[#F8F0E5] p-4 rounded-2xl border-2 border-[#EADDDD] text-sm text-[#3D3435] font-medium">
                    <span className="font-extrabold text-[#1A1112]">Catatan Editorial:</span> Ini adalah panduan visual kemasan. Tidak ada centang atau input data. Anda dapat menjadikannya referensi saat mengemas tas secara mandiri.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PACKING_GUIDE_DATA.map((packCat, idx) => (
                      <div 
                        key={idx}
                        className="bg-[#FFF9F6] p-5.5 rounded-2xl border-2 border-[#EADDDD] space-y-4 shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-bold"
                            style={{ backgroundColor: packCat.badgeBg, color: packCat.badgeText }}
                          >
                            {getPackingCategoryIcon(packCat.iconName)}
                          </div>
                          <div>
                            <h3 className="ad-title text-lg font-bold text-[#1A1112]">
                              {packCat.categoryTitle}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#524446] font-bold">
                              {packCat.subtitle}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2.5 pt-2">
                          {packCat.items.map((item, iIdx) => (
                            <li key={iIdx} className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EADDDD] text-sm flex items-start gap-2.5 shadow-2xs">
                              <span className="w-2 h-2 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
                              <div className="space-y-0.5">
                                <span className="font-bold text-[#1A1112] block">{item.name}</span>
                                {item.note && (
                                  <span className="text-xs text-[#524446] font-semibold block leading-snug">{item.note}</span>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Component 2: Diagram Flow for Trimester 3 Chapter 03 (Persiapan Hari-H) */}
              {stageId === 'trimester3' && ch.number === '03' && (
                <div className="pt-4 space-y-6">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-[#1A1112] font-black">
                    VISUAL DIAGRAM FLOW PERSIAPAN HARI-H
                  </div>

                  <div className="space-y-3">
                    {DIAGRAM_STEPS_DATA.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="bg-[#FFF9F6] p-5 rounded-2xl border-2 border-[#EADDDD] flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div className="w-11 h-11 rounded-xl bg-[#B9626D] text-white flex items-center justify-center font-black text-base shrink-0 shadow-2xs">
                            {step.stepNumber}
                          </div>

                          <div className="flex-1 space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-extrabold text-[#1A1112] ad-title">{step.title}</span>
                              <span className="text-xs sm:text-sm font-bold text-[#524446]">({step.subtitle})</span>
                            </div>
                            <ul className="text-xs sm:text-sm text-[#241B1C] font-medium space-y-1 list-disc list-inside">
                              {step.details.map((d, dIdx) => (
                                <li key={dIdx}>{d}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="text-[#B9626D] shrink-0 hidden sm:block">
                            {getDiagramIcon(step.iconName)}
                          </div>
                        </div>

                        {idx < DIAGRAM_STEPS_DATA.length - 1 && (
                          <div className="flex justify-center my-1">
                            <div className="w-[2px] h-4 bg-[#EADDDD]" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Points (if present) */}
              {ch.keyPoints && ch.keyPoints.length > 0 && (
                <div className="bg-[#F8F0E5] p-5.5 rounded-2xl border-2 border-[#E6D7C3] space-y-3">
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A1112] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3D5C37] stroke-[2.5]" />
                    <span>Poin Kunci Persiapan Utama</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-[#1A1112]">
                    {ch.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
                        <span className="leading-relaxed font-semibold">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Editorial Sections (if present) */}
              {ch.editorialSections && ch.editorialSections.map((sec, sIdx) => (
                <div key={sIdx} className="bg-[#FFF9F6] p-5.5 rounded-2xl border-2 border-[#EADDDD] space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="ad-title text-lg sm:text-xl font-bold text-[#1A1112]">
                      {sec.title}
                    </h3>
                    {sec.badgeColor && (
                      <span className="text-xs uppercase font-extrabold px-3 py-1 rounded-full text-[#1A1112] shadow-2xs" style={{ backgroundColor: sec.badgeColor }}>
                        Panduan
                      </span>
                    )}
                  </div>

                  {sec.description && (
                    <p className="text-xs sm:text-sm font-bold text-[#524446] italic">{sec.description}</p>
                  )}

                  <ul className="space-y-2 pt-1">
                    {sec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#EADDDD] text-xs sm:text-sm text-[#1A1112] flex items-start gap-2.5 shadow-2xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Conversation Cards */}
              {ch.conversationQuestions && ch.conversationQuestions.length > 0 && (
                <div className="pt-2 space-y-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-[#9B414C]">
                    <MessageSquare className="w-4 h-4 stroke-[2.5]" />
                    <span>
                      {ch.conversationTitle || 
                        (ch.title.toLowerCase().includes('pasangan') || ch.subtitle?.toLowerCase().includes('pasangan') || stageId === 'promil'
                          ? 'IDE TOPIK DISKUSI BERSAMA PASANGAN (BUKAN FORM)'
                          : 'IDE TOPIK DISKUSI DENGAN DOKTER/BIDAN (BUKAN FORM)')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ch.conversationQuestions.map((cq, qIdx) => (
                      <div 
                        key={qIdx}
                        className="bg-[#FFF9F6] p-5 rounded-2xl border-2 border-[#EADDDD] space-y-2 hover:border-[#B9626D] transition-colors shadow-2xs"
                      >
                        <p className="text-sm sm:text-base font-extrabold text-[#1A1112] leading-snug">
                          • “{cq.question}”
                        </p>
                        {cq.contextNote && (
                          <p className="text-xs sm:text-sm text-[#524446] font-semibold italic leading-relaxed pt-1">
                            {cq.contextNote}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </section>
          ))}

        </div>

        {/* Bottom Stage Switcher Footer */}
        <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-3xl border-2 border-[#EADDDD] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="space-y-1">
            <h3 className="ad-title text-lg sm:text-xl font-black text-[#1A1112]">Lanjutkan ke Panduan Berikutnya</h3>
            <p className="text-xs sm:text-sm text-[#776B6D] font-medium">Setiap tahap dapat dibaca secara mandiri tanpa batasan urutan.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 w-full sm:w-auto">
            {stageId === 'promil' && (
              <>
                <button
                  id="promil-back-journey-btn"
                  onClick={() => {
                    onNavigate('journey');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 rounded-full bg-[#FFF9F6] text-[#776B6D] hover:text-[#1A1112] border-2 border-[#EADDDD] text-xs font-bold transition-all hover:bg-[#F8E3E5]/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Daftar Tahap</span>
                </button>
                <button
                  id="next-stage-t1-btn"
                  onClick={() => {
                    onNavigate('trimester1');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#B9626D] hover:bg-[#9B414C] text-white text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Buka Trimester 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}

            {stageId === 'trimester1' && (
              <>
                <button
                  id="prev-stage-promil-btn"
                  onClick={() => {
                    onNavigate('promil');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 rounded-full bg-[#FFF9F6] text-[#776B6D] hover:text-[#1A1112] border-2 border-[#EADDDD] text-xs font-bold transition-all hover:bg-[#F8E3E5]/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Persiapan Promil</span>
                </button>
                <button
                  id="next-stage-t2-btn"
                  onClick={() => {
                    onNavigate('trimester2');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#5A7555] hover:bg-[#485e44] text-white text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Buka Trimester 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}

            {stageId === 'trimester2' && (
              <>
                <button
                  id="prev-stage-t1-btn"
                  onClick={() => {
                    onNavigate('trimester1');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 rounded-full bg-[#FFF9F6] text-[#776B6D] hover:text-[#1A1112] border-2 border-[#EADDDD] text-xs font-bold transition-all hover:bg-[#F8E3E5]/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Trimester 1</span>
                </button>
                <button
                  id="next-stage-t3-btn"
                  onClick={() => {
                    onNavigate('trimester3');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#A85D3B] hover:bg-[#8d4c2f] text-white text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Buka Trimester 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}

            {stageId === 'trimester3' && (
              <>
                <button
                  id="prev-stage-t2-btn"
                  onClick={() => {
                    onNavigate('trimester2');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 rounded-full bg-[#FFF9F6] text-[#776B6D] hover:text-[#1A1112] border-2 border-[#EADDDD] text-xs font-bold transition-all hover:bg-[#F8E3E5]/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Trimester 2</span>
                </button>
                <button
                  id="next-stage-menjelang-btn"
                  onClick={() => {
                    onNavigate('menjelang');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#8C633D] hover:bg-[#725031] text-white text-xs sm:text-sm font-extrabold shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Buka Menjelang Persalinan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
