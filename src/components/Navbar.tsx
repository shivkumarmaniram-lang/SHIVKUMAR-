import React, { useState } from 'react';
import { Phone, User, Globe, Menu, X, CheckCircle, ShieldAlert } from 'lucide-react';
import { Language, UserProfile } from '../types';
import { OPERATOR_INFO } from '../data/mockData';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentUser: UserProfile | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  bookingCount: number;
  onOpenBookings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  currentUser,
  onOpenAuth,
  onLogout,
  bookingCount,
  onOpenBookings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', labelHi: 'होम', labelEn: 'Home' },
    { href: '#booking', labelHi: 'किराया व बुकिंग', labelEn: 'Fare & Booking' },
    { href: '#services', labelHi: 'सेवाएँ', labelEn: 'Services' },
    { href: '#about', labelHi: 'हमारे बारे में', labelEn: 'About Us' },
    { href: '#support', labelHi: 'कस्टमर सपोर्ट', labelEn: 'Support' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'hi' ? 'en' : 'hi');
  };

  return (
    <header className="sticky top-0 z-50 bg-emerald-900/95 backdrop-blur-md text-white border-b border-emerald-800 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight text-white hover:text-emerald-200 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="text-2xl transform group-hover:scale-110 transition-transform inline-block">🛺</span>
            <span className="font-extrabold tracking-tight">
              {lang === 'hi' ? OPERATOR_INFO.brandNameHi : OPERATOR_INFO.brandNameEn}
            </span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-emerald-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-md border border-emerald-700 bg-emerald-800/60 hover:bg-emerald-700 text-emerald-100 hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title="भाषा बदलें / Change Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            {/* Bookings Count Pill / Button if bookings exist */}
            {bookingCount > 0 && (
              <button
                onClick={onOpenBookings}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-800 text-emerald-100 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {lang === 'hi' ? 'मेरी बुकिंग' : 'My Rides'} ({bookingCount})
                </span>
              </button>
            )}

            {/* Auth / Profile Button */}
            {currentUser ? (
              <div className="relative group">
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-emerald-800/80 hover:bg-emerald-700 rounded-lg text-emerald-100 border border-emerald-700 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <User className="w-3.5 h-3.5 text-emerald-300" />
                  <span className="max-w-[100px] truncate">{currentUser.name}</span>
                  <span className="text-[10px] bg-emerald-950 px-1.5 py-0.5 rounded text-emerald-300 uppercase">
                    {currentUser.role === 'driver' ? (lang === 'hi' ? 'चालक' : 'Driver') : (lang === 'hi' ? 'यात्री' : 'Rider')}
                  </span>
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-100 hover:text-white hover:bg-emerald-800/70 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <User className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'लॉगिन / खाता' : 'Login / Sign up'}</span>
              </button>
            )}

            {/* Primary Phone CTA Button */}
            <a
              href={`tel:${OPERATOR_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline font-bold tabular-nums">9111265959</span>
              <span className="sm:hidden font-bold">{lang === 'hi' ? 'कॉल करें' : 'Call'}</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-emerald-200 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-950 border-b border-emerald-800 px-4 pt-3 pb-5 space-y-2.5 transition-all">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-emerald-100 hover:bg-emerald-900 hover:text-white transition-colors"
            >
              {lang === 'hi' ? link.labelHi : link.labelEn}
            </a>
          ))}

          <div className="pt-3 border-t border-emerald-800 flex flex-col gap-2">
            {bookingCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookings();
                }}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-left bg-emerald-900/60 rounded-md text-emerald-200"
              >
                <span>{lang === 'hi' ? 'मेरी सक्रिय बुकिंग' : 'My Active Bookings'}</span>
                <span className="font-bold tabular-nums bg-emerald-700 px-2 py-0.5 rounded-full text-xs text-white">
                  {bookingCount}
                </span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-left bg-emerald-900/60 rounded-md text-emerald-100"
            >
              <span>{currentUser ? `${currentUser.name} (${currentUser.role})` : (lang === 'hi' ? 'लॉगिन / नया खाता' : 'Login / Register')}</span>
              <User className="w-4 h-4 text-emerald-300" />
            </button>

            {currentUser && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full text-left px-3 py-1.5 text-xs text-red-300 hover:text-red-200"
              >
                {lang === 'hi' ? 'लॉगआउट करें' : 'Sign out'}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
