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
  location?: string;
  titles: string[];
  points: string[];
  curriculum?: string;
};

export type EarlyRole = { dates: string; school: string; titles: string };

export type Stat = { value: string; label: string; context: string };

export type Card = { title: string; body: string; tag?: string };

export type Credential = { dates: string; title: string; place: string };

export const site = {
  // Domain is a placeholder until one is bought; used for metadata only.
  url: "https://example.com",
  name: "Bonface Opwoko",
  fullName: "Omumia Opwoko Bonface",
  title: "Head of Science · Cambridge Biology & Chemistry",
  tagline:
    "IGCSE and A Level Biology and Chemistry teacher, Cambridge examiner and science department leader in Kenya.",
  location: "Nairobi, Kenya",
  email: "bonmumia@gmail.com",
  linkedin: "", // TODO: add LinkedIn URL if there is one; the icon hides when empty
  // Put an edited CV (no phone, TSC no. or referees) at public/cv.pdf, then set this to "/cv.pdf".
  cvUrl: "",
  photo: "", // e.g. "/photo.jpg" — a placeholder frame shows while empty
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "cambridge", label: "Cambridge" },
  { id: "results", label: "Results" },
  { id: "teaching", label: "Teaching" },
  { id: "qualifications", label: "Qualifications" },
  { id: "contact", label: "Contact" },
];

export const highlights: Stat[] = [
  { value: "Since 2007", label: "Teaching Biology and Chemistry", context: "" },
  { value: "~12 yrs", label: "Cambridge IGCSE Biology (0610)", context: "" },
  { value: "4 schools", label: "As Head of Science", context: "" },
  { value: "Examiner", label: "For Cambridge International", context: "" },
];

export const about: string[] = [
  "I teach Biology and Chemistry at IGCSE, AS and A Level, and I lead science departments. I am Head of Science and Key Stage 4 Coordinator at Woodcreek School in Nairobi, where I teach senior-school Biology and Chemistry within the Cambridge International curriculum.",
  "I have taught in Cambridge and Edexcel schools since 2007, including about twelve years of Cambridge IGCSE Biology. Alongside the classroom I have led science departments and internal examinations, coordinated Key Stage 4, and worked with Cambridge as an examiner and on the development of future IGCSE Science papers.",
  "TODO: Teaching philosophy, 2–3 sentences in Bonface's own words. What does a good Biology lesson look like? How are students who fall behind supported? What should a student leave the course able to do?",
];

export const experience: Role[] = [
  {
    dates: "Feb 2024 — Present",
    school: "Woodcreek School",
    location: "Nairobi",
    titles: ["Head of Science", "Key Stage 4 Coordinator", "Biology & Chemistry Teacher"],
    curriculum: "Cambridge",
    points: [
      "Teach Biology and Chemistry at O and A Level within the Cambridge International curriculum.",
      "Lead the Science Department: departmental planning, academic standards and curriculum implementation.",
      "Coordinate Key Stage 4 academic and pastoral programmes for Years 10 and 11.",
      "Monitor student performance and coordinate targeted support for students with learning gaps.",
      "Lead examination preparation and assessment analysis, and contribute to whole-school student support, behaviour, safeguarding and academic-progress systems.",
    ],
  },
  {
    dates: "Sep 2019 — Feb 2024",
    school: "Premier Academy",
    titles: [
      "Biology & Chemistry Teacher",
      "Key Stage 4 Coordinator",
      "Head of Internal Examinations",
    ],
    curriculum: "Cambridge",
    points: [
      "Taught senior Biology and IGCSE Chemistry and prepared students for Cambridge examinations.",
      "Led internal examination processes and assessment administration.",
      "Coordinated Key Stage 4 academic and student-support programmes.",
      "Year 13 Class Teacher and House Master, providing academic and pastoral leadership to Year 13.",
    ],
  },
  {
    dates: "Jan 2018 — Aug 2019",
    school: "Memon Academy – High",
    location: "Mombasa",
    titles: ["Head of Science", "Biology & Chemistry Teacher", "Year 11 Class Teacher"],
    curriculum: "Cambridge",
    points: [
      "Led Science Department planning and academic coordination while teaching senior Biology and Chemistry.",
      "Provided academic and pastoral support to Year 11.",
    ],
  },
  {
    dates: "Aug 2013 — Dec 2017",
    school: "MSB Educational Institute",
    location: "Mombasa",
    titles: ["Head of Science", "Senior School Examinations Officer", "Biology & Chemistry Teacher"],
    curriculum: "Edexcel",
    points: [
      "Led Science Department activities while teaching O and A Level Biology and Chemistry.",
      "Ran senior-school examinations, assessment and academic administration.",
    ],
  },
  {
    dates: "Feb 2012 — Aug 2013",
    school: "Cambridge Centre – South C",
    location: "Nairobi",
    titles: ["Chemistry Teacher"],
    curriculum: "Cambridge",
    points: ["Taught IGCSE, O and A Level Chemistry."],
  },
];

export const earlyCareer: EarlyRole[] = [
  {
    dates: "Aug — Sep 2012",
    school: "Headington Tuition Centre",
    titles: "Biology & Chemistry (Cambridge and Edexcel) · ICT Department Lead",
  },
  {
    dates: "May — Aug 2011",
    school: "Lubinu Boys High School",
    titles: "Biology & Chemistry · Assistant Scouts Patron · Music Trainer · ICT Lead",
  },
  {
    dates: "Jun — Oct 2009",
    school: "Busombi Muslim Secondary School",
    titles: "Biology & Chemistry · Head of Science",
  },
  {
    dates: "May 2007 — Oct 2008",
    school: "St. Bedas Bukaya Secondary School",
    titles: "Biology & Chemistry · Science Club Patron · Assistant YCS Patron",
  },
];

export const cambridge: Card[] = [
  {
    title: "Cambridge examiner",
    body: "Examiner for Cambridge International, bringing the mark scheme and examiner's view of answers into everyday teaching and exam preparation.",
  },
  {
    title: "IGCSE Biology 0610 assessment",
    body: "Experience setting and working with Cambridge IGCSE Biology 0610 assessment, including multiple-choice paper development.",
  },
  {
    title: "Future Science papers",
    body: "Took part in Cambridge IGCSE Science prototype and future-paper discussions, and in an all-science-teachers focus group on future Science papers.",
  },
  {
    title: "Assessment and intervention",
    body: "Moderation, examination preparation and using assessment data to plan targeted intervention for students who are falling behind.",
  },
];

export const syllabuses = [
  "Cambridge IGCSE Biology (0610)",
  "Cambridge IGCSE Chemistry",
  "Cambridge AS & A Level Biology",
  "Edexcel O & A Level Biology and Chemistry",
  "Key Stage 4 (Years 10–11)",
];

export const results = {
  intro:
    "Biology outcomes from the June 2026 assessment cycle at Woodcreek School.",
  stats: [
    {
      value: "65.4",
      label: "Year 12 · AS Level Biology · mean",
      context: "TODO: Mean of what (%, points)? Compared with what (school average, previous year, Cambridge-wide)?",
    },
    {
      value: "77.0",
      label: "Year 13 · A Level Biology · mean",
      context: "TODO: Same as above. A grade spread (e.g. % A*–B) reads better than a mean.",
    },
  ] as Stat[],
  note: "TODO: Add earlier years' results if available, and confirm the school is happy for these to be published.",
};

export const teaching: Card[] = [
  {
    tag: "Resource",
    title: "TODO: Sample resource title",
    body: "TODO: A worksheet, revision guide or scheme of work, with one line on how it is used. Link a PDF placed in /public.",
  },
  {
    tag: "Practical",
    title: "TODO: A practical or investigation",
    body: "TODO: A lab practical Bonface runs, what students learn from it and how it links to Paper 6 / practical skills.",
  },
  {
    tag: "Department",
    title: "TODO: A department initiative",
    body: "TODO: Something introduced as Head of Science (an intervention programme, a moderation process, a science club) and what changed.",
  },
];

export const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote: "TODO: A short quote from a head of school, colleague or parent, used with their permission.",
    name: "TODO: Name",
    role: "TODO: Role, School",
  },
  {
    quote: "TODO: A second quote, ideally from a different school.",
    name: "TODO: Name",
    role: "TODO: Role, School",
  },
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
  "Cambridge Science curriculum and assessment development",
  "Professional discussions on future Cambridge Science examination papers",
  "Conferences on Science, Technology, Innovation and environmental sustainability",
];

export const languages = ["English (fluent)", "Kiswahili (fluent)"];
