import React, { useState, useId } from 'react';
import { ArrowLeftRight, Clock, MapPin, Navigation, IndianRupee, MessageCircle, Phone, CheckCircle2, User, Sparkles } from 'lucide-react';
import { Booking, Language, RideType } from '../types';
import { OPERATOR_INFO, POPULAR_STOPS } from '../data/mockData';

interface FareCalculatorProps {
  lang: Language;
  onBookingConfirmed: (booking: Booking) => void;
}

export const FareBookingCalculator: React.FC<FareCalculatorProps> = ({
  lang,
  onBookingConfirmed,
}) => {
  const [pickupId, setPickupId] = useState<string>('rahatator');
  const [dropId, setDropId] = useState<string>('manikchouri');
  const [rideType, setRideType] = useState<RideType>('shared');
  const [passengers, setPassengers] = useState<number>(1);
  const [cargoWeight, setCargoWeight] = useState<string>('40kg');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [rideDate, setRideDate] = useState<string>(() => new Date().toISOString().split('T')[0]);
  const [rideTime, setRideTime] = useState<string>('अभी / As Soon As Possible');
  const [confirmedTicket, setConfirmedTicket] = useState<Booking | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  const pickupSelectId = useId();
  const dropSelectId = useId();

  // Calculate distance
  const pickupStop = POPULAR_STOPS.find((s) => s.id === pickupId) || POPULAR_STOPS[0];
  const dropStop = POPULAR_STOPS.find((s) => s.id === dropId) || POPULAR_STOPS[1];

  const distanceKm = Math.max(
    1.5,
    Math.round(Math.abs(pickupStop.distanceFromBaseKm - dropStop.distanceFromBaseKm) * 10) / 10 || 3.0
  );

  // Calculate fare
  let estimatedFare = 0;
  if (rideType === 'shared') {
    // ₹10 base up to 3km, then ₹4/km per passenger
    const perPerson = Math.max(10, Math.round(10 + Math.max(0, distanceKm - 3) * 4));
    estimatedFare = perPerson * passengers;
  } else if (rideType === 'reserve') {
    // Full reserve ₹50 base up to 3km, then ₹12/km
    estimatedFare = Math.max(50, Math.round(50 + Math.max(0, distanceKm - 3) * 14));
  } else if (rideType === 'cargo') {
    // Goods delivery: base ₹60 up to 3km, then ₹15/km
    const weightFactor = cargoWeight === '200kg+' ? 1.4 : cargoWeight === '100kg' ? 1.2 : 1.0;
    estimatedFare = Math.round(Math.max(60, 60 + Math.max(0, distanceKm - 3) * 15) * weightFactor);
  }

  // Estimated travel time (average speed 22 km/h in e-rickshaw + 3 min buffer)
  const estimatedMins = Math.round((distanceKm / 20) * 60) + 4;

  const handleSwapStops = () => {
    const temp = pickupId;
    setPickupId(dropId);
    setDropId(temp);
  };

  const handleWhatsAppBooking = () => {
    if (!customerPhone && !customerName) {
      setValidationError(
        lang === 'hi'
          ? 'कृपया अपना नाम और मोबाइल नंबर दर्ज करें ताकि चालक आपसे संपर्क कर सके।'
          : 'Please enter your name and phone number so driver can contact you.'
      );
      return;
    }
    setValidationError('');

    const rideTypeText =
      rideType === 'shared'
        ? `शेयरिंग सवारी (${passengers} व्यक्ति)`
        : rideType === 'reserve'
        ? 'पूरी गाड़ी पर्सनल रिजर्व'
        : `सामान / माल डिलीवरी (${cargoWeight})`;

    const message = `*नमस्ते शिव कुमार जी (एसके ई-रिक्शा ट्रांसपोर्ट)*%0A%0Aमुझे ई-रिक्शा बुक करनी है:%0A📍 *पिकअप:* ${pickupStop.nameHi}%0A🏁 *ड्रॉप:* ${dropStop.nameHi}%0A🛺 *प्रकार:* ${rideTypeText}%0A📏 *दूरी:* ${distanceKm} किमी (अनुमानित समय: ${estimatedMins} मिनट)%0A💵 *अनुमानित किराया:* ₹${estimatedFare}%0A👤 *यात्री:* ${customerName || 'यात्री'}%0A📞 *मोबाइल:* ${customerPhone || 'उपलब्ध कराया जाएगा'}%0A🕒 *समय:* ${rideTime}%0A%0Aकृपया पुष्टि करें। धन्यवाद!`;

    const whatsappUrl = `https://wa.me/919111265959?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Also record as booking
    const newBooking: Booking = {
      id: `SK-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: customerName || 'यात्री (WhatsApp)',
      customerPhone: customerPhone || '9111265959',
      pickup: pickupStop.nameHi,
      drop: dropStop.nameHi,
      rideType,
      passengers,
      cargoNotes: rideType === 'cargo' ? cargoWeight : undefined,
      date: rideDate,
      time: rideTime,
      estimatedFare,
      distanceKm,
      status: 'confirmed',
      driverName: 'शिव कुमार यादव / एसके टीम',
      driverPhone: OPERATOR_INFO.phoneDisplay,
      rickshawNumber: 'CG-10-ER-4482 (लिथियम पावर्ड)',
      createdAt: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    onBookingConfirmed(newBooking);
    setConfirmedTicket(newBooking);
  };

  const handleConfirmDirectBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      setValidationError(
        lang === 'hi'
          ? 'कृपया अपना नाम और 10 अंकों का मोबाइल नंबर दर्ज करें।'
          : 'Please enter your name and 10-digit mobile number.'
      );
      return;
    }

    if (customerPhone.replace(/\D/g, '').length < 10) {
      setValidationError(
        lang === 'hi'
          ? 'कृपया वैध 10 अंकों का मोबाइल नंबर दर्ज करें।'
          : 'Please enter a valid 10-digit mobile number.'
      );
      return;
    }

    setValidationError('');

    const newBooking: Booking = {
      id: `SK-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      pickup: pickupStop.nameHi,
      drop: dropStop.nameHi,
      rideType,
      passengers,
      cargoNotes: rideType === 'cargo' ? cargoWeight : undefined,
      date: rideDate,
      time: rideTime,
      estimatedFare,
      distanceKm,
      status: 'confirmed',
      driverName: 'शिव कुमार यादव / एसके टीम',
      driverPhone: OPERATOR_INFO.phoneDisplay,
      rickshawNumber: 'CG-10-ER-4482 (लिथियम पावर्ड)',
      createdAt: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }),
    };

    onBookingConfirmed(newBooking);
    setConfirmedTicket(newBooking);
  };

  return (
    <section id="booking" className="py-12 lg:py-16 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-1">
            {lang === 'hi' ? 'तुरंत पारदर्शी किराया जांचें' : 'Instant Transparent Fare Calculator'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            {lang === 'hi'
              ? 'सवारी बुक करें एवं किराया कैलकुलेटर'
              : 'Book Your Ride & Estimate Fare'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            {lang === 'hi'
              ? 'बजरंग चौक, मानिकचौरी, जयरामनगर, मस्तूरी और बिलासपुर के बीच कोई छुपा हुआ चार्ज नहीं।'
              : 'Fixed, fair pricing across Rahatator, Manikchouri, Jairamnagar, and Masturi.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Confirmed Ticket Alert if generated */}
          {confirmedTicket && (
            <div className="mb-8 p-6 bg-emerald-50 border border-emerald-300 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-emerald-950">
                      {lang === 'hi' ? 'सवारी बुकिंग अनुरोध दर्ज हो गया है!' : 'Ride Booking Request Confirmed!'}
                    </h3>
                    <p className="text-xs text-emerald-800">
                      {lang === 'hi'
                        ? `बुकिंग संदर्भ संख्या: ${confirmedTicket.id} · शिव कुमार जी द्वारा पुष्टि की जा रही है`
                        : `Booking Reference: ${confirmedTicket.id} · Dispatch assigned`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setConfirmedTicket(null)}
                  className="text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer"
                >
                  ✕ {lang === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-white p-4 rounded-xl border border-emerald-200">
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'पिकअप' : 'Pickup'}</span>
                  <strong className="text-neutral-900 block truncate">{confirmedTicket.pickup}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'ड्रॉप' : 'Drop'}</span>
                  <strong className="text-neutral-900 block truncate">{confirmedTicket.drop}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'किराया' : 'Fare'}</span>
                  <strong className="text-emerald-700 block tabular-nums text-sm">₹{confirmedTicket.estimatedFare}</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">{lang === 'hi' ? 'गाड़ी' : 'Vehicle'}</span>
                  <strong className="text-neutral-900 block truncate">{confirmedTicket.rickshawNumber}</strong>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-emerald-800 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>
                    {lang === 'hi' ? 'चालक सहायता: ' : 'Driver Contact: '}
                    <strong className="tabular-nums">{confirmedTicket.driverPhone}</strong>
                  </span>
                </div>
                <a
                  href={`tel:${OPERATOR_INFO.phone}`}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  {lang === 'hi' ? 'चालक को तुरंत कॉल करें' : 'Call Dispatch Now'}
                </a>
              </div>
            </div>
          )}

          {/* Main Interactive Form Card */}
          <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8">
            <form onSubmit={handleConfirmDirectBooking} className="space-y-6">
              {/* Ride Mode Segmented Buttons */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'सवारी का प्रकार चुनें' : 'Select Ride Category'}
                </label>
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-neutral-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setRideType('shared')}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 text-center ${
                      rideType === 'shared'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {lang === 'hi' ? 'शेयरिंग (प्रति सीट)' : 'Shared (Per Seat)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRideType('reserve')}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 text-center ${
                      rideType === 'reserve'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {lang === 'hi' ? 'फुल रिजर्व (पर्सनल)' : 'Full Private'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRideType('cargo')}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 text-center ${
                      rideType === 'cargo'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {lang === 'hi' ? 'सामान / दुकान माल' : 'Cargo / Freight'}
                  </button>
                </div>
              </div>

              {/* Pickup & Drop Selectors with Swap */}
              <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
                <div className="md:col-span-5">
                  <label htmlFor={pickupSelectId} className="block text-xs font-medium text-neutral-600 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'hi' ? 'पिकअप स्थान (Pickup)' : 'Pickup Location'}</span>
                  </label>
                  <select
                    id={pickupSelectId}
                    value={pickupId}
                    onChange={(e) => setPickupId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    {POPULAR_STOPS.map((stop) => (
                      <option key={`pickup-${stop.id}`} value={stop.id}>
                        {lang === 'hi' ? stop.nameHi : stop.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-1 flex justify-center py-1">
                  <button
                    type="button"
                    onClick={handleSwapStops}
                    className="p-2.5 rounded-full bg-neutral-100 hover:bg-emerald-100 text-neutral-600 hover:text-emerald-800 border border-neutral-200 transition-colors cursor-pointer"
                    title="रूट बदलें / Swap"
                  >
                    <ArrowLeftRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor={dropSelectId} className="block text-xs font-medium text-neutral-600 mb-1 flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{lang === 'hi' ? 'ड्रॉप स्थान (Drop)' : 'Drop Location'}</span>
                  </label>
                  <select
                    id={dropSelectId}
                    value={dropId}
                    onChange={(e) => setDropId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  >
                    {POPULAR_STOPS.map((stop) => (
                      <option key={`drop-${stop.id}`} value={stop.id}>
                        {lang === 'hi' ? stop.nameHi : stop.nameEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Sub-options based on Ride Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {rideType === 'shared' && (
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">
                      {lang === 'hi' ? 'यात्रियों की संख्या' : 'Number of Passengers'}
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setPassengers(num)}
                          className={`flex-1 py-2 text-sm font-semibold rounded-lg border transition-colors cursor-pointer tabular-nums ${
                            passengers === num
                              ? 'bg-emerald-100 border-emerald-600 text-emerald-900'
                              : 'bg-neutral-50 border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {rideType === 'cargo' && (
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">
                      {lang === 'hi' ? 'अनुमानित सामान वजन' : 'Estimated Cargo Weight'}
                    </label>
                    <select
                      value={cargoWeight}
                      onChange={(e) => setCargoWeight(e.target.value)}
                      className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-800"
                    >
                      <option value="20kg">20 किग्रा तक (हल्के पार्सल/थैले)</option>
                      <option value="50kg">50 किग्रा (दुकान का राशन/बोरी)</option>
                      <option value="100kg">100 किग्रा (सब्जी/मंडी माल)</option>
                      <option value="200kg+">200 किग्रा से अधिक (भारी लोडिंग)</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    {lang === 'hi' ? 'सवारी का समय' : 'Departure Time'}
                  </label>
                  <select
                    value={rideTime}
                    onChange={(e) => setRideTime(e.target.value)}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-800"
                  >
                    <option value="अभी / As Soon As Possible">तुरंत (10-15 मिनट में)</option>
                    <option value="सुबह 07:00 - 09:00 बजे">सुबह (07:00 - 09:00 AM)</option>
                    <option value="दोपहर 12:00 - 02:00 बजे">दोपहर (12:00 - 02:00 PM)</option>
                    <option value="शाम 05:00 - 07:00 बजे">शाम (05:00 - 07:00 PM)</option>
                    <option value="रात्रि इमरजेंसी (आफ्टर 08 PM)">रात्रि रिजर्व (08:00 PM के बाद)</option>
                  </select>
                </div>
              </div>

              {/* Fare & Travel Estimate Calculation Box */}
              <div className="p-4 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-xs text-neutral-600 flex items-center justify-center sm:justify-start gap-2">
                    <span className="tabular-nums font-semibold text-neutral-800">{distanceKm} किमी दूरी</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-neutral-700">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="tabular-nums font-semibold">{estimatedMins} मिनट सफर</span>
                    </span>
                  </div>
                  <div className="text-xs text-emerald-800 font-medium">
                    {rideType === 'shared'
                      ? (lang === 'hi' ? `₹${Math.round(estimatedFare / passengers)} प्रति व्यक्ति × ${passengers} यात्री` : `₹${Math.round(estimatedFare / passengers)} per seat × ${passengers}`)
                      : rideType === 'reserve'
                      ? (lang === 'hi' ? 'पर्सनल पूरी गाड़ी (4 यात्री तक निःशुल्क)' : 'Full vehicle reserved')
                      : (lang === 'hi' ? 'सुरक्षित लोडिंग व अनलोडिंग सहायता' : 'Cargo transport fare')}
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-xs text-neutral-500 uppercase tracking-wide block">
                    {lang === 'hi' ? 'अनुमानित कुल किराया' : 'Estimated Fare'}
                  </span>
                  <div className="text-3xl font-extrabold text-emerald-900 tabular-nums flex items-center justify-center sm:justify-end">
                    <IndianRupee className="w-6 h-6 stroke-[2.5]" />
                    <span>{estimatedFare}</span>
                  </div>
                </div>
              </div>

              {/* Rider Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {lang === 'hi' ? 'आपका नाम' : 'Your Full Name'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. राजेश यादव' : 'e.g. Rajesh Yadav'}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर' : '10-Digit Mobile Number'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="91112XXXXX"
                    maxLength={10}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:bg-white focus:ring-2 focus:ring-emerald-600 focus:outline-none tabular-nums"
                    required
                  />
                </div>
              </div>

              {validationError && (
                <p className="text-xs text-red-600 font-medium bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {validationError}
                </p>
              )}

              {/* Action Buttons: WhatsApp Booking + Online Direct Request */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-lg shadow-sm transition-colors cursor-pointer text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर तुरंत बुक करें' : 'Instant WhatsApp Booking'}</span>
                </button>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-950 text-white font-bold rounded-lg shadow-sm transition-colors cursor-pointer text-sm"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'ऑनलाइन अनुरोध दर्ज करें' : 'Submit Booking Request'}</span>
                </button>
              </div>

              {/* Helper text */}
              <p className="text-[11px] text-center text-neutral-500">
                {lang === 'hi'
                  ? 'तत्काल बुकिंग सहायता के लिए संचालक शिव कुमार यादव जी को सीधे +91 9111265959 पर भी कॉल कर सकते हैं।'
                  : 'For urgent assistance, directly call operator Shiv Kumar Yadav at +91 9111265959.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
