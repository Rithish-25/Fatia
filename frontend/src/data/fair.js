export const fairYears = [2027, 2025, 2023, 2018, 2016, 2015, 2013];

const mockMemberNamesByYear = {
  2027: ["P. Dhanapalan (Chairman)", "N.T. Moorthy (Secretary)", "P. Gopalakrishnan (Treasurer)"],
  2025: [
    "K. Jifry (Chairman)",
    "P. Chinnasamy (Secretary)",
    "K. Shivakumar (Treasurer)",
    "V.K. Rajamanickam (Founder Fatia Fair)",
    "R. Senthilkumar (Vice Chairman)",
    "N.T. Moorthy (IPC)",
    "P. Ravichandran (Co-ordinator)",
    "R. Muruganantham (PRO)",
    "K. Muthusamy (Joint Secretary)",
    "A. Selvaraj (Joint Secretary)",
    "R. Manohar (Joint Secretary)",
    "M.S. Chinnasamy (Joint Secretary)",
    "V. Rajamanickam (Advisor)",
    "S. Sengutuvan (Advisor)",
    "Balu @ P. Dhanabalan (Advisor)",
    "C. Muthusamy (Advisor)",
    "M.R. Vengatachalam (Advisor)",
    "C. Balakrishnan (Advisor)",
    "V.M. Elango (Director)",
    "K. Anbalagan (Director)",
    "M. Noor Mohmmed (Director)",
    "K.K. Vimal Karuppannan (Director)",
    "S. Chidambara Saravanan (Director)",
    "M. Sathya Moorthi (Director)",
    "S. Raja Mohamed (Director)",
    "B. Sree Prabhu (Director)",
    "S. Gnanavelan (Director)",
    "V. Dhanasekar (Director)",
    "A.P. Nallashivam (Editor - Malar Committee)",
    "S. Anand Kumar (Editor - Malar Committee)",
    "P. Gowri Shankar (Editor - Malar Committee)"
  ],
  2023: ["N.T. Moorthy (Chairman)", "R. Senthilkumar (Secretary)", "P. Chinnasamy (Treasurer)"],
  2018: ["C. Balakrishnan (Chairman)", "K. Jifry (Secretary)", "R. Senthilkumar (Treasurer)"],
  2016: ["C. Balakrishnan (Chairman)", "N.T. Moorthy (Secretary)", "K. Jifry (Treasurer)"],
  2015: ["V.K. Rajamanickam (Chairman)", "P. Jayaprakash (Secretary)", "N.T. Moorthy (Treasurer)"],
  2013: ["V.K. Rajamanickam (Founder Chairman)", "C. Balakrishnan (Secretary)", "R.V. Murugananthan (Treasurer)"]
};

export const getFairDataByYear = (year) => {
  const numericYear = parseInt(year, 10);
  const isValidYear = fairYears.includes(numericYear);

  if (!isValidYear) {
    return null;
  }

  const rawMembers = mockMemberNamesByYear[numericYear] || [
    `Member Officer 1 (Chairman)`,
    `Member Officer 2 (Secretary)`,
    `Member Officer 3 (Treasurer)`
  ];

  const allCommittee = rawMembers.map((str) => {
    const match = str.match(/^(.*?)\s*\((.*?)\)$/);
    if (match) {
      return { name: match[1], title: match[2], role: match[2] };
    }
    return { name: str, title: "Fair Committee Member", role: "Fair Committee Member" };
  });

  const boardMembers = allCommittee.slice(0, 3);
  const additionalCommittee = allCommittee.slice(3);

  const taglineText = `Bringing together trade, industry, commerce, and enterprise across Tamil Nadu in ${numericYear}.`;
  const aboutBody = `The FATIA Fair ${numericYear} was conducted as a premier state-level trade and industrial expo by the Federation of All Trade & Industry Associations of Erode District. Bringing together leading business associations, industrial manufacturers, regional traders, and enterprise leaders, the expo showcased commercial innovations, trade growth, and industrial solutions. Organised with meticulous dedication by the FATIA Fair Committee, it served as a landmark platform for trade expansion and industrial networking across all districts.`;

  const fiveMoments = [
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
