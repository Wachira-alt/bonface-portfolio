/**
 * All site content lives here.
 *
 * Source: Bonface's CV (2026). Deliberately NOT published: phone number,
 * TSC number, Cambridge Specialist ID and referees' details.
 */

export const site = {
  // Domain is a placeholder until one is bought; used for metadata only.
  url: "https://example.com",
  name: "Bonface Opwoko",
  fullName: "Omumia Opwoko Bonface",
  initials: "BO",
  title: "Head of Science · Cambridge Biology & Chemistry",
  tagline:
    "Cambridge IGCSE and A Level Biology and Chemistry educator, examiner and science department leader, based in Nairobi.",
  location: "Nairobi, Kenya",
  email: "bonmumia@gmail.com",
  linkedin: "", // the link shows only when set
  cvUrl: "", // e.g. "/cv.pdf" — the button shows only when set. Use a CV without phone, TSC no. or referees.
};

/**
 * Photos live in public/images/. `credit` is required for licensed stock photos.
 * The portrait shows the initials until a real photo of Bonface is added.
 */
export type Photo = { src: string; alt: string; credit?: { text: string; url: string } };

export const portrait: Photo = { src: "", alt: "Bonface Opwoko" };

// Lab photo: see public/images/CREDITS.md for the chosen options and how to set this.
export const labPhoto: Photo = { src: "", alt: "" };

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "examining", label: "Examining" },
  { id: "results", label: "Results" },
  { id: "qualifications", label: "Qualifications" },
];

export const about: string[] = [
  "Bonface Opwoko is Head of Science and Key Stage 4 Coordinator at Woodcreek School, Nairobi, teaching Biology and Chemistry within the Cambridge International curriculum.",
  "Bonface has taught secondary Biology and Chemistry since 2007, at IGCSE, O Level, AS and A Level, in both Cambridge and Edexcel schools, including about twelve years of Cambridge IGCSE Biology (0610).",
  "Bonface has led the science department at four schools and served as Head of Internal Examinations at Premier Academy.",
  "Bonface is a Cambridge examiner and has worked on Cambridge IGCSE Biology assessment, including multiple-choice paper development.",
  "The focus of the work is assessment: monitoring student performance closely, identifying learning gaps early and planning targeted support, so that students are well prepared for Cambridge examinations.",
];

export type Role = {
  dates: string;
  school: string;
  place: string;
  titles: string;
  description: string;
};

export type EarlyRole = { dates: string; school: string; titles: string };

export type Credential = { dates: string; title: string; place: string };

export const experience: Role[] = [
  {
    dates: "Feb 2024 — Present",
    school: "Woodcreek School",
    place: "Nairobi · Cambridge International",
    titles: "Head of Science · Key Stage 4 Coordinator · Biology & Chemistry Teacher",
    description:
      "Leads the Science Department, including departmental planning, academic standards and curriculum implementation, and teaches Biology and Chemistry at O and A Level. Coordinates Key Stage 4 academic and pastoral programmes for Years 10 and 11, monitors student performance and coordinates targeted intervention. Contributes to whole-school student support, behaviour, safeguarding and academic-progress systems.",
  },
  {
    dates: "Sep 2019 — Feb 2024",
    school: "Premier Academy",
    place: "Cambridge International",
    titles: "Biology & Chemistry Teacher · Key Stage 4 Coordinator · Head of Internal Examinations",
    description:
      "Taught senior Biology and IGCSE Chemistry and prepared students for Cambridge examinations. Led internal examination processes and assessment administration, and coordinated Key Stage 4 academic and student-support programmes. Also served as Year 13 Class Teacher and House Master.",
  },
  {
    dates: "Jan 2018 — Aug 2019",
    school: "Memon Academy – High",
    place: "Mombasa · Cambridge International",
    titles: "Head of Science · Biology & Chemistry Teacher · Year 11 Class Teacher",
    description:
      "Led Science Department planning and academic coordination while teaching senior Biology and Chemistry, and provided academic and pastoral support to Year 11.",
  },
  {
    dates: "Aug 2013 — Dec 2017",
    school: "MSB Educational Institute",
    place: "Mombasa · Edexcel",
    titles: "Head of Science · Senior School Examinations Officer · Biology & Chemistry Teacher",
    description:
      "Led the Science Department while teaching O and A Level Biology and Chemistry, and was responsible for senior-school examinations, assessment and academic administration.",
  },
  {
    dates: "Feb 2012 — Aug 2013",
    school: "Cambridge Centre – South C",
    place: "Nairobi · Cambridge International",
    titles: "Chemistry Teacher",
    description: "Taught Chemistry at IGCSE, O and A Level.",
  },
];

export const earlyCareer: EarlyRole[] = [
  { dates: "2012", school: "Headington Tuition Centre", titles: "Biology & Chemistry Teacher, ICT Department Lead" },
  { dates: "2011", school: "Lubinu Boys High School", titles: "Biology & Chemistry Teacher, ICT Department Lead, Assistant Scouts Patron, Music Trainer" },
  { dates: "2009", school: "Busombi Muslim Secondary School", titles: "Biology & Chemistry Teacher, Head of Science" },
  { dates: "2007–08", school: "St. Bedas Bukaya Secondary School", titles: "Biology & Chemistry Teacher, Science Club Patron, Assistant YCS Patron" },
];

export const examining: string[] = [
  "Examiner for Cambridge International.",
  "Experience setting and working with Cambridge IGCSE Biology (0610) assessment, including multiple-choice paper development.",
  "Participant in Cambridge IGCSE Science prototype and future-paper discussions, and in an all-science-teachers focus group on future Science papers.",
  "Experience in examination preparation, moderation and the use of assessment information to plan intervention.",
];

export const syllabuses = [
  "Cambridge IGCSE Biology (0610)",
  "Cambridge IGCSE Chemistry",
  "Cambridge AS & A Level Biology",
  "Edexcel O & A Level Biology and Chemistry",
];

export const results = {
  intro: "Biology results from the June 2026 assessment cycle at Woodcreek School.",
  rows: [
    { cohort: "Year 13", course: "A Level Biology", mean: "77.00" },
    { cohort: "Year 12", course: "AS Level Biology", mean: "65.38" },
  ],
};

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
  "Cambridge Science curriculum and assessment development",
  "Conferences on science, technology, innovation and environmental sustainability",
];

export const languages = ["English (fluent)", "Kiswahili (fluent)"];
