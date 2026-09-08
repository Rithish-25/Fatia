export const fairYears = [2014, 2016, 2019, 2023, 2025, 2027];

const mockMemberNamesByYear = {
  2014: ["K. Sivasankaran (Fair Chairman)", "R. Vadivelu (Convenor)", "S. Anbarasan (Treasurer)"],
  2016: ["G. Ravichandran (Fair Chairman)", "A. Subramaniam (Convenor)", "V. Thangavel (Treasurer)"],
  2019: ["V. Kandasamy (Fair Chairman)", "S. Gunasekar (Convenor)", "K. Rajagopal (Treasurer)"],
  2023: ["N. Ramasamy (Fair Chairman)", "A. Chellappan (Convenor)", "K. Ponnusamy (Treasurer)"],
  2025: ["V.K. Rajamanickam (Fair Chairman)", "P. Ravichandran (Convenor)", "R. Muruganantham (Treasurer)"],
  2027: ["P. Dhanapalan (Fair Chairman)", "N.T. Moorthy (Convenor)", "P. Gopalakrishnan (Treasurer)"]
};

export const getFairDataByYear = (year) => {
  const numericYear = parseInt(year, 10);
  const isValidYear = fairYears.includes(numericYear);

  if (!isValidYear) {
    return null;
  }

  const rawMembers = mockMemberNamesByYear[numericYear] || [
    `Member Officer 1 (Fair Chairman)`,
    `Member Officer 2 (Convenor)`,
    `Member Officer 3 (Treasurer)`
  ];

  const committeeMembers = rawMembers.map((str) => {
    const match = str.match(/^(.*?)\s*\((.*?)\)$/);
    if (match) {
      return { name: match[1], title: match[2], role: match[2] };
    }
    return { name: str, title: "Fair Committee Member", role: "Fair Committee Member" };
  });

  const taglineText = `Bringing the best in consumer electronics, enterprise hardware, and IT solutions to Tamil Nadu in ${numericYear}.`;
  const aboutBody = `The FATIA IT Fair ${numericYear} was conducted as a premier state-level technology expo. Bringing together over 100 leading technology vendors, regional distributors, and thousands of IT enthusiasts, the event showcased cutting-edge computing innovations, consumer hardware, and business solutions. Organised with meticulous dedication by the FATIA Fair Committee, it served as a catalyst for IT adoption and trade networking across all districts.`;

  const fiveMoments = [
    { caption: `Fair ${numericYear} Moment 1` },
    { caption: `Fair ${numericYear} Moment 2` },
    { caption: `Fair ${numericYear} Moment 3` },
    { caption: `Fair ${numericYear} Moment 4` },
    { caption: `Fair ${numericYear} Moment 5` }
  ];

  return {
    year: numericYear.toString(),
    title: `FATIA Technology & Consumer IT Fair ${numericYear}`,
    tagline: taglineText,
    summary: taglineText,
    about: aboutBody,
    aboutText: aboutBody,
    committee: committeeMembers,
    members: rawMembers,
    gallery: fiveMoments,
    photos: fiveMoments
  };
};

const fairExport = { fairYears, getFairDataByYear };
export default fairExport;
