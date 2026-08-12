import { TopicArticle } from '../types';

export const TOPIC_ARTICLES: TopicArticle[] = [
  // 1. TAS PERSALINAN
  {
    id: 'art-tas-1',
    title: 'Panduan Memilih & Mengemas Tas Persalinan Tanpa Berlebihan',
    categoryId: 'tas-persalinan',
    stage: 'Trimester Ketiga',
    summary: 'Bagaimana membagi isi tas ke dalam 4 kategori (Ibu, Bayi, Pendamping, & Dokumen) agar tidak memboyong terlalu banyak barang ke rumah sakit.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Gunakan tas terpisah untuk pakaian ibu/bayi dan dokumen medis.',
      'Siapkan tas di minggu ke-35 dan letakkan di dekat pintu keluar rumah.',
      'Bawa pakaian berkancing depan untuk kemudahan menyusui dan pemeriksaan.'
    ],
    sections: [
      {
        heading: 'Prinsip Kepraktisan Tas Persalinan',
        body: 'Mengemas tas persalinan bukan tentang membawa seluruh perlengkapan kamar bayi ke rumah sakit, melainkan membawa barang esensial yang membuat masa inap 2–3 hari terasa nyaman dan tenang.',
        bulletPoints: [
          'Pisahkan dokumen medis di map yang mudah diambil tanpa perlu membongkar isi pakaian.',
          'Pilih pakaian berukuran sedikit lebih besar untuk kenyamanan perut pasca melahirkan.',
          'Sediakan beberapa kantong plastik terpisah untuk baju kotor.'
        ]
      },
      {
        heading: 'Kenyamanan Khusus Pendamping',
        body: 'Pasangan atau pendamping akan menghabiskan waktu lama di ruang tunggu atau kamar inap. Menyiapkan jaket, alas kaki yang nyaman, charger dengan kabel panjang, dan uang tunai murni akan sangat membantu.'
      }
    ]
  },
  {
    id: 'art-tas-2',
    title: 'Checklist Tas Melahirkan Khusus Suami & Pendamping',
    categoryId: 'tas-persalinan',
    stage: 'Trimester Ketiga',
    summary: 'Daftar barang esensial yang wajib dibawa pendamping agar siap siaga membantu proses pendaftaran medis dan kenyamanan selama menjaga ibu.',
    readTime: '3 menit baca',
    keyTakeaways: [
      'Bawa binder dokumen berisi fotokopi KTP, KK, dan kartu asuransi/BPJS.',
      'Sediakan pakaian ganti yang nyaman untuk 2-3 hari masa inap.',
      'Siapkan barang pendukung seperti charger kabel panjang, dompet domisili, dan cemilan energi.'
    ],
    sections: [
      {
        heading: 'Kebutuhan Administrasi & Keuangan',
        body: 'Pendamping adalah orang pertama yang mengurus admisi rumah sakit saat ibu masuk ruang tindakan. Memastikan seluruh berkas berada dalam satu dompet/binder khusus menghindarkan kepanikan.',
        bulletPoints: [
          'KTP Suami & Istri (Asli & Fotokopi)',
          'Kartu BPJS Kesehatan / Kartu Asuransi Swasta',
          'Buku KIA / Catatan Pemeriksaan Kehamilan Terakhir',
          'Uang tunai secukupnya untuk keperluan mendadak'
        ]
      }
    ]
  },

  // 2. KEBUTUHAN BAYI
  {
    id: 'art-bayi-1',
    title: 'Memilah Kebutuhan Bayi Baru Lahir: Esensial vs Opsional',
    categoryId: 'kebutuhan-bayi',
    stage: 'Trimester Kedua & Ketiga',
    summary: 'Panduan memilah perlengkapan si kecil dari pakaian dasar, popok, hingga peralatan mandi agar tidak tergiur membeli barang yang belum dibutuhkan.',
    readTime: '5 menit baca',
    keyTakeaways: [
      'Pakaian ukuran newborn sebaiknya dibeli dalam jumlah secukupnya karena pertumbuhan bayi sangat cepat.',
      'Fokus pada bahan katun lembut yang menyerap keringat dan tidak memiliki banyak jahitan kasar.',
      'Beberapa barang seperti sepatu dan mainan besar bisa ditunda hingga bulan-bulan berikutnya.'
    ],
    sections: [
      {
        heading: 'Pakaian & Tekstil Dasar',
        body: 'Bayi baru lahir membutuhkan pergantian pakaian beberapa kali sehari. Namun, ukuran newborn umumnya hanya terpakai 3–4 minggu.',
        bulletPoints: [
          '6–8 stel baju newborn (kombinasi lengan pendek dan panjang)',
          '10–12 popok kain / sekali pakai ukuran newborn',
          '3–4 bedong lembut yang ramah kulit',
          '2 pasang sarung tangan dan kaos kaki'
        ]
      },
      {
        heading: 'Peralatan Mandi & Perawatan Kulit',
        body: 'Kulit bayi baru lahir sangat sensitif. Cukup gunakan sabun-shampo 2-in-1 berformula lembut, handuk halus, serta kapas bulat dan air hangat untuk pembersihan harian.'
      }
    ]
  },
  {
    id: 'art-bayi-2',
    title: 'Panduan Memilih Stroller, Boks Bayi, & Car Seat Sesuai Kebutuhan',
    categoryId: 'kebutuhan-bayi',
    stage: 'Trimester Ketiga',
    summary: 'Tips menginvestasikan anggaran pada peralatan perlengkapan bayi berukuran besar (big ticket items) tanpa pemborosan.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Pastikan boks bayi memiliki jarak jeruji aman dan posisi kasur yang ergonomis.',
      'Pilih car seat kategori rear-facing newborn jika berencana rutin bepergian dengan mobil.',
      'Stroller posisi lay-flat (180 derajat) adalah syarat wajib untuk bayi usia 0-6 bulan.'
    ],
    sections: [
      {
        heading: 'Fitur Keamanan Utama',
        body: 'Peralatan besar membutuhkan pertimbangan keamanan standar internasional dan kemudahan penggunaan harian oleh orang tua.',
        bulletPoints: [
          'Car Seat: Pilih yang memiliki sertifikasi standar keamanan dan pas di jok mobil keluarga.',
          'Boks Tempat Tidur: Pastikan matras pas dan tidak longgar di tepi tempat tidur.',
          'Stroller: Pastikan pengunci roda berfungsi dengan kokoh dan gampang dilipat.'
        ]
      }
    ]
  },

  // 3. PERSIAPAN RUMAH
  {
    id: 'art-rumah-1',
    title: 'Menata Sudut Rumah Siap Bayi Tanpa Renovasi Besar',
    categoryId: 'rumah',
    stage: 'Trimester Kedua',
    summary: 'Langkah sederhana menciptakan ruang aman dan ergonomis bagi ibu yang sedang berada dalam masa pemulihan fisik.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Gunakan stasiun ganti popok yang sejajar dengan pinggang agar ibu tidak sering membungkuk.',
      'Sediakan pencahayaan malam redup di area kamar tidur.',
      'Pastikan alur jalan dari tempat tidur ke kamar mandi bebas dari barang berserakan.'
    ],
    sections: [
      {
        heading: 'Keamanan & Ergonomi Ibu',
        body: 'Pasca melahirkan, otot inti dan punggung ibu membutuhkan waktu untuk pulih. Memposisikan tempat tidur dan perlengkapan bayi secara ergonomis akan sangat mengurangi rasa pegal.',
        bulletPoints: [
          'Letakkan wadah perlengkapan popok dekat tempat tidur ibu.',
          'Pilih lampu tidur warm-light agar tidak mengagetkan mata bayi saat bangun di malam hari.',
          'Atur tempat penyimpanan baju bayi berdasarkan kategori agar pasangan mudah menemukannya.'
        ]
      }
    ]
  },
  {
    id: 'art-rumah-2',
    title: 'Kebersihan & Sterilisasi Kamar serta Pakaian Bayi Baru Lahir',
    categoryId: 'rumah',
    stage: 'Trimester Ketiga',
    summary: 'Panduan mencuci baju bayi pertama kali, membersihkan debu kamar, dan menyiapkan ventilasi udara yang sehat.',
    readTime: '3 menit baca',
    keyTakeaways: [
      'Cuci seluruh pakaian dan bedong baru dengan deterjen khusus bayi bebas pewangi kuat.',
      'Bersihkan AC dan ganti sprei kamar 1-2 minggu sebelum estimasi persalinan.',
      'Sediakan wadah tertutup khusus untuk popok kotor agar ruangan tetap segar.'
    ],
    sections: [
      {
        heading: 'Persiapan Tekstil & Sirkulasi Udara',
        body: 'Pakaian baru dari toko berpotensi membawa debu pabrik. Mencuci bersih sebelum dipakai bayi adalah langkah pencegahan iritasi kulit.',
        bulletPoints: [
          'Gunakan deterjen hypoallergenic untuk pakaian bayi.',
          'Jemur di bawah sinar matahari atau gunakan pengering bersuhu pas.',
          'Simpan di lemari tertutup yang bersih dan bebas lembab.'
        ]
      }
    ]
  },

  // 4. PERENCANAAN FINANSIAL
  {
    id: 'art-fin-1',
    title: 'Memahami Pos Perencanaan Finansial Kehamilan & Persalinan',
    categoryId: 'finansial',
    stage: 'Trimester Pertama & Kedua',
    summary: 'Mengenal 6 pos anggaran perencanaan keluarga tanpa patokan nominal kaku, disesuaikan dengan skala prioritas pribadi.',
    readTime: '5 menit baca',
    keyTakeaways: [
      'Pelajari hak klaim BPJS Kesehatan dan asuransi swasta sebelum masuk masa persalinan.',
      'Bagi anggaran ke dalam pos persalinan, kebutuhan ibu, kebutuhan bayi, dan dana cadangan.',
      'Sisihkan dana tak terduga untuk mengantisipasi perubahan tindakan atau masa inap tambahan.'
    ],
    sections: [
      {
        heading: 'Pemetaan Pos Finansial Utama',
        body: 'Biaya persalinan sangat bervariasi tergantung faskes dan tindakan medis. Memahami alokasi pos membantu keluarga merencanakan keuangan secara terstruktur.',
        bulletPoints: [
          'Pos Medis Persalinan: Biaya kamar, kamar bersalin, dan jasa medis.',
          'Pos Kebutuhan Ibu & Nifas: Nutrisi, pembalut nifas, dan perlengkapan menyusui.',
          'Pos Perlengkapan Bayi: Pakaian dasar, popok, dan imunisasi dasar.',
          'Pos Dana Cadangan: Alokasi fleksibel untuk hal-hal yang tidak terduga.'
        ]
      }
    ]
  },
  {
    id: 'art-fin-2',
    title: 'Menyusun Pos Anggaran Kebutuhan Harian Bayi & Dana Darurat Nifas',
    categoryId: 'finansial',
    stage: 'Trimester Ketiga',
    summary: 'Mengestimasi pengeluaran bulanan berulang setelah bayi lahir seperti popok, imunisasi rutin, dan suplemen ibu.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Alokasikan dana khusus untuk imunisasi dasar bayi usia 0-6 bulan.',
      'Sediakan dana darurat nifas untuk biaya konsultan menyusui atau asupan nutrisi tambahan.',
      'Hindari utang konsumtif hanya untuk membeli perlengkapan bayi yang bersifat estetika sementara.'
    ],
    sections: [
      {
        heading: 'Pengeluaran Berulang Pasca Melahirkan',
        body: 'Selain biaya persalinan, penting bagi keluarga untuk memperhitungkan arus kas bulanan di 3 bulan pertama kehidupan bayi.',
        bulletPoints: [
          'Biaya Popok & Perawatan Harian',
          'Biaya Imunisasi Rutin ke Faskes / Dokter Anak',
          'Suplemen Pemulihan Ibu & Dukungan Menyusui'
        ]
      }
    ]
  },

  // 5. ADMINISTRASI & LEGALISASI
  {
    id: 'art-adm-1',
    title: 'Langkah Mengatur Administrasi Kehamilan, BPJS, & Asuransi',
    categoryId: 'administrasi',
    stage: 'Semua Tahap',
    summary: 'Bagaimana menyusun binder dokumen, mengurus rujukan BPJS, dan mempersiapkan berkas pencatatan sipil bayi.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Pastikan status kepesertaan BPJS Kesehatan suami dan istri dalam kondisi aktif.',
      'Ketahui alur rujukan dari Faskes Tingkat 1 ke Faskes Rujukan.',
      'Simpan fotokopi KTP dan KK dalam satu map khusus yang mudah diakses pendamping.'
    ],
    sections: [
      {
        heading: 'Sistem Binder Berkas Ringkas',
        body: 'Memiliki satu binder transparan dengan sekat warna akan mempermudah siapapun yang membantu mengurus pendaftaran di faskes.',
        bulletPoints: [
          'Sekat 1: Identitas Pribadi (KTP, KK, Kartu BPJS/Asuransi)',
          'Sekat 2: Rekam Medis (Buku KIA, Hasil USG, Surat Rujukan)',
          'Sekat 3: Berkas Persalinan (Surat Keterangan Lahir, Formulir Admisi)'
        ]
      }
    ]
  },
  {
    id: 'art-adm-2',
    title: 'Panduan Pengurusan Akta Kelahiran, KK, & BPJS Bayi Baru Lahir',
    categoryId: 'administrasi',
    stage: 'Menyambut Bayi',
    summary: 'Langkah taktis bagi ayah/pasangan dalam mengurus dokumen resmi kependudukan si kecil dalam 30 hari pertama.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Minta Surat Keterangan Lahir (SKL) asli dari rumah sakit/bidan tempat melahirkan.',
      'Daftarkan bayi ke dalam Kartu Keluarga (KK) baru secara online atau via Dukcapil.',
      'Daftarkan ke BPJS Kesehatan maksimal 28 hari sejak bayi dilahirkan.'
    ],
    sections: [
      {
        heading: 'Urutan Dokumen Kependudukan',
        body: 'Mengurus dokumen kependudukan secara tepat waktu memastikan bayi terlindungi akses layanan kesehatan dan BPJS secara berkelanjutan.',
        bulletPoints: [
          'Langkah 1: Ambil Surat Keterangan Lahir dari faskes.',
          'Langkah 2: Perbarui KK dan ajukan Akta Kelahiran di Dukcapil.',
          'Langkah 3: Perbarui kepesertaan BPJS Kesehatan bayi dari NIK sementara ke NIK resmi.'
        ]
      }
    ]
  },

  // 6. PERSIAPAN PASANGAN
  {
    id: 'art-pas-1',
    title: 'Membangun Kerjasama Tim dengan Pasangan di Masa Kehamilan',
    categoryId: 'pasangan',
    stage: 'Trimester Pertama & Kedua',
    summary: 'Cara mendiskusikan pembagian peran harian, dukungan emosional, dan kesiapan mental sebagai orang tua baru.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Bicarakan ekspektasi harian secara berkala tanpa menunggu timbulnya rasa lelah berlebih.',
      'Libatkan pasangan dalam setiap pemeriksaan kontrol dan kelas persiapan.',
      'Bagi tugas fisik rumah tangga sesuai tingkat energi ibu di tiap trimester.'
    ],
    sections: [
      {
        heading: 'Diskusi Peran yang Produktif',
        body: 'Pasangan seringkali ingin membantu namun bingung harus mulai dari mana. Memberikan daftar bantuan yang spesifik akan membuat kerjasama tim berjalan lebih efektif.',
        bulletPoints: [
          'Pasangan mengambil alih tugas mengangkat barang berat dan urusan logistik.',
          'Menyepakati alur komunikasi keluarga saat hari persalinan.',
          'Mendukung waktu istirahat ibu tanpa merasa ditinggalkan.'
        ]
      }
    ]
  },
  {
    id: 'art-pas-2',
    title: 'Mengenal Baby Blues & Peran Pasangan dalam Pendampingan Emosional',
    categoryId: 'baby-blues',
    stage: 'Menyambut Bayi',
    summary: 'Memahami perubahan mood pasca melahirkan, peran pasangan dalam pengamatan emosional, dan cara memberi dukungan nyata.',
    readTime: '5 menit baca',
    keyTakeaways: [
      'Baby blues dialami hingga 80% ibu baru dan umumnya mereda dalam 10-14 hari.',
      'Dukungan penuh pasangan melalui tindakan praktis sangat membantu pemulihan emosional ibu.',
      'Validasi perasaan ibu tanpa menghakimi atau menyalahkan.'
    ],
    sections: [
      {
        heading: 'Tindakan Nyata untuk Pasangan',
        body: 'Perubahan hormon yang drastis dikombinasikan dengan kurang tidur dapat menguras emosi ibu baru. Pendamping harus tanggap memberi bantuan fisik dan validasi emosional.',
        bulletPoints: [
          'Bantu mengambil alih tugas menenangkan bayi di malam hari.',
          'Pastikan ibu tetap mengonsumsi makanan hangat dan minum air putih cukup.',
          'Dengarkan keluh kesah ibu tanpa memberi penceramah yang menghakimi.'
        ]
      }
    ]
  },
  {
    id: 'art-bb-2',
    title: '5 Langkah Praktis Mencegah Baby Blues di Rumah',
    categoryId: 'baby-blues',
    stage: 'Menyambut Bayi',
    summary: 'Bagaimana membuat rencana shift malam bersama pasangan, membatasi kunjungan kerabat, dan menjaga me-time ibu demi kestabilan mental.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Regenerasi neurotransmiter di otak membutuhkan tidur tanpa putus minimal 4 jam.',
      'Mengurangi stimulus sosial berlebih di 14 hari pertama mempercepat pemulihan psikologis ibu.',
      'Mandi air hangat tenang dan minum teh hangat 15 menit adalah obat mental yang luar biasa.'
    ],
    sections: [
      {
        heading: 'Sistem Shift Malam & Perlindungan Tidur',
        body: 'Kurang tidur (sleep deprivation) adalah faktor pemicu utama fluktuasi emosi pasca bersalin. Pastikan ibu mendapatkan satu sesi tidur solid.',
        bulletPoints: [
          'Pasangan bertugas menyendawakan dan mengganti popok bayi setelah disusui.',
          'Jika bayi mengonsumsi ASIP/suplementasi, pasangan bisa memegang shift malam penuh 4-5 jam.',
          'Gunakan penyumbat telinga (earplugs) untuk ibu saat giliran istirahat agar tidak mudah terbangun oleh suara halus bayi.'
        ]
      }
    ]
  },

  // 7. SISTEM DUKUNGAN
  {
    id: 'art-duk-1',
    title: 'Mengatur Sistem Dukungan Keluarga & Menyampaikan Batasan Santun',
    categoryId: 'sistem-dukungan',
    stage: 'Trimester Ketiga & Menyambut Bayi',
    summary: 'Meminta bantuan praktis dari keluarga terdekat sekaligus menjaga privasi dan waktu istirahat di masa nifas.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Fokuskan bantuan keluarga pada penyediaan makanan hangat dan kebersihan rumah.',
      'Sampaikan jadwal kunjungan tamu secara sopan namun jelas.',
      'Utamakan waktu pemulihan ibu dan pembentukan ikatan batin bersama bayi di minggu awal.'
    ],
    sections: [
      {
        heading: 'Bantuan Praktis vs Kunjungan Tamu',
        body: 'Dukungan terbaik pasca melahirkan adalah bantuan yang mengurangi beban kerja harian orang tua baru.',
        bulletPoints: [
          'Mengatur tim pasokan makanan sehat dari keluarga.',
          'Membatasi durasi kunjungan tamu maksimal 20–30 menit.',
          'Meminta tamu mencuci tangan sebelum berinteraksi dekat dengan bayi.'
        ]
      }
    ]
  },
  {
    id: 'art-duk-2',
    title: 'Mengelola Etika & Waktu Kunjungan Tamu di Masa Nifas',
    categoryId: 'sistem-dukungan',
    stage: 'Menyambut Bayi',
    summary: 'Panduan membuat kesepakatan keluarga agar kedatangan tamu tidak mengganggu jadwal tidur bayi dan pemulihan fisik ibu.',
    readTime: '3 menit baca',
    keyTakeaways: [
      'Tentukan jam khusus menerima tamu (misal pukul 10.00-12.00 saja).',
      'Minta pasangan menjadi juru bicara yang ramah namun tegas menjaga waktu istirahat.',
      'Prioritaskan kesehatan fisik ibu dan imun awal bayi.'
    ],
    sections: [
      {
        heading: 'Komunikasi Santun dengan Kerabat',
        body: 'Kerabat yang berkunjung memiliki niat baik. Mengomunikasikan kondisi kesehatan ibu dan bayi secara terbuka akan dihargai oleh semua pihak.',
        bulletPoints: [
          'Kirimkan pesan santun berisi ucapan terima kasih atas doa dan info jam istirahat.',
          'Sediakan hand sanitizer di pintu masuk rumah.',
          'Ingatkan tamu yang sedang tidak fit untuk menunda kunjungan.'
        ]
      }
    ]
  },

  // 8. PEKERJAAN & CUTI
  {
    id: 'art-cut-1',
    title: 'Rencana Cuti Melahirkan & Transisi Kembali Bekerja',
    categoryId: 'pekerjaan-cuti',
    stage: 'Trimester Ketiga & Menyambut Bayi',
    summary: 'Menyusun dokumen serah terima tugas pekerjaan, mengajukan cuti, dan mempersiapkan skenario pengasuhan.',
    readTime: '5 menit baca',
    keyTakeaways: [
      'Komunikasikan tanggal estimasi cuti jauh hari kepada atasan dan tim kerja.',
      'Buat dokumen serah terima tugas (handover) yang detail.',
      'Simulasikan rutinitas harian baru 1-2 minggu sebelum kembali bekerja.'
    ],
    sections: [
      {
        heading: 'Langkah Transisi Pekerjaan yang Tenang',
        body: 'Mengatur urusan pekerjaan sebelum cuti melahirkan memberikan ketenangan pikiran selama ibu fokus pada persalinan dan masa nifas.',
        bulletPoints: [
          'Tentukan siapa penanggung jawab utama tiap proyek yang ditinggalkan.',
          'Sepakati jalur komunikasi darurat jika ada hal yang sangat mendesak.',
          'Evaluasi opsi pengasuhan anak secara matang sebelum masa cuti berakhir.'
        ]
      }
    ]
  },
  {
    id: 'art-cut-2',
    title: 'Hak Cuti Ayah (Paternity Leave) & Strategi Mengatur Jadwal Kerja Pasangan',
    categoryId: 'pekerjaan-cuti',
    stage: 'Trimester Ketiga & Menyambut Bayi',
    summary: 'Memanfaat hak cuti pendampingan bersalin bagi suami dan menyelaraskan jadwal kerja di minggu pertama persalinan.',
    readTime: '4 menit baca',
    keyTakeaways: [
      'Ajukan izin / cuti pendampingan persalinan ke HRD perusahaan 1-2 bulan sebelumnya.',
      'Manfaatkan cuti ayah khusus untuk mendampingi masa krusial di faskes dan minggu pertama di rumah.',
      'Atur ritme fleksibilitas kerja pasangan jika tersedia fasilitas WFH atau jam kerja fleksibel.'
    ],
    sections: [
      {
        heading: 'Perencanaan Cuti Suami',
        body: 'Kehadiran penuh suami di minggu pertama persalinan berpengaruh besar terhadap keberhasilan awal menyusui dan pemulihan mental ibu.',
        bulletPoints: [
          'Hitung estimasi tanggal persalinan (HPL) dan siapkan alokasi cuti.',
          'Koordinasikan tugas pekerjaan dengan rekan tim kantor sebelum tanggal HPL.',
          'Fokuskan waktu cuti untuk mendampingi ibu dan menangani logistik rumah tangga.'
        ]
      }
    ]
  }
];
