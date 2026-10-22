// Public contact and payment details used across the site.
export const site = {
  phone: "0720 560 328",
  phoneIntl: "+254720560328",
  whatsapp: "https://wa.me/254720560328",
  email: "autoimmunesupportkenya@gmail.com",
  facebook: "https://www.facebook.com/groups/2272790993118882",
  facebookMembers: "1,000+",
  mpesa: {
    paybill: "880100",
    account: "040444",
    bank: "NCBA",
  },
};

// Mega Walk and Run 2026, as printed on the October 2026 posters.
export const megaRun = {
  date: "Sunday, 22 November 2026",
  venue: "The Hub, Karen",
  start: "7:00 AM",
  distances: ["5 km", "10 km", "15 km", "21 km"],
  // Madfun sells the tickets (M-Pesa and card), so international supporters
  // can pay without a Kenyan phone number.
  ticketsUrl: "https://madfun.com/events/autoimmune-awareness-mega-walk-and-run",
  tickets: [
    { name: "Advance", price: 3000 },
    { name: "Regular", price: 3500 },
  ],
  included: "T-shirt and finisher medal",
};

// Event partners, in the order printed on the October 2026 posters.
export const partners = [
  "HealthyU",
  "INETIQ Fit",
  "IPCA",
  "Decathlon",
  "The Hub Karen",
  "PathCare Medical Laboratory Kenya",
];

// Vendor stall packages; each includes a tent, seats and tables.
export const vendorPackages = [
  { name: "Bronze", price: 15000 },
  { name: "Silver", price: 30000 },
  { name: "Gold", price: 50000 },
];

// Autoimmune warrior registration fee; proceeds support bereaved families.
export const warriorFee = 100;

// 150km virtual walk and run, 20 October – 19 November 2026.
export const challenge150 = {
  dates: "20 October – 19 November 2026",
  price: 3000,
  // StepUp app invite for people joining without a T-shirt and medal. If
  // empty, the site points people to WhatsApp for the link instead.
  stepUpUrl: "https://join.thestepupapp.com/PmUNjK",
};
