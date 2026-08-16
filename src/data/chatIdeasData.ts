export interface ChatIdea {
  id: string;
  orderNumber: number;
  stage: 'promil' | 'kehamilan' | 'menjelang' | 'pasca-salin';
  stageLabel: string;
  stageBadgeBg: string;
  stageBadgeText: string;
  category: 'promil' | 'mertua-ortu' | 'mental-babyblues' | 'tugas-pengasuh' | 'finansial-acara';
  categoryLabel: string;
  badgeColor: string;
  badgeBg: string;
  sensitivity: 'Tinggi (Rawan Baper)' | 'Sedang (Sering Terlewat)' | 'Penting (Pondasi Tim)';
  sensitivityColor: string;
  title: string;
  subtitle: string;
  whyItMatters: string;
  iceBreaker: string;
  agreementTips: string[];
  keyQuestions: string[];
  goldenRule?: string;
}

export const CHAT_IDEAS_DATA: ChatIdea[] = [
  // ==========================
  // TAHAP 1: PERSIAPAN PROMIL
  // ==========================
  {
    id: 'chat-promil-1',
    orderNumber: 1,
    stage: 'promil',
    stageLabel: 'Tahap 1 • Promil & Hubungan',
    stageBadgeBg: '#FAF2F9',
    stageBadgeText: '#703565',
    category: 'promil',
    categoryLabel: 'Promil & Cinta Pasutri',
    badgeColor: '#703565',
    badgeBg: '#FAF2F9',
    sensitivity: 'Penting (Pondasi Tim)',
    sensitivityColor: '#703565',
    title: 'Jika Garis Dua Butuh Waktu: Menjaga Cinta dari Kecewa & Pertanyaan Orang',
    subtitle: 'Agar ikhtiar hamil tidak menjadi beban mekanis yang membunuh kemesraan suami-istri.',
    whyItMatters: 'Saat promil berbulan-bulan belum berhasil, hubungan seks rentan terasa seperti "kewajiban kalender", timbul saling menyalahkan secara terselubung, dan mental drop akibat pertanyaan kepo kerabat pas kumpul keluarga.',
    iceBreaker: '“Sayang, apapun hasil ikhtiar kita bulan ini, aku bersyukur punya kamu. Kita tetap nikmati pacaran kita ya, anak adalah titipan di waktu terbaik. Yuk kita sepakat jawaban santai kalau ada kerabat yang nanya.”',
    agreementTips: [
      'Cek kesuburan adalah urusan berdua (analisis sperma suami & USG transvaginal istri)—jangan biarkan hanya istri yang periksa!',
      'Suami yang pasang badan menjawab saat ada kerabat yang menanyakan "Kapan isi?": "Mohon doanya ya, kami sedang menikmati masa pacaran berdua."',
      'Jadwalkan kencan rutin tanpa membicarakan urusan ovulasi, tespek, atau promil sama sekali.'
    ],
    keyQuestions: [
      'Bagaimana cara kita merespon pertanyaan sensitif dari keluarga tanpa emosi atau tersinggung?',
      'Kapan batas waktu kita memutuskan untuk konsultasi ke dokter spesialis fertility / andrologi bersama?',
      'Bagaimana kita menjaga hubungan intim tetap romantis dan bukan sekadar rutinitas hitung masa subur?'
    ],
    goldenRule: 'Pasangan hidup adalah tujuan, anak adalah anugerah. Jangan korbankan keharmonisan cinta demi obsesi target.'
  },
  {
    id: 'chat-promil-2',
    orderNumber: 2,
    stage: 'promil',
    stageLabel: 'Tahap 1 • Promil & Fondasi',
    stageBadgeBg: '#FAF2F9',
    stageBadgeText: '#703565',
    category: 'finansial-acara',
    categoryLabel: 'Finansial & Pondasi',
    badgeColor: '#2B5270',
    badgeBg: '#F0F5F9',
    sensitivity: 'Penting (Pondasi Tim)',
    sensitivityColor: '#2B5270',
    title: 'Kesiapan Finansial, Asuransi/BPJS & Pos Dana Darurat Kehamilan',
    subtitle: 'Transparansi anggaran kesehatan dan biaya tak terduga sebelum memasuki masa kehamilan.',
    whyItMatters: 'Biaya vitamin, suplemen promil, USG bulanan, hingga kemungkinan tindakan medis darurat bisa memicu stres jika tidak dialokasikan secara terbuka sejak awal.',
    iceBreaker: '“Yuk kita cek bareng kesiapan tabungan dan aktifkan BPJS Kesehatan / asuransi kita. Biar pas hamil nanti kita gak kaget sama biaya kontrol dan vitamin.”',
    agreementTips: [
      'Pastikan kepesertaan BPJS Kesehatan aktif dan faskes 1 sudah sesuai domisili terkini.',
      'Buat pos tabungan khusus kehamilan terpisah dari kebutuhan belanja bulanan biasa.',
      'Saling terbuka mengenai cicilan atau komitmen keuangan masing-masing agar tidak ada beban rahasia.'
    ],
    keyQuestions: [
      'Berapa alokasi budget bulanan yang realistis untuk vitamin, makanan bergizi, dan periksa dokter?',
      'Apakah faskes BPJS atau asuransi kantor kita sudah siap meng-cover skenario rawat inap / persalinan?',
      'Bagaimana pembagian kontribusi finansial kita selama masa program kehamilan?'
    ],
    goldenRule: 'Keterbukaan finansial di awal menciptakan rasa aman bagi istri saat memasuki fase kehamilan.'
  },

  // ==========================
  // TAHAP 2: MASA KEHAMILAN
  // ==========================
  {
    id: 'chat-hamil-3',
    orderNumber: 3,
    stage: 'kehamilan',
    stageLabel: 'Tahap 2 • Masa Kehamilan',
    stageBadgeBg: '#FFF0F2',
    stageBadgeText: '#9B414C',
    category: 'mertua-ortu',
    categoryLabel: 'Ortu, Mertua & Mitos',
    badgeColor: '#9B414C',
    badgeBg: '#FFF0F2',
    sensitivity: 'Tinggi (Rawan Baper)',
    sensitivityColor: '#E02E49',
    title: 'Mertua/Ortu Kasih Saran Kuno (Mitos vs Medis): Siapa yang Meluruskan?',
    subtitle: 'Menghadapi pantangan makanan, tradisi, dan saran kuno tanpa merusak silaturahmi.',
    whyItMatters: 'Komentar seperti "jangan makan ini nanti bayinya begini", atau saran membatasi nutrisi medis bisa bikin ibu hamil serba salah, cemas, dan memicu rasa kesal terpendam ke mertua.',
    iceBreaker: '“Nanti kalau orang tua atau mertua kasih wejangan pantangan yang beda dari anjuran dokter kandungan, kita sepakat pakai panduan dokter ya. Biar aku yang komunikasikan santai ke mereka.”',
    agreementTips: [
      'Gunakan dokter/bidan sebagai rujukan utama ("Kata dokter spesialis kemarin perlu nutrisi ini bu..."), jangan pakai ego "aku yang benar".',
      'Ucapkan terima kasih atas perhatian dan niat baiknya dulu sebelum memberi penjelasan medis terbaru.',
      'Aturan emas: Anak kandung yang bertugas meluruskan ke orang tuanya masing-masing, bukan menantu.'
    ],
    keyQuestions: [
      'Apa saja mitos kehamilan yang sering muncul di keluarga besar kita?',
      'Bagaimana kalimat halus yang akan suami gunakan kalau orang tua memberikan pantangan yang tidak tepat?',
      'Apakah suami siap mendampingi saat kontrol dokter agar bisa ikut mendengar langsung penjelasan medis?'
    ],
    goldenRule: 'Suami adalah tameng pertama istri. Lindungi calon ibu dari segala komentar atau larangan tanpa dasar medis.'
  },
  {
    id: 'chat-hamil-4',
    orderNumber: 4,
    stage: 'kehamilan',
    stageLabel: 'Tahap 2 • Masa Kehamilan',
    stageBadgeBg: '#FFF0F2',
    stageBadgeText: '#9B414C',
    category: 'mental-babyblues',
    categoryLabel: 'Mental & Peran Ayah',
    badgeColor: '#5A7555',
    badgeBg: '#F4F8F3',
    sensitivity: 'Sedang (Sering Terlewat)',
    sensitivityColor: '#8C5828',
    title: 'Menjaga Kewarasan Ayah: Ayah Juga Bisa Cemas, Burnout, & Butuh Didengar',
    subtitle: 'Tekanan finansial, perubahan mood istri hamil, dan rasa khawatir terpendam pada suami.',
    whyItMatters: 'Banyak calon ayah merasa harus selalu tampak tegar dan memendam ketakutan finansial atau ketidaksiapannya sendirian karena semua perhatian tertuju pada ibu hamil.',
    iceBreaker: '“Mas, aku tahu kamu pasti capek kerja dan jagain aku pas hamil. Gimana perasaanmu belakangan ini? Ada hal yang bikin kamu cemas atau terbebani gak?”',
    agreementTips: [
      'Istri dan suami saling memberikan ruang curhat tanpa saling menghakimi atau mengadu "siapa yang lebih lelah".',
      'Beri suami waktu jeda / hobi ringan yang menyegarkan pikiran tanpa merasa bersalah.',
      'Saling apresiasi hal kecil: ucapan "terima kasih ya mas udah nemenin kontrol" sangat berarti bagi suami.'
    ],
    keyQuestions: [
      'Apa kecemasan terbesar suami mengenai peran baru sebagai ayah nantinya?',
      'Bagaimana cara saling mengingatkan tanpa emosi saat sama-sama lelah di masa kehamilan?',
      'Bagaimana kita tetap meluangkan waktu berdua (babymoon / kencan santai) sebelum si kecil lahir?'
    ],
    goldenRule: 'Keluarga yang bahagia berawal dari dua orang tua yang sama-sama merasa didengar dan dihargai.'
  },
  {
    id: 'chat-hamil-5',
    orderNumber: 5,
    stage: 'kehamilan',
    stageLabel: 'Tahap 2 • Masa Kehamilan',
    stageBadgeBg: '#FFF0F2',
    stageBadgeText: '#9B414C',
    category: 'finansial-acara',
    categoryLabel: 'Finansial & Acara',
    badgeColor: '#2B5270',
    badgeBg: '#F0F5F9',
    sensitivity: 'Tinggi (Rawan Baper)',
    sensitivityColor: '#E02E49',
    title: 'Acara Syukuran, 7 Bulanan & Belanja Bayi: Jangan Sampai Terjebak Gengsi',
    subtitle: 'Menyelaraskan ekspektasi keluarga besar dengan batas kemampuan kantong sendiri.',
    whyItMatters: 'Keluarga besar sering mengharapkan acara syukuran mewah atau beli perlengkapan bayi serba baru bermerek, padahal dana darurat nifas dan imunisasi anak pasca lahir jauh lebih penting.',
    iceBreaker: '“Sayang, yuk kita patok maksimal budget untuk syukuran/aqiqah dan belanja perlengkapan bayi. Kita utamakan pos tabungan kesehatan bayi dulu ya.”',
    agreementTips: [
      'Ingat prinsip: Perlengkapan bayi seperti stroller, bouncer, ranjang bayi hanya dipakai sebentar—sangat bijak bila sewa atau pakai lungsuran yang layak.',
      'Untuk acara syukuran: Sesuaikan dengan kemampuan finansial sendiri, bukan demi memenuhi gengsi orang lain.',
      'Pisahkan pos tabungan darurat medis anak dari tabungan operasional bulanan rumah tangga.'
    ],
    keyQuestions: [
      'Barang bayi apa saja yang wajib beli baru (steril) vs barang yang bisa sewa / pinjam / preloved?',
      'Berapa batas maksimal biaya acara keluarga yang tidak mengganggu tabungan persalinan & nifas?',
      'Bagaimana jawaban serempak kita ke keluarga jika mereka meminta konsep acara di luar budget?'
    ],
    goldenRule: 'Masa depan dan kecukupan nutrisi anak bertahun-tahun ke depan jauh lebih bernilai daripada pesta 2 jam demi pujian orang.'
  },

  // ==========================
  // TAHAP 3: MENJELANG PERSALINAN
  // ==========================
  {
    id: 'chat-menjelang-6',
    orderNumber: 6,
    stage: 'menjelang',
    stageLabel: 'Tahap 3 • Menjelang Persalinan',
    stageBadgeBg: '#FFF9F0',
    stageBadgeText: '#8C4B2F',
    category: 'mertua-ortu',
    categoryLabel: 'Tempat Tinggal & Privasi',
    badgeColor: '#9B414C',
    badgeBg: '#FFF0F2',
    sensitivity: 'Tinggi (Rawan Baper)',
    sensitivityColor: '#E02E49',
    title: 'Tinggal di Mana Pasca Lahir? Rumah Sendiri atau "Numpang" Ortu/Mertua?',
    subtitle: 'Menghindari drama campur tangan pengasuhan vs kebutuhan bantuan fisik di hari-hari awal.',
    whyItMatters: 'Banyak pasangan memutuskan tinggal sementara di rumah ortu/mertua demi dibantu, tapi akhirnya malah tertekan karena beda cara asuh zaman dulu vs ilmu medis modern, atau merasa kehilangan privasi kamar.',
    iceBreaker: '“Yuk kita obrolin enaknya setelah lahiran kita langsung di rumah kita sendiri atau perlu bantuan nginep di ortu/mertua? Kira-kira berapa lama ya biar kita berdua tetap nyaman?”',
    agreementTips: [
      'Tentukan batas waktu pasti sejak awal (misal: "Hanya 2 minggu pertama ya"), jangan dibuat menggantung tanpa kepastian.',
      'Jika ortu/mertua yang menginap di rumah kalian, siapkan kamar privat dan bagi peran yang jelas (misal: bantuan masak/cuci baju, urusan bayi tetap orang tua utama).',
      'Istri berhak merasa paling nyaman. Rumah yang dipilih harus yang membuat ibu menyusui minim stres.'
    ],
    keyQuestions: [
      'Di lingkungan mana ibu merasa paling rileks untuk menyusui tanpa takut dinilai atau dihakimi?',
      'Jika ada perbedaan pola asuh dengan ortu, bagaimana strategi kita menyikapinya dengan tenang?',
      'Apakah kita sanggup mandiri berdua dengan sistem pesan antar makan & laundry daripada menumpang?'
    ],
    goldenRule: 'Anak kandung mengomunikasikan batasan ke orang tuanya masing-masing. Jangan biarkan menantu yang berhadapan langsung.'
  },
  {
    id: 'chat-menjelang-7',
    orderNumber: 7,
    stage: 'menjelang',
    stageLabel: 'Tahap 3 • Menjelang Persalinan',
    stageBadgeBg: '#FFF9F0',
    stageBadgeText: '#8C4B2F',
    category: 'tugas-pengasuh',
    categoryLabel: 'Sistem Bantuan & Nanny',
    badgeColor: '#8C4B2F',
    badgeBg: '#FFF9F0',
    sensitivity: 'Sedang (Sering Terlewat)',
    sensitivityColor: '#8C5828',
    title: 'Pakai ART / Nanny / Daycare vs Mandiri Berdua: Kesepakatan Sejak Dini',
    subtitle: 'Menentukan opsi bantuan tambahan tanpa merasa gengsi atau takut dianggap tidak mandiri.',
    whyItMatters: 'Banyak pasangan memaksakan diri serba mandiri berdua karena sungkan keluar uang atau takut omongan orang, lalu burnout parah di minggu ketiga dan hubungan jadi sangat renggang.',
    iceBreaker: '“Menurut kamu, kita sanggup gak kalau berdua aja atau sebaiknya kita siapkan budget untuk ART pulang-pergi / jasa perawat pasca melahirkan (postpartum doula)?”',
    agreementTips: [
      'Bantuan tidak harus menginap; opsi ART harian 2-3 jam untuk cuci, setrika, dan bersih-bersih rumah sudah sangat menyelamatkan energi.',
      'Jika ada nenek yang ingin bantu, pastikan statusnya "membantu", bukan pengambil keputusan utama pola asuh anak.',
      'Sepakati aturan privasi kamar utama sejak awal bila mempekerjakan bantuan di rumah.'
    ],
    keyQuestions: [
      'Apakah budget bulanan kita memungkinkan untuk mengambil bantuan asisten rumah tangga?',
      'Bila istri bekerja kembali setelah cuti melahirkan, apa skenario pengasuhan terbaik yang kita pilih?',
      'Kriteria apa yang wajib dimiliki bila kita merekrut pengasuh atau memilih daycare?'
    ],
    goldenRule: 'Mencari bantuan bukan tanda kegagalan orang tua, melainkan strategi cerdas menjaga keharmonisan keluarga.'
  },
  {
    id: 'chat-menjelang-8',
    orderNumber: 8,
    stage: 'menjelang',
    stageLabel: 'Tahap 3 • Menjelang Persalinan',
    stageBadgeBg: '#FFF9F0',
    stageBadgeText: '#8C4B2F',
    category: 'mertua-ortu',
    categoryLabel: 'Keluarga & Jam Jenguk',
    badgeColor: '#9B414C',
    badgeBg: '#FFF0F2',
    sensitivity: 'Tinggi (Rawan Baper)',
    sensitivityColor: '#E02E49',
    title: 'Kunjungan Jenguk Bayi Baru Lahir: Siapa, Kapan, & Jam Berapa?',
    subtitle: 'Menjaga kewarasan ibu pasca salin & imun bayi dari serbuan tamu tanpa bikin keluarga tersinggung.',
    whyItMatters: 'Setelah melahirkan, ibu masih berdarah nifas, payudara sakit/lecet belajar menyusui, dan sangat butuh tidur. Kalau tiba-tiba rombongan keluarga besar datang berjam-jam, ibu tidak bisa istirahat dan rawan memicu baby blues.',
    iceBreaker: '“Sayang, nanti pas bayi kita lahir, kita sepakat ya 1-2 minggu pertama fokus pemulihan dulu. Yuk kita bikin aturan santai buat yang mau jenguk biar kamu gak kecapekan.”',
    agreementTips: [
      'Aturan 1 Pintu: Suami yang pasang badan jadi "front liner" penjaga jadwal tamu, bukan ibu yang menolak.',
      'Batas durasi jenguk maksimal 30–45 menit agar ibu bisa tetap menyusui dan istirahat tanpa canggung.',
      'Wajib cuci tangan, jangan cium pipi/bibir bayi, dan tunda datang jika ada yang sedang batuk/pilek.',
      'Suami yang bertugas mengkomunikasikan ke ortu/mertua sendiri dengan bahasa yang santun dan penuh pengertian.'
    ],
    keyQuestions: [
      'Apakah kita mau membatasi tamu di minggu pertama khusus keluarga inti saja?',
      'Kalau tamu datang pas jam menyusui/tidur siang, bagaimana kode kita untuk izin pamit ke kamar?',
      'Bagaimana cara suami menyampaikan ke pihak keluarga tanpa membuat mertua merasa dibatasi?'
    ],
    goldenRule: 'Kesehatan mental & fisik ibu yang baru melahirkan adalah prioritas nomor 1 di atas basa-basi sosial.'
  },

  // ==========================
  // TAHAP 4: PASCA MELAHIRKAN & NIFAS
  // ==========================
  {
    id: 'chat-pasca-9',
    orderNumber: 9,
    stage: 'pasca-salin',
    stageLabel: 'Tahap 4 • Pasca Melahirkan',
    stageBadgeBg: '#F4F8F3',
    stageBadgeText: '#3D5C37',
    category: 'mental-babyblues',
    categoryLabel: 'Mental & Baby Blues',
    badgeColor: '#5A7555',
    badgeBg: '#F4F8F3',
    sensitivity: 'Penting (Pondasi Tim)',
    sensitivityColor: '#3D5C37',
    title: 'Kalau Istri Nangis Tanpa Sebab (Baby Blues): Suami Harus Ngapain?',
    subtitle: 'Memahami drop hormon drastis pasca salin tanpa melabeli istri "lebay" atau "kurang bersyukur".',
    whyItMatters: 'Lebih dari 70–80% ibu mengalami Baby Blues akibat hormon estrogen & progesteron yang anjlok drastis dalam 48 jam pasca melahirkan. Istri bisa tiba-tiba sedih, panik, dan merasa tidak mampu jadi ibu.',
    iceBreaker: '“Sayang, kalau nanti kamu merasa sedih, bingung, atau mau nangis berjam-jam pasca lahiran, tumpahkan aja ke aku ya. Itu murni hormonal dan kamu gak perlu merasa bersalah.”',
    agreementTips: [
      'Haram bilang: "Jangan sedih dong, harusnya bersyukur udah punya anak" atau "Dulu ibu saya santai-santai aja".',
      'Cukup katakan: "Aku ada di sini. Kamu ibu yang hebat. Mau aku gendong bayinya biar kamu mandi air hangat / tidur 1 jam?"',
      'Ambil alih pekerjaan fisik saat melihat tanda-tanda istri kewalahan dan tatapannya kosong.'
    ],
    keyQuestions: [
      'Kapan batas waktu kita mencari bantuan psikolog/psikiater (jika sedih berlanjut lebih dari 2 minggu / Postpartum Depression)?',
      'Siapa sahabat atau keluarga dekat yang aman untuk diajak curhat tanpa menghakimi?',
      'Bagaimana kode istri saat butuh waktu 15 menit hening tanpa suara tangisan bayi?'
    ],
    goldenRule: 'Validasi emosi istri dulu, bantu fisiknya, baru cari solusi bersama. Jangan pernah mendebat ibu yang sedang kalut hormon.'
  },
  {
    id: 'chat-pasca-10',
    orderNumber: 10,
    stage: 'pasca-salin',
    stageLabel: 'Tahap 4 • Pasca Melahirkan',
    stageBadgeBg: '#F4F8F3',
    stageBadgeText: '#3D5C37',
    category: 'tugas-pengasuh',
    categoryLabel: 'Shift Malam & Intimasi Nifas',
    badgeColor: '#8C4B2F',
    badgeBg: '#FFF9F0',
    sensitivity: 'Penting (Pondasi Tim)',
    sensitivityColor: '#8C4B2F',
    title: 'Shift Begadang Malam, Tugas Rumah & Memulai Kembali Keintiman',
    subtitle: 'Membagi tugas realistis dan merawat kemesraan suami-istri tanpa paksaan.',
    whyItMatters: 'Kurang tidur akut (sleep deprivation) adalah pemicu pertengkaran nomor 1 pasangan baru. Ditambah kecemasan hubungan fisik pasca luka jahitan yang bikin suami-istri canggung.',
    iceBreaker: '“Yuk kita bikin simulasi pembagian tugas pasca lahiran. Dan soal hubungan fisik nanti, santai aja ya, yang terpenting luka dan fisikmu pulih total dulu tanpa tekanan buru-buru.”',
    agreementTips: [
      'Jika istri menyusui langsung (DBF): Suami bertugas sendawakan bayi, ganti popok basah, dan ambilkan minum/cemilan ibu.',
      'Gunakan sistem blok tidur: Misal suami jaga jam 21.00–02.00, istri tidur pulas, lalu gantian jam 02.00 ke atas.',
      'Turunkan standar kerapian rumah! Cucian menumpuk 1 hari tidak apa-apa, yang penting tidur dan makan tercukupi.',
      'Secara medis, hubungan intim aman setelah nifas selesai (minimal 6 minggu) dan setelah kontrol dokter memastikan jahitan sembuh total.'
    ],
    keyQuestions: [
      'Metode kontrasepsi / KB apa yang sudah kita sepakati bersama dokter setelah masa nifas selesai?',
      'Bagaimana pembagian jadwal begadang saat suami sudah mulai kembali masuk kerja kantor?',
      'Bagaimana kita menjaga bonding berdua (pelukan, obrolan hangat) di sela-sela mengurus si kecil?'
    ],
    goldenRule: 'Bayi adalah tanggung jawab bersama. Suami bukan sekadar "membantu istri", melainkan sedang menjalankan perannya sebagai ayah yang utuh.'
  }
];
