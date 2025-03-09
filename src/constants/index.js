import project1 from "../assets/p1.png";
import project2 from "../assets/p2.png";
import project3 from "../assets/p3.jpg";
import project4 from "../assets/p3.jpg";

export const HERO_CONTENT = `WebxApp Developer. Currently learning and getting into the depths of development. Feel free to suggest and help me out.`;

export const ABOUT_TEXT = `I am a passionate and skilled web and app developer, currently in my second year of Computer Science and Engineering. With hands-on experience in modern development technologies, I have worked on projects ranging from full-stack web applications to AI-powered tools.

My expertise includes:
✔ Web Development (ReactJS, NodeJS, PHP, Firebase)
✔ Mobile App Development(Java, Kotlin)
✔ AI Integration in Applications
✔ UI/UX Design & Responsive Interfaces

I am actively seeking opportunities in the development field to apply my skills and contribute to impactful projects. Always eager to learn and collaborate on innovative ideas!
`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - March 2025",
    role: "Full Stack Developer Intern",
    company: "TherapyU",
    description: `Developed a working web app for the dyslexic patients to help them with their daily life.`,
    technologies: ["ReactJS", "Firebase", "Python", "Flutter"],
  },
];

export const PROJECTS = [
  {
    title: "Bloodate",
    image: project1,
    description:
      "A system that tracks blood donors in area. It helps in simplifying the  hassle in blood collection and donation.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Lexishift",
    image: project2,
    description:
      "A dyslexia friendly LexiShift helps individuals with dyslexia by  making reading, learning, and communication easier. It provides tools like a PDF  converter with dyslexia-friendly fonts, an AI therapist for constant support, a  supportive community, a digital library, and an interactive learning platform. It  also connects users with therapists through LexiCare, ensuring they get the right  help when needed. The project aims to remove barriers and create a more  inclusive digital space for dyslexic individuals.",
    technologies: ["TypeScript", "ReactJS", "Python", "Firebase"],
  },
  {
    title: "Blink-Detection Glasses",
    image: project3,
    description:
      " Drowsiness and blink detection glasses are designed to  monitor eye blinking for applications like drowsiness detection and health  monitoring. Blink and drowsiness detection glasses uses IR sensors to track blinking and sends output signal to the user. ",
    technologies: ["Arduino"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Sodepur, Kolkata, West Bengal, India",
  phoneNo: "+91 74393 61373",
  email: "shreyassaha00@gmail.com",
};