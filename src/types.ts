export type Language = 'hi' | 'en';

export type RideType = 'shared' | 'reserve' | 'cargo';

export interface LocationStop {
  id: string;
  nameHi: string;
  nameEn: string;
  landmark: string;
  distanceFromBaseKm: number; // relative to Bajrang Chowk Rahatator
}

export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  pickup: string;
  drop: string;
  rideType: RideType;
  passengers: number;
  cargoNotes?: string;
  date: string;
  time: string;
  estimatedFare: number;
  distanceKm: number;
  status: 'confirmed' | 'pending' | 'completed';
  driverName?: string;
  driverPhone?: string;
  rickshawNumber?: string;
  createdAt: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  role: 'passenger' | 'driver';
  vehicleNumber?: string;
  batteryType?: 'lithium' | 'lead_acid';
}

export interface ServiceItem {
  id: string;
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  tagHi: string;
  tagEn: string;
  icon: string;
}
