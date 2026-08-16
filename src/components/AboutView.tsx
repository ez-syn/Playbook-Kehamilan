import React from 'react';
import { PageView } from '../types';
import { ShieldCheck, Info, Heart, ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { BotanicalBranch, BotanicalFlower } from './BotanicalDecoration';
import { BabyFaceIcon } from './BabyIllustrations';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-10 bg-[#FFF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADDDD] pb-4">
          <button
            id="about-back-home-btn"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#776B6D] hover:text-[#3D3435] transition-colors bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#EADDDD]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>

          <span className="text-xs text-[#776B6D] font-medium uppercase tracking-wider bg-[#F8F0E5] px-3 py-1 rounded-full">
            Informasi Produk
          </span>
        </div>

        {/* Hero Header */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border-2 border-[#EADDDD] shadow-xs space-y-6 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#B9626D] text-white mx-auto flex items-center justify-center shadow-xs border-2 border-[#EADDDD]">
            <BabyFaceIcon className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center">
              <span className="text-xs uppercase tracking-wider text-[#9B414C] font-black bg-[#F8E3E5] px-3 py-1 rounded-full border border-[#EADDDD]">
                PLAYBOOK BY EZPLAN
              </span>
            </div>
            <h1 className="ad-title text-3xl sm:text-4xl font-black text-[#1A1112]">
              Teman Kehamilan
            </h1>
          </div>

          <p className="text-xs text-[#524446] font-bold max-w-md mx-auto leading-normal">
            Panduan Praktis dari Awal Kehamilan hingga Menyambut Si Kecil
          </p>
        </div>

        {/* Official Statement Card */}
        <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#EADDDD] shadow-xs space-y-6">
          <div className="flex items-center gap-3 border-b border-[#EADDDD] pb-4">
            <div className="w-10 h-10 rounded-full bg-[#E7EFE4] text-[#5A7555] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-editorial text-xl font-bold text-[#3D3435]">
                Pernyataan Resmi & Batasan Produk
              </h2>
              <p className="text-xs text-[#776B6D]">
                Informasi penting mengenai peran dan batasan aplikasi EZPlan.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#3D3435] leading-relaxed">
            <p>
              EZPlan Panduan Kehamilan dibuat sebagai materi perencanaan dan edukasi umum untuk membantu calon orang tua mempersiapkan perjalanan kehamilan, persalinan, dan kedatangan bayi.
            </p>

            <div className="bg-[#F8E3E5]/60 p-4 rounded-2xl border border-[#EADDDD] text-xs font-semibold text-[#B9626D]">
              EZPlan BUKAN penyedia layanan kesehatan, dokter, bidan, atau fasilitas medis.
            </div>

            <p>
              Informasi di dalam panduan ini tidak dimaksudkan sebagai diagnosis, rekomendasi medis, interpretasi kondisi kesehatan, maupun pengganti konsultasi dengan dokter, bidan, atau tenaga kesehatan lainnya.
            </p>

            <p>
              Keputusan terkait pemeriksaan, obat, suplemen, gejala, kondisi kehamilan, persalinan, serta kesehatan ibu dan bayi perlu didiskusikan dengan tenaga kesehatan.
            </p>
          </div>
        </div>

        {/* Product Positioning Summary */}
        <div className="bg-[#F8F0E5]/60 p-6 sm:p-8 rounded-3xl border border-[#E6D7C3] space-y-4">
          <h2 className="font-editorial text-xl font-bold text-[#3D3435]">
            Prinsip Bebas Data & Privasi
          </h2>
          <ul className="space-y-2 text-xs text-[#776B6D]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
              <span>Aplikasi ini 100% statis — tidak mengumpulkan nama, email, HPHT, HPL, atau data kesehatan pribadi Anda.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
              <span>Tidak membutuhkan pendaftaran akun, login, atau koneksi ke server mana pun.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9626D] mt-1.5 shrink-0" />
              <span>Pengguna datang murni untuk membaca, menjelajahi, dan memahami opsi persiapan secara mandiri.</span>
            </li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="text-center pt-2">
          <button
            id="about-to-journey-btn"
            onClick={() => {
              onNavigate('journey');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full bg-[#B9626D] text-white text-xs font-bold hover:bg-[#D9828B] transition-colors shadow-xs"
          >
            Mulai Jelajahi Panduan Perjalanan
          </button>
        </div>

      </div>
    </div>
  );
};
