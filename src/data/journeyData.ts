import { StageData, PackingCategory, DiagramStep, PreparednessItem, ConversationQuestion } from '../types';

export const STAGES_OVERVIEW = [
  {
    id: 'promil',
    stageNumber: '00',
    title: 'PERSIAPAN PROMIL',
    subtitle: 'Sebelum Kehamilan',
    period: 'Persiapan Sebelum Hamil',
    description: 'Fokus persiapan sebelum hamil: pemeriksaan kesehatan sebelum hamil, asupan asam folat & nutrisi, kesiapan mental, serta alokasi finansial awal.',
    bgColor: '#FAF2F9',
    borderColor: '#ECCFE6',
    accentColor: '#8A3B72',
  },
  {
    id: 'trimester1',
    stageNumber: '01',
    title: 'TRIMESTER PERTAMA',
    subtitle: 'Memulai Perjalanan',
    period: 'Minggu 1 – 12',
    description: 'Fokus pada fondasi awal: pengorganisasian berkas, penjadwalan kontrol awal, komunikasi pasangan, dan gambaran pos keuangan.',
    bgColor: '#F8E3E5',
    borderColor: '#EADDDD',
    accentColor: '#B9626D',
  },
  {
    id: 'trimester2',
    stageNumber: '02',
    title: 'TRIMESTER KEDUA',
    subtitle: 'Mulai Merencanakan',
    period: 'Minggu 13 – 27',
    description: 'Masa yang relatif nyaman untuk mensurvei tempat persalinan, memilah perlengkapan si kecil, dan merapikan sudut rumah.',
    bgColor: '#E7EFE4',
    borderColor: '#C9DBC5',
    accentColor: '#5A7555',
  },
  {
    id: 'trimester3',
    stageNumber: '03',
    title: 'TRIMESTER KETIGA',
    subtitle: 'Merapikan Persiapan',
    period: 'Minggu 28 – 40+',
    description: 'Mempersiapkan tas persalinan, menyelaraskan alur hari-H bersama pendamping, dan menyusun sistem dukungan keluarga.',
    bgColor: '#F6DFD2',
    borderColor: '#E5C4B0',
    accentColor: '#A85D3B',
  },
  {
    id: 'menjelang',
    stageNumber: '04',
    title: 'MENJELANG PERSALINAN',
    subtitle: 'Persiapan Hari Kelahiran',
    period: 'Masa Siaga Awal',
    description: 'Memastikan seluruh kesiapan non-medis seperti transportasi, berkas darurat, serta nomor penting sudah siap akses.',
    bgColor: '#F8F0E5',
    borderColor: '#E6D7C3',
    accentColor: '#8C633D',
  },
  {
    id: 'menyambut',
    stageNumber: '05',
    title: 'MENYAMBUT BAYI',
    subtitle: 'Memulai Babak Baru',
    period: 'Masa Pasca Salin / Nifas',
    description: 'Panduan ritme rumah pasca melahirkan, pembagian peran orang tua, pengurusan administrasi bayi, dan masa pemulihan.',
    bgColor: '#F4D5D8',
    borderColor: '#E3B9BE',
    accentColor: '#9B414C',
  }
];

export const PROMIL_DATA: StageData = {
  id: 'promil',
  stageNumber: '00',
  title: 'Persiapan Promil: Sebelum Kehamilan',
  subtitle: 'Fondasi Sehat Sebelum Hamil',
  tagline: 'Mempersiapkan fisik, nutrisi, mental, dan finansial pasangan sebelum memulai perjalanan kehamilan.',
  bgColor: '#FAF2F9',
  accentColor: '#8A3B72',
  borderColor: '#ECCFE6',
  chapters: [
    {
      id: 'promil-ch1',
      number: '01',
      title: 'CEK KESEHATAN SEBELUM HAMIL',
      subtitle: 'Cek Kesehatan Calon Ibu & Calon Ayah',
      contentParagraphs: [
        'Melakukan pemeriksaan kesehatan sebelum merencanakan kehamilan membantu mendeteksi dini faktor risiko medis dan mempersiapkan tubuh sebaik mungkin.',
        'Pemeriksaan ini berlaku untuk calon ibu dan calon ayah demi memastikan kondisi fisik yang optimal saat pembuahan berlangsung.'
      ],
      editorialSections: [
        {
          title: 'Pemeriksaan Penting Sebelum Hamil',
          description: 'Konsultasikan dengan dokter kandungan atau bidan mengenai daftar skrining dasar:',
          items: [
            'Cek Darah Lengkap, Hemoglobin (HB), dan Golongan Darah/Rhesus',
            'Skrining Penyakit Menular & Imunitas (TORCH, Hepatitis B, HIV)',
            'Pemeriksaan Kadar Gula Darah & Tekanan Darah awal',
            'Pemeriksaan Gigi & Mulut (infeksi gigi dapat mempengaruhi kehamilan)',
            'Pemeriksaan Analisis Sperma & Kesehatan reproduksi calon ayah',
            'Suntik Imunisasi Tetanus Toksoid (TT) & konsultasi vaksinasi pendukung'
          ],
          badgeColor: '#FAF2F9'
        }
      ]
    },
    {
      id: 'promil-ch2',
      number: '02',
      title: 'ASUPAN NUTRISI & ASAM FOLAT',
      subtitle: 'Mempersiapkan Lingkungan Janin yang Sehat',
      contentParagraphs: [
        'Asam folat sangat krusial dikonsumsi minimal 1 hingga 3 bulan sebelum kehamilan untuk mencegah cacat tabung saraf (Neural Tube Defects) pada janin.',
        'Selain suplemen, menjaga pola makan kaya gizi seimbang serta hidrasi yang cukup akan meningkatkan kualitas sel telur dan sel sperma.'
      ],
      editorialSections: [
        {
          title: 'Panduan Asupan Promil Harian',
          description: 'Langkah sederhana memperbaiki pola makan bersama pasangan:',
          items: [
            'Konsumsi Suplemen Asam Folat (400 - 1000 mcg per hari sesuai anjuran dokter)',
            'Perbanyak Makanan Kaya Asam Folat: Sayuran hijau, kacang-kacangan, telur, dan alpukat',
            'Cukupi Asupan Zat Besi & Kalsium: Daging tanpa lemak, ikan, dan susu pra-kehamilan',
            'Batasi Konsumsi Kafein & Makanan Olahan Tinggi Gula',
            'Hindari Paparan Rokok, Alkohol, dan Zat Kimia Berbahaya di Rumah maupun Tempat Kerja'
          ],
          badgeColor: '#FFF5F6'
        }
      ]
    },
    {
      id: 'promil-ch3',
      number: '03',
      title: 'MENGETAHUI MASA SUBUR & RITME',
      subtitle: 'Memahami Siklus Menstruasi & Ovulasi',
      contentParagraphs: [
        'Mencatat siklus menstruasi membantu calon ibu mengetahui kapan perkiraan masa subur (ovulasi) terjadi.',
        'Menggunakan aplikasi pencatat haid atau tes strip ovulasi dapat meningkatkan ketepatan waktu dalam merencanakan hubungan suami istri di masa subur.'
      ],
      keyPoints: [
        'Catat Tanggal Pertama Menstruasi Setiap Bulan: Hitung rata-rata panjang siklus (misal 28–35 hari).',
        'Kenali Tanda-Tanda Fisik Ovulasi: Perubahan cairan serviks (jernih dan elastis seperti putih telur) serta peningkatan suhu tubuh basal.',
        'Gunakan Strip Tes Ovulasi (LH Test) jika memerlukan kepastian waktu puncak ovulasi.',
        'Jaga Keteraturan Hubungan Suami Istri: Lakukan 2-3 kali seminggu tanpa beban atau tekanan stres berlebih.'
      ]
    },
    {
      id: 'promil-ch4',
      number: '04',
      title: 'KESIAPAN MENTAL & TABUNGAN PROMIL',
      subtitle: 'Diskusi Pasangan & Perencanaan Dana Awal',
      contentParagraphs: [
        'Perencanaan kehamilan tidak hanya seputar fisik, namun juga kesiapan emosional dan stabilitas finansial dalam menyambut kehidupan baru.',
        'Membicarakan ekspektasi, kecemasan, dan alokasi dana secara terbuka akan mempererat hubungan dan menciptakan lingkungan yang kondusif.'
      ],
      conversationTitle: 'IDE TOPIK DISKUSI BERSAMA PASANGAN (BUKAN FORM)',
      conversationQuestions: [
        {
          question: 'Bagaimana perasaan kita berdua mengenai rencana kehamilan ini?',
          contextNote: 'Saling mendengarkan tanpa menghakimi jika ada rasa gugup atau cemas.'
        },
        {
          question: 'Apakah kita sudah mengalokasikan dana khusus untuk cek kesehatan sebelum hamil, suplemen, dan tes persiapan?',
          contextNote: 'Menyiapkan tabungan awal sebelum biaya pemeriksaan kehamilan dimulai.'
        },
        {
          question: 'Bagaimana kita akan saling mendukung jika proses promil membutuhkan waktu atau penyesuaian gaya hidup?',
          contextNote: 'Memastikan pasangan hadir sebagai tim yang saling memuat ketenangan.'
        }
      ]
    }
  ]
};

export const TRIMESTER_1_DATA: StageData = {
  id: 'trimester1',
  stageNumber: '01',
  title: 'Trimester Pertama: Memulai Perjalanan',
  subtitle: 'Fondasi Awal Kehamilan',
  tagline: 'Membangun kebiasaan baru, mengumpulkan dokumen penting, dan menyelaraskan komunikasi bersama pasangan.',
  bgColor: '#F8E3E5',
  accentColor: '#B9626D',
  borderColor: '#EADDDD',
  chapters: [
    {
      id: 't1-ch1',
      number: '01',
      title: 'MULAI MENGORGANISIR',
      subtitle: 'Menata Berkas & Informasi Awal',
      contentParagraphs: [
        'Awal kehamilan adalah momen terbaik untuk mulai mengumpulkan dan merapikan berkas administrasi. Memiliki satu tempat penyimpanan khusus akan memudahkan saat bepergian untuk pemeriksaan rutin maupun kondisi mendesak.',
        'Sediakan binder atau map khusus berkas kehamilan. Pemisahan dokumen sejak dini menghindari kepanikan pencarian berkas saat dibutuhkan oleh fasilitas kesehatan.'
      ],
      editorialSections: [
        {
          title: 'Dokumen & Berkas Penting yang Perlu Disatukan',
          description: 'Simpan berkas fisik dan siapkan salinan digital (foto/PDF) di ponsel:',
          items: [
            'Buku Kesehatan Ibu dan Anak (Buku KIA) dari faskes/bidan',
            'Kartu Identitas (KTP Ibu & Suami/Pasangan)',
            'Kartu Keluarga (KK)',
            'Kartu Asuransi Kesehatan / BPJS Kesehatan aktif',
            'Hasil cetak / berkas laboratorium & USG awal'
          ],
          badgeColor: '#F8E3E5'
        },
        {
          title: 'Pengorganisasian Informasi & Kontak Ringkas',
          description: 'Gagasan sederhana untuk memudahkan koordinasi harian:',
          items: [
            'Catat jadwal rujukan/pemeriksaan rutin di kalender keluarga',
            'Simpan nomor kontak fasilitas kesehatan (nomor pendaftaran & gawat darurat)',
            'Simpan nama & nomor tenaga kesehatan yang merawat',
            'Tentukan lokasi dokumen di rumah agar pasangan juga mengetahui letaknya'
          ],
          badgeColor: '#F8F0E5'
        }
      ]
    },
    {
      id: 't1-ch2',
      number: '02',
      title: 'MULAI MEMIKIRKAN FINANSIAL',
      subtitle: 'Memahami Pos-Pos Perencanaan Awal',
      contentParagraphs: [
        'Perencanaan keuangan kehamilan bukan tentang mencari nominal pasti yang sama untuk setiap keluarga, melainkan memahami kategori pos apa saja yang akan dipersiapkan secara bertahap.',
        'Dengan memetakan pos-pos kebutuhan sejak trimester pertama, calon orang tua dapat menyesuaikan prioritas pengeluaran tanpa merasa terbebani di akhir masa kehamilan.'
      ],
      editorialSections: [
        {
          title: 'Kategori Finansial yang Mulai Dipetakan',
          description: 'Setiap keluarga dapat menyesuaikan skala prioritas sesuai kondisi pribadi:',
          items: [
            'Cek Aktivasi BPJS Kesehatan: Pastikan status kepesertaan aktif dan tidak ada tunggakan.',
            'Asuransi Swasta / Benefit Perusahaan: Pelajari cakupan klaim persalinan, batas plafon, serta klausul masa tunggu.',
            'Biaya Pemeriksaan Rutin: Estimasi biaya konsultasi, suplemen prenatal, dan pemeriksaan penunjang/USG.',
            'Biaya Persalinan Utama: Gambaran dana persalinan normal maupun tindakan medis lain di faskes tujuan.',
            'Kebutuhan Ibu & Bayi: Alokasi fleksibel untuk suplemen, pakaian nyaman ibu, dan pakaian dasar bayi.',
            'Dana Cadangan Nifas: Alokasi dana tak terduga untuk masa pemulihan dan bulan-bulan awal pasca salin.'
          ],
          badgeColor: '#F6DFD2'
        }
      ]
    },
    {
      id: 't1-ch3',
      number: '03',
      title: 'PERSIAPAN SEBAGAI PASANGAN',
      subtitle: 'Menyelaraskan Peran & Komunikasi',
      contentParagraphs: [
        'Kehamilan adalah perjalanan bersama. Perubahan fisik dan emosional pada trimester pertama adalah hal yang wajar, sehingga komunikasi terbuka menjadi kunci kenyamanan berdua.',
        'Diskusi proaktif di awal masa kehamilan membantu mencegah rasa lelah atau tumpang tindih peran di kemudian hari.'
      ],
      keyPoints: [
        'Komunikasi Perubahan Fisik & Perasaan: Bicarakan tingkat energi harian, perubahan sensitivitas aroma, serta rasa mual tanpa rasa bersalah.',
        'Pembagian Tugas Rumah Tangga: Sesuaikan kembali siapa yang menangani memasak, laundry, belanja harian, atau pekerjaan fisik berat.',
        'Penyesuaian Rutin Harian: Buat ruang istirahat yang cukup untuk ibu dan pastikan pasangan memahami perubahan ritme ini.',
        'Saling Mendukung dalam Pekerjaan: Bicarakan tenggat waktu pekerjaan masing-masing dan rencanakan fleksibilitas jam kerja jika memungkinkan.'
      ]
    },
    {
      id: 't1-ch4',
      number: '04',
      title: 'OBROLAN SAAT KONTROL',
      subtitle: 'Ide Topik Diskusi dengan Dokter/Bidan',
      contentParagraphs: [
        'Seringkali saat tiba di ruang periksa, kita lupa apa saja hal umum yang ingin ditanyakan. Berikut adalah beberapa inspirasi topik percakapan yang dapat Anda catat sebelum kontrol.'
      ],
      conversationQuestions: [
        {
          question: 'Apa saja hal umum yang perlu dipersiapkan atau diperhatikan hingga kunjungan berikutnya?',
          contextNote: 'Membantu calon orang tua memahami milestone utama di trimester pertama.'
        },
        {
          question: 'Bagaimana aturan umum penggunaan vitamin atau suplemen prenatal yang direkomendasikan?',
          contextNote: 'Dapatkan penjelasan mengenai waktu minum dan cara mengatasi ketidaknyamanan saat minum suplemen.'
        },
        {
          question: 'Kapan jadwal ideal untuk kunjungan pemeriksaan rutin berikutnya?',
          contextNote: 'Membantu Anda mencatat dan menyesuaikan kalender kegiatan keluarga.'
        },
        {
          question: 'Aktivitas fisik harian seperti apa yang umumnya tetap aman dan disarankan?',
          contextNote: 'Penjelasan umum mengenai mobilitas, pekerjaan rumah, atau perjalanan.'
        }
      ]
    }
  ]
};

export const TRIMESTER_2_DATA: StageData = {
  id: 'trimester2',
  stageNumber: '02',
  title: 'Trimester Kedua: Mulai Merencanakan',
  subtitle: 'Perencanaan Detail & Persiapan Rumah',
  tagline: 'Masa energi relatif stabil untuk mensurvei tempat persalinan, menata rumah, dan memilah barang si kecil.',
  bgColor: '#E7EFE4',
  accentColor: '#5A7555',
  borderColor: '#C9DBC5',
  chapters: [
    {
      id: 't2-ch1',
      number: '01',
      title: 'MEMILIH TEMPAT PERSALINAN',
      subtitle: 'Hal-Hal Non-Medis yang Dapat Dipertimbangkan',
      contentParagraphs: [
        'Memilih tempat persalinan (Klinik, Puskesmas, RSIA, atau Rumah Sakit) melibatkan pertimbangan logistik dan kenyamanan keluarga.',
        'Proses survei non-medis membantu pasangan merasa tenang saat hari kelahiran tiba.'
      ],
      editorialSections: [
        {
          title: 'Pertimbangan Utama dalam Survei Tempat Persalinan',
          items: [
            'Lokasi & Waktu Tempuh: Jarak dari rumah serta rute alternatif saat jam padat lalu lintas.',
            'Aksesibilitas & Parkir: Kemudahan area drop-off pasien dan area parkir untuk pendamping.',
            'Administrasi & Kerjasama: Kelengkapan syarat klaim BPJS Kesehatan atau asuransi swasta.',
            'Kebijakan Pendamping Persalinan: Jumlah pendamping yang diizinkan berada di ruang bersalin.',
            'Fasilitas Pendukung: Ketersediaan ruang rawat gabung (rooming-in) ibu dan bayi pasca salin.',
            'Prosedur Pendaftaran Awal: Langkah-langkah pendaftaran pra-persalinan yang bisa dilakukan lebih awal.'
          ],
          badgeColor: '#E7EFE4'
        }
      ]
    },
    {
      id: 't2-ch2',
      number: '02',
      title: 'PERSIAPAN FINANSIAL DETAIL',
      subtitle: 'Pemetaan Kategori Kebutuhan',
      contentParagraphs: [
        'Di trimester kedua, mulailah mengelompokkan anggaran ke dalam 6 pos utama agar arus kas keluarga tetap terjaga dengan rapi.'
      ],
      editorialSections: [
        {
          title: '6 Pos Kategori Finansial Persiapan',
          items: [
            '01. Persalinan: Estimasi paket tindakan, kamar rawat inap, & jasa medis.',
            '02. Ibu: Pakaian menyusui, pembalut nifas, & perlengkapan kenyamanan pasca salin.',
            '03. Bayi: Pakaian dasar, popok, alas tidur, & perlengkapan mandi awal.',
            '04. Transportasi: Bahan bakar, biaya tol, sewa kendaraan darurat, & parkir.',
            '05. Kebutuhan Rumah: Perlengkapan kebersihan rumah & persiapan konsumsi nifas.',
            '06. Dana Cadangan: Alokasi darurat untuk kebutuhan tak terduga.'
          ],
          badgeColor: '#F8F0E5'
        }
      ]
    },
    {
      id: 't2-ch3',
      number: '03',
      title: 'MENGENAL KEBUTUHAN BAYI',
      subtitle: 'Memilah Barang Esensial Tanpa Berlebihan',
      contentParagraphs: [
        'Daftar perlengkapan bayi sangat luas. Membagi barang ke dalam tiga tingkatan kebutuhan membantu menghemat anggaran dan ruang penyimpanan di rumah.'
      ],
      editorialSections: [
        {
          title: 'Yang Umumnya Mulai Dipersiapkan (Esensial)',
          description: 'Barang dasar yang dibutuhkan langsung pada minggu pertama:',
          items: [
            'Pakaian dasar bayi (baju newborn, celana, sarung tangan & kaki, topi)',
            'Popok bayi (kain atau sekali pakai ukuran newborn)',
            'Kain bedong & selimut lembut',
            'Perlengkapan mandi dasar & handuk lembut',
            'Kapas bulat / tisue basah khusus bayi & alas ganti popok'
          ],
          badgeColor: '#F8E3E5'
        },
        {
          title: 'Yang Bisa Dipertimbangkan (Opsional Sesuai Gaya Hidup)',
          description: 'Barang yang membantu kenyamanan namun dapat disesuaikan:',
          items: [
            'Carseat / Kursi Keamanan Bayi untuk mobil',
            'Gendongan bayi yang ergonomis',
            'Esterilisator botol atau tempat penyimpanan khusus',
            'Bantal menyusui untuk menopang posisi ibu'
          ],
          badgeColor: '#F6DFD2'
        },
        {
          title: 'Yang Tidak Harus Dibeli Terburu-buru',
          description: 'Dapat dibeli setelah bayi lahir sesuai perkembangan kebutuhan:',
          items: [
            'Sepatu bayi (bayi baru lahir belum memerlukan sepatu berstruktur)',
            'Mainan interaktif berukuran besar',
            'Stroller tingkat lanjut',
            'Pakaian ukuran besar dalam jumlah banyak'
          ],
          badgeColor: '#E7EFE4'
        }
      ]
    },
    {
      id: 't2-ch4',
      number: '04',
      title: 'MEMPERSIAPKAN RUMAH',
      subtitle: 'Penataan Sudut Nyaman Ibu & Bayi',
      contentParagraphs: [
        'Penataan rumah bukan berarti merenovasi besar-besaran, melainkan menciptakan alur gerak yang efisien dan aman bagi ibu pasca melahirkan.'
      ],
      keyPoints: [
        'Organisasi Pakaian & Popok: Letakkan baju dan popok newborn di area yang mudah dijangkau tanpa perlu membungkuk terlalu dalam.',
        'Stasiun Ganti Popok Sederhana: Sediakan wadah kecil berisi kapas, popok, dan baju ganti di area utama tempat ibu beristirahat.',
        'Sistem Laundry & Kebersihan: Siapkan tempat pakaian kotor terpisah untuk baju bayi yang membutuhkan detergen lembut.',
        'Pencahayaan Malam Hari: Sediakan lampu tidur redup (warm light) agar memudahkan proses menyusui/mengganti popok di malam hari tanpa menyilaukan.',
        'Penyimpanan Dokumen Medis: Tempatkan binder dokumen kehamilan di area yang mudah terlihat dekat pintu keluar.'
      ]
    },
    {
      id: 't2-ch5',
      number: '05',
      title: 'OBROLAN SAAT KONTROL',
      subtitle: 'Topik Diskusi Trimester Kedua',
      contentParagraphs: [
        'Beberapa hal yang dapat dibicarakan dengan dokter atau bidan selama trimester kedua:'
      ],
      conversationQuestions: [
        {
          question: 'Bagaimana saran umum terkait posisi tidur dan kenyamanan istirahat harian?',
          contextNote: 'Topik umum untuk mendukung kualitas tidur ibu.'
        },
        {
          question: 'Apakah ada kelas persiapan persalinan atau senam hamil yang disarankan di fasilitas ini?',
          contextNote: 'Inspirasi kegiatan persiapan fisik non-medis.'
        },
        {
          question: 'Dokumen administrasi apa saja yang perlu kami lengkapi sebelum masuk trimester ketiga?',
          contextNote: 'Prosedur kepesertaan atau pendaftaran persalinan.'
        }
      ]
    }
  ]
};

export const TRIMESTER_3_DATA: StageData = {
  id: 'trimester3',
  stageNumber: '03',
  title: 'Trimester Ketiga: Merapikan Persiapan',
  subtitle: 'Finalisasi Tas, Berkas, & Alur Hari-H',
  tagline: 'Tahap merapikan seluruh detail teknis, memastikan kesiapan pendamping, dan menyusun batasan kunjungan.',
  bgColor: '#F6DFD2',
  accentColor: '#A85D3B',
  borderColor: '#E5C4B0',
  chapters: [
    {
      id: 't3-ch1',
      number: '01',
      title: 'PANDUAN TAS PERSALINAN',
      subtitle: 'Visual Packing Guide (Bukan Checklist Interaktif)',
      contentParagraphs: [
        'Tas persalinan sebaiknya sudah dikemas rapi di sekitar minggu ke-35 dan diletakkan dekat pintu rumah atau di dalam kendaraan.',
        'Berikut adalah panduan kelompok barang yang umum dipersiapkan untuk ibu, bayi, pendamping, dan berkas.'
      ]
    },
    {
      id: 't3-ch2',
      number: '02',
      title: 'PERSIAPAN ADMINISTRASI',
      subtitle: 'Legalisasi & Syarat Masuk Faskes',
      contentParagraphs: [
        'Pastikan seluruh fotokopi dan dokumen asli berada dalam satu tempat yang ringkas agar pendamping dapat mengurus pendaftaran admisi dengan cepat.'
      ],
      editorialSections: [
        {
          title: 'Checklist Berkas Administrasi Utama',
          items: [
            'Fotokopi & Asli KTP Suami Istri',
            'Fotokopi Kartu Keluarga (KK) terbaru',
            'Kartu Asuransi / BPJS Kesehatan (fisik & aplikasi)',
            'Buku KIA & Lembar Rujukan (jika menggunakan BPJS)',
            'Nomor telepon admisi & kamar bersalin faskes'
          ],
          badgeColor: '#F4D5D8'
        }
      ]
    },
    {
      id: 't3-ch3',
      number: '03',
      title: 'PERSIAPAN HARI-H',
      subtitle: 'Alur & Skenario Logistik',
      contentParagraphs: [
        'Menyusun skenario alur perjalanan memberikan rasa tenang bagi ibu dan pendamping ketika tanda persalinan dimulai.'
      ]
    },
    {
      id: 't3-ch4',
      number: '04',
      title: 'SISTEM DUKUNGAN KELUARGA',
      subtitle: 'Pembagian Bantuan Praktis',
      contentParagraphs: [
        'Dukungan terbaik dari keluarga atau kerabat seringkali berupa bantuan praktis harian daripada sekadar kunjungan singkat.'
      ],
      keyPoints: [
        'Bantuan Makanan Sehat: Menerima atau meminta bantuan berupa lauk pauk siap makan.',
        'Pekerjaan Rumah Tangga: Bantuan mencuci pakaian, membersihkan rumah, atau mengurus sampah harian.',
        'Belanja Harian: Mengakomodasi kebutuhan bahan pokok rumah tanpa ibu perlu keluar rumah.',
        'Transportasi & Logistik Tambahan: Bantuan mengantar-jemput anak pertama (jika ada) atau mengambil berkas.'
      ]
    },
    {
      id: 't3-ch5',
      number: '05',
      title: 'GERAKAN JANIN & FISIK RINGAN',
      subtitle: 'Pemantauan Tendangan & Senam Hamil',
      contentParagraphs: [
        'Memasuki trimester ketiga, memantau gerakan janin secara mandiri melatih kepekaan ibu terhadap kesejahteraan bayi di dalam kandungan.',
        'Melakukan aktivitas fisik ringan juga sangat dianjurkan untuk membantu posisi kepala bayi optimal turun ke panggul.'
      ],
      editorialSections: [
        {
          title: 'Panduan Hitung Gerakan Janin (Kick Count)',
          description: 'Metode sederhana untuk memantau aktivitas bayi setiap hari:',
          items: [
            'Pilih Waktu Konsisten: Lakukan saat bayi biasanya paling aktif, seringkali setelah makan malam atau saat bersantai.',
            'Metode Hitung 10: Catat waktu yang dibutuhkan bayi untuk melakukan 10 gerakan (tendangan, gulungan, atau gerakan halus).',
            'Standar Durasi: Umumnya, 10 gerakan akan terasa dalam waktu 15 hingga 60 menit. Durasi maksimal yang wajar adalah 2 jam.',
            'Stimulasi Awal: Jika gerakan sepi, cobalah minum segelas air dingin/manis, berjalan santai sejenak, lalu berbaring miring ke kiri untuk menghitung kembali.'
          ],
          badgeColor: '#FFF9F0'
        },
        {
          title: 'Persiapan Fisik Ringan Akhir Kehamilan',
          description: 'Latihan fisik aman untuk melenturkan otot panggul & melatih napas:',
          items: [
            'Jalan Kaki Pagi/Sore: Lakukan 15-20 menit dengan kecepatan santai untuk memanfaatkan gravitasi bumi.',
            'Pelvic Tilts & Cat-Cow Pose: Gerakan yoga ringan untuk mengurangi ketegangan punggung bawah dan membuka panggul.',
            'Deep Breathing (Napas Perut): Melatih fokus emosional dan pernapasan dalam menyambut kontraksi persalinan.'
          ],
          badgeColor: '#FAF2F9'
        }
      ]
    }
  ]
};

export const PACKING_GUIDE_DATA: PackingCategory[] = [
  {
    categoryTitle: 'UNTUK IBU',
    subtitle: 'Kenyamanan & Pakaian Pasca Salin',
    iconName: 'User',
    badgeBg: '#F8E3E5',
    badgeText: '#B9626D',
    items: [
      { name: 'Pakaian Kancing Depan (2-3 stel)', note: 'Memudahkan proses menyusui & pemeriksaan' },
      { name: 'Pembalut Nifas / Maternity Pads (1-2 pak)', note: 'Daya serap ekstra untuk pasca melahirkan' },
      { name: 'Pakaian Dalam Kenyamanan Tinggi (4-5 buah)', note: 'Bahan katun lembut & ukuran longgar' },
      { name: 'Bra Menyusui (2-3 buah)', note: 'Tanpa kawat untuk kenyamanan payudara' },
      { name: 'Sandal Kamar & Kaos Kaki', note: 'Menjaga kaki tetap hangat di ruang ber-AC' },
      { name: 'Perlengkapan Mandi & Skincare Dasar', note: 'Sabun, sikat gigi, pelembab bibir, & ikat rambut' }
    ]
  },
  {
    categoryTitle: 'UNTUK BAYI',
    subtitle: 'Pakaian & Perlengkapan Pulang',
    iconName: 'Baby',
    badgeBg: '#E7EFE4',
    badgeText: '#5A7555',
    items: [
      { name: 'Baju Newborn (3-4 stel)', note: 'Bahan katun lembut yang sudah dicuci' },
      { name: 'Popok Newborn (10-12 buah)', note: 'Popok sekali pakai / kain khusus bayi baru lahir' },
      { name: 'Bedong & Selimut Bayi (2-3 lembar)', note: 'Menjaga kehangatan saat kepulangan' },
      { name: 'Sarung Tangan, Kaki, & Topi Bayi (2 set)', note: 'Mencegah goresan dan suhu dingin' },
      { name: 'Tisue Basah Khusus Bayi & Kapas Bulat', note: 'Untuk pembersihan kulit sensitif' },
      { name: 'Handuk Bayi Lembut (1-2 buah)', note: 'Bahan microfiber atau katun halus' }
    ]
  },
  {
    categoryTitle: 'UNTUK PENDAMPING',
    subtitle: 'Kebutuhan Pasangan / Keluarga',
    iconName: 'Users',
    badgeBg: '#F8F0E5',
    badgeText: '#8C633D',
    items: [
      { name: 'Pakaian Ganti Pendamping (2 stel)', note: 'Termasuk jaket hangat' },
      { name: 'Perlengkapan Mandi Ringkas', note: 'Handuk kecil, sikat gigi, & sabun' },
      { name: 'Pengisi Daya Ponsel & Powerbank', note: 'Penting untuk komunikasi keluarga' },
      { name: 'Uang Tunai Murni Secukupnya', note: 'Untuk biaya parkir atau kebutuhan mendadak' },
      { name: 'Air Minum & Camilan Ringan', note: 'Menjaga energi saat mendampingi proses persalinan' }
    ]
  },
  {
    categoryTitle: 'DOKUMEN & BERKAS',
    subtitle: 'Persyaratan Administrasi Faskes',
    iconName: 'FileCheck',
    badgeBg: '#F6DFD2',
    badgeText: '#A85D3B',
    items: [
      { name: 'Map Dokumen Transparan', note: 'Berisi KTP, KK, & Kartu Asuransi/BPJS' },
      { name: 'Buku KIA / Catatan Kehamilan', note: 'Wajib dibawa untuk rekam medis' },
      { name: 'Cetak Hasil USG & Lab Terakhir', note: 'Untuk referensi dokter/bidan pendamping' },
      { name: 'Alat Tulis / Pulpen', note: 'Untuk mengisi formulir admisi faskes' }
    ]
  }
];

export const DIAGRAM_STEPS_DATA: DiagramStep[] = [
  {
    stepNumber: '01',
    title: 'TEMPAT PERSALINAN',
    subtitle: 'Tujuan Utama & Rute',
    details: ['Pastikan alamat & nomor IGD faskes tersimpan di HP pasangan', 'Ketahui lokasi pintu masuk darurat (IGD / Pendaftaran Melahirkan)'],
    iconName: 'MapPin'
  },
  {
    stepNumber: '02',
    title: 'TRANSPORTASI',
    subtitle: 'Kendaraan & Skenario Rute',
    details: ['Bahan bakar kendaraan utama terisi penuh di minggu ke-36+', 'Siapkan nomor opsi taksi / kendaraan cadangan jika suami sedang bekerja'],
    iconName: 'Car'
  },
  {
    stepNumber: '03',
    title: 'PENDAMPING',
    subtitle: 'Siapa yang Mendampingi',
    details: ['Tentukan pendamping utama (suami) & pendamping cadangan (keluarga)', 'Pastikan pendamping memahami alur pendaftaran admisi'],
    iconName: 'UserCheck'
  },
  {
    stepNumber: '04',
    title: 'DOKUMEN',
    subtitle: 'Binder Siap Ambil',
    details: ['Binder dokumen berada di lokasi strategis dekat pintu keluar', 'Setiap dokumen penting sudah siap fotokopi salinannya'],
    iconName: 'FolderCheck'
  },
  {
    stepNumber: '05',
    title: 'TAS PERSALINAN',
    subtitle: 'Siap Masuk Mobil',
    details: ['Tas ibu, bayi, & pendamping sudah rapi di minggu ke-35', 'Letakkan di tempat yang mudah dijangkau saat berangkat'],
    iconName: 'ShoppingBag'
  },
  {
    stepNumber: '06',
    title: 'KONTAK PENTING',
    subtitle: 'Daftar Panggilan Ringkas',
    details: ['Keluarga terdekat, dokter/bidan, & kontak faskes', 'Semua nomor tersimpan dengan nama yang jelas'],
    iconName: 'PhoneCall'
  },
  {
    stepNumber: '07',
    title: 'RENCANA ALTERNATIF',
    subtitle: 'Antisipasi Kondisi Tak Terduga',
    details: ['Siapa yang menjaga rumah / anak pertama saat mendadak berangkat', 'Rute alternatif jika rute utama mengalami kemacetan parah'],
    iconName: 'ShieldAlert'
  }
];

export const MENJELANG_PERSALINAN_ITEMS: PreparednessItem[] = [
  {
    id: 'prep-1',
    title: 'Tempat Persalinan',
    subtitle: 'Kesiapan Faskes Tujuan',
    description: 'Mengetahui dengan pasti alur pendaftaran, rute menuju IGD/pintu masuk bersalin, serta berkas yang perlu diserahkan saat kedatangan.',
    keyDetails: [
      'Alamat & nomor pendaftaran IGD tersimpan di ponsel',
      'Pernah melakukan kunjungan/survei lokasi sebelumnya',
      'Mengetahui aturan pendamping di kamar bersalin'
    ],
    iconName: 'Hospital'
  },
  {
    id: 'prep-2',
    title: 'Transportasi Hari-H',
    subtitle: 'Kendaraan Utama & Cadangan',
    description: 'Memastikan kendaraan dalam kondisi prima dan siap digunakan kapan saja, termasuk saat malam hari.',
    keyDetails: [
      'Bahan bakar terisi penuh sejak minggu ke-36',
      'Menyimpan kontak layanan transportasi darurat/taksi online',
      'Sudah mengetahui estimasi waktu tempuh di jam padat'
    ],
    iconName: 'Car'
  },
  {
    id: 'prep-3',
    title: 'Pendamping Utama',
    subtitle: 'Kesiapan Pasangan / Keluarga',
    description: 'Pendamping telah memahami peran non-medis seperti membantu teknik napas, memberi minum, dan mengurus administrasi.',
    keyDetails: [
      'Pendamping siap mendampingi tanpa panik',
      'Mengetahui tempat penyimpan berkas & tas persalinan',
      'Mengetahui nomor kontak darurat keluarga'
    ],
    iconName: 'Heart'
  },
  {
    id: 'prep-4',
    title: 'Dokumen Administrasi',
    subtitle: 'Map Berkas Lengkap',
    description: 'KTP, KK, Kartu BPJS/Asuransi, dan Buku KIA tersusun rapi dalam satu map transparan.',
    keyDetails: [
      'Fotokopi dokumen sudah tersedia beberapa rangkap',
      'Kartu BPJS Kesehatan dipastikan dalam status aktif',
      'Hasil USG/pemeriksaan terakhir tersimpan rapi'
    ],
    iconName: 'FileText'
  },
  {
    id: 'prep-5',
    title: 'Tas Persalinan',
    subtitle: 'Pakaian Ibu, Bayi, & Pendamping',
    description: 'Tas sudah dikemas dan diletakkan dekat pintu keluar atau di dalam bagasi kendaraan.',
    keyDetails: [
      'Pakaian kancing depan untuk ibu siap',
      'Baju & perlengkapan pulang bayi lengkap',
      'Peralatan mandi & charger ponsel terkemas'
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'prep-6',
    title: 'Kontak Penting',
    subtitle: 'Daftar Telepon Darurat',
    description: 'Daftar nomor penting terpatri di ponsel pasangan atau ditempel di pintu kulkas rumah.',
    keyDetails: [
      'Nomor IGD / Klinik tempat bersalin',
      'Nomor kontak keluarga terdekat untuk kabar',
      'Nomor kontak tempat kerja untuk izin mendadak'
    ],
    iconName: 'Phone'
  },
  {
    id: 'prep-7',
    title: 'Pengajuan Cuti',
    subtitle: 'Serah Terima Pekerjaan',
    description: 'Rencana cuti melahirkan sudah disetujui atasan dan tim kerja memahami alur penanganan tugas selama ibu cuti.',
    keyDetails: [
      'Tanggal mulai cuti & estimasi kembali disepakati',
      'Dokumen serah terima tugas pekerjaan sudah dibagikan',
      'Kontak darurat pekerjaan telah ditentukan'
    ],
    iconName: 'Calendar'
  },
  {
    id: 'prep-8',
    title: 'Sistem Dukungan Rumah',
    subtitle: 'Bantuan Pasca Kelahiran',
    description: 'Rencana siapa yang akan membantu menyiapkan makanan atau kebersihan rumah pada minggu pertama pasca melahirkan.',
    keyDetails: [
      'Kesepakatan bantuan dengan orang tua/keluarga',
      'Stok makanan kering atau bumbu siap pakai tersedia',
      'Rencana pengasuhan anak pertama (jika ada)'
    ],
    iconName: 'Home'
  }
];

export const MENJELANG_DOCTOR_QUESTIONS: ConversationQuestion[] = [
  {
    question: 'Kapan secara umum saya perlu mulai menuju ke fasilitas kesehatan?',
    contextNote: 'Membantu memahami gambaran ritme awal persalinan secara umum.'
  },
  {
    question: 'Siapa atau ke nomor mana yang perlu dihubungi ketika proses awal persalinan dirasakan dimulai?',
    contextNote: 'Mengetahui alur komunikasi resmi dengan faskes.'
  },
  {
    question: 'Bagaimana prosedur penerimaan fasilitas kesehatan jika persalinan dimulai di luar jam operasional kontrol?',
    contextNote: 'Memahami akses masuk IGD atau ruang bersalin 24 jam.'
  },
  {
    question: 'Kondisi umum seperti apa yang menurut dokter/bidan memerlukan pertolongan atau kedatangan segera?',
    contextNote: 'Mencatat tanda-tanda umum yang membutuhkan evaluasi medis langsung.'
  },
  {
    question: 'Apa saja hal yang perlu diketahui atau dipersiapkan oleh pendamping saat tiba di ruang bersalin?',
    contextNote: 'Membantu pasangan bersiap dengan instruksi non-medis.'
  }
];

export const MENYAMBUT_BAYI_DATA: StageData = {
  id: 'menyambut',
  stageNumber: '05',
  title: 'Menyambut Si Kecil',
  subtitle: 'Persiapan untuk Babak Baru Pasca Kelahiran',
  tagline: 'Panduan ritme harian, pengurusan administrasi bayi, dan penyelarasan peran orang tua di minggu-minggu awal.',
  bgColor: '#F4D5D8',
  accentColor: '#9B414C',
  borderColor: '#E3B9BE',
  chapters: [
    {
      id: 'mb-ch1',
      number: '01',
      title: 'RUMAH SIAP BAYI',
      subtitle: 'Menciptakan Lingkungan Aman & Nyaman',
      contentParagraphs: [
        'Bayi baru lahir membutuhkan lingkungan yang bersih, tenang, dan memiliki pencahayaan serta sirkulasi udara yang baik.',
        'Fokus utama adalah kemudahan akses bagi ibu yang sedang berada dalam masa pemulihan fisik.'
      ],
      editorialSections: [
        {
          title: 'Langkah Penataan Sederhana',
          items: [
            'Stasiun Mengganti Popok: Atur permukaan datar yang aman dengan perlengkapan popok berada dalam jangkauan satu tangan.',
            'Area Menyusui Nyaman: Sediakan kursi dengan penopang punggung yang baik, bantal, dan tempat minum dekat jangkauan.',
            'Suhu & Sirkulasi Udara: Pastikan kamar memiliki ventilasi segar dan suhu yang tidak terlalu dingin atau panas.',
            'Pencahayaan Redup Malam Hari: Sediakan lampu kecil warm light agar tidak mengganggu kualitas tidur bayi saat ganti popok.'
          ],
          badgeColor: '#F8E3E5'
        }
      ]
    },
    {
      id: 'mb-ch2',
      number: '02',
      title: 'KEBUTUHAN AWAL BAYI',
      subtitle: 'Pola Rutinitas & Perawatan Dasar',
      contentParagraphs: [
        'Minggu-minggu awal adalah masa adaptasi bayi terhadap dunia luar. Bayi baru lahir umumnya tidur dan menyusu dalam ritme singkat yang sering berulang.'
      ],
      keyPoints: [
        'Ritme Menyusu & Tidur: Bayi baru lahir menyusu secara berkala. Menyiapkan mental untuk terbangun di malam hari bersama pasangan.',
        'Perawatan Tali Pusat Sederhana: Menjaga area tali pusat tetap bersih dan kering sesuai panduan tenaga kesehatan.',
        'Pembersihan Kulit & Mandi: Menggunakan air hangat suam-suam kuku dan sabun lembut khusus bayi.',
        'Pengamatan Popok Harian: Mengamati jumlah popok basah dan kotor sebagai indikasi kecukupan asupan harian.'
      ]
    },
    {
      id: 'mb-ch3',
      number: '03',
      title: 'ADMINISTRASI BAYI',
      subtitle: 'Pencatatan Sipil & BPJS Kesehatan Bayi',
      contentParagraphs: [
        'Mengurus dokumen identitas si kecil sebaiknya dilakukan di bulan pertama agar bayi terlindungi dalam sistem jaminan kesehatan.'
      ],
      editorialSections: [
        {
          title: 'Langkah Administrasi Sipil & Kesehatan Bayi',
          items: [
            'Surat Keterangan Lahir (SKL): Diperoleh dari rumah sakit/bidan tempat melahirkan.',
            'Akta Kelahiran: Diajukan melalui Dinas Kependudukan dan Catatan Sipil (Disdukcapil) setempat.',
            'Pembaruan Kartu Keluarga (KK): Memasukkan nama bayi ke dalam Kartu Keluarga.',
            'Pendaftaran BPJS Kesehatan Bayi: Mendaftarkan bayi baru lahir ke BPJS Kesehatan agar memiliki jaminan pelayanan medis.',
            'Pencatatan Kartu Identitas Anak (KIA): Diterbitkan bersamaan dengan akta kelahiran.'
          ],
          badgeColor: '#F8F0E5'
        }
      ]
    },
    {
      id: 'mb-ch4',
      number: '04',
      title: 'PENGELUARAN BULAN PERTAMA',
      subtitle: 'Memahami Kategori Rutin Pasca Salin',
      contentParagraphs: [
        'Berikut adalah gambaran kategori pengeluaran rutin yang umumnya muncul pada bulan pertama setelah bayi lahir.'
      ],
      editorialSections: [
        {
          title: 'Kategori Biaya Bulan Pertama',
          description: 'Hanya gambaran kategori, tanpa nominal universal:',
          items: [
            'Popok & Peralatan Kebersihan Bayi: Stok popok rutin, tisue basah/kapas, & sabun bayi.',
            'Kebutuhan Pemulihan Ibu: Pembalut nifas, suplemen menyusui, & makanan bergizi.',
            'Kunjungan Pemeriksaan Awal Bayi & Ibu: Biaya imunisasi dasar awal & kontrol pasca salin.',
            'Jasa Bantuan Tambahan: Biaya opsional jika menggunakan bantuan asisten / laundry.'
          ],
          badgeColor: '#F6DFD2'
        }
      ]
    },
    {
      id: 'mb-ch-babyblues',
      number: '05A',
      title: 'EDUKASI & PENCEGAHAN BABY BLUES',
      subtitle: 'Menjaga Kesehatan Mental & Emosional Pasca Melahirkan',
      contentParagraphs: [
        'Sebanyak 80% ibu baru mengalami kecemasan, gampang menangis, dan perubahan mood mendadak di 2 minggu pertama pasca melahirkan. Kondisi ini dikenal sebagai Baby Blues.',
        'Penting dipahami bahwa Baby Blues adalah reaksi hormonal dan kelelahan fisik yang sangat wajar, bukan tanda kegagalan menjadi seorang ibu. Pencegahan proaktif dan dukungan aktif dari pasangan adalah kunci pemulihan.'
      ],
      editorialSections: [
        {
          title: 'Perbedaan Baby Blues vs Depresi Pasca Melahirkan (PPD)',
          description: 'Memahami batasan normal agar dapat mengambil langkah yang tepat:',
          items: [
            'Baby Blues: Muncul hari ke-2 s/d ke-14, ditandai mood swing, mudah menangis, dan cemas ringan. Mereda sendiri dengan istirahat & dukungan.',
            'Depresi Pasca Melahirkan (PPD): Berlangsung lebih dari 2-3 minggu, rasa sedih mendalam terus-menerus, merasa terpisah dari bayi, atau kecemasan parah. Membutuhkan pendampingan dokter/psikolog.',
            'Faktor Pemicu Utama: Anjloknya hormon estrogen & progesteron secara drastis pasca persalinan, ditambah krisis kurang tidur (sleep deprivation).'
          ],
          badgeColor: '#F8E3E5'
        },
        {
          title: '5 Langkah Taktis Mencegah Baby Blues',
          description: 'Pencegahan yang disepakati bersama pasangan sejak sebelum persalinan:',
          items: [
            '1. Rotasi Shift Tidur Pasangan: Bagi tugas malam agar ibu bisa tidur tanpa terputus minimal 4 jam berturut-turut.',
            '2. Validasi Emosi Bebas Penghakiman: Izinkan ibu menangis atau mengekspresikan lelah tanpa disalahkan.',
            '3. Batasi Kunjungan Tamu di 2 Minggu Pertama: Jaga ketenangan kamar dan fokus pemulihan fisik ibu.',
            '4. Pastikan Asupan Nutrisi & Cairan Hangat: Sediakan air minum dan makanan bergizi dalam jangkauan ibu.',
            '5. Luangkan Waktu Me-Time 15-30 Menit: Ibu tetap butuh mandi tenang, menghirup udara segar, atau minum teh hangat.'
          ],
          badgeColor: '#E7EFE4'
        },
        {
          title: 'Peran Kunci Suami / Pasangan dalam Pencegahan',
          items: [
            'Inisiatif Tanpa Diminta: Ambil alih tugas ganti popok, menyendawakan bayi, dan membawa baju kotor ke laundry.',
            'Garda Depan Tamu: Menjadi penyaring kunjungan kerabat agar ibu punya waktu istirahat yang cukup.',
            'Pemberi Afirmasi Harian: Ingatkan ibu bahwa ia melakukan pekerjaan yang luar biasa dan tidak sendirian.'
          ],
          badgeColor: '#F8F0E5'
        }
      ],
      keyPoints: [
        'Baby Blues dialami mayoritas ibu baru dan umum berlangsung hingga 14 hari pasca melahirkan.',
        'Kurang tidur adalah pemicu utama; rotasi tugas bersama suami sangat krusial.',
        'Jika rasa sedih/cemas berlanjut lebih dari 2 minggu, segera hubungi fasilitas kesehatan atau psikolog.'
      ]
    },
    {
      id: 'mb-ch5',
      number: '05B',
      title: 'PEMBAGIAN PERAN ORANG TUA',
      subtitle: 'Kerja Sama Tim dalam Pengasuhan',
      contentParagraphs: [
        'Mengasuh bayi baru lahir adalah tugas dua orang. Pembagian peran yang fleksibel dan saling menghargai akan menjaga kesehatan emosional berdua.'
      ],
      keyPoints: [
        'Pengelolaan Waktu Malam: Pasangan dapat membantu menyendawakan bayi, mengganti popok, atau menggendong setelah ibu menyusui.',
        'Pengurusan Makanan & Nutrisi Ibu: Pasangan memastikan ibu mendapat asupan makanan hangat dan air minum yang cukup.',
        'Pekerjaan Rumah & Laundry: Mengambil alih tugas mencuci pakaian bayi dan merapikan tempat tidur.',
        'Komunikasi Bebas Penghakiman: Saling memberi apresiasi dan mendengarkan keluh kesah saat lelah.'
      ]
    },
    {
      id: 'mb-ch6',
      number: '06',
      title: 'SISTEM DUKUNGAN & BATASAN',
      subtitle: 'Mengelola Bantuan & Privasi Pasca Salin',
      contentParagraphs: [
        'Menerima bantuan dari orang tua, mertua, atau kerabat dapat sangat membantu, namun penting untuk menyelaraskan harapan agar privasi dan waktu istirahat ibu baru tetap terlindungi.',
        'Mengomunikasikan batasan kunjungan secara santun dan asertif adalah kunci menjaga kedamaian emosional serta fisik selama masa nifas.'
      ],
      editorialSections: [
        {
          title: 'Ide Batasan Santun untuk Keluarga & Tamu (Masa Nifas)',
          description: 'Batasan yang bisa dikomunikasikan secara asertif melalui pasangan atau pesan singkat:',
          items: [
            'Atur Jam Kunjungan: Tetapkan jam khusus (misalnya pukul 15.00 - 17.00) dan minta tamu untuk mengonfirmasi kehadiran terlebih dahulu.',
            'Durasi Kunjungan Singkat: Batasi kunjungan maksimal 15-30 menit saja agar ibu dan bayi bisa segera kembali beristirahat.',
            'Prosedur Kebersihan & Kesehatan: Pastikan seluruh tamu mencuci tangan dengan sabun, menggunakan hand sanitizer, dan tidak menyentuh/mencium area wajah bayi.',
            'Privasi Menyusui & Istirahat Ibu: Jangan sungkan untuk meminta waktu jeda menyusui di kamar khusus atau meminta pasangan mengarahkan tamu saat ibu perlu tidur.'
          ],
          badgeColor: '#E7EFE4'
        }
      ]
    },
    {
      id: 'mb-ch7',
      number: '07',
      title: 'PERSIAPAN KEMBALI BEKERJA',
      subtitle: 'Transisi Cuti & Pengasuhan Seterusnya',
      contentParagraphs: [
        'Bagi ibu atau pasangan yang bekerja, merencanakan transisi kembali bekerja sejak beberapa minggu sebelum masa cuti berakhir membantu meminimalkan kecemasan.'
      ],
      editorialSections: [
        {
          title: 'Gagasan Persiapan Transisi Kerja',
          items: [
            'Menentukan Pengasuh Utama: Mengonfirmasi opsi pengasuhan (keluarga, pengasuh di rumah, atau day care).',
            'Simulasi Ritme Harian: Mempraktikkan jadwal harian baru 1-2 minggu sebelum kembali bekerja.',
            'Manajemen Perah & ASI (jika menyusui): Mempersiapkan peralatan perah, botol, dan lokasi penyimpanan.',
            'Komunikasi Fleksibilitas Jam Kerja: Berdiskusi dengan tim kerja mengenai ritme kerja saat awal masuk.'
          ],
          badgeColor: '#E7EFE4'
        }
      ]
    }
  ]
};
