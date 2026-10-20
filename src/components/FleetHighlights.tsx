import React from 'react';
import { BatteryCharging, Smartphone, CloudRain, ShieldCheck, Check, X, Leaf, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface FleetHighlightsProps {
  lang: Language;
}

export const FleetHighlights: React.FC<FleetHighlightsProps> = ({ lang }) => {
  const comparisonItems = [
    {
      featureHi: 'पर्यावरण प्रदूषण (धुआँ व गंध)',
      featureEn: 'Air Pollution & Exhaust Smoke',
      eRickshaw: lang === 'hi' ? 'शून्य प्रदूषण (100% स्वच्छ EV)' : 'Zero Emission (100% EV)',
      eGood: true,
      oldAuto: lang === 'hi' ? 'काला जहरीला धुआँ व पेट्रोल गंध' : 'Toxic black smoke & petrol fumes',
      oldGood: false,
    },
    {
      featureHi: 'सवारी किराया दर',
      featureEn: 'Passenger Ride Fare',
      eRickshaw: lang === 'hi' ? 'सस्ती दरें (मात्र ₹10 से शुरू)' : 'Affordable (from ₹10)',
      eGood: true,
      oldAuto: lang === 'hi' ? 'महंगा किराया (डीजल की बढ़ती कीमतें)' : 'Expensive high fares',
      oldGood: false,
    },
    {
      featureHi: 'सफर का आराम व आवाज',
      featureEn: 'Ride Comfort & Engine Noise',
      eRickshaw: lang === 'hi' ? 'बिल्कुल शांत, कंपन-रहित व स्मूथ' : 'Whisper quiet, no vibration',
      eGood: true,
      oldAuto: lang === 'hi' ? 'भारी कानफाड़ू आवाज व लगातार झटके' : 'High noise & heavy vibrations',
      oldGood: false,
    },
    {
      featureHi: 'फोन चार्जिंग की सुविधा',
      featureEn: 'Mobile USB Charging',
      eRickshaw: lang === 'hi' ? 'उपलब्ध (इनबिल्ट फास्ट यूएसबी पोर्ट)' : 'Available inside all vehicles (Built-in Fast USB)',
      eGood: true,
      oldAuto: lang === 'hi' ? 'उपलब्ध नहीं' : 'Not available',
      oldGood: false,
    },
    {
      featureHi: 'मौसम सुरक्षा (धूप व बारिश)',
      featureEn: 'Weather Protection (Rain/Sun)',
      eRickshaw: lang === 'hi' ? 'वाटरप्रूफ कर्टेन व मजबूत कैनोपी' : 'Waterproof curtains & full canopy',
      eGood: true,
      oldAuto: lang === 'hi' ? 'खुले कटआउट व पानी अंदर आना' : 'Partial open exposure',
      oldGood: false,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-1">
            {lang === 'hi' ? 'आधुनिक तकनीक एवं फ्लीट' : 'Fleet & Engineering Standards'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
            {lang === 'hi'
              ? 'मॉडर्न लिथियम बैटरी ई-रिक्शा की खूबियां'
              : 'Why SK E-Rickshaw Leads in Safety & Comfort'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            {lang === 'hi'
              ? 'हमारे पास साधारण पुरानी बैटरी की जगह नवीनतम लिथियम-आयन पावर्ड ई-रिक्शा उपलब्ध हैं।'
              : 'Equipped with next-generation lithium-ion technology for fast charging, superior range, and dependable village transit.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 hover:border-emerald-500 transition-colors">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-xl w-fit mb-4">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              {lang === 'hi' ? '120 KM लिथियम रेंज' : '120 KM Lithium Range'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'hi'
                ? 'हाई-डेंसिटी लिथियम बैटरी जो बिना रुके पूरे दिन रहटाटोर और बिलासपुर के बीच सुचारू सेवा सुनिश्चित करती है।'
                : 'Advanced lithium chemistry delivers uninterrupted long runs between Rahatator and Bilaspur without downtime.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 hover:border-emerald-500 transition-colors">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-xl w-fit mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              {lang === 'hi' ? 'इन-रिक्शा फोन चार्जर' : 'In-Ride Mobile Charging'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'hi'
                ? 'सफर के दौरान फोन की बैटरी खत्म होने की चिंता नहीं। प्रत्येक ई-रिक्शा में यात्रियों के लिए इनबिल्ट फास्ट यूएसबी चार्जिंग पोर्ट।'
                : 'Stay connected throughout your journey with built-in high-speed USB phone charging points inside every rickshaw.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 hover:border-emerald-500 transition-colors">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-xl w-fit mb-4">
              <CloudRain className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              {lang === 'hi' ? 'ऑल-वेदर वेदरप्रूफ पर्दा' : 'All-Weather Protection'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'hi'
                ? 'कड़कड़ाती धूप और छत्तीसगढ़ की मूसलाधार बारिश से यात्रियों व सामान को 100% सुरक्षित रखने वाले रोल-डाउन पर्दे।'
                : 'Heavy-grade waterproof transparent curtains keep passengers and packages completely dry during monsoon rains.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 hover:border-emerald-500 transition-colors">
            <div className="p-3 bg-emerald-950 text-emerald-400 rounded-xl w-fit mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-white mb-2">
              {lang === 'hi' ? '100% ग्रीन इको-फ्रेंडली' : '100% Eco-Friendly'}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              {lang === 'hi'
                ? 'हमारे गांव और कस्बों की शुद्ध हवा को सुरक्षित रखने में मददगार। जीरो कार्बन उत्सर्जन और शांत ग्रामीण परिवेश।'
                : 'Zero tailpipe emissions protecting our villages and towns with clean, quiet, and healthy community transit.'}
            </p>
          </div>
        </div>

        {/* Comparison Table: Old Auto vs SK E-Rickshaw */}
        <div className="bg-neutral-800/60 rounded-2xl border border-neutral-700 overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-neutral-700 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === 'hi'
                  ? 'पारंपरिक डीजल ऑटो बनाम एसके लिथियम ई-रिक्शा'
                  : 'Traditional Diesel Auto vs SK Electric E-Rickshaw'}
              </span>
            </h3>
            <span className="text-xs text-neutral-400">
              {lang === 'hi' ? 'तुलनात्मक विवरण' : 'Direct Comparison'}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-900/80 text-neutral-400 uppercase tracking-wider text-[11px] border-b border-neutral-700">
                <tr>
                  <th className="py-3 px-4 sm:px-6 font-semibold">{lang === 'hi' ? 'विशेषता' : 'Feature'}</th>
                  <th className="py-3 px-4 sm:px-6 font-semibold text-emerald-400">
                    {lang === 'hi' ? '🛺 एसके लिथियम ई-रिक्शा' : '🛺 SK Lithium E-Rickshaw'}
                  </th>
                  <th className="py-3 px-4 sm:px-6 font-semibold text-neutral-400">
                    {lang === 'hi' ? 'पुरानी डीजल/पेट्रोल ऑटो' : 'Old Diesel/Petrol Auto'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700/60 text-neutral-200">
                {comparisonItems.map((item, index) => (
                  <tr key={index} className="hover:bg-neutral-800/40 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-white">
                      {lang === 'hi' ? item.featureHi : item.featureEn}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-emerald-300">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.eRickshaw}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-neutral-400">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-neutral-500 shrink-0" />
                        <span>{item.oldAuto}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
