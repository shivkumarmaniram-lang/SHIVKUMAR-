import { LocationStop, ServiceItem } from '../types';

export const OPERATOR_INFO = {
  brandNameHi: 'एसके ई-रिक्शा ट्रांसपोर्ट',
  brandNameEn: 'SK E-Rickshaw Transport',
  fullNameHi: 'एसके ई-रिक्शा ट्रांसपोर्ट सर्विसेज',
  fullNameEn: 'SK E-Rickshaw Transport Services',
  founderHi: 'शिव कुमार यादव',
  founderEn: 'Shiv Kumar Yadav',
  fatherNameHi: 'श्री मनीराम यादव',
  fatherNameEn: 'Shri Maniram Yadav',
  phone: '+919111265959',
  phoneDisplay: '+91 9111265959',
  addressHi: 'बजरंग चौक, रहटाटोर, पोस्ट: मानिकचौरी, ज़िला: बिलासपुर, छत्तीसगढ़ - 495551',
  addressEn: 'Bajrang Chowk, Rahatator, Post: Manikchouri, Dist: Bilaspur, Chhattisgarh - 495551',
  email: 'shivkumarmaniram@gmail.com',
  workingHoursHi: 'सुबह 06:00 बजे से रात्रि 10:00 बजे तक (इमरजेंसी 24x7 उपलब्ध)',
  workingHoursEn: '06:00 AM to 10:00 PM (Emergency 24x7 Available)'
};

export const POPULAR_STOPS: LocationStop[] = [
  {
    id: 'rahatator',
    nameHi: 'बजरंग चौक, रहटाटोर (मुख्य केंद्र)',
    nameEn: 'Bajrang Chowk, Rahatator (Base Hub)',
    landmark: 'ई-रिक्शा मुख्य स्टैंड',
    distanceFromBaseKm: 0,
  },
  {
    id: 'manikchouri',
    nameHi: 'मानिकचौरी मुख्य बाजार व पोस्ट ऑफिस',
    nameEn: 'Manikchouri Main Market & Post Office',
    landmark: 'साप्ताहिक हाट बाजार',
    distanceFromBaseKm: 3.5,
  },
  {
    id: 'jairamnagar',
    nameHi: 'जयरामनगर रेलवे स्टेशन',
    nameEn: 'Jairamnagar Railway Station',
    landmark: 'स्टेशन प्रवेश द्वार व ऑटो स्टैंड',
    distanceFromBaseKm: 7.2,
  },
  {
    id: 'masturi',
    nameHi: 'मस्तूरी बस स्टैंड व तहसील मुख्यालय',
    nameEn: 'Masturi Bus Stand & Tehsil HQ',
    landmark: 'मस्तूरी चौक व हॉस्पिटल',
    distanceFromBaseKm: 9.8,
  },
  {
    id: 'malhar',
    nameHi: 'मल्हार मोड़ / ऐतिहासिक डिंडेश्वरी मंदिर मार्ग',
    nameEn: 'Malhar Mor / Dindeshwari Temple Road',
    landmark: 'मल्हार तिराहा',
    distanceFromBaseKm: 14.5,
  },
  {
    id: 'pakaria',
    nameHi: 'पकरिया गांव मोड़ व स्कूल',
    nameEn: 'Pakaria Village Road & School',
    landmark: 'पंचायत भवन पकरिया',
    distanceFromBaseKm: 4.8,
  },
  {
    id: 'sipat',
    nameHi: 'सीपत चौक / एनटीपीसी मेन गेट',
    nameEn: 'Sipat Chowk / NTPC Main Gate',
    landmark: 'सीपत मुख्य चौराहा',
    distanceFromBaseKm: 18.0,
  },
  {
    id: 'bilaspur',
    nameHi: 'बिलासपुर मुख्य शहर / पुराना बस स्टैंड',
    nameEn: 'Bilaspur City / Old Bus Stand',
    landmark: 'रेलवे स्टेशन व मुख्य बाजार',
    distanceFromBaseKm: 24.0,
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'local_ride',
    titleHi: 'लोकल सवारी शेयरिंग',
    titleEn: 'Local Shared Rides',
    descHi: 'रहटाटोर, मानिकचौरी, मस्तूरी और आसपास के गांवों के लिए सुगम, नियमित और सुरक्षित शेयरिंग ई-रिक्शा सेवा मात्र ₹10 से शुरू।',
    descEn: 'Smooth, regular and safe shared e-rickshaw rides connecting Rahatator, Manikchouri, Masturi & surrounding villages starting from just ₹10.',
    tagHi: 'नियमित दैनिक फेरे',
    tagEn: 'Daily Scheduled Trips',
    icon: 'Users',
  },
  {
    id: 'full_reserve',
    titleHi: 'फुल ई-रिक्शा रिजर्व बुकिंग',
    titleEn: 'Full Vehicle Private Reserve',
    descHi: 'परिवार, अस्पताल, शादी-समारोह, रेलवे स्टेशन या जरूरी काम के लिए व्यक्तिगत ई-रिक्शा बुकिंग सीधे आपके घर के दरवाजे से।',
    descEn: 'Personal private e-rickshaw booking directly at your doorstep for families, hospital visits, weddings, or train station trips.',
    tagHi: 'डोरस्टेप पिकअप',
    tagEn: 'Doorstep Pickup',
    icon: 'Car',
  },
  {
    id: 'goods_transport',
    titleHi: 'सामान एवं दुकान माल डिलीवरी',
    titleEn: 'Market Goods & Parcel Transport',
    descHi: 'किराना दुकान का सामान, बोरियां, हार्डवेयर, सब्जियां और घरेलू सामान कम किराए में सुरक्षित स्थान तक पहुंचाना।',
    descEn: 'Affordable and secure delivery for grocery stock, shop inventory, sacks, hardware, farm vegetables, and home shifting goods.',
    tagHi: '500 किग्रा तक क्षमता',
    tagEn: 'Up to 500kg Capacity',
    icon: 'Package',
  },
  {
    id: 'monthly_pass',
    titleHi: 'दैनिक व मासिक यात्रा पास',
    titleEn: 'Daily & Monthly Commuter Pass',
    descHi: 'रोजाना स्कूल, कॉलेज, कोचिंग व नौकरी जाने वाले छात्रों और कर्मचारियों के लिए 30% तक छूट वाले विशेष पास।',
    descEn: 'Special commuter passes with up to 30% savings for daily students, teachers, coaching-goers, and office workers.',
    tagHi: '30% तक विशेष बचत',
    tagEn: 'Up to 30% Savings',
    icon: 'CreditCard',
  },
];

export const PASS_PLANS = [
  {
    id: 'student',
    titleHi: 'छात्र / छात्रा पास (Student Pass)',
    titleEn: 'Student Commuter Pass',
    price: 499,
    validityHi: '30 दिन (सोमवार से शनिवार)',
    validityEn: '30 Days (Mon to Sat)',
    featuresHi: ['स्कूल व कोचिंग के लिए निश्चित सीट', 'प्राथमिकता के साथ पिक व ड्रॉप', 'मुफ्त स्कूल बैग लगेज सुविधा'],
    featuresEn: ['Guaranteed seats for school/coaching', 'Priority morning & evening pickup', 'Free student bag allowance'],
  },
  {
    id: 'work',
    titleHi: 'व्यापारी व कर्मचारी पास (Daily Worker Pass)',
    titleEn: 'Daily Worker & Trader Pass',
    price: 799,
    validityHi: '30 दिन (असीमित लोकल फेरे)',
    validityEn: '30 Days (Unlimited Local Trips)',
    featuresHi: ['रहटाटोर - मानिकचौरी - जयरामनगर रूट', 'सामान ले जाने की मुफ्त छूट (20 किग्रा)', 'कैशलेस डिजिटल व क्यूआर सुविधा'],
    featuresEn: ['Rahatator - Manikchouri - Jairamnagar route', 'Free luggage allowance up to 20kg', 'Cashless QR & digital convenience'],
  },
];

export const FAQS = [
  {
    qHi: 'सवारी बुक करने के लिए क्या करना होगा?',
    qEn: 'How can I book an e-rickshaw ride?',
    aHi: 'आप हमारी वेबसाइट पर रूट चुनकर सीधे व्हाट्सएप पर बुक कर सकते हैं या शिव कुमार यादव जी को मोबाइल नंबर 9111265959 पर सीधा फोन कर सकते हैं।',
    aEn: 'You can choose your route on our website and click WhatsApp to book instantly, or directly call Shiv Kumar Yadav at +91 9111265959.',
  },
  {
    qHi: 'क्या सामान या दुकान का माल भेजने की सुविधा है?',
    qEn: 'Is goods and shop cargo delivery available?',
    aHi: 'हाँ! हमारे पास विशेष लोडिंग व डिलीवरी ई-रिक्शा उपलब्ध हैं जो 500 किग्रा तक का माल, राशन, बोरियां व पार्सल सुरक्षित पहुंचाते हैं।',
    aEn: 'Yes! We have dedicated electric cargo loaders for transporting up to 500kg of goods, shop items, farm vegetables, and parcels securely.',
  },
  {
    qHi: 'किराया कितना है?',
    qEn: 'What are the fare charges?',
    aHi: 'लोकल शेयरिंग सवारी केवल ₹10 से ₹30 प्रति व्यक्ति है। पूरी गाड़ी पर्सनल रिजर्व के लिए दूरी के अनुसार ₹60 से ₹200 तक है।',
    aEn: 'Local shared passenger rides start at ₹10 to ₹30 per passenger. Full vehicle private reserve ranges from ₹60 to ₹200 depending on distance.',
  },
  {
    qHi: 'क्या ई-रिक्शा में मोबाइल चार्ज करने की सुविधा है?',
    qEn: 'Is mobile charging available inside the e-rickshaw?',
    aHi: 'हाँ, हमारी सभी आधुनिक लिथियम बैटरी ई-रिक्शा में यात्रियों के लिए इनबिल्ट हाई-स्पीड यूएसबी चार्जिंग पोर्ट उपलब्ध हैं।',
    aEn: 'Yes, all our modern lithium-battery e-rickshaws feature built-in high-speed USB charging points for passengers during travel.',
  },
];
