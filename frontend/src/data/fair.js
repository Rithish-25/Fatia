export const fairYears = [2027, 2025, 2023, 2018, 2016, 2015, 2013];

const mockMemberNamesByYear = {
  2027: [
    { name: "P. Dhanapalan", role: "Chairman", image: "/assets/board/Balu@P.Dhanapalan-Vice President.jpg" },
    { name: "N.T. Moorthy", role: "Secretary", image: "/assets/board/N.T.Moorthy-Joint  Secretary.jpg" },
    { name: "P. Gopalakrishnan", role: "Treasurer", image: "/assets/board/P.Gopalakrishnan-Assistant Treasurer.jpg" }
  ],
  2025: [
    // Board Members (Top 3)
    { name: "K. Jifry", role: "Chairman", image: "/assets/fair_committee/K.Jifry-Vice President.jpg" },
    { name: "P. Chinnasamy", role: "Secretary", image: "/assets/fair_committee/P.CHINNASAMY  PONSHANKAR AGENCIES.jpg" },
    { name: "K. Shivakumar", role: "Treasurer", image: "/assets/board/K.Sivakumar-Director.jpg" },

    // Core Committee & Key Officers
    { name: "V.K. Rajamanickam", role: "Founder Fatia Fair", image: "/assets/fair_committee/V.K.Rajamanickam-Founder FATIA FAIR.jpg" },
    { name: "R. Senthilkumar", role: "Vice Chairman", image: "/assets/fair_committee/Senthil.jpg" },
    { name: "N.T. Moorthy", role: "IPC", image: "/assets/fair_committee/N.T.Moorthy-  FATIA FAIR 2023 Chairman.jpg" },
    { name: "P. Ravichandran", role: "Co-ordinator", image: "/assets/fair_committee/P.Ravichandran-Co-ordinator.jpg" },
    { name: "R. Muruganantham", role: "PRO", image: "/assets/fair_committee/R.Muruganantham-PRO.jpg" },

    // Joint Secretaries
    { name: "K. Kailasapathy", role: "Joint Secretary", image: "/assets/fair_committee/K.Kailasapathy-Joint Secretary.jpg" },
    { name: "A. Selvaraj", role: "Joint Secretary", image: "/assets/fair_committee/A.Selvaraj-Director.jpeg" },
    { name: "R. Manohar", role: "Joint Secretary", image: "/assets/fair_committee/manokar rmbf rooster sheet photo.JPG" },
    { name: "M.S. Chinnasamy", role: "Joint Secretary", image: "/assets/fair_committee/M.S.Chinnasamy- Director.jpeg" },

    // Advisors
    { name: "V. Rajamanickam", role: "Advisor", image: "/assets/fair_committee/V.Rajamanickam-Advisor.jpg" },
    { name: "S. Senguttuvan", role: "Advisor", image: "/assets/fair_committee/S.Senguttuvan-Advisor.jpg" },
    { name: "Balu @ P. Dhanabalan", role: "Advisor", image: "/assets/fair_committee/Balu@P.Dhanapalan-Advisor.jpg" },
    { name: "C. Muthusamy", role: "Advisor", image: "/assets/fair_committee/C.Muthusamy-Advisor.jpeg" },
    { name: "M.R. Venkatachalam", role: "Advisor", image: "/assets/fair_committee/M.R. Venkatachalam.jpg" },
    { name: "C. Doraisamy", role: "Advisor", image: "/assets/fair_committee/C.Doraisamy-Advisor.jpg" },
    { name: "T. Jagadeesan", role: "Advisor", image: "/assets/fair_committee/T.Jagadeesan-Advisor.jpg" },
    { name: "R.S. Nataraja Mudaliyar", role: "Advisor", image: "/assets/fair_committee/R.S. Nataraja Muthaliyar.jpg" },
    { name: "P. Jayaprakash", role: "Advisor", image: "/assets/fair_committee/Jayprakash.jpg" },

    // Committee Chairmen
    { name: "C. Balakrishnan", role: "Chairman - Job Opportunity Committee", image: "/assets/fair_committee/C.Balakrishnan-Chairman, Job Oppurtunity Committee.jpg" },
    { name: "N. Nagarajan", role: "Chairman - Public Relation Committee", image: "/assets/fair_committee/N.Nagarajan-Chariman, Public Relation Committee.jpg" },

    // Directors
    { name: "V.M. Elango", role: "Director", image: "/assets/fair_committee/V.M.Elango-Director.jpg" },
    { name: "M. Noor Mohammad", role: "Director", image: "/assets/fair_committee/M.Noor Mohammad-Director.jpeg" },
    { name: "K.K. Vimal Karuppannan", role: "Director", image: "/assets/fair_committee/Vimal-removebg-preview.png" },
    { name: "S. Chidambara Saravanan", role: "Director", image: "/assets/fair_committee/S.Chidambara Saravanan-Director.jpeg" },
    { name: "M. Sathya Moorthi", role: "Director", image: "/assets/fair_committee/Sathyamoorthy.jpg" },
    { name: "S. Raja Mohamed", role: "Director", image: "/assets/fair_committee/Raja Muhameed.jpg" },
    { name: "B. Sree Prabhu", role: "Director", image: "/assets/board/006.jpg" },
    { name: "S. Gnanavelan", role: "Director", image: "/assets/fair_committee/Gnanavelan-Director.jpeg" },
    { name: "V. Dhanasekar", role: "Director", image: "/assets/fair_committee/V.Dhanasekar - Director.jpeg" },
    { name: "C. Dinesh", role: "Director", image: "/assets/fair_committee/C.Dinesh - Director.jpeg" },
    { name: "L. Jagadeesh", role: "Director", image: "/assets/fair_committee/L.Jagadeesh - Director.jpeg" },
    { name: "L.K.M. Suresh", role: "Director", image: "/assets/fair_committee/L.K.M.Suresh - Director.jpeg" },
    { name: "Y. Sathish", role: "Director", image: "/assets/fair_committee/Y.Sathish - Director.jpeg" },

    // Malar Committee Editors
    { name: "A.P. Nallashivam", role: "Editor - Malar Committee", image: "/assets/fair_committee/A.P. Nallashivam - Malar.jpg" },
    { name: "S. Anand Kumar", role: "Editor - Malar Committee", image: "/assets/fair_committee/Anand.jpg" }
  ],
  2023: [
    { name: "N.T. Moorthy", role: "Chairman", image: "/assets/fair_committee/N.T.Moorthy-  FATIA FAIR 2023 Chairman.jpg" },
    { name: "R. Senthilkumar", role: "Secretary", image: "/assets/fair_committee/Senthil.jpg" },
    { name: "P. Chinnasamy", role: "Treasurer", image: "/assets/fair_committee/P.CHINNASAMY  PONSHANKAR AGENCIES.jpg" }
  ],
  2018: [
    { name: "C. Balakrishnan", role: "Chairman", image: "/assets/fair_committee/C.Balakrishnan-Chairman, Job Oppurtunity Committee.jpg" },
    { name: "K. Jifry", role: "Secretary", image: "/assets/fair_committee/K.Jifry-Vice President.jpg" },
    { name: "R. Senthilkumar", role: "Treasurer", image: "/assets/fair_committee/Senthil.jpg" }
  ],
  2016: [
    { name: "C. Balakrishnan", role: "Chairman", image: "/assets/fair_committee/C.Balakrishnan-Chairman, Job Oppurtunity Committee.jpg" },
    { name: "N.T. Moorthy", role: "Secretary", image: "/assets/fair_committee/N.T.Moorthy-  FATIA FAIR 2023 Chairman.jpg" },
    { name: "K. Jifry", role: "Treasurer", image: "/assets/fair_committee/K.Jifry-Vice President.jpg" }
  ],
  2015: [
    { name: "V.K. Rajamanickam", role: "Chairman", image: "/assets/fair_committee/V.K.Rajamanickam-Founder FATIA FAIR.jpg" },
    { name: "P. Jayaprakash", role: "Secretary", image: "/assets/fair_committee/Jayprakash.jpg" },
    { name: "N.T. Moorthy", role: "Treasurer", image: "/assets/fair_committee/N.T.Moorthy-  FATIA FAIR 2023 Chairman.jpg" }
  ],
  2013: [
    { name: "V.K. Rajamanickam", role: "Founder Chairman", image: "/assets/fair_committee/V.K.Rajamanickam-Founder FATIA FAIR.jpg" },
    { name: "C. Balakrishnan", role: "Secretary", image: "/assets/fair_committee/C.Balakrishnan-Chairman, Job Oppurtunity Committee.jpg" },
    { name: "R.V. Murugananthan", role: "Treasurer", image: "/assets/board/R.Muruganandam- Treasurer.jpg" }
  ]
};

export const getFairDataByYear = (year) => {
  const numericYear = parseInt(year, 10);
  const isValidYear = fairYears.includes(numericYear);

  if (!isValidYear) {
    return null;
  }

  const rawMembers = mockMemberNamesByYear[numericYear] || [];

  const allCommittee = rawMembers.map((m) => {
    if (typeof m === 'string') {
      const match = m.match(/^(.*?)\s*\((.*?)\)$/);
      if (match) {
        return { name: match[1], title: match[2], role: match[2] };
      }
      return { name: m, title: "Fair Committee Member", role: "Fair Committee Member" };
    }
    return { name: m.name, title: m.role, role: m.role, image: m.image };
  });

  const boardMembers = allCommittee.slice(0, 3);
  const additionalCommittee = allCommittee.slice(3);

  const taglineText = `Bringing together trade, industry, commerce, and enterprise across Tamil Nadu in ${numericYear}.`;
  const aboutBody = `The FATIA Fair ${numericYear} was conducted as a premier state-level trade and industrial expo by the Federation of All Trade & Industry Associations of Erode District. Bringing together leading business associations, industrial manufacturers, regional traders, and enterprise leaders, the expo showcased commercial innovations, trade growth, and industrial solutions. Organised with meticulous dedication by the FATIA Fair Committee, it served as a landmark platform for trade expansion and industrial networking across all districts.`;

  const fairPhotosByYear = {
    2013: [
      { url: '/assets/fatia_fair/2013/DSC_2552.JPG', caption: `FATIA Fair 2013 Stage Inauguration` },
      { url: '/assets/fatia_fair/2013/DSC_2672.JPG', caption: `FATIA Fair 2013 Trade Expo Hall` },
      { url: '/assets/fatia_fair/2013/DSC_2714.JPG', caption: `FATIA Fair 2013 Dignitaries Presentation` },
      { url: '/assets/fatia_fair/2013/DSC_3091.JPG', caption: `FATIA Fair 2013 Expo Stalls & Delegates` },
      { url: '/assets/fatia_fair/2013/DSC_3418.JPG', caption: `FATIA Fair 2013 Committee Gathering` }
    ],
    2015: [
      { url: '/assets/fatia_fair/2015/DSC_1019.JPG', caption: `FATIA Fair 2015 Industrial Expo` },
      { url: '/assets/fatia_fair/2015/DSC_1179.JPG', caption: `FATIA Fair 2015 Keynote Session` },
      { url: '/assets/fatia_fair/2015/DSC_1289.JPG', caption: `FATIA Fair 2015 Trade Pavilion` },
      { url: '/assets/fatia_fair/2015/DSC_2182.JPG', caption: `FATIA Fair 2015 Executive Presentation` },
      { url: '/assets/fatia_fair/2015/DSC_2289.JPG', caption: `FATIA Fair 2015 Committee Honor` }
    ],
    2016: [
      { url: '/assets/fatia_fair/2016/IMG_0024.JPG', caption: `FATIA Fair 2016 Grand Expo Inauguration` },
      { url: '/assets/fatia_fair/2016/IMG_1605.JPG', caption: `FATIA Fair 2016 Exhibition Stalls` },
      { url: '/assets/fatia_fair/2016/IMG_1816.JPG', caption: `FATIA Fair 2016 Enterprise Forum` },
      { url: '/assets/fatia_fair/2016/IMG_3100.JPG', caption: `FATIA Fair 2016 Industry Leaders` },
      { url: '/assets/fatia_fair/2016/IMG_3403.JPG', caption: `FATIA Fair 2016 Closing Ceremony` }
    ],
    2018: [
      { url: '/assets/fatia_fair/2018/IMG_1161.JPG', caption: `FATIA Fair 2018 Mega Trade Expo` },
      { url: '/assets/fatia_fair/2018/IMG_1487.JPG', caption: `FATIA Fair 2018 Innovation Pavilion` },
      { url: '/assets/fatia_fair/2018/IMG_1608.JPG', caption: `FATIA Fair 2018 Commercial Showcase` },
      { url: '/assets/fatia_fair/2018/IMG_1777.JPG', caption: `FATIA Fair 2018 Executive Forum` },
      { url: '/assets/fatia_fair/2018/IMG_2564.JPG', caption: `FATIA Fair 2018 Award Presentation` }
    ]
  };

  const fiveMoments = fairPhotosByYear[numericYear] || [
    { caption: `Fair ${numericYear} Moment 1` },
    { caption: `Fair ${numericYear} Moment 2` },
    { caption: `Fair ${numericYear} Moment 3` },
    { caption: `Fair ${numericYear} Moment 4` },
    { caption: `Fair ${numericYear} Moment 5` }
  ];

  return {
    year: numericYear.toString(),
    title: `FATIA Fair ${numericYear}`,
    tagline: taglineText,
    summary: taglineText,
    about: aboutBody,
    aboutText: aboutBody,
    boardMembers: boardMembers,
    committee: boardMembers,
    additionalCommittee: additionalCommittee,
    members: rawMembers,
    gallery: fiveMoments,
    photos: fiveMoments
  };
};

const fairExport = { fairYears, getFairDataByYear };
export default fairExport;
