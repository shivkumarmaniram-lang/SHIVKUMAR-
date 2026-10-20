import React from 'react';
import { ShieldCheck, MapPin, Phone, UserCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { OPERATOR_INFO } from '../data/mockData';

interface AboutProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                {lang === 'hi' ? 'हमारे बारे में' : 'About the Enterprise'}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
                {lang === 'hi'
                  ? 'स्थानीय सेवा, स्वच्छ पर्यावरण और भरोसेमंद सफर'
                  : 'Rooted in Bilaspur: Clean Transit & Trusted Community Service'}
              </h2>
            </div>

            <div className="prose prose-neutral text-sm sm:text-base text-neutral-700 space-y-4 leading-relaxed">
              <p>
                {lang === 'hi'
                  ? 'स्वागत है एसके ई-रिक्शा ट्रांसपोर्ट सर्विसेज में! हमारा उद्देश्य रहटाटोर, मानिकचौरी, मस्तूरी और बिलासपुर क्षेत्र के प्रत्येक नागरिक को सुरक्षित, प्रदूषण-मुक्त और समय पर परिवहन सेवा उपलब्ध कराना है।'
                  : 'Welcome to SK E-Rickshaw Transport Services! Our mission is to provide every commuter in Rahatator, Manikchouri, Masturi, and Bilaspur with clean, dignified, and timely electric transit.'}
              </p>

              <p>
                {lang === 'hi'
                  ? 'हमारे फ्लीट में आधुनिक लिथियम बैटरी चालित ई-रिक्शा शामिल हैं, जो पुरानी खड़खड़ाहट वाली डीजल गाड़ियों से कहीं अधिक आरामदायक, शांत और सुरक्षित हैं। सवारी गाड़ियों के साथ-साथ व्यापारियों और किसानों के लिए सामान ट्रांसपोर्ट की लोडर सुविधा भी निरंतर उपलब्ध है।'
                  : 'Our fleet is equipped with modern lithium-battery electric rickshaws that run silently and without vibration. Along with regular passenger transport, we operate dedicated electric cargo loaders for farmers and merchants.'}
              </p>

              <p>
                {lang === 'hi'
                  ? 'हमारा पूरा ध्यान और समर्पण केवल स्थानीय नागरिकों को सर्वोत्तम ई-रिक्शा सेवाएँ प्रदान करने पर है। बजरंग चौक, रहटाटोर स्थित हमारे मुख्य स्टैंड से नियमित अंतराल पर गाड़ियां रवाना होती हैं, जिससे यात्रियों को कभी भी वाहन के लिए लंबा इंतजार नहीं करना पड़ता।'
                  : 'Our entire focus is dedicated to delivering exemplary e-rickshaw transit to local residents. Regular vehicles depart from our base hub at Bajrang Chowk, Rahatator, ensuring passengers never face long wait times.'}
              </p>
            </div>

            {/* Mission Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 bg-white rounded-xl border border-neutral-200">
                <div className="flex items-center gap-2.5 mb-1.5 font-bold text-neutral-900 text-sm">
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'hi' ? 'पारिवारिक सुरक्षा' : 'Family Safety First'}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {lang === 'hi'
                    ? 'माताओं, बहनों और बुजुर्गों के लिए पूरी तरह सुरक्षित और आदरपूर्ण सफर।'
                    : 'Respectful, vetted drivers ensuring absolute peace of mind for women, students, and seniors.'}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200">
                <div className="flex items-center gap-2.5 mb-1.5 font-bold text-neutral-900 text-sm">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'hi' ? 'उचित व तय किराया' : 'Fixed Honest Fares'}</span>
                </div>
                <p className="text-xs text-neutral-600">
                  {lang === 'hi'
                    ? 'बिना किसी मोलभाव के स्पष्ट व पारदर्शी किराया तालिका।'
                    : 'No bargaining hassles; clear transparent tariff cards for all destinations.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Business Credentials Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-neutral-100 pb-5">
              <span className="text-xs uppercase tracking-wider text-emerald-700 font-bold block mb-1">
                {lang === 'hi' ? 'संचालक परिचय' : 'Operator Credentials'}
              </span>
              <h3 className="text-xl font-extrabold text-neutral-900">
                {lang === 'hi' ? OPERATOR_INFO.founderHi : OPERATOR_INFO.founderEn}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                {lang === 'hi'
                  ? `आत्मज: ${OPERATOR_INFO.fatherNameHi}`
                  : `Son of: ${OPERATOR_INFO.fatherNameEn}`}
              </p>
            </div>

            <div className="space-y-4 text-xs text-neutral-700">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'सीधा संपर्क नंबर' : 'Direct Helpline'}</span>
                  <a
                    href={`tel:${OPERATOR_INFO.phone}`}
                    className="font-bold text-sm text-neutral-900 hover:text-emerald-700 tabular-nums"
                  >
                    {OPERATOR_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'मुख्य कार्यालय / बेस' : 'Hub Address'}</span>
                  <p className="font-medium text-neutral-800 leading-relaxed">
                    {lang === 'hi' ? OPERATOR_INFO.addressHi : OPERATOR_INFO.addressEn}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'प्रमुख सेवा क्षेत्र' : 'Primary Service Zone'}</span>
                  <p className="font-medium text-neutral-800 leading-relaxed">
                    {lang === 'hi'
                      ? 'रहटाटोर, मानिकचौरी, बजरंग चौक, मस्तूरी, जयरामनगर एवं बिलासपुर'
                      : 'Rahatator, Manikchouri, Bajrang Chowk, Masturi, Jairamnagar & Bilaspur'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Call / Inquiry Button */}
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2.5">
              <a
                href={`tel:${OPERATOR_INFO.phone}`}
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg text-center transition-colors shadow-sm"
              >
                {lang === 'hi' ? 'शिव कुमार जी से सीधा संपर्क करें' : 'Call Shiv Kumar Directly'}
              </a>

              <a
                href={`https://wa.me/919111265959?text=*नमस्ते शिव कुमार जी*, मुझे ई-रिक्शा सेवा के संबंध में बात करनी है।`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs rounded-lg text-center transition-colors"
              >
                {lang === 'hi' ? 'व्हाट्सएप पर संदेश भेजें' : 'Send WhatsApp Message'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
