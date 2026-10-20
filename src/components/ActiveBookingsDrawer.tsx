import React from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, MapPin, IndianRupee, Trash2 } from 'lucide-react';
import { Booking, Language } from '../types';
import { OPERATOR_INFO } from '../data/mockData';

interface ActiveBookingsProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  bookings: Booking[];
  onCancelBooking: (id: string) => void;
}

export const ActiveBookingsDrawer: React.FC<ActiveBookingsProps> = ({
  isOpen,
  onClose,
  lang,
  bookings,
  onCancelBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-emerald-900 text-white shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            <h3 className="font-bold text-base">
              {lang === 'hi' ? 'आपकी सक्रिय ई-रिक्शा बुकिंग' : 'Your Active E-Rickshaw Rides'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {bookings.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 space-y-3">
              <p className="text-sm">
                {lang === 'hi' ? 'अभी तक कोई बुकिंग दर्ज नहीं है।' : 'No active rides booked yet.'}
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-emerald-700 text-white text-xs font-semibold rounded-lg hover:bg-emerald-800"
              >
                {lang === 'hi' ? 'सवारी बुक करें' : 'Book a Ride Now'}
              </button>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 space-y-3 hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-neutral-200/70 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {booking.id}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {booking.createdAt}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {lang === 'hi' ? 'पुष्टि हो गई' : 'Confirmed'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'पिकअप स्थान:' : 'Pickup:'}</span>
                    <strong className="text-neutral-900">{booking.pickup}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'ड्रॉप स्थान:' : 'Drop:'}</span>
                    <strong className="text-neutral-900">{booking.drop}</strong>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'सवारी प्रकार:' : 'Type:'}</span>
                    <span className="text-neutral-800 font-medium">
                      {booking.rideType === 'shared'
                        ? (lang === 'hi' ? `शेयरिंग (${booking.passengers} सीट)` : `Shared (${booking.passengers} seats)`)
                        : booking.rideType === 'reserve'
                        ? (lang === 'hi' ? 'फुल गाड़ी रिजर्व' : 'Full Private')
                        : (lang === 'hi' ? `सामान डिलीवरी (${booking.cargoNotes || 'माल'})` : `Cargo (${booking.cargoNotes})`)}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">{lang === 'hi' ? 'कुल किराया:' : 'Fare:'}</span>
                    <strong className="text-emerald-700 font-bold tabular-nums text-sm">₹{booking.estimatedFare}</strong>
                  </div>
                </div>

                {/* Driver information */}
                <div className="p-3 bg-white rounded-lg border border-neutral-200 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-neutral-500 text-[11px] block">{lang === 'hi' ? 'आवंटित वाहन व चालक:' : 'Assigned E-Rickshaw:'}</span>
                    <strong className="text-neutral-900">{booking.rickshawNumber}</strong>
                    <p className="text-neutral-600">{booking.driverName} ({booking.driverPhone})</p>
                  </div>
                  <a
                    href={`tel:${OPERATOR_INFO.phone}`}
                    className="p-2.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                    title="चालक को कॉल करें"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => onCancelBooking(booking.id)}
                    className="flex items-center gap-1 text-[11px] text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'बुकिंग रद्द करें' : 'Cancel Ride'}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-100 border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-600">
          <span>
            {lang === 'hi' ? 'हेल्पलाइन: ' : 'Helpline: '}
            <strong className="text-neutral-900 tabular-nums">{OPERATOR_INFO.phoneDisplay}</strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 cursor-pointer"
          >
            {lang === 'hi' ? 'वापस जाएं' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
