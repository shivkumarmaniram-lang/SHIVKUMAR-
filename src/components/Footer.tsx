import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { OPERATOR_INFO } from '../data/mockData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-emerald-950 text-white border-t border-emerald-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-emerald-900/80">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xl font-extrabold text-white">
              <span>🛺</span>
              <span>{lang === 'hi' ? OPERATOR_INFO.brandNameHi : OPERATOR_INFO.brandNameEn}</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed max-w-sm">
              {lang === 'hi'
                ? 'रहटाटोर, मानिकचौरी, बजरंग चौक और बिलासपुर क्षेत्र में सुरक्षित, सस्ती और पर्यावरण-अनुकूल ई-रिक्शा सवारी एवं सामान ट्रांसपोर्ट सेवा।'
                : 'Punctual, safe, and zero-emission electric passenger and goods delivery services in Rahatator, Manikchouri, and Bilaspur.'}
            </p>
            <div className="text-xs text-emerald-300">
              <span>{lang === 'hi' ? 'संचालक: ' : 'Operator: '}</span>
              <strong className="text-white">{OPERATOR_INFO.founderHi}</strong>
              <span className="text-emerald-400"> ({lang === 'hi' ? `पिता: ${OPERATOR_INFO.fatherNameHi}` : `Son of: ${OPERATOR_INFO.fatherNameEn}`})</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {lang === 'hi' ? 'त्वरित लिंक' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'होम' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'किराया एवं बुकिंग' : 'Fare Calculator & Booking'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'प्रमुख सेवाएँ' : 'Key Services'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'हमारे बारे में' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'कस्टमर सपोर्ट' : 'Customer Support'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Base */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {lang === 'hi' ? 'संपर्क एवं मुख्य केंद्र' : 'Contact & Station'}
            </h4>
            <div className="space-y-2 text-xs text-emerald-200">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{lang === 'hi' ? OPERATOR_INFO.addressHi : OPERATOR_INFO.addressEn}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${OPERATOR_INFO.phone}`} className="font-bold text-white hover:text-emerald-300 tabular-nums">
                  {OPERATOR_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2 pt-1 text-emerald-300">
                <span className="font-semibold text-white">{lang === 'hi' ? 'सेवा क्षेत्र:' : 'Service Area:'}</span>
                <span>{lang === 'hi' ? 'रहटाटोर, मानिकचौरी, मस्तूरी, बिलासपुर' : 'Rahatator, Manikchouri, Masturi, Bilaspur'}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/90">
          <p>
            &copy; 2026 {lang === 'hi' ? OPERATOR_INFO.fullNameHi : OPERATOR_INFO.fullNameEn}. {lang === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
          </p>
          <p className="flex items-center gap-1 text-emerald-300/80">
            <span>{lang === 'hi' ? 'स्वच्छ छत्तीसगढ़, हरित भारत' : 'Clean Chhattisgarh, Green India'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
