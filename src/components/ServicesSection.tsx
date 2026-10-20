import React, { useState } from 'react';
import { Users, Package, CreditCard, Clock, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Language } from '../types';
import { PASS_PLANS, OPERATOR_INFO } from '../data/mockData';

interface ServicesProps {
  lang: Language;
  onBookRideClick: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ lang, onBookRideClick }) => {
  const [selectedPass, setSelectedPass] = useState<string>('student');
  const [passRequested, setPassRequested] = useState<boolean>(false);

  const fleetImage = '/src/assets/images/erickshaw_fleet_showcase_1792496729123.jpg';
  const cargoImage = '/src/assets/images/cargo_delivery_erickshaw_1792496728977.jpg';

  const handleRequestPass = (passTitle: string) => {
    const text = `*नमस्ते शिव कुमार जी (एसके ई-रिक्शा)*%0A%0Aमुझे *${passTitle}* पास के लिए आवेदन करना है। कृपया आगे की प्रक्रिया बताएं।%0A%0Aनाम: यात्री%0Aपता: रहटाटोर / मानिकचौरी`;
    window.open(`https://wa.me/919111265959?text=${text}`, '_blank', 'noopener,noreferrer');
    setPassRequested(true);
    setTimeout(() => setPassRequested(false), 5000);
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-1">
            {lang === 'hi' ? 'हमारी प्रमुख सेवाएँ' : 'Our Transport Solutions'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            {lang === 'hi'
              ? 'यात्रियों और स्थानीय व्यापारियों के लिए पूर्ण समाधान'
              : 'End-to-End Mobility for Commuters & Local Businesses'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            {lang === 'hi'
              ? 'रहटाटोर, मानिकचौरी, बजरंग चौक और मस्तूरी में हर जरूरत के लिए उपयुक्त आधुनिक ई-रिक्शा सेवाएँ।'
              : 'Modern electric mobility tailored for village connectivity, daily market transit, and doorstep logistics.'}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: Local Passenger Rides (col-span-7) */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-semibold text-emerald-700">01. सर्विस</span>
                <span aria-hidden="true">·</span>
                <span>रहटाटोर - मानिकचौरी - जयरामनगर</span>
                <span aria-hidden="true">·</span>
                <span>दैनिक फेरे</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                {lang === 'hi' ? 'लोकल सवारी एवं शेयरिंग ई-रिक्शा' : 'Local Shared & Daily Passenger Commute'}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {lang === 'hi'
                  ? 'सुबह 6 बजे से रात 10 बजे तक नियमित अंतराल पर चलने वाली शेयरिंग गाड़ियाँ। कॉलेज, स्कूल, अस्पताल, तहसील और हाट-बाजार जाने वाले यात्रियों के लिए सबसे किफायती व सुरक्षित माध्यम।'
                  : 'High-frequency regular shared rides connecting key villages, schools, tehsils, and weekly haat markets starting from just ₹10.'}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-700">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'hi' ? '₹10 से ₹30 न्यूनतम दर' : 'From ₹10 - ₹30'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'hi' ? 'गद्देदार आरामदायक सीटें' : 'Cushioned Seats'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'hi' ? 'धूप व बारिश से सुरक्षित पर्दा' : 'Weather Protection'}</span>
                </div>
              </div>
            </div>

            {/* Embedded Fleet Photo */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-t border-neutral-200 bg-neutral-200">
              <img
                src={fleetImage}
                alt="एसके ई-रिक्शा पैसेंजर फ्लीट"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-medium">
                  {lang === 'hi' ? 'आधुनिक लिथियम बैटरी सुसज्जित ई-रिक्शा' : 'Modern Lithium-Powered Rickshaws'}
                </span>
                <button
                  onClick={onBookRideClick}
                  className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-md transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'सवारी बुक करें' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Cargo & Market Goods Transport (col-span-5) */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-semibold text-emerald-700">02. सर्विस</span>
                <span aria-hidden="true">·</span>
                <span>दुकान माल & पार्सल</span>
                <span aria-hidden="true">·</span>
                <span>500 किग्रा क्षमता</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                {lang === 'hi' ? 'सामान एवं दुकान डिलीवरी सेवा' : 'Cargo & Market Freight Delivery'}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {lang === 'hi'
                  ? 'किराना दुकानदारों, व्यापारियों और किसानों के लिए माल ढुलाई का भरोसेमंद साधन। बोरी, हार्डवेयर, कार्टन व सब्जी मंडी का माल सीधे आपकी दुकान के आगे तक सुरक्षित डिलीवरी।'
                  : 'Reliable freight logistics for grocery merchants, farmers, and traders. Doorstep delivery for heavy sacks, crates, cartons, and market stock.'}
              </p>

              <div className="pt-1 space-y-2 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'hi' ? 'भारी डीजल ऑटो से 40% कम खर्च' : '40% cheaper than diesel freight'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{lang === 'hi' ? 'लोडिंग व अनलोडिंग में सहायक ड्राइवर' : 'Driver assistance for loading'}</span>
                </div>
              </div>
            </div>

            {/* Embedded Cargo Photo */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-t border-neutral-200 bg-neutral-200">
              <img
                src={cargoImage}
                alt="एसके ई-रिक्शा माल डिलीवरी वाहन"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-medium">
                  {lang === 'hi' ? 'लोडर ई-रिक्शा उपलब्ध' : 'Heavy Loader Rickshaws'}
                </span>
                <a
                  href={`tel:${OPERATOR_INFO.phone}`}
                  className="px-3 py-1.5 bg-neutral-100 hover:bg-white text-neutral-900 font-bold rounded-md transition-colors"
                >
                  {lang === 'hi' ? 'माल ढुलाई बुक करें' : 'Call Freight'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pass Plans Section (Bento Bottom Strip) */}
        <div className="mt-8 bg-emerald-900 text-white rounded-2xl p-6 sm:p-10 border border-emerald-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="font-semibold text-emerald-300">03. मासिक बचत योजना</span>
                <span aria-hidden="true">·</span>
                <span>विद्यार्थी व कर्मचारी</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {lang === 'hi' ? 'दैनिक व मासिक ई-रिक्शा पास' : 'Commuter & Student Monthly Pass'}
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                {lang === 'hi'
                  ? 'रोजाना यात्रा करने वाले विद्यार्थियों, शिक्षकों और नौकरीपेशा लोगों के लिए 30 दिनों का रियायती पास। बार-बार चिल्हर की झंझट खत्म और 30% तक की भारी सीधी बचत।'
                  : 'Discounted passes for daily school, coaching, and office commuters. Enjoy cashless hassle-free rides with up to 30% savings.'}
              </p>
              <div className="text-xs text-emerald-200 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'hi'
                    ? 'बजरंग चौक ई-रिक्शा स्टैंड पर पास तुरंत बनवा सकते हैं या फोन पर संपर्क करें।'
                    : 'Passes can be issued directly at Bajrang Chowk E-Rickshaw stand or via phone.'}
                </span>
              </div>
            </div>

            {/* Pass Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PASS_PLANS.map((pass) => (
                <div
                  key={pass.id}
                  className="bg-emerald-950/80 border border-emerald-700/80 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-emerald-400 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-emerald-200">
                        {lang === 'hi' ? pass.titleHi : pass.titleEn}
                      </h4>
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-white tabular-nums">₹{pass.price}</span>
                      <span className="text-xs text-emerald-300">/ माह (Month)</span>
                    </div>
                    <p className="text-xs text-emerald-300 font-medium">
                      {lang === 'hi' ? pass.validityHi : pass.validityEn}
                    </p>

                    <ul className="pt-2 space-y-1.5 text-xs text-emerald-100">
                      {(lang === 'hi' ? pass.featuresHi : pass.featuresEn).map((f, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleRequestPass(lang === 'hi' ? pass.titleHi : pass.titleEn)}
                    className="w-full py-2.5 px-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    {lang === 'hi' ? 'यह पास बनवाएं (WhatsApp)' : 'Apply for this Pass'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {passRequested && (
            <div className="mt-4 p-3 bg-emerald-800/80 rounded-lg text-xs text-emerald-200 text-center font-medium">
              {lang === 'hi'
                ? 'आपका पास अनुरोध भेजा जा चुका है! संचालक शिव कुमार जी आपसे जल्द संपर्क करेंगे।'
                : 'Pass application initiated! Operator Shiv Kumar will reach out shortly.'}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
