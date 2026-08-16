import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { 
  Sparkles, 
  Share2, 
  RefreshCw, 
  Check, 
  Wind, 
  ArrowLeft,
  Star,
  Quote,
  MessageSquare,
  Flame,
  Heart
} from 'lucide-react';
import { BabyFaceIcon } from './BabyIllustrations';
import { ChatIdeasView } from './ChatIdeasView';

interface AffirmationViewProps {
  onNavigate: (page: PageView) => void;
}

interface AffirmationItem {
  id: string;
  category: 'ibu' | 'ayah' | 'ketenangan' | 'pasangan' | 'menyambut';
  categoryLabel: string;
  quote: string;
  author: string;
  context: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  accentBg: string;
}

const AFFIRMATION_LIST: AffirmationItem[] = [
  {
    id: 'aff-1',
    category: 'ibu',
    categoryLabel: 'Pesan untuk Ibu',
    quote: "Tubuhku ini mungkin terasa lelah, pegal, dan berubah drastis. Tapi di sinilah keajaiban itu tumbuh. Terima kasih, tubuhku, sudah berjuang sekuat ini menjaga anakku.",
    author: "Suara Hati Ibu",
    context: "Ucapkan sambil mengelus perut dengan penuh rasa syukur.",
    bgColor: "#FFF5F6",
    borderColor: "#F3D3D7",
    textColor: "#9B414C",
    accentBg: "#F8E3E5"
  },
  {
    id: 'aff-2',
    category: 'ibu',
    categoryLabel: 'Penerimaan Diri',
    quote: "Nggak apa-apa kalau kadang ingin menangis karena capek banget. Mual dan pusing ini bukan kelemahan, tapi tanda kalau kita—aku dan buah hatiku—sedang berjuang erat sejak awal.",
    author: "Pelukan Hangat",
    context: "Resapi saat tubuh terasa sangat lelah menghadapi perubahan fisik.",
    bgColor: "#FFF9F0",
    borderColor: "#F5E3CE",
    textColor: "#8C5828",
    accentBg: "#FCEFD2"
  },
  {
    id: 'aff-3',
    category: 'ibu',
    categoryLabel: 'Cinta Pertama',
    quote: "Sayang, maafin ibu ya kalau kadang merasa cemas atau takut salah. Ibu baru pertama kali belajar. Tapi satu hal yang pasti, cinta ibu untukmu jauh lebih besar dari rasa takut itu.",
    author: "Bisikan Ibu",
    context: "Ucapkan saat malam hari saat merasakan gerakan halusnya.",
    bgColor: "#FFF5F6",
    borderColor: "#F3D3D7",
    textColor: "#9B414C",
    accentBg: "#F8E3E5"
  },
  {
    id: 'aff-4',
    category: 'ibu',
    categoryLabel: 'Rasa Syukur',
    quote: "Melihat garis dua atau perut yang perlahan membesar... rasanya masih seperti mimpi. Nak, makasih ya sudah memilih rahim ibu yang sederhana ini untuk tempatmu tumbuh.",
    author: "Keajaiban Kecil",
    context: "Genggam perut saat berkaca melihat perubahan bentuk fisik.",
    bgColor: "#FFF9F0",
    borderColor: "#F5E3CE",
    textColor: "#8C5828",
    accentBg: "#FCEFD2"
  },
  {
    id: 'aff-5',
    category: 'ketenangan',
    categoryLabel: 'Ketenangan Hati',
    quote: "Nggak semua hal harus kuatur sempurna. Wajar banget kalau merasa bingung dan takut salah. Aku lepaskan beban itu, dan memilih untuk melangkah perlahan, hari demi hari.",
    author: "Berdamai dengan Keadaan",
    context: "Tarik napas dalam-dalam saat ekspektasi luar terasa menuntut.",
    bgColor: "#F4F8F3",
    borderColor: "#D2E4CE",
    textColor: "#3D5C37",
    accentBg: "#E7EFE4"
  },
  {
    id: 'aff-6',
    category: 'ketenangan',
    categoryLabel: 'Ibu yang Cukup',
    quote: "Aku nggak perlu jadi ibu yang sempurna tanpa cela seperti di media sosial. Pelukan hangatku, suara lembutku, dan ketulusanku sudah lebih dari cukup untuk bayiku nanti.",
    author: "Penerimaan Diri",
    context: "Ingatkan diri saat merasa minder membandingkan diri dengan orang lain.",
    bgColor: "#F4F8F3",
    borderColor: "#D2E4CE",
    textColor: "#3D5C37",
    accentBg: "#E7EFE4"
  },
  {
    id: 'aff-7',
    category: 'ketenangan',
    categoryLabel: 'Ruang Teduh',
    quote: "Saat dunia di luar terasa terlalu bising dengan segala saran dan tuntutan, aku memilih pulang ke dalam keheningan hati. Di sini, hanya ada aku, bayiku, dan kedamaian.",
    author: "Sudut Damai",
    context: "Dengarkan dalam keheningan malam sebelum memejamkan mata.",
    bgColor: "#FFF9F0",
    borderColor: "#F5E3CE",
    textColor: "#8C5828",
    accentBg: "#FCEFD2"
  },
  {
    id: 'aff-8',
    category: 'ayah',
    categoryLabel: 'Pesan untuk Ayah',
    quote: "Melihat perjuangan istriku... rasanya hatiku bergetar. Aku berjanji akan selalu ada di sisinya, memeluk rasa lelahnya, dan menjadi rumah paling aman untuk mereka berdua.",
    author: "Janji Calon Ayah",
    context: "Diresapi ayah saat memandangi wajah lelah istri yang sedang mengandung.",
    bgColor: "#F0F5F9",
    borderColor: "#D0E0EE",
    textColor: "#2B5270",
    accentBg: "#E1EDF7"
  },
  {
    id: 'aff-9',
    category: 'ayah',
    categoryLabel: 'Bakti Ayah',
    quote: "Aku mungkin nggak bisa ngerasain mual atau beratnya membawa kandungan. Tapi aku selalu siap bangun malam, mengelus punggungmu, dan membisikkan bahwa kamu nggak sendirian.",
    author: "Genggaman Ayah",
    context: "Ucapkan langsung ke istri sambil menggenggam tangannya erat.",
    bgColor: "#F0F5F9",
    borderColor: "#D0E0EE",
    textColor: "#2B5270",
    accentBg: "#E1EDF7"
  },
  {
    id: 'aff-10',
    category: 'ayah',
    categoryLabel: 'Sentuhan Hangat',
    quote: "Setiap kali aku meletakkan tangan di perutmu dan merasakan tendangan kecilnya, aku tahu hidupku telah berubah selamanya. Aku siap berjuang jadi ayah terbaik buatmu, Nak.",
    author: "Cinta Seorang Ayah",
    context: "Diucapkan ayah sambil mendekatkan telinga ke perut ibu.",
    bgColor: "#F0F5F9",
    borderColor: "#D0E0EE",
    textColor: "#2B5270",
    accentBg: "#E1EDF7"
  },
  {
    id: 'aff-11',
    category: 'pasangan',
    categoryLabel: 'Cinta Pasangan',
    quote: "Masa nifas dan persalinan nanti mungkin akan menguji emosional kita. Tapi mari kita saling menggenggam tangan lebih erat, memaafkan saat sama-sama lelah, dan tumbuh bersama.",
    author: "Ikatan Suami Istri",
    context: "Dibaca bersama sebagai komitmen menjaga komunikasi.",
    bgColor: "#FAF2F9",
    borderColor: "#ECCFE6",
    textColor: "#703565",
    accentBg: "#F4E1F2"
  },
  {
    id: 'aff-12',
    category: 'pasangan',
    categoryLabel: 'Terima Kasih',
    quote: "Makasih ya sudah mau menemaniku di perjalanan yang luar biasa ini. Melihatmu mengusap air mataku dan bersabar menghadapiku, membuatku sadar betapa beruntungnya aku memilikimu.",
    author: "Surat untuk Pasangan",
    context: "Tatap mata pasangan dan bisikkan dengan tulus.",
    bgColor: "#FAF2F9",
    borderColor: "#ECCFE6",
    textColor: "#703565",
    accentBg: "#F4E1F2"
  },
  {
    id: 'aff-13',
    category: 'pasangan',
    categoryLabel: 'Sama-sama Belajar',
    quote: "Kita berdua sama-sama baru belajar jadi orang tua. Maafkan kalau ada salah kata di kala lelah. Cinta kita yang membawa bayi ini, dan cinta ini juga yang akan membesarkannya.",
    author: "Saling Memahami",
    context: "Ucapkan di penghujung hari setelah seharian mempersiapkan kebutuhan bayi.",
    bgColor: "#FAF2F9",
    borderColor: "#ECCFE6",
    textColor: "#703565",
    accentBg: "#F4E1F2"
  },
  {
    id: 'aff-14',
    category: 'menyambut',
    categoryLabel: 'Menyambut Bayi',
    quote: "Nak, ibu dan ayah nggak sabar ingin memelukmu. Kami tahu persalinan nanti adalah perjuangan besar bagi kita berdua, tapi percayalah, kita akan bertemu dengan senyuman dan air mata bahagia.",
    author: "Sambut Bahagia",
    context: "Ucapkan berulang kali saat mendekati taksiran persalinan (HPL).",
    bgColor: "#FFF5F6",
    borderColor: "#F3D3D7",
    textColor: "#9B414C",
    accentBg: "#F8E3E5"
  },
  {
    id: 'aff-15',
    category: 'menyambut',
    categoryLabel: 'Pasrah & Tenang',
    quote: "Tubuhku tahu kapan harus bergerak, bayiku tahu kapan mencari jalan lahir. Kita adalah tim yang kompak. Kusambut setiap gelombang cinta (kontraksi) dengan napas panjang dan pasrah.",
    author: "Menyambut Persalinan",
    context: "Diingat kembali setiap kali merasakan kontraksi palsu.",
    bgColor: "#FFF5F6",
    borderColor: "#F3D3D7",
    textColor: "#9B414C",
    accentBg: "#F8E3E5"
  },
  {
    id: 'aff-16',
    category: 'menyambut',
    categoryLabel: 'Anak Tangga Cinta',
    quote: "Setiap rasa sakit yang akan kurasakan nanti adalah anak tangga yang membawaku melangkah lebih dekat untuk mencium keningmu pertama kalinya. Ibu siap, Nak.",
    author: "Kekuatan Ibu",
    context: "Diresapi mendalam saat melatih pernapasan menjelang persalinan.",
    bgColor: "#FFF5F6",
    borderColor: "#F3D3D7",
    textColor: "#9B414C",
    accentBg: "#F8E3E5"
  },
  {
    id: 'aff-17',
    category: 'menyambut',
    categoryLabel: 'Tangisan Pertama',
    quote: "Saat kamu lahir dan menangis keras untuk pertama kali nanti, ketahuilah bahwa air mata ibu yang mengalir di pipi adalah ungkapan syukur dan lega yang paling dalam di semesta ini.",
    author: "Puncak Penantian",
    context: "Bayangkan momen indah pelukan inisiasi menyusu dini (IMD).",
    bgColor: "#FFF5F6",
    borderColor: "#F3D3D7",
    textColor: "#9B414C",
    accentBg: "#F8E3E5"
  },
  {
    id: 'aff-18',
    category: 'ketenangan',
    categoryLabel: 'Beban yang Lepas',
    quote: "Aku lepaskan rasa takut tidak bisa menjadi ibu yang baik. Kasih sayang, kesabaran, dan insting ibuku akan tumbuh subur seiring langkah kita bersama.",
    author: "Langkah Damai",
    context: "Gunakan saat merasa panik membaca teori parenting yang rumit.",
    bgColor: "#F4F8F3",
    borderColor: "#D2E4CE",
    textColor: "#3D5C37",
    accentBg: "#E7EFE4"
  }
];

export const AffirmationView: React.FC<AffirmationViewProps> = ({ onNavigate }) => {
  const [primaryTab, setPrimaryTab] = useState<'afirmasi' | 'obrolan'>('afirmasi');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ezplan_affirmation_favorites');
      return saved ? JSON.parse(saved) : ['aff-1', 'aff-3'];
    } catch {
      return ['aff-1', 'aff-3'];
    }
  });

  // Breathing Exercise State
  const [isBreathing, setIsBreathing] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'tarik' | 'tahan' | 'embus'>('tarik');
  const [breathTimer, setBreathTimer] = useState<number>(4);

  useEffect(() => {
    try {
      localStorage.setItem('ezplan_affirmation_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  // Breathing exercise interval logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathTimer((prev) => {
          if (prev > 1) return prev - 1;

          // Switch phase
          if (breathPhase === 'tarik') {
            setBreathPhase('tahan');
            return 4;
          } else if (breathPhase === 'tahan') {
            setBreathPhase('embus');
            return 6;
          } else {
            setBreathPhase('tarik');
            return 4;
          }
        });
      }, 1000);
    } else {
      setBreathPhase('tarik');
      setBreathTimer(4);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBreathing, breathPhase]);

  const handleNextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % AFFIRMATION_LIST.length);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopy = (id: string, text: string) => {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        })
        .catch(() => {
          // Fallback if permission is denied in iframe
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        });
    } else {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredAffirmations = AFFIRMATION_LIST.filter((item) => {
    if (selectedCategory === 'semua') return true;
    if (selectedCategory === 'favorit') return favorites.includes(item.id);
    return item.category === selectedCategory;
  });

  const featured = AFFIRMATION_LIST[featuredIndex];

  return (
    <div className="py-8 sm:py-12 bg-[#FFF9F6] min-h-screen space-y-10 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#9B414C] hover:text-[#B9626D] bg-[#F8E3E5]/60 px-3 py-1.5 rounded-full border border-[#EADDDD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>

          <span className="text-xs uppercase tracking-wider text-[#9B414C] font-black bg-[#F8E3E5] px-3 py-1 rounded-full border border-[#EADDDD]">
            PLAYBOOK BY EZPLAN
          </span>
        </div>

        {/* Hero Banner Header */}
        <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border-2 border-[#EADDDD] shadow-xs text-center space-y-5 relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#B9626D] text-white mx-auto flex items-center justify-center shadow-xs border-2 border-[#EADDDD]">
            <BabyFaceIcon className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8E3E5] text-[#9B414C] text-xs font-black uppercase tracking-wider">
              {primaryTab === 'afirmasi' ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#B9626D]" />
                  <span>AFIRMASI KHUSUS MENYENTUH HATI</span>
                </>
              ) : (
                <>
                  <Flame className="w-3.5 h-3.5 text-[#B9626D]" />
                  <span>IDE OBROLAN PASANGAN & KELUARGA</span>
                </>
              )}
            </div>
            <h1 className="ad-title text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1112]">
              {primaryTab === 'afirmasi' ? 'Ruang Afirmasi & Kedamaian' : 'Ide Obrolan Pasangan (Anti-Baper)'}
            </h1>
            <p className="text-sm sm:text-base text-[#776B6D] max-w-xl mx-auto font-medium leading-relaxed">
              {primaryTab === 'afirmasi' 
                ? 'Kata-kata lembut penguat jiwa untuk menemani setiap detak langkah persiapan menjadi orang tua yang tenang dan bahagia.'
                : 'Topik-topik sensitif yang sering terlewat dari promil sampai pasca melahirkan: aturan jenguk mertua, baby blues, hingga pembagian tugas tanpa drama.'}
            </p>
          </div>

          {/* Primary View Switcher Tabs (Afirmasi vs Ide Obrolan) */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-[#FFF0F2] border-2 border-[#EADDDD] gap-1 shadow-2xs">
              <button
                id="tab-afirmasi-btn"
                onClick={() => setPrimaryTab('afirmasi')}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                  primaryTab === 'afirmasi'
                    ? 'bg-[#B9626D] text-white shadow-sm'
                    : 'text-[#524446] hover:text-[#1A1112] hover:bg-white/60'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Kartu Afirmasi</span>
              </button>

              <button
                id="tab-obrolan-btn"
                onClick={() => setPrimaryTab('obrolan')}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                  primaryTab === 'obrolan'
                    ? 'bg-[#B9626D] text-white shadow-sm'
                    : 'text-[#524446] hover:text-[#1A1112] hover:bg-white/60'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ide Obrolan</span>
                <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-[#9B414C] text-white hidden sm:inline-block">
                  Penting
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Content based on primary tab */}
        {primaryTab === 'obrolan' ? (
          <ChatIdeasView />
        ) : (
          <div className="space-y-8 animate-fadeIn">
            {/* Featured Card of the Day */}
            <div className="bg-gradient-to-br from-[#FFF5F6] via-[#FFFFFF] to-[#FCEFD2]/40 p-6 sm:p-10 rounded-3xl border-2 border-[#EADDDD] shadow-sm relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-[#B9626D] text-white">
                    <Quote className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#9B414C]">
                      KARTU AFIRMASI PILIHAN
                    </span>
                    <h2 className="text-base font-bold text-[#1A1112]">
                      Renungan Hari Ini
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleFavorite(featured.id)}
                    className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                      favorites.includes(featured.id)
                        ? 'bg-[#B9626D] text-white border-[#B9626D]'
                        : 'bg-white text-[#776B6D] border-[#EADDDD] hover:bg-[#F8E3E5]'
                    }`}
                    title="Simpan ke favorit"
                  >
                    <Star className={`w-4 h-4 ${favorites.includes(featured.id) ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    onClick={handleNextFeatured}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-[#9B414C] border border-[#EADDDD] text-xs font-bold hover:bg-[#F8E3E5] transition-colors shadow-2xs cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Acak Afirmasi</span>
                  </button>
                </div>
              </div>

              <div className="py-4 space-y-4">
                <p className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#2C1819] font-black leading-relaxed text-center sm:text-left tracking-wide">
                  “{featured.quote}”
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#EADDDD]/60 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full font-bold" style={{ backgroundColor: featured.accentBg, color: featured.textColor }}>
                      {featured.categoryLabel}
                    </span>
                    <span className="text-[#776B6D] font-medium hidden sm:inline">
                      • {featured.context}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(featured.id, featured.quote)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B9626D] hover:underline ml-auto cursor-pointer"
                  >
                    {copiedId === featured.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Tersalin ke Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Salin Pesan Inspirasi</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Guided Breathing / 1-Minute Relaxation Widget */}
            <div className="bg-[#E7EFE4]/60 p-6 sm:p-8 rounded-3xl border-2 border-[#D2E4CE] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3D5C37] text-white text-[10px] font-black tracking-wider uppercase">
                  <Wind className="w-3.5 h-3.5" />
                  <span>Sesi Ketenangan 1 Menit</span>
                </div>
                <h3 className="ad-title text-xl sm:text-2xl font-black text-[#1A1112]">
                  Latihan Pernapasan Lembut
                </h3>
                <p className="text-xs sm:text-sm text-[#3D5C37] font-medium leading-relaxed">
                  Luangkan sejenak untuk melambatkan detak jantung dan menenangkan pikiran saat membaca afirmasi.
                </p>
              </div>

              <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-[#D2E4CE] text-center space-y-4 shadow-2xs">
                {isBreathing ? (
                  <div className="space-y-3">
                    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                      <div className={`absolute inset-0 rounded-full bg-[#E7EFE4] transition-all duration-1000 ${
                        breathPhase === 'tarik' ? 'scale-125 opacity-80' : breathPhase === 'tahan' ? 'scale-125 opacity-100' : 'scale-90 opacity-40'
                      }`} />
                      <div className="relative z-10 text-center">
                        <span className="block text-2xl font-black text-[#3D5C37]">{breathTimer}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D5C37]">
                          {breathPhase === 'tarik' ? 'Tarik Napas' : breathPhase === 'tahan' ? 'Tahan' : 'Hembuskan'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsBreathing(false)}
                      className="px-4 py-1.5 rounded-full bg-[#3D5C37] text-white text-xs font-bold hover:bg-[#2e472a] transition-colors cursor-pointer"
                    >
                      Selesai Sesi
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs text-[#776B6D] font-medium">
                      Tekan tombol di bawah untuk memulai siklus pernapasan terpandu.
                    </p>
                    <button
                      onClick={() => setIsBreathing(true)}
                      className="w-full py-2.5 rounded-full bg-[#3D5C37] text-white text-xs font-bold hover:bg-[#2e472a] transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Wind className="w-4 h-4" />
                      <span>Mulai Pernapasan Terpandu</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Category Navigation Tabs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="ad-title text-xl sm:text-2xl font-black text-[#1A1112]">
                  Kumpulan Kartu Afirmasi
                </h2>
                <span className="text-xs font-bold text-[#776B6D]">
                  {filteredAffirmations.length} Afirmasi
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 pb-2">
                {[
                  { id: 'semua', label: 'Semua Afirmasi' },
                  { id: 'favorit', label: `Tersimpan (${favorites.length})` },
                  { id: 'ibu', label: 'Calon Ibu' },
                  { id: 'ayah', label: 'Calon Ayah' },
                  { id: 'ketenangan', label: 'Ketenangan Hati' },
                  { id: 'pasangan', label: 'Cinta Pasangan' },
                  { id: 'menyambut', label: 'Menyambut Bayi' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all border cursor-pointer ${
                      selectedCategory === tab.id
                        ? 'bg-[#B9626D] text-white border-[#B9626D] shadow-xs'
                        : 'bg-white text-[#524446] border-[#EADDDD] hover:bg-[#F8E3E5]/60 hover:text-[#9B414C]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Affirmations */}
            {filteredAffirmations.length === 0 ? (
              <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-[#EADDDD] text-center space-y-3">
                <Star className="w-10 h-10 text-[#EADDDD] mx-auto" />
                <p className="text-sm font-bold text-[#1A1112]">
                  Belum ada afirmasi tersimpan di kategori ini.
                </p>
                <p className="text-xs text-[#776B6D]">
                  Tekan ikon bintang pada kartu untuk menyimpannya ke daftar favorit Anda.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAffirmations.map((item) => {
                  const isFav = favorites.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className="p-6 sm:p-7 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between space-y-4"
                      style={{
                        backgroundColor: item.bgColor,
                        borderColor: item.borderColor
                      }}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                            style={{ backgroundColor: item.accentBg, color: item.textColor }}
                          >
                            {item.categoryLabel}
                          </span>

                          <button
                            onClick={() => toggleFavorite(item.id)}
                            className={`p-2 rounded-full transition-colors cursor-pointer ${
                              isFav ? 'text-[#B9626D]' : 'text-[#A09092] hover:text-[#B9626D]'
                            }`}
                            title={isFav ? "Hapus dari favorit" : "Simpan ke favorit"}
                          >
                            <Star className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                          </button>
                        </div>

                        <p
                          className="font-sans text-base sm:text-lg font-extrabold leading-relaxed tracking-wide"
                          style={{ color: item.textColor }}
                        >
                          “{item.quote}”
                        </p>
                      </div>

                      <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                        <span className="text-[#776B6D] font-bold">
                          {item.author}
                        </span>

                        <button
                          onClick={() => handleCopy(item.id, item.quote)}
                          className="inline-flex items-center gap-1 font-bold text-[#B9626D] hover:underline cursor-pointer"
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span className="text-green-600 text-[11px]">Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Share2 className="w-3.5 h-3.5" />
                              <span>Bagikan</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
