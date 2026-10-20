import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FareBookingCalculator } from './components/FareBookingCalculator';
import { ServicesSection } from './components/ServicesSection';
import { FleetHighlights } from './components/FleetHighlights';
import { AboutSection } from './components/AboutSection';
import { CustomerSupport } from './components/CustomerSupport';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ActiveBookingsDrawer } from './components/ActiveBookingsDrawer';
import { Booking, Language, UserProfile } from './types';
import { OPERATOR_INFO } from './data/mockData';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);

  // Initialize user profile from localStorage if exists
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('sk_current_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Initialize sample bookings or load from localStorage
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('sk_bookings');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: 'SK-7814',
        customerName: 'राजेश यादव',
        customerPhone: '98261XXXXX',
        pickup: 'बजरंग चौक, रहटाटोर (मुख्य केंद्र)',
        drop: 'मानिकचौरी मुख्य बाजार व पोस्ट ऑफिस',
        rideType: 'shared',
        passengers: 2,
        date: '2026-10-20',
        time: 'सुबह 09:30 AM',
        estimatedFare: 24,
        distanceKm: 3.5,
        status: 'confirmed',
        driverName: 'शिव कुमार यादव',
        driverPhone: OPERATOR_INFO.phoneDisplay,
        rickshawNumber: 'CG-10-ER-4482',
        createdAt: '09:15 AM',
      },
    ];
  });

  // Save bookings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sk_bookings', JSON.stringify(bookings));
    } catch (err) {
      console.error(err);
    }
  }, [bookings]);

  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('sk_current_user', JSON.stringify(user));
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('sk_current_user');
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBooking = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleCancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        bookingCount={bookings.length}
        onOpenBookings={() => setIsBookingsOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero lang={lang} onBookClick={scrollToBooking} />

        {/* Fare & Booking Calculator */}
        <FareBookingCalculator
          lang={lang}
          onBookingConfirmed={handleAddBooking}
        />

        {/* Services Bento Grid */}
        <ServicesSection
          lang={lang}
          onBookRideClick={scrollToBooking}
        />

        {/* Fleet Lithium Highlights & Comparison */}
        <FleetHighlights lang={lang} />

        {/* About Section */}
        <AboutSection lang={lang} />

        {/* Customer Support & FAQs */}
        <CustomerSupport lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Auth & Profile Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        lang={lang}
        currentUser={currentUser}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />

      {/* Active Bookings Drawer */}
      <ActiveBookingsDrawer
        isOpen={isBookingsOpen}
        onClose={() => setIsBookingsOpen(false)}
        lang={lang}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />
    </div>
  );
}
