import React, { useState } from 'react';
import { BabyFaceIcon } from './BabyIllustrations';
import { Lock, User, Eye, EyeOff, KeyRound, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

interface LoginViewProps {
  onLoginSuccess: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      // Validate credentials
      if (username.trim() === 'ezplan26' && password === 'ezplan@123') {
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError('Username atau password yang Anda masukkan salah.');
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F6] text-[#3D3435] flex flex-col justify-between font-sans selection:bg-[#F8E3E5] selection:text-[#B9626D] relative overflow-hidden">
      
      {/* Background Decorative Floral Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#F8E3E5]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#F8F0E5]/60 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar Header Banner */}
      <header className="pt-6 px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8E3E5] text-[#9B414C] text-xs font-black uppercase tracking-wider border border-[#EADDDD]">
          <BabyFaceIcon className="w-4 h-4 text-[#9B414C]" />
          <span>Playbook Teman Kehamilan by ezplan</span>
        </div>
      </header>

      {/* Main Login Card Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 z-10">
        <div className="w-full max-w-md bg-white rounded-3xl border-2 border-[#EADDDD] shadow-xl p-6 sm:p-8 space-y-6 relative">
          
          {/* Header Icon & Title */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B9626D] border-4 border-[#FFF9F6] shadow-md mx-auto flex items-center justify-center text-white relative">
              <BabyFaceIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              <div className="absolute bottom-0 right-0 bg-[#3D3435] text-white p-1 rounded-full border border-white">
                <Lock className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="ad-title text-2xl sm:text-3xl font-black text-[#1A1112]">
                Masuk ke Playbook
              </h1>
              <p className="text-xs sm:text-sm text-[#776B6D] font-medium max-w-xs mx-auto">
                Silakan masukkan username dan password untuk mengakses seluruh panduan.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Error Alert */}
            {error && (
              <div className="p-3.5 rounded-2xl bg-[#FFF0F2] border border-[#F8D2D6] text-[#9B414C] text-xs font-bold flex items-center gap-2.5 animate-fadeIn">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#9B414C]" />
                <span>{error}</span>
              </div>
            )}

            {/* Username Input */}
            <div className="space-y-1.5">
              <label htmlFor="username-input" className="block text-xs font-extrabold text-[#3D3435] uppercase tracking-wider">
                Username
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#B9626D] pointer-events-none">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="username-input"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FFF9F6] border-2 border-[#EADDDD] text-sm text-[#1A1112] font-semibold placeholder-[#A09395] focus:outline-none focus:border-[#B9626D] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label htmlFor="password-input" className="block text-xs font-extrabold text-[#3D3435] uppercase tracking-wider">
                Password
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-3.5 text-[#B9626D] pointer-events-none">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-2xl bg-[#FFF9F6] border-2 border-[#EADDDD] text-sm text-[#1A1112] font-semibold placeholder-[#A09395] focus:outline-none focus:border-[#B9626D] focus:bg-white transition-all"
                />
                <button
                  type="button"
                  id="toggle-password-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-[#776B6D] hover:text-[#B9626D] transition-colors p-1"
                  aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              id="login-submit-btn"
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#B9626D] hover:bg-[#9B414C] text-white font-extrabold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-70"
            >
              {isLoading ? (
                <span>Memeriksa Akun...</span>
              ) : (
                <>
                  <span>Masuk ke Panduan</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Guide Hint Text */}
          <div className="p-3.5 rounded-2xl bg-[#F8F0E5] border border-[#E6D7C3] flex items-center justify-center gap-2 text-center">
            <BookOpen className="w-4 h-4 text-[#8C633D] shrink-0" />
            <p className="text-xs text-[#8C633D] font-bold">
              Username &amp; password dapat dicek di file panduan.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-[#776B6D] font-medium z-10">
        <p>© 2026 EZplan — Teman Kehamilan. All Rights Reserved.</p>
      </footer>

    </div>
  );
};
