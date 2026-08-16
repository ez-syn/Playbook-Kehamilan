import React, { useState, useEffect } from 'react';
import { CHAT_IDEAS_DATA, ChatIdea } from '../data/chatIdeasData';
import { 
  MessageSquare, 
  Users, 
  Heart, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  Check, 
  Copy, 
  Share2, 
  Bookmark, 
  BookmarkCheck, 
  HelpCircle,
  Flame,
  Search,
  Filter,
  ArrowRight,
  ShieldCheck,
  Smile,
  Volume2,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass
} from 'lucide-react';

interface ChatIdeasViewProps {
  onBackToAffirmation?: () => void;
}

export const ChatIdeasView: React.FC<ChatIdeasViewProps> = () => {
  const [selectedStage, setSelectedStage] = useState<string>('semua');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Stored state for bookmarks & discussed items
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ezplan_chat_bookmarks');
      return saved ? JSON.parse(saved) : ['chat-promil-1', 'chat-pasca-9'];
    } catch {
      return ['chat-promil-1', 'chat-pasca-9'];
    }
  });

  const [discussedIds, setDiscussedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ezplan_chat_discussed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [expandedCardId, setExpandedCardId] = useState<string | null>('chat-promil-1');

  useEffect(() => {
    try {
      localStorage.setItem('ezplan_chat_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('ezplan_chat_discussed', JSON.stringify(discussedIds));
    } catch (e) {
      console.error(e);
    }
  }, [discussedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleDiscussed = (id: string) => {
    setDiscussedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyChat = (item: ChatIdea) => {
    const textToCopy = `💬 *IDE OBROLAN PASANGAN (Topik #${item.orderNumber}: ${item.stageLabel})*\n📌 *Topik:* ${item.title}\n\n🗣️ *Kalimat Pembuka:* \n${item.iceBreaker}\n\n🤝 *Poin Kesepakatan:* \n${item.agreementTips.map((tip, idx) => `${idx + 1}. ${tip}`).join('\n')}\n\n💡 *Pertanyaan Bersama:* \n${item.keyQuestions.map((q) => `• ${q}`).join('\n')}\n\n✨ *Prinsip:* ${item.goldenRule || ''}`;
    
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopiedId(item.id);
          setTimeout(() => setCopiedId(null), 2500);
        })
        .catch(() => {
          setCopiedId(item.id);
          setTimeout(() => setCopiedId(null), 2500);
        });
    } else {
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Always keep sorted by orderNumber 1 -> 10
  const sortedIdeas = [...CHAT_IDEAS_DATA].sort((a, b) => a.orderNumber - b.orderNumber);

  const filteredIdeas = sortedIdeas.filter((item) => {
    const matchesStage = 
      selectedStage === 'semua' ? true :
      selectedStage === 'tersimpan' ? bookmarkedIds.includes(item.id) :
      selectedStage === 'selesai' ? discussedIds.includes(item.id) :
      item.stage === selectedStage;

    const matchesCategory = 
      selectedCategory === 'semua' ? true : item.category === selectedCategory;

    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stageLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStage && matchesCategory && matchesSearch;
  });

  const stageTabs = [
    { id: 'semua', label: 'Semua 10 Topik Urut', icon: '📋', count: 10 },
    { id: 'promil', label: '1. Promil (Topik 1-2)', icon: '🌱', count: 2 },
    { id: 'kehamilan', label: '2. Masa Hamil (Topik 3-5)', icon: '🤰', count: 3 },
    { id: 'menjelang', label: '3. Jelang Lahir (Topik 6-8)', icon: '🏥', count: 3 },
    { id: 'pasca-salin', label: '4. Pasca Lahir (Topik 9-10)', icon: '🍼', count: 2 },
    { id: 'tersimpan', label: `Disimpan (${bookmarkedIds.length})`, icon: '🔖', count: bookmarkedIds.length },
    { id: 'selesai', label: `Sudah Dibahas (${discussedIds.length})`, icon: '✅', count: discussedIds.length },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Intro Highlight Banner */}
      <div className="bg-gradient-to-br from-[#FFF5F6] via-[#FFF9F6] to-[#F8F0E5] p-6 sm:p-8 rounded-3xl border-2 border-[#EADDDD] shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B9626D] text-white text-xs font-black uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>10 TAHAPAN OBROLAN URUT (DARI PROMIL SAMPAI PASCA SALIN)</span>
            </div>
            <h2 className="ad-title text-2xl sm:text-3xl font-black text-[#1A1112]">
              Ide Obrolan Pasangan & Keluarga (Anti-Baper)
            </h2>
            <p className="text-xs sm:text-sm text-[#524446] font-medium leading-relaxed">
              Disusun berurutan secara kronologis mulai dari <strong>fase promil, kehamilan trimester 1–3, persiapan persalinan, hingga masa nifas/baby blues</strong>. Mengobrolkan di awal akan menyelamatkan pernikahan dari pertengkaran dan campur tangan mertua.
            </p>
          </div>

          {/* Quick Progress Widget */}
          <div className="bg-white px-5 py-4 rounded-2xl border border-[#EADDDD] text-center shrink-0 w-full sm:w-auto shadow-2xs">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#776B6D] block">
              Progres Diskusi
            </span>
            <div className="flex items-baseline justify-center gap-1 my-1">
              <span className="text-2xl font-black text-[#9B414C]">{discussedIds.length}</span>
              <span className="text-sm font-bold text-[#776B6D]">/ 10 Topik</span>
            </div>
            <span className="text-[10px] font-bold text-[#5A7555] bg-[#F4F8F3] px-2 py-0.5 rounded-full border border-[#D2E4CE]">
              {discussedIds.length === 10 ? 'Semua Tuntas 🎉' : `${10 - discussedIds.length} Topik Tersisa`}
            </span>
          </div>
        </div>

        {/* Chronological Step Journey Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-[#EADDDD]/70">
          {[
            { num: '01-02', name: '1. Promil & Hubungan', desc: 'Garis dua, respon kepo, budget awal' },
            { num: '03-05', name: '2. Masa Kehamilan', desc: 'Mitos mertua, mental ayah, syukuran' },
            { num: '06-08', name: '3. Menjelang Lahir', desc: 'Rumah tinggal, ART/Nanny, jam jenguk' },
            { num: '09-10', name: '4. Pasca Melahirkan', desc: 'Baby blues, shift malam, intimasi nifas' },
          ].map((step, sIdx) => (
            <div 
              key={sIdx}
              onClick={() => {
                const mapKey = sIdx === 0 ? 'promil' : sIdx === 1 ? 'kehamilan' : sIdx === 2 ? 'menjelang' : 'pasca-salin';
                setSelectedStage(mapKey);
              }}
              className="p-3 rounded-2xl bg-white/90 border border-[#EADDDD] hover:border-[#B9626D] transition-all cursor-pointer text-left shadow-2xs"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-black uppercase text-[#9B414C] bg-[#F8E3E5] px-1.5 py-0.5 rounded-md">
                  Topik {step.num}
                </span>
                <span className="text-xs">➡️</span>
              </div>
              <h4 className="text-xs font-black text-[#1A1112] mt-1.5 leading-tight">{step.name}</h4>
              <p className="text-[10px] text-[#776B6D] line-clamp-1 mt-0.5">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 Golden Communication Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#EADDDD]">
            <span className="text-lg">🛡️</span>
            <div>
              <h4 className="text-xs font-black text-[#1A1112]">Aturan 1 Pintu</h4>
              <p className="text-[11px] text-[#776B6D] leading-tight mt-0.5">Anak kandung yang bertugas meluruskan ke orang tuanya masing-masing.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#EADDDD]">
            <span className="text-lg">🤝</span>
            <div>
              <h4 className="text-xs font-black text-[#1A1112]">Satu Suara di Depan</h4>
              <p className="text-[11px] text-[#776B6D] leading-tight mt-0.5">Sepakati berdua dulu sebelum mengumumkan keputusan ke keluarga.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#EADDDD]">
            <span className="text-lg">☕</span>
            <div>
              <h4 className="text-xs font-black text-[#1A1112]">Waktu Obrol Santai</h4>
              <p className="text-[11px] text-[#776B6D] leading-tight mt-0.5">Bahas saat santai (pillow talk/kencan), bukan saat lelah atau lapar.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="space-y-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#A09395] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik obrolan (contoh: promil, mertua, baby blues, ART, begadang, uang)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border-2 border-[#EADDDD] text-xs sm:text-sm font-semibold text-[#1A1112] placeholder-[#A09395] focus:outline-none focus:border-[#B9626D] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#776B6D] hover:text-[#1A1112] cursor-pointer"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Stage Pills (Chronological) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {stageTabs.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all border shrink-0 flex items-center gap-1.5 cursor-pointer ${
                selectedStage === stage.id
                  ? 'bg-[#B9626D] text-white border-[#B9626D] shadow-xs'
                  : 'bg-white text-[#524446] border-[#EADDDD] hover:bg-[#F8E3E5]/60 hover:text-[#9B414C]'
              }`}
            >
              <span>{stage.icon}</span>
              <span>{stage.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* List of 10 Ordered Chat Cards */}
      {filteredIdeas.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border-2 border-dashed border-[#EADDDD] text-center space-y-3">
          <HelpCircle className="w-10 h-10 text-[#EADDDD] mx-auto" />
          <p className="text-sm font-bold text-[#1A1112]">
            Tidak ada ide obrolan yang cocok dengan filter atau pencarian Anda.
          </p>
          <button
            onClick={() => { setSelectedStage('semua'); setSelectedCategory('semua'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-full bg-[#B9626D] text-white text-xs font-bold hover:bg-[#9B414C] transition-colors cursor-pointer"
          >
            Tampilkan Semua 10 Topik Urut
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredIdeas.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const isDiscussed = discussedIds.includes(item.id);
            const isExpanded = expandedCardId === item.id;
            const formattedNum = item.orderNumber < 10 ? `0${item.orderNumber}` : `${item.orderNumber}`;

            return (
              <div
                key={item.id}
                id={`chat-card-${item.id}`}
                className={`bg-white rounded-3xl border-2 transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
                  isDiscussed 
                    ? 'border-[#D2E4CE] bg-[#FDFEFD]' 
                    : isExpanded 
                    ? 'border-[#B9626D] ring-2 ring-[#F8E3E5]' 
                    : 'border-[#EADDDD]'
                }`}
              >
                
                {/* Header Card Strip */}
                <div className="p-5 sm:p-6 border-b border-[#F0E4E4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-white via-[#FFF9F6]/50 to-white">
                  
                  <div className="flex items-start gap-3.5 flex-1">
                    {/* Big Chronological Step Number */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF0F2] text-[#9B414C] border-2 border-[#EADDDD] flex flex-col items-center justify-center shrink-0 shadow-2xs">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#B9626D] leading-none">TOPIK</span>
                      <span className="text-base sm:text-lg font-black leading-none mt-0.5">{formattedNum}</span>
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Stage Badge */}
                        <span 
                          className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                          style={{ 
                            backgroundColor: item.stageBadgeBg, 
                            color: item.stageBadgeText,
                            borderColor: `${item.stageBadgeText}33`
                          }}
                        >
                          {item.stageLabel}
                        </span>

                        <span 
                          className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border bg-white flex items-center gap-1"
                          style={{ color: item.sensitivityColor, borderColor: `${item.sensitivityColor}40` }}
                        >
                          <ShieldAlert className="w-3 h-3" />
                          <span>{item.sensitivity}</span>
                        </span>

                        {isDiscussed && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E7EFE4] text-[#3D5C37] border border-[#D2E4CE] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Sudah Dibahas Bersama</span>
                          </span>
                        )}
                      </div>

                      <h3 className="ad-title text-lg sm:text-xl font-black text-[#1A1112] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#776B6D] font-medium leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Actions Header */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => toggleDiscussed(item.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 border cursor-pointer ${
                        isDiscussed
                          ? 'bg-[#3D5C37] text-white border-[#3D5C37]'
                          : 'bg-[#FFF9F6] text-[#524446] border-[#EADDDD] hover:bg-[#E7EFE4] hover:text-[#3D5C37]'
                      }`}
                      title={isDiscussed ? "Batal tanda sudah dibahas" : "Tandai sudah dibahas bersama pasangan"}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isDiscussed ? 'Selesai' : 'Tandai Selesai'}</span>
                    </button>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-2 rounded-full border transition-all cursor-pointer ${
                        isBookmarked
                          ? 'bg-[#B9626D] text-white border-[#B9626D]'
                          : 'bg-[#FFF9F6] text-[#776B6D] border-[#EADDDD] hover:bg-[#F8E3E5]'
                      }`}
                      title={isBookmarked ? "Hapus dari simpanan" : "Simpan topik ini"}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>

                    <button
                      onClick={() => setExpandedCardId(isExpanded ? null : item.id)}
                      className="p-2 rounded-full bg-[#F8F0E5] text-[#8C633D] border border-[#EADDDD] hover:bg-[#E6D7C3] transition-colors cursor-pointer"
                      title={isExpanded ? "Tutup detail" : "Buka contekan lengkap"}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Card Content (Expandable / Always Visible) */}
                <div className={`p-5 sm:p-7 space-y-6 ${!isExpanded && 'hidden sm:block'}`}>
                  
                  {/* Why it causes conflict */}
                  <div className="p-4 rounded-2xl bg-[#FFF0F2] border border-[#F8D2D6] space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#9B414C] uppercase tracking-wider">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Kenapa Topik Ini Krusial & Sering Jadi Masalah?</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#524446] font-medium leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </div>

                  {/* Ice Breaker Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F0] border border-[#F5E3CE] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs font-black text-[#8C5828] uppercase tracking-wider">
                        <Smile className="w-3.5 h-3.5 text-[#8C5828]" />
                        <span>Contoh Kalimat Pembuka Santai (Biar Gak Kaku)</span>
                      </span>
                      <span className="text-[10px] font-extrabold text-[#8C5828] bg-white px-2 py-0.5 rounded-full border border-[#F5E3CE]">
                        Script Ngobrol
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-[#2C1819] italic leading-relaxed">
                      {item.iceBreaker}
                    </p>
                  </div>

                  {/* Agreement Tips & Key Questions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Tips Kesepakatan */}
                    <div className="space-y-3 p-4 rounded-2xl bg-[#F4F8F3] border border-[#D2E4CE]">
                      <h4 className="text-xs font-black text-[#3D5C37] uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#3D5C37]" />
                        <span>Tips Kesepakatan (Satu Suara)</span>
                      </h4>
                      <ul className="space-y-2">
                        {item.agreementTips.map((tip, tIdx) => (
                          <li key={tIdx} className="text-xs text-[#2D4529] font-medium flex items-start gap-2 leading-relaxed">
                            <span className="w-4 h-4 rounded-full bg-[#3D5C37] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              {tIdx + 1}
                            </span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Checkpoint Pertanyaan Berdua */}
                    <div className="space-y-3 p-4 rounded-2xl bg-[#FAF2F9] border border-[#ECCFE6]">
                      <h4 className="text-xs font-black text-[#703565] uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-[#703565]" />
                        <span>Pertanyaan Kunci untuk Diobrolkan Bersama</span>
                      </h4>
                      <ul className="space-y-2">
                        {item.keyQuestions.map((q, qIdx) => (
                          <li key={qIdx} className="text-xs text-[#4A2042] font-medium flex items-start gap-2 leading-relaxed">
                            <span className="text-[#703565] font-black shrink-0">•</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Golden Rule Footer & Copy Button */}
                  <div className="pt-4 border-t border-[#F0E4E4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    {item.goldenRule && (
                      <div className="flex items-center gap-2 text-[#524446] font-extrabold text-left">
                        <span className="text-base">✨</span>
                        <span><strong>Prinsip Emas:</strong> {item.goldenRule}</span>
                      </div>
                    )}

                    <button
                      onClick={() => handleCopyChat(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F8E3E5] hover:bg-[#B9626D] text-[#9B414C] hover:text-white text-xs font-black transition-colors shrink-0 self-end sm:self-auto cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-700" />
                          <span className="text-green-700">Contekan Berhasil Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Contekan Obrolan</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Supportive Note */}
      <div className="p-6 rounded-3xl bg-[#F8F0E5] border border-[#E6D7C3] text-center space-y-2">
        <p className="text-xs sm:text-sm text-[#8C633D] font-extrabold flex items-center justify-center gap-1.5">
          <Heart className="w-4 h-4 fill-[#8C633D] text-[#8C633D]" />
          <span>Ingat: Komunikasi yang Terbuka adalah Hadiah Terindah untuk Calon Bayi</span>
        </p>
        <p className="text-xs text-[#524446] max-w-xl mx-auto font-medium">
          Membicarakan hal sensitif di awal memang terasa sedikit canggung, tapi akan menyelamatkan kalian dari pertengkaran besar di kemudian hari saat energi fisik sedang terkuras.
        </p>
      </div>

    </div>
  );
};
