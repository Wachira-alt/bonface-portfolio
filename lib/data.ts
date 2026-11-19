/**
 * All site content lives here.
 *
 * Any string that starts with "TODO:" is a placeholder. It renders on the page
 * as a highlighted box so nothing unfinished goes live unnoticed. Search this
 * file for "TODO:" to find everything still to fill in.
 *
 * Source: Bonface's CV (2026). Deliberately NOT published: phone number,
 * TSC number, Cambridge Specialist ID and referees' details.
 */

export type Role = {
  dates: string;
  school: string;
  place: string;
  titles: string;
  description: string;
};

export type EarlyRole = { dates: string; school: string; titles: string };

export type Credential = { dates: string; title: string; place: string };

export const site = {
  // Domain is a placeholder until one is bought; used for metadata only.
  url: "https://example.com",
  name: "Bonface Opwoko",
  fullName: "Omumia Opwoko Bonface",
  title: "Head of Science · Biology & Chemistry",
  tagline: "I teach Cambridge Biology and Chemistry in Nairobi.",
  location: "Nairobi, Kenya",
  email: "bonmumia@gmail.com",
  linkedin: "", // TODO: add LinkedIn URL if there is one; the link hides when empty
  // Put an edited CV (no phone, TSC no. or referees) at public/cv.pdf, then set this to "/cv.pdf".
  cvUrl: "",
  photo: "", // e.g. "/photo.jpg" — a placeholder frame shows while empty
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "examining", label: "Examining" },
  { id: "results", label: "Results" },
  { id: "resources", label: "Resources" },
  { id: "qualifications", label: "Qualifications" },
];

export const about: string[] = [
  "I teach Biology and Chemistry at Woodcreek School in Nairobi, where I'm Head of Science and coordinate Key Stage 4.",
  "I started teaching in 2007. Since then I've taught IGCSE, AS and A Level in Cambridge and Edexcel schools in Nairobi and Mombasa, and I've run the science department at four schools.",
  "I also examine for Cambridge, and I've worked on IGCSE Biology assessment, including multiple-choice papers.",
  "TODO: Teaching philosophy, 2–3 sentences in Bonface's own words. What does a good Biology lesson look like? How are students who fall behind supported?",
];

export const experience: Role[] = [
  {
    dates: "Feb 2024 — Present",
    school: "Woodcreek School",
    place: "Nairobi · Cambridge",
    titles: "Head of Science · Key Stage 4 Coordinator",
    description:
      "I run the science department and teach Biology and Chemistry at O and A Level. As Key Stage 4 Coordinator I follow how Years 10 and 11 are doing and arrange extra support for students who fall behind. I'm also part of the school's student support, behaviour and safeguarding work.",
  },
  {
    dates: "Sep 2019 — Feb 2024",
    school: "Premier Academy",
    place: "Cambridge",
    titles: "Biology & Chemistry Teacher · Head of Internal Examinations",
    description:
      "I taught senior Biology and IGCSE Chemistry, ran the school's internal exams and coordinated Key Stage 4. I was also a Year 13 class teacher and a house master.",
  },
  {
    dates: "Jan 2018 — Aug 2019",
    school: "Memon Academy – High",
    place: "Mombasa · Cambridge",
    titles: "Head of Science",
    description:
      "I led the science department, taught senior Biology and Chemistry and was a Year 11 class teacher.",
  },
  {
    dates: "Aug 2013 — Dec 2017",
    school: "MSB Educational Institute",
    place: "Mombasa · Edexcel",
    titles: "Head of Science · Senior School Examinations Officer",
    description:
      "I led the science department, taught O and A Level Biology and Chemistry and ran the senior school's exams.",
  },
  {
    dates: "Feb 2012 — Aug 2013",
    school: "Cambridge Centre – South C",
    place: "Nairobi · Cambridge",
    titles: "Chemistry Teacher",
    description: "I taught Chemistry at IGCSE, O and A Level.",
  },
];

export const earlyCareer: EarlyRole[] = [
  { dates: "2012", school: "Headington Tuition Centre", titles: "Biology & Chemistry, ICT lead" },
  { dates: "2011", school: "Lubinu Boys High School", titles: "Biology & Chemistry, Scouts, music, ICT lead" },
  { dates: "2009", school: "Busombi Muslim Secondary School", titles: "Biology & Chemistry, Head of Science" },
  { dates: "2007–08", school: "St. Bedas Bukaya Secondary School", titles: "Biology & Chemistry, Science Club" },
];

export const examining =
  "I examine for Cambridge International. I've worked on Cambridge IGCSE Biology (0610) assessment, including multiple-choice paper development, and I took part in Cambridge's discussions on future IGCSE Science papers, including a focus group for science teachers.";

export const syllabuses = [
  "Cambridge IGCSE Biology (0610), which I've taught for about 12 years",
  "Cambridge IGCSE Chemistry",
  "Cambridge AS and A Level Biology",
  "Edexcel O and A Level Biology and Chemistry",
];

export const results = {
  text: "In June 2026 my Year 13 A Level Biology class had a mean of 77.0, and my Year 12 AS class 65.4.",
  todo: "TODO: Say what the mean is (percentage? points?) and compare it with something, such as the school average, last year or Cambridge-wide results. Confirm the school is happy for this to be public.",
};

export const resources: string[] = [
  "TODO: A worksheet, revision guide or scheme of work (PDF in /public), with one line on how it's used.",
  "TODO: A practical students do, and what they get out of it.",
  "TODO: Something introduced as Head of Science and what changed because of it.",
];

export const education: Credential[] = [
  {
    dates: "May — Sep 2025",
    title: "Future Teacher and Leader Master Programme",
    place: "Strathmore University",
  },
  {
    dates: "2008 — 2012",
    title: "Bachelor of Education (Science), Biology & Chemistry, Biology major",
    place: "University of Nairobi",
  },
  {
    dates: "2008 — 2009",
    title: "Certificate of Competence in Computer Applications and Data Analysis",
    place: "University of Nairobi",
  },
  {
    dates: "2007",
    title: "Certificate in Computer Packages",
    place: "Westgate Computer College",
  },
];

export const development: string[] = [
  "Child Protection and Safeguarding training",
  "Conferences on science, technology, innovation and environmental sustainability",
];

export const languages = ["English (fluent)", "Kiswahili (fluent)"];
