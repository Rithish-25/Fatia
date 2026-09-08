// 74 Member Associations of FATIA
const memberAssociations = [
  "Erode Information Technology Association (EITA)",
  "Coimbatore Information Technology Association (CITA)",
  "Salem Information Technology Association (SITA)",
  "Tirupur Information Technology Association (TITA)",
  "Trichy Information Technology Association (TRITA)",
  "Madurai Information Technology Association (MITA)",
  "Vellore Information Technology Association (VITA)",
  "Tirunelveli Information Technology Association (TINTA)",
  "Thanjavur Information Technology Association (THITA)",
  "Kanchipuram IT Association (KITA)",
  "Karur Information Technology Association (KITA-K)",
  "Namakkal Information Technology Association (NITA)",
  "Dindigul Information Technology Association (DITA)",
  "Nagercoil Information Technology Association (NITA-N)",
  "Tuticorin Information Technology Association (TUTA)",
  "Virudhunagar IT Traders Association (VITA-V)",
  "Cuddalore Information Technology Association (CITA-C)",
  "Villupuram IT Dealers Association (VITA-VP)",
  "Dharmapuri IT Traders Association (DITA-D)",
  "Krishnagiri IT Association (KITA-KG)",
  "Pudukkottai IT Dealers Association (PITA)",
  "Ramanathapuram IT Association (RITA)",
  "Sivagangai IT Traders Association (SITA-S)",
  "Theni Information Technology Association (TITA-TH)",
  "Tiruvannamalai IT Association (TITA-TV)",
  "Nagapattinam IT Association (NITA-NP)",
  "Mayiladuthurai IT Traders Association (MITA-M)",
  "Nilgiris IT Association (NITA-Ooty)",
  "Perambalur IT Dealers Association (PITA-P)",
  "Ariyalur IT Association (AITA)",
  "Tenkasi IT Association (TITA-TK)",
  "Ranipet IT Traders Association (RITA-R)",
  "Tirupathur IT Association (TITA-TP)",
  "Chengalpattu IT Association (CITA-CG)",
  "Kallakurichi IT Association (KITA-KK)",
  "Tiruvallur IT Dealers Association (TITA-TL)",
  "Pollachi Computer Dealers Association (PCDA)",
  "Hosur IT Association (HITA)",
  "Mettupalayam IT Association (MITA-MPM)",
  "Udumalpet IT Traders Association (UITA)",
  "Gobichettipalayam IT Association (GITA)",
  "Sankarankovil IT Association (SITA-SK)",
  "Palani Computer Association (PCA)",
  "Rajapalayam Computer Association (RCA)",
  "Aruppukottai IT Association (AITA-AK)",
  "Kumbakonam Computer Association (KCA)",
  "Karaikudi IT Traders Association (KITA-KKD)",
  "Pattukkottai IT Association (PITA-PKT)",
  "Ambur Computer Dealers Association (ACDA)",
  "Vaniyambadi IT Association (VITA-VNY)",
  "Tindivanam IT Association (TITA-TDV)",
  "Chidambaram IT Traders Association (CITA-CH)",
  "Sirkali IT Association (SITA-SKL)",
  "Mannargudi IT Association (MITA-MN)",
  "Aranthangi Computer Association (ACA)",
  "Paramakudi IT Association (PITA-PMK)",
  "Devakottai Computer Association (DCA)",
  "Kovilpatti IT Traders Association (KITA-KVP)",
  "Ambasamudram IT Association (AITA-AMB)",
  "Nanguneri Computer Association (NCA)",
  "Marthandam IT Association (MITA-MRD)",
  "Tiruchendur Computer Association (TCA)",
  "Srivilliputhur IT Association (SITA-SVP)",
  "Sankarapuram IT Dealers Association (SITA-SKP)",
  "Attur Computer Dealers Association (ACDA-A)",
  "Mettur IT Traders Association (MITA-MTR)",
  "Tiruchengode Computer Association (TCA-TCG)",
  "Rasipuram IT Dealers Association (RITA-RSP)",
  "Kallidaikurichi IT Traders Association (KITA-KDK)",
  "Bodinayakanur Computer Association (BCA)",
  "Periyakulam IT Association (PITA-PKL)",
  "Usilampatti Computer Dealers Association (UCDA)",
  "Melur IT Traders Association (MITA-MLR)",
  "Sirkazhi Computer Dealers Association (SCDA)"
];

const mockPresidents = [
  "R. Shanmugam", "K. Venkatesh", "M. Selvaraj", "P. Arumugam", "S. Natarajan",
  "T. Balasubramanian", "G. Sundaram", "A. Ramesh", "V. Krishnan", "K. Palanisamy"
];

const mockSecretaries = [
  "S. Karthikeyan", "M. Elangovan", "P. Kumar", "R. Saravanan", "K. Vijayakumar",
  "A. Thangaraj", "N. Sridhar", "D. Prakash", "M. Chandrasekaran", "S. Dinesh"
];

const mockTreasurers = [
  "P. Mohan", "K. Suresh", "R. Ganesan", "T. Ravichandran", "M. Murugan",
  "V. Senthamizhan", "S. Senthil", "A. Baskaran", "K. Manoharan", "N. Prabhakar"
];

export const membersData = memberAssociations.map((name, index) => ({
  id: index + 1,
  name: name,
  logo: "/assets/logo.png",
  headTable: {
    president: mockPresidents[index % mockPresidents.length],
    secretary: mockSecretaries[index % mockSecretaries.length],
    treasurer: mockTreasurers[index % mockTreasurers.length]
  }
}));

export default membersData;
