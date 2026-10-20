import React, { useState } from 'react';
import { X, User, Phone, Lock, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currentUser: UserProfile | null;
  onLoginSuccess: (user: UserProfile) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  lang,
  currentUser,
  onLoginSuccess,
  onLogout,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'passenger' | 'driver'>('passenger');
  const [vehicleNumber, setVehicleNumber] = useState('CG-10-ER-');
  const [batteryType, setBatteryType] = useState<'lithium' | 'lead_acid'>('lithium');
  const [errorMessage, setErrorMessage] = useState('');
  const [successNotice, setSuccessNotice] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMessage(lang === 'hi' ? 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।' : 'Please enter a valid 10-digit phone number.');
      return;
    }
    if (!password) {
      setErrorMessage(lang === 'hi' ? 'कृपया पासवर्ड दर्ज करें।' : 'Please enter password.');
      return;
    }

    setErrorMessage('');
    // Mock login based on phone or cached users
    const storedUsers = localStorage.getItem('sk_erickshaw_users');
    let userToSet: UserProfile = {
      name: phone === '9111265959' ? 'शिव कुमार यादव' : 'श्रीमान यात्री',
      phone,
      role: phone === '9111265959' ? 'driver' : 'passenger',
      vehicleNumber: phone === '9111265959' ? 'CG-10-ER-4482' : undefined,
      batteryType: 'lithium',
    };

    if (storedUsers) {
      try {
        const parsed = JSON.parse(storedUsers);
        const match = parsed.find((u: UserProfile) => u.phone === phone);
        if (match) {
          userToSet = match;
        }
      } catch (err) {
        console.error(err);
      }
    }

    onLoginSuccess(userToSet);
    setSuccessNotice(lang === 'hi' ? 'सफलतापूर्वक लॉगिन हो गया!' : 'Successfully logged in!');
    setTimeout(() => {
      setSuccessNotice('');
      onClose();
    }, 1200);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage(lang === 'hi' ? 'कृपया अपना पूरा नाम लिखें।' : 'Please enter your full name.');
      return;
    }
    if (!phone || phone.length < 10) {
      setErrorMessage(lang === 'hi' ? 'कृपया 10 अंकों का मोबाइल नंबर दर्ज करें।' : 'Please enter 10-digit phone number.');
      return;
    }
    if (!password || password.length < 4) {
      setErrorMessage(lang === 'hi' ? 'पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।' : 'Password must be at least 4 characters.');
      return;
    }

    setErrorMessage('');
    const newUser: UserProfile = {
      name: name.trim(),
      phone: phone.trim(),
      role,
      vehicleNumber: role === 'driver' ? vehicleNumber : undefined,
      batteryType: role === 'driver' ? batteryType : undefined,
    };

    // Save to localStorage registry
    try {
      const stored = localStorage.getItem('sk_erickshaw_users');
      const list = stored ? JSON.parse(stored) : [];
      list.push(newUser);
      localStorage.setItem('sk_erickshaw_users', JSON.stringify(list));
    } catch (err) {
      console.error(err);
    }

    onLoginSuccess(newUser);
    setSuccessNotice(lang === 'hi' ? 'खाता सफलतापूर्वक बन गया!' : 'Account registered successfully!');
    setTimeout(() => {
      setSuccessNotice('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-emerald-900 text-white">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-emerald-300" />
            <h3 className="font-bold text-base">
              {currentUser
                ? (lang === 'hi' ? 'आपकी प्रोफ़ाइल' : 'Your Profile')
                : tab === 'login'
                ? (lang === 'hi' ? 'लॉगिन करें' : 'Login')
                : (lang === 'hi' ? 'नया खाता बनाएं' : 'Create Account')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If already logged in */}
        {currentUser ? (
          <div className="p-6 space-y-5">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
              <div className="p-2.5 rounded-full bg-emerald-200 text-emerald-900 font-bold text-lg">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">{currentUser.name}</h4>
                <p className="text-xs text-neutral-600 tabular-nums">📞 {currentUser.phone}</p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                  {currentUser.role === 'driver' ? (lang === 'hi' ? 'ई-रिक्शा चालक' : 'E-Rickshaw Driver') : (lang === 'hi' ? 'सवारी / यात्री' : 'Passenger')}
                </span>
              </div>
            </div>

            {currentUser.role === 'driver' && (
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">{lang === 'hi' ? 'गाड़ी नंबर:' : 'Vehicle Reg:'}</span>
                  <strong className="text-neutral-900">{currentUser.vehicleNumber || 'CG-10-ER-4482'}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{lang === 'hi' ? 'बैटरी तकनीक:' : 'Battery:'}</span>
                  <strong className="text-emerald-700">{lang === 'hi' ? 'आधुनिक लिथियम आयन' : 'Lithium Ion'}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{lang === 'hi' ? 'रूट पर स्थिति:' : 'Status:'}</span>
                  <span className="text-emerald-700 font-semibold">{lang === 'hi' ? 'उपलब्ध (ड्यूटी पर)' : 'Available on Duty'}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-700 font-semibold text-xs rounded-lg border border-red-200 transition-colors cursor-pointer"
              >
                {lang === 'hi' ? 'लॉगआउट करें' : 'Sign out'}
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'hi' ? 'वापस जाएं' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Tab switch */}
            <div className="flex border-b border-neutral-200 mb-5">
              <button
                onClick={() => {
                  setTab('login');
                  setErrorMessage('');
                }}
                className={`flex-1 pb-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer ${
                  tab === 'login'
                    ? 'border-emerald-700 text-emerald-800'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {lang === 'hi' ? 'लॉगिन' : 'Login'}
              </button>
              <button
                onClick={() => {
                  setTab('register');
                  setErrorMessage('');
                }}
                className={`flex-1 pb-2.5 text-xs font-bold text-center border-b-2 transition-colors cursor-pointer ${
                  tab === 'register'
                    ? 'border-emerald-700 text-emerald-800'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {lang === 'hi' ? 'रजिस्ट्रेशन' : 'Register'}
              </button>
            </div>

            {successNotice && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{successNotice}</span>
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            {tab === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर:' : 'Mobile Number:'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={lang === 'hi' ? '10 अंकों का मोबाइल नंबर' : '10-digit number'}
                      maxLength={10}
                      className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none tabular-nums text-sm text-neutral-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    {lang === 'hi' ? 'पासवर्ड:' : 'Password:'}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm text-neutral-900"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold rounded-lg transition-colors cursor-pointer text-sm"
                >
                  {lang === 'hi' ? 'लॉगिन करें' : 'Login Now'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    {lang === 'hi' ? 'पूरा नाम:' : 'Full Name:'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. शिव कुमार यादव' : 'e.g. Shiv Kumar Yadav'}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm text-neutral-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर:' : 'Mobile Number:'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9111265959"
                    maxLength={10}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none tabular-nums text-sm text-neutral-900"
                    required
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    {lang === 'hi' ? 'आप किस रूप में जुड़ना चाहते हैं?' : 'Role:'}
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as 'passenger' | 'driver')}
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-800"
                  >
                    <option value="passenger">{lang === 'hi' ? 'यात्री / सवारी (Passenger)' : 'Passenger (Rider)'}</option>
                    <option value="driver">{lang === 'hi' ? 'ई-रिक्शा चालक (Driver)' : 'E-Rickshaw Driver'}</option>
                  </select>
                </div>

                {role === 'driver' && (
                  <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 space-y-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                        {lang === 'hi' ? 'गाड़ी का नंबर (ई-रिक्शा):' : 'Vehicle Number:'}
                      </label>
                      <input
                        type="text"
                        value={vehicleNumber}
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        placeholder="CG-10-ER-1234"
                        className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                        {lang === 'hi' ? 'बैटरी का प्रकार:' : 'Battery Type:'}
                      </label>
                      <select
                        value={batteryType}
                        onChange={(e) => setBatteryType(e.target.value as 'lithium' | 'lead_acid')}
                        className="w-full px-2.5 py-1.5 bg-white border border-neutral-300 rounded text-xs"
                      >
                        <option value="lithium">लिथियम बैटरी (Lithium Battery - अनुशंसित)</option>
                        <option value="lead_acid">लेड एसिड बैटरी (Lead Acid)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-neutral-700 font-semibold mb-1">
                    {lang === 'hi' ? 'पासवर्ड बनाएं:' : 'Create Password:'}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none text-sm text-neutral-900"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg transition-colors cursor-pointer text-sm"
                >
                  {lang === 'hi' ? 'रजिस्टर करें' : 'Create Account'}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
