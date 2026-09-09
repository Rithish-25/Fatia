export const upcomingEvents = [
  {
    id: "up-01",
    name: "FATIA Mega Trade & Tech Expo 2027",
    date: "2026-08-15",
    formattedDate: "2026-08-15",
    location: "Grand Palace Hall, Erode",
    photo: "/assets/invitations/1.jpeg",
    badge: "Upcoming Flagship Expo"
  },
  {
    id: "up-02",
    name: "FATIA IT & Industrial Summit 2026",
    date: "2026-06-20",
    formattedDate: "2026-06-20",
    location: "IT Expo Convention Center, Coimbatore",
    photo: "/assets/invitations/2.jpeg",
    badge: "Upcoming Summit"
  },
  {
    id: "up-03",
    name: "FATIA Regional Trade & GST Conference",
    date: "2026-04-12",
    formattedDate: "2026-04-12",
    location: "Royal Auditorium, Salem",
    photo: "/assets/invitations/3.jpeg",
    badge: "Upcoming Forum"
  }
];

export const pastEvents = [
  {
    id: "past-01",
    name: "FATIA Industrial & IT Networking Summit 2026",
    date: "2026-06-20",
    formattedDate: "June 20, 2026",
    location: "IT Expo Convention Center, Coimbatore",
    photo: "/assets/events/event-02.jpg",
    badge: "Past Summit",
    description: "Premier networking forum connecting IT hardware vendors, software creators, and regional association leaders across Tamil Nadu.",
    highlights: [
      "25 Keynote Supply Chain Presentations",
      "12 Inter-District Trade Agreements Signed",
      "AI Tools Session for Small Businesses"
    ],
    photos: [
      "/assets/events/event-02.jpg",
      "/assets/events/event-01.jpg",
      "/assets/events/event-03.jpg"
    ]
  },
  {
    id: "past-02",
    name: "Trade Policy & Taxation Forum 2026",
    date: "2026-04-12",
    formattedDate: "April 12, 2026",
    location: "Royal Auditorium, Salem",
    photo: "/assets/events/event-03.jpg",
    badge: "Past Forum",
    description: "Focused conference addressing modern taxation policies, GST compliance, and digital invoice filing for regional traders.",
    highlights: [
      "Tax Commissioners Interactive Q&A Session",
      "45+ Trade Dispute Petitions Cleared",
      "Comprehensive GST Handbook Released"
    ],
    photos: [
      "/assets/events/event-03.jpg",
      "/assets/events/event-04.jpg",
      "/assets/events/event-05.jpg"
    ]
  },
  {
    id: "past-03",
    name: "FATIA State Leadership Summit 2025",
    date: "2025-12-14",
    formattedDate: "December 14, 2025",
    location: "Heritage Resort, Madurai",
    photo: "/assets/events/event-05.jpg",
    badge: "Past Leadership Meet",
    description: "Executive strategic summit for state board members and district presidents to chart long-term growth roadmaps and welfare.",
    highlights: [
      "2026-2028 Strategic Roadmap Formulated",
      "10 Pioneer Trade Leaders Felicitated",
      "Emergency Member Relief Fund Launched"
    ],
    photos: [
      "/assets/events/event-05.jpg",
      "/assets/events/event-06.jpg",
      "/assets/events/event-01.jpg"
    ]
  }
];

export const eventsData = [...upcomingEvents, ...pastEvents];

export default eventsData;
