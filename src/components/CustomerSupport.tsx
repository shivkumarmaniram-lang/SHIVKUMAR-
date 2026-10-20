import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { OPERATOR_INFO, FAQS } from '../data/mockData';

interface SupportProps {
  lang: Language;
}

export const CustomerSupport: React.FC<SupportProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
    }, 6000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="support" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-1">
            {lang === 'hi' ? 'कस्टमर केयर एवं सहायता' : 'Support & Direct Assistance'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            {lang === 'hi'
              ? 'सवारी पूछताछ या सहायता के लिए संपर्क करें'
              : 'Direct Line to Dispatch & Community Support'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            {lang === 'hi'
              ? 'सवारी बुकिंग, मासिक पास, खोया-पाया सामान या किसी भी जानकारी के लिए सीधे बात करें।'
              : 'Reach out for doorstep pickups, lost-and-found items, bulk market transit, or pass renewals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-4">
              <h3 className="font-bold text-base text-neutral-900">
                {lang === 'hi' ? 'सीधा संपर्क विवरण' : 'Direct Contact Info'}
              </h3>

              <div className="space-y-3.5 text-xs text-neutral-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'मोबाइल नंबर (कॉल / व्हाट्सएप)' : 'Mobile Phone'}</span>
                    <a
                      href={`tel:${OPERATOR_INFO.phone}`}
                      className="font-bold text-sm text-neutral-900 hover:text-emerald-700 tabular-nums"
                    >
                      {OPERATOR_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'पता' : 'Physical Address'}</span>
                    <p className="font-medium text-neutral-800 leading-relaxed">
                      {lang === 'hi' ? OPERATOR_INFO.addressHi : OPERATOR_INFO.addressEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'ई-रिक्शा बुकिंग हेल्पलाइन' : 'E-Rickshaw Helpline'}</span>
                    <p className="font-semibold text-neutral-800">
                      {lang === 'hi' ? '24 घंटे ऑन-कॉल पिकअप एवं बुकिंग' : '24x7 On-Call E-Rickshaw Dispatch'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'ईमेल' : 'Email'}</span>
                    <span className="font-medium text-neutral-800">{OPERATOR_INFO.email}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${OPERATOR_INFO.phone}`}
                  className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-lg text-center transition-colors"
                >
                  {lang === 'hi' ? '📞 कॉल करें' : 'Call Dispatch'}
                </a>
                <a
                  href={`https://wa.me/919111265959?text=*नमस्ते शिव कुमार जी*, मुझे ई-रिक्शा ट्रांसपोर्ट के संबंध में सहायता चाहिए।`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-emerald-950 font-semibold text-xs rounded-lg text-center transition-colors"
                >
                  {lang === 'hi' ? '💬 व्हाट्सएप' : 'WhatsApp'}
                </a>
              </div>
            </div>

            {/* Operating Hours Notice */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
              <strong className="block mb-0.5">{lang === 'hi' ? 'कार्य समय:' : 'Operational Hours:'}</strong>
              <p>{lang === 'hi' ? OPERATOR_INFO.workingHoursHi : OPERATOR_INFO.workingHoursEn}</p>
            </div>
          </div>

          {/* Right Column: Inquiry Form & FAQs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Inquiry Form */}
            <div className="p-6 sm:p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
              <h3 className="font-bold text-base text-neutral-900 mb-1">
                {lang === 'hi' ? 'संदेश या पूछताछ भेजें' : 'Send an Inquiry / Message'}
              </h3>
              <p className="text-xs text-neutral-500 mb-5">
                {lang === 'hi'
                  ? 'अपनी समस्या, रूट आवश्यकता या किसी भी प्रश्न के लिए फॉर्म भरें। शिव कुमार जी तुरंत संपर्क करेंगे।'
                  : 'Fill the quick form below for custom bookings, feedback, or queries.'}
              </p>

              {submitted ? (
                <div className="p-4 bg-emerald-100/80 border border-emerald-300 rounded-xl text-xs text-emerald-900 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="block font-bold">
                      {lang === 'hi' ? 'संदेश प्राप्त हुआ!' : 'Message Received!'}
                    </strong>
                    <span>
                      {lang === 'hi'
                        ? 'आपका संदेश सफलतापूर्वक दर्ज कर लिया गया है। शिव कुमार यादव जी द्वारा आपसे शीघ्र संपर्क किया जाएगा।'
                        : 'Your inquiry has been dispatched to operator Shiv Kumar Yadav.'}
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        {lang === 'hi' ? 'आपका नाम:' : 'Full Name:'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'hi' ? 'उदा. राकेश कुमार' : 'e.g. Rakesh Kumar'}
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर:' : 'Mobile Number:'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="91112XXXXX"
                        maxLength={10}
                        className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 tabular-nums"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      {lang === 'hi' ? 'संदेश / सवारी का विवरण:' : 'Message / Ride Details:'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        lang === 'hi'
                          ? 'अपनी समस्या, आवश्यक रूट या सवारी की तारीख व समय लिखें...'
                          : 'Write details of pickup, luggage, or any query...'
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg transition-colors cursor-pointer text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'संदेश भेजें' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-neutral-900">
                {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Questions'}
              </h4>

              <div className="space-y-2">
                {FAQS.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-200 rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
                    >
                      <span>{lang === 'hi' ? faq.qHi : faq.qEn}</span>
                      {activeFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0 ml-2" />
                      )}
                    </button>

                    {activeFaq === idx && (
                      <div className="px-4 pb-3.5 pt-1 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100">
                        {lang === 'hi' ? faq.aHi : faq.aEn}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
