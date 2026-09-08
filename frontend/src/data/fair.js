export const fairYears = [
  2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026
];

const mockMemberNamesByYear = {
  2014: ["K. Sivasankaran (Fair Chairman)", "R. Vadivelu (Convenor)", "S. Anbarasan (Treasurer)"],
  2015: ["M. Palanivel (Fair Chairman)", "T. Shanmugam (Convenor)", "P. Loganathan (Treasurer)"],
  2016: ["G. Ravichandran (Fair Chairman)", "A. Subramaniam (Convenor)", "V. Thangavel (Treasurer)"],
  2017: ["R. Murugesh (Fair Chairman)", "N. Jayakumar (Convenor)", "C. Rajendran (Treasurer)"],
  2018: ["P. Sampath (Fair Chairman)", "D. Velusamy (Convenor)", "M. Devaraj (Treasurer)"],
  2019: ["V. Kandasamy (Fair Chairman)", "S. Gunasekar (Convenor)", "K. Rajagopal (Treasurer)"],
  2020: ["T. Durairaj (Fair Chairman)", "P. Swaminathan (Convenor)", "A. Marimuthu (Treasurer)"],
  2021: ["R. Elangovan (Fair Chairman)", "K. Natarajan (Convenor)", "M. Soundararajan (Treasurer)"],
  2022: ["S. Balakrishnan (Fair Chairman)", "V. Senthamil (Convenor)", "P. Thirunavukkarasu (Treasurer)"],
  2023: ["N. Ramasamy (Fair Chairman)", "A. Chellappan (Convenor)", "K. Ponnusamy (Treasurer)"],
  2024: ["M. Gurusamy (Fair Chairman)", "P. Boopathy (Convenor)", "R. Kalidass (Treasurer)"],
  2025: ["V.K. Rajamanickam (Fair Chairman)", "P. Ravichandran (Convenor)", "R. Muruganantham (Treasurer)"],
  2026: ["P. Dhanapalan (Fair Chairman)", "N.T. Moorthy (Convenor)", "P. Gopalakrishnan (Treasurer)"]
};

export const getFairDataByYear = (year) => {
  const numericYear = parseInt(year, 10);
  const isValidYear = fairYears.includes(numericYear);

  if (!isValidYear) {
    return null;
  }

  const members = mockMemberNamesByYear[numericYear] || [
    `Member Officer 1 (${numericYear})`,
    `Member Officer 2 (${numericYear})`,
    `Member Officer 3 (${numericYear})`
  ];

  return {
    year: numericYear.toString(),
    title: `FATIA Technology & Consumer IT Fair ${numericYear}`,
    tagline: `Bringing the best in consumer electronics, enterprise hardware, and IT solutions to Tamil Nadu in ${numericYear}.`,
    about: `The FATIA IT Fair ${numericYear} was conducted as a premier state-level technology expo. Bringing together over 100 leading technology vendors, regional distributors, and thousands of IT enthusiasts, the event showcased cutting-edge computing innovations, consumer hardware, and business solutions. Organised with meticulous dedication by the FATIA Fair Committee, it served as a catalyst for IT adoption and trade networking across all districts.`,
    members: members,
    photos: [
      `/assets/fair/${numericYear}/member-01.jpg`,
      `/assets/fair/${numericYear}/member-02.jpg`,
      `/assets/fair/${numericYear}/member-03.jpg`,
      `/assets/fair/${numericYear}/member-04.jpg`,
      `/assets/fair/${numericYear}/member-05.jpg`
    ]
  };
};

const fairExport = { fairYears, getFairDataByYear };
export default fairExport;
