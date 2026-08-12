import React, { useState } from 'react';
import { CategoryId, PageView } from '../types';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { TOPIC_ARTICLES } from '../data/topicArticles';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Sparkles,
  ShoppingBag, 
  Baby, 
  Home, 
  Wallet, 
  FileText, 
  HeartHandshake, 
  Users, 
  Briefcase,
  Heart,
  ShieldCheck,
  HelpCircle,
  CheckCircle2,
  Moon,
  Sun,
  AlertCircle
} from 'lucide-react';
import { BabyFaceIcon, BabyFootprintsIllustration, BabyOnesieIcon } from './BabyIllustrations';

interface TopicExploreViewProps {
  initialCategoryId?: CategoryId;
  onNavigate: (page: PageView) => void;
}

export const TopicExploreView: React.FC<TopicExploreViewProps> = ({ 
  initialCategoryId = 'tas-persalinan', 
  onNavigate 
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId>(initialCategoryId);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const [activeBbTab, setActiveBbTab] = useState<'edukasi' | 'pencegahan' | 'pasangan' | 'selfcheck'>('edukasi');
  const [checkedBbItems, setCheckedBbItems] = useState<Record<string, boolean>>({});

  const toggleBbCheck = (id: string) => {
    setCheckedBbItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selfBbCheckList = [
    { id: 'sc1', text: 'Saya mendapatkan setidaknya 4 jam tidur berturut-turut dalam semalam (bisa dibantu shift pasangan).' },
    { id: 'sc2', text: 'Saya diizinkan menangis atau merasa lelah tanpa dihakimi oleh orang terdekat.' },
    { id: 'sc3', text: 'Suami/pasangan berinisiatif mengambil alih tugas domestik tanpa perlu diminta terus-menerus.' },
    { id: 'sc4', text: 'Durasi dan jumlah tamu yang berkunjung dibatasi agar tidak mengganggu istirahat.' },
    { id: 'sc5', text: 'Saya makan makanan hangat dan cukup minum air putih setiap hari.' },
    { id: 'sc6', text: 'Saya memiliki waktu me-time 15-30 menit untuk beristirahat tenang tanpa menggendong bayi.' }
  ];

  const currentCategory = CATEGORIES_DATA.find(c => c.id === selectedCategoryId) || CATEGORIES_DATA[0];
  const articlesForCategory = TOPIC_ARTICLES.filter(a => a.categoryId === selectedCategoryId);
  const selectedArticle = TOPIC_ARTICLES.find(a => a.id === selectedArticleId);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Baby': return <Baby className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Wallet': return <Wallet className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="py-10 bg-[#FFF9F6] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADDDD] pb-4">
          <button
            id="topic-back-home-btn"
            onClick={() => {
              if (selectedArticleId) {
                setSelectedArticleId(null);
              } else {
                onNavigate('home');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#776B6D] hover:text-[#3D3435] transition-colors bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#EADDDD]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{selectedArticleId ? 'Kembali ke Daftar Topik' : 'Kembali ke Beranda'}</span>
          </button>

          <span className="text-xs text-[#776B6D] font-medium uppercase tracking-wider bg-[#F8F0E5] px-3 py-1 rounded-full">
            Kumpulan Topik Pilihan
          </span>
        </div>

        {/* Category Grid Selection (Replaced Horizontal Slider with Elegant Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES_DATA.map((cat) => {
            const isSelected = cat.id === selectedCategoryId;
            return (
              <button
                key={cat.id}
                id={`cat-filter-btn-${cat.id}`}
                onClick={() => {
                  setSelectedCategoryId(cat.id);
                  setSelectedArticleId(null);
                }}
                className={`p-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-3.5 cursor-pointer text-left border-2 ${
                  isSelected
                    ? 'bg-[#B9626D] text-white border-[#B9626D] shadow-sm transform scale-[1.01]'
                    : 'bg-[#FFFFFF] text-[#3D3435] border-[#EADDDD] hover:border-[#B9626D]/50 hover:bg-[#F8E3E5]/20'
                }`}
              >
                <div 
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs font-bold transition-transform ${
                    isSelected ? 'bg-white/25 text-white' : ''
                  }`}
                  style={!isSelected ? { backgroundColor: cat.colorBg, color: cat.colorAccent } : {}}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-extrabold truncate text-xs sm:text-sm leading-tight text-current">
                    {cat.title}
                  </div>
                  <div className={`text-[10px] sm:text-xs truncate leading-normal mt-0.5 ${
                    isSelected ? 'text-white/80' : 'text-[#776B6D] font-semibold'
                  }`}>
                    {cat.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Article Reader Mode (if an article is selected) */}
        {selectedArticle ? (
          <article className="bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#EADDDD] shadow-xs space-y-8 animate-fadeIn">
            
            <div className="space-y-3 border-b border-[#EADDDD] pb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#9B414C] uppercase tracking-wider">
                <span>{currentCategory.title}</span>
                <span>•</span>
                <span>{selectedArticle.stage}</span>
              </div>

              <h1 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112]">
                {selectedArticle.title}
              </h1>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#524446] font-bold">
                <span className="flex items-center gap-1 bg-[#F8F0E5] px-3 py-1 rounded-full font-bold shadow-2xs">
                  <Clock className="w-3.5 h-3.5 text-[#B9626D]" />
                  {selectedArticle.readTime}
                </span>
                <span>Edukasi Persiapan Kehamilan</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-[#F8F0E5] p-5.5 rounded-2xl border-2 border-[#E6D7C3] space-y-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A1112] block">
                Poin Ringkasan Utama:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#1A1112] font-semibold">
                {selectedArticle.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-6 pt-2">
              {selectedArticle.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h2 className="ad-title text-2xl font-bold text-[#1A1112]">
                    {sec.heading}
                  </h2>
                  <p className="text-base text-[#1A1112] leading-relaxed font-medium">
                    {sec.body}
                  </p>
                  {sec.bulletPoints && (
                    <ul className="space-y-2 pt-1">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="bg-[#FFF9F6] p-3.5 rounded-xl border-2 border-[#EADDDD] text-xs sm:text-sm text-[#1A1112] font-medium flex items-start gap-2.5 shadow-2xs">
                          <span className="w-2 h-2 rounded-full bg-[#3D5C37] mt-1.5 shrink-0" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#EADDDD]">
              <button
                id="article-close-reader-btn"
                onClick={() => setSelectedArticleId(null)}
                className="px-6 py-2.5 rounded-full bg-[#F8E3E5] text-[#B9626D] text-xs font-bold hover:bg-[#F4D5D8] transition-colors"
              >
                Kembali ke Daftar Panduan Topik {currentCategory.title}
              </button>
            </div>

          </article>
        ) : (
          /* Category Overview & List of Articles */
          <div className="space-y-8">
            
            {/* Category Banner Header */}
            <div 
              className="p-8 rounded-3xl border relative overflow-hidden shadow-xs space-y-3"
              style={{ backgroundColor: currentCategory.colorBg, borderColor: currentCategory.colorBorder }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                  style={{ backgroundColor: '#FFFFFF', color: currentCategory.colorAccent }}
                >
                  {getCategoryIcon(currentCategory.iconName)}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#3D3435]">
                  TOPIK KHUSUS
                </span>
              </div>

              <h1 className="ad-title text-3xl font-black text-[#1A1112]">
                {currentCategory.title}
              </h1>

              <p className="text-sm font-semibold italic text-[#776B6D]">
                “{currentCategory.subtitle}”
              </p>

              <p className="text-sm text-[#776B6D] max-w-2xl leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* SPECIAL HIGHLIGHT MODULE: EDUKASI & PENCEGAHAN BABY BLUES */}
            {selectedCategoryId === 'baby-blues' && (
              <section className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#F8D2D6] shadow-md relative overflow-hidden space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADDDD] pb-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F2] text-[#9B414C] text-[11px] font-black uppercase tracking-wider">
                      <Heart className="w-3.5 h-3.5 fill-[#9B414C] text-[#9B414C]" />
                      <span>MODUL KHUSUS KESEHATAN MENTAL NIFAS</span>
                    </div>
                    <h2 className="ad-title text-2xl sm:text-3xl font-black text-[#1A1112]">
                      Edukasi & Mencegah Baby Blues
                    </h2>
                    <p className="text-xs sm:text-sm text-[#524446] font-medium">
                      Panduan komprehensif bagi ibu dan pasangan untuk menjaga stabilitas emosional di 14 hari pertama pasca persalinan.
                    </p>
                  </div>

                  {/* Quick Badge */}
                  <div className="shrink-0 bg-[#FFF9F6] p-3 rounded-2xl border border-[#EADDDD] flex items-center gap-3 text-xs font-bold text-[#9B414C]">
                    <ShieldCheck className="w-8 h-8 text-[#9B414C] shrink-0" />
                    <div>
                      <span className="block font-black text-[#1A1112]">Dialami ~80% Ibu Baru</span>
                      <span className="text-[11px] text-[#524446]">Normal & Bisa Dicegah Bersama</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Navigation Tabs for Baby Blues Module */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#EADDDD]">
                  <button
                    onClick={() => setActiveBbTab('edukasi')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 shrink-0 ${
                      activeBbTab === 'edukasi'
                        ? 'bg-[#9B414C] text-white shadow-xs'
                        : 'bg-[#FFF9F6] text-[#524446] hover:bg-[#FFF0F2] border border-[#EADDDD]'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>1. Apa Itu Baby Blues?</span>
                  </button>

                  <button
                    onClick={() => setActiveBbTab('pencegahan')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 shrink-0 ${
                      activeBbTab === 'pencegahan'
                        ? 'bg-[#9B414C] text-white shadow-xs'
                        : 'bg-[#FFF9F6] text-[#524446] hover:bg-[#FFF0F2] border border-[#EADDDD]'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>2. 5 Langkah Mencegah</span>
                  </button>

                  <button
                    onClick={() => setActiveBbTab('pasangan')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 shrink-0 ${
                      activeBbTab === 'pasangan'
                        ? 'bg-[#9B414C] text-white shadow-xs'
                        : 'bg-[#FFF9F6] text-[#524446] hover:bg-[#FFF0F2] border border-[#EADDDD]'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>3. Peran Siaga Pasangan</span>
                  </button>

                  <button
                    onClick={() => setActiveBbTab('selfcheck')}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 shrink-0 ${
                      activeBbTab === 'selfcheck'
                        ? 'bg-[#9B414C] text-white shadow-xs'
                        : 'bg-[#FFF9F6] text-[#524446] hover:bg-[#FFF0F2] border border-[#EADDDD]'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>4. Evaluasi Mandiri (Self-Check)</span>
                  </button>
                </div>

                {/* Tab Content 1: Edukasi */}
                {activeBbTab === 'edukasi' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="bg-[#FFF9F6] p-5 rounded-2xl border-2 border-[#EADDDD] space-y-3">
                        <span className="text-xs font-black uppercase text-[#9B414C] bg-[#FFF0F2] px-2.5 py-1 rounded-md inline-block">
                          Penyebab Ilmiah Utama
                        </span>
                        <h3 className="ad-title text-lg font-black text-[#1A1112]">Anjlok Hormon & Krisis Tidur</h3>
                        <p className="text-xs sm:text-sm text-[#524446] font-medium leading-relaxed">
                          Sesaat setelah plasenta lahir, kadar hormon Estrogen dan Progesteron dalam tubuh ibu turun drastis ke level terendah. Dikombinasikan dengan krisis tidur (sleep deprivation) karena menyusui harian, hal ini memicu ketidakseimbangan neurotransmiter di otak.
                        </p>
                      </div>

                      <div className="bg-[#FFF9F6] p-5 rounded-2xl border-2 border-[#EADDDD] space-y-3">
                        <span className="text-xs font-black uppercase text-[#3D5C37] bg-[#E7EFE4] px-2.5 py-1 rounded-md inline-block">
                          Gejala Khas (Hari 2 – 14)
                        </span>
                        <h3 className="ad-title text-lg font-black text-[#1A1112]">Mood Swing & Mudah Menangis</h3>
                        <ul className="text-xs sm:text-sm text-[#524446] font-medium space-y-1.5 list-disc pl-4">
                          <li>Gampang menangis tanpa alasan yang jelas atau hanya karena masalah sepele.</li>
                          <li>Merasa cemas berlebihan mengenai kemampuan mengasuh bayi.</li>
                          <li>Mudah tersinggung, kewalahan (overwhelmed), atau lelah emosional.</li>
                          <li>Durasi normal: Muncul hari ke-2 s/d ke-3 dan mereda sendiri dalam 10–14 hari.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Comparison Box: Baby Blues vs PPD */}
                    <div className="bg-[#F8F0E5] p-5.5 rounded-2xl border-2 border-[#E6D7C3] space-y-3">
                      <div className="flex items-center gap-2 text-sm font-black text-[#1A1112]">
                        <AlertCircle className="w-5 h-5 text-[#A85D3B]" />
                        <span>Kapan Harus Membedakan dengan Depresi Pasca Melahirkan (PPD)?</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="bg-white p-4 rounded-xl border border-[#EADDDD] space-y-1.5">
                          <span className="font-extrabold text-[#9B414C] block">Baby Blues (Normal & Sementara)</span>
                          <p className="text-[#524446] font-medium">Berlangsung kurang dari 2 minggu. Ibu masih bisa tersenyum saat ada momen bahagia dan bisa merawat bayi meski merasa lelah.</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-[#EADDDD] space-y-1.5">
                          <span className="font-extrabold text-[#A85D3B] block">PPD (Perlu Konsultasi Dokter)</span>
                          <p className="text-[#524446] font-medium">Berlangsung lebih dari 2-3 minggu, ada rasa tidak terkoneksi dengan bayi, putus asa berat, atau krisis kecemasan hebat.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: 5 Langkah Pencegahan */}
                {activeBbTab === 'pencegahan' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="ad-title text-lg font-black text-[#1A1112]">
                      5 Pilar Taktis Mencegah Baby Blues Pasca Melahirkan
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-[#FFF9F6] p-4.5 rounded-2xl border border-[#EADDDD] space-y-2">
                        <div className="flex items-center gap-2">
                          <Moon className="w-5 h-5 text-[#9B414C]" />
                          <span className="font-extrabold text-sm text-[#1A1112]">1. Shift Tidur Minimal 4 Jam Nyenyak</span>
                        </div>
                        <p className="text-xs text-[#524446] font-medium leading-relaxed">
                          Kunci regenerasi otak adalah 1 siklus tidur utuh (minimal 4 jam tanpa terputus). Sepakati shift malam dengan pasangan untuk mengganti popok/menyendawakan bayi.
                        </p>
                      </div>

                      <div className="bg-[#FFF9F6] p-4.5 rounded-2xl border border-[#EADDDD] space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#5A7555]" />
                          <span className="font-extrabold text-sm text-[#1A1112]">2. Batasi Kunjungan Tamu di 14 Hari Pertama</span>
                        </div>
                        <p className="text-xs text-[#524446] font-medium leading-relaxed">
                          Tamu yang terlalu banyak menguras energi ibu. Buat jam khusus menerima tamu (misal 30 menit) dan utamakan istirahat ibu serta bonding bayi.
                        </p>
                      </div>

                      <div className="bg-[#FFF9F6] p-4.5 rounded-2xl border border-[#EADDDD] space-y-2">
                        <div className="flex items-center gap-2">
                          <Sun className="w-5 h-5 text-[#A85D3B]" />
                          <span className="font-extrabold text-sm text-[#1A1112]">3. Asupan Cairan & Nutrisi Warm-Food</span>
                        </div>
                        <p className="text-xs text-[#524446] font-medium leading-relaxed">
                          Dehidrasi memperburuk kecemasan. Sediakan stasiun air minum hangat di samping tempat tidur dan makanan bergizi tinggi protein.
                        </p>
                      </div>

                      <div className="bg-[#FFF9F6] p-4.5 rounded-2xl border border-[#EADDDD] space-y-2">
                        <div className="flex items-center gap-2">
                          <Heart className="w-5 h-5 text-[#9B414C]" />
                          <span className="font-extrabold text-sm text-[#1A1112]">4. Ruang Validasi Emosi & Bebas Menangis</span>
                        </div>
                        <p className="text-xs text-[#524446] font-medium leading-relaxed">
                          Menangis adalah mekanisme tubuh melepaskan kelebihan hormon stres. Jangan menahan atau merasa bersalah saat ingin menangis.
                        </p>
                      </div>

                      <div className="col-span-1 sm:col-span-2 bg-[#E7EFE4] p-4.5 rounded-2xl border border-[#C9DBC5] space-y-2">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-[#3D5C37]" />
                          <span className="font-extrabold text-sm text-[#1A1112]">5. Me-Time Harian Sederhana (15 - 30 Menit)</span>
                        </div>
                        <p className="text-xs text-[#524446] font-medium leading-relaxed">
                          Mandi dengan tenang, keramas, minum teh hangat, atau mendengarkan musik favorit saat bayi dijaga pasangan akan mengembalikan semangat diri.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 3: Peran Pasangan */}
                {activeBbTab === 'pasangan' && (
                  <div className="space-y-4 animate-fadeIn">
                    <h3 className="ad-title text-lg font-black text-[#1A1112]">
                      Panduan Siaga Pasangan / Suami Dalam Mencegah Baby Blues
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-[#FFF9F6] p-4 rounded-xl border border-[#EADDDD] flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#3D5C37] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-xs sm:text-sm text-[#1A1112] block">Inisiatif Otomatis Tanpa Menunggu Diminta</span>
                          <p className="text-xs text-[#524446] font-medium mt-0.5">Ambil alih tugas mencuci pakaian bayi, menyendawakan bayi setelah disusui, dan merapikan tempat tidur tanpa perlu ditanya "mau dibantu apa?".</p>
                        </div>
                      </div>

                      <div className="bg-[#FFF9F6] p-4 rounded-xl border border-[#EADDDD] flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#3D5C37] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-xs sm:text-sm text-[#1A1112] block">Menjadi "Bumper" / Penjaga Gerbang Tamu</span>
                          <p className="text-xs text-[#524446] font-medium mt-0.5">Komunikasikan dengan santun kepada keluarga besar jika ibu sedang tidur atau butuh istirahat, tanpa membuat ibu merasa bersalah.</p>
                        </div>
                      </div>

                      <div className="bg-[#FFF9F6] p-4 rounded-xl border border-[#EADDDD] flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#3D5C37] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-xs sm:text-sm text-[#1A1112] block">Validasi & Hindari Kalimat Penghakiman</span>
                          <p className="text-xs text-[#524446] font-medium mt-0.5">Hindari ucapan seperti "Kok menangis terus, kan bayinya sehat?". Ganti dengan: "Aku ada di sini, kamu sudah melakukan hal yang luar biasa, ayo istirahat sebentar."</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 4: Self-Check */}
                {activeBbTab === 'selfcheck' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <h3 className="ad-title text-lg font-black text-[#1A1112]">
                        Checklist Evaluasi Kesiapan Emosional Nifas
                      </h3>
                      <p className="text-xs text-[#524446] font-medium">
                        Centang poin yang sudah terpenuhi di lingkungan rumah Anda saat ini:
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {selfBbCheckList.map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => toggleBbCheck(item.id)}
                          className={`p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 ${
                            checkedBbItems[item.id] 
                              ? 'bg-[#E7EFE4] border-[#C9DBC5] text-[#1A1112]' 
                              : 'bg-[#FFF9F6] border-[#EADDDD] text-[#524446] hover:bg-[#FFF0F2]/40'
                          }`}
                        >
                          <input 
                            type="checkbox"
                            checked={!!checkedBbItems[item.id]}
                            onChange={() => {}}
                            className="mt-0.5 w-4 h-4 rounded text-[#9B414C] focus:ring-[#9B414C]"
                          />
                          <span className="text-xs sm:text-sm font-semibold leading-relaxed">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 bg-[#F8F0E5] rounded-xl border border-[#E6D7C3] text-xs font-bold text-[#1A1112] flex items-center justify-between">
                      <span>Skor Terpenuhi: {Object.values(checkedBbItems).filter(Boolean).length} dari {selfBbCheckList.length} Poin</span>
                      <span className="text-[#9B414C] font-black">
                        {Object.values(checkedBbItems).filter(Boolean).length >= 4 ? 'Dukungan Baik!' : 'Tingkatkan Bantuan Pasangan'}
                      </span>
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Articles List */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-wider font-bold text-[#776B6D]">
                Panduan & Artikel Terkait ({articlesForCategory.length})
              </h2>

              {articlesForCategory.length > 0 ? (
                articlesForCategory.map((article) => (
                  <div
                    key={article.id}
                    id={`article-card-${article.id}`}
                    onClick={() => {
                      setSelectedArticleId(article.id);
                      window.scrollTo({ top: 200, behavior: 'smooth' });
                    }}
                    className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#EADDDD] hover:border-[#B9626D] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2 text-[11px] text-[#776B6D]">
                        <span className="bg-[#F8F0E5] px-2 py-0.5 rounded-full font-medium text-[#3D3435]">
                          {article.stage}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="font-editorial text-xl font-bold text-[#3D3435] group-hover:text-[#B9626D] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#776B6D] line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-[#B9626D] group-hover:translate-x-1 transition-transform">
                      <span>Baca Lengkap</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#EADDDD] text-center space-y-2">
                  <BookOpen className="w-8 h-8 text-[#B9626D] mx-auto opacity-50" />
                  <p className="text-sm font-semibold text-[#3D3435]">Panduan Tambahan Segera Hadir</p>
                  <p className="text-xs text-[#776B6D]">Topik ini akan diperbarui dengan materi panduan edisi berikutnya.</p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
