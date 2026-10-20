import React from 'react';
import { ArrowRight, Phone, Zap, ShieldCheck, BatteryCharging, IndianRupee } from 'lucide-react';
import { Language } from '../types';
import { OPERATOR_INFO } from '../data/mockData';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onBookClick }) => {
  const heroImageSrc = '/src/assets/images/hero_erickshaw_transport_1792496728941.jpg';

  return (
    <section id="home" className="relative bg-emerald-950 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Background Decorative Ambient Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/30 via-emerald-950/80 to-emerald-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed location metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300">
              <span>रहटाटोर</span>
              <span aria-hidden="true" className="text-emerald-500">·</span>
              <span>मानिकचौरी</span>
              <span aria-hidden="true" className="text-emerald-500">·</span>
              <span>बजरंग चौक</span>
              <span aria-hidden="true" className="text-emerald-500">·</span>
              <span>जयरामनगर</span>
              <span aria-hidden="true" className="text-emerald-500">·</span>
              <span>मस्तूरी (बिलासपुर)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight lg:leading-tight max-w-2xl text-balance">
              {lang === 'hi'
                ? 'सुरक्षित, सस्ती और पर्यावरण-अनुकूल ई-रिक्शा सवारी'
                : 'Safe, Affordable & Eco-Friendly E-Rickshaw Transport'}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-xl text-balance">
              {lang === 'hi'
                ? 'रहटाटोर, मानिकचौरी, बजरंग चौक और मस्तूरी क्षेत्र में समय की पाबंद, आरामदायक और प्रदूषण-मुक्त लोकल सवारी एवं सामान डिलीवरी सेवा।'
                : 'Reliable, punctual and zero-emission passenger transport & local cargo delivery across Rahatator, Manikchouri, and Bilaspur district.'}
            </p>

            {/* Founder Credit in Hero */}
            <div className="pt-1 text-xs text-emerald-300/80">
              <span>{lang === 'hi' ? 'संचालक: ' : 'Operated by: '}</span>
              <strong className="text-emerald-200">{OPERATOR_INFO.founderHi}</strong>
              <span className="text-emerald-300/80"> ({lang === 'hi' ? `आत्मज: ${OPERATOR_INFO.fatherNameHi}` : `Son of: ${OPERATOR_INFO.fatherNameEn}`})</span>
              <span className="mx-2">·</span>
              <span className="text-emerald-300 font-medium">बजरंग चौक, रहटाटोर</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onBookClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-emerald-950 font-bold rounded-lg shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0 text-sm sm:text-base"
              >
                <span>{lang === 'hi' ? 'सवारी बुक करें / किराया जानें' : 'Book a Ride / Check Fare'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${OPERATOR_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/80 font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="tabular-nums">{OPERATOR_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Clean Trust Indicators without decorative pulsing pills */}
            <div className="pt-3 border-t border-emerald-800/60 flex items-center gap-6 text-xs text-emerald-200">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'hi' ? 'अनुभवी व सुरक्षित चालक' : 'Verified Local Drivers'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? 'तुरंत उपलब्धता' : 'Fast Response'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-700/40 bg-emerald-900/40 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src={heroImageSrc}
                alt="एसके ई-रिक्शा ट्रांसपोर्ट सर्विसेज की आधुनिक इलेक्ट्रिक रिक्शा"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle bottom contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Verified Badge In Bottom of Image */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-emerald-950/90 backdrop-blur-md rounded-lg border border-emerald-800/80 text-xs text-emerald-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {lang === 'hi' ? 'आधुनिक लिथियम बैटरी ई-रिक्शा' : 'Next-Gen Lithium Battery EV'}
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    {lang === 'hi' ? 'स्मूथ व आवाज-मुक्त सुरक्षित सफर' : 'Silent, cushioned, zero pollution ride'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-300 uppercase tracking-wide block">
                    {lang === 'hi' ? 'किराया शुरू' : 'Fares from'}
                  </span>
                  <span className="font-extrabold text-sm text-emerald-400 tabular-nums">₹10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below the hero split */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-emerald-800/60">
          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-800/60 text-emerald-300">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">₹10 - ₹30</div>
                <div className="text-xs text-emerald-300">
                  {lang === 'hi' ? 'न्यूनतम शेयरिंग लोकल किराया' : 'Starting Shared Fare'}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-800/60 text-emerald-300">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">100% EV</div>
                <div className="text-xs text-emerald-300">
                  {lang === 'hi' ? 'धुआँ व शोर मुक्त पर्यावरण' : 'Zero Carbon Emissions'}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-800/60 text-emerald-300">
                <BatteryCharging className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">120 KM</div>
                <div className="text-xs text-emerald-300">
                  {lang === 'hi' ? 'लिथियम बैटरी डेली कवरेज' : 'Lithium Battery Range'}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-800/60 text-emerald-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">24x7</div>
                <div className="text-xs text-emerald-300">
                  {lang === 'hi' ? 'आपातकालीन व अस्पताल सेवा' : 'Emergency Night Pickup'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
