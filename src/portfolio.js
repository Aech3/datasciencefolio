const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harshul Rao | Portfolio",
  description:
    "A Software Developer with experience in Web and Mobile Development, looking to expand their skillsets.",
  og: {
    title: "Harshul Rao",
    type: "website",
    url: "TODO",
  },
};

//Home Page
const greeting = {
  title: "Harshul Rao",
  sub: "Harshul Rao",
  logo_name: "Harshul Rao",
  resumeLink:
    "https://drive.google.com/file/d/1Sv3Oc02mcmLfqU5PyX3VOgoplbHRF5vo/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Aech3",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/harshulrao/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing products and software catering to client specifications and common use",
        "⚡ Front and Backend Experience with multiple companies",
        "⚡ Adaptable skillset and experience learning and mastering new frameworks.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, ReactJS & NodeJS",
        "⚡ Creating application backend in Node and Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "fa-brands fa-firefox",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects involve a variety of frameworks and foundational experience.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Raytracer",
      img_path: "project-06.png",
      description:
        "A full scale raytracer designed to generate rays in order to refine images and create reflections and shadows.",
      tags: [
        {
          lang: "C++",
          color: "#004782",
        },
      ],
    },

    {
      title: "Menger Sponge",
      img_path: "voice.gif",
      description:
        "A recursively generated Menger Sponge with interactive camera controls.",
      tags: [
        {
          lang: "C++",
          color: "#4257f5",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "TekCharts",
      img_path: "neural.gif",
      description:
        "An android app designed to store medical records and informational information to assist in patient transitions on the patient side.",
      tags: [
        {
          lang: "Internal Project",
          color: "red",
        },
        {
          lang: "Kotlin",
          color: "#8700b0",
        },
        {
          lang: "Firebase",
          color: "orange",
        },
        {
          lang: "JSON",
          color: "#ECB141",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Front-End Development Intern",
        subtitle: "High5 (now TipX)",
        date: "January 2022 - May 2022",
        content: [
          "Utilizing JavaScript, I amended and reconstructed the User Interface of the High5 app, creating a more usable and interactive interface for a more enjoyable user experience. ",
          "Working in a small team I learned valuable skills including the importance of maintainable code and the smaller aspects of UI.",
        ],
      },
      {
        title: "Back-End Development Intern",
        subtitle: "Alois Software",
        date: "September 2021 - January 2022",
        content: [
          "My role at Listnr included a lot of research work about Audio Encoders and Vocoders and Speech Synthesis in general.",
          "Worked on some SOTA Inference TTS Models such as TacoTron2, FastSpeech2, and Wavenet.",
          "Also had hands-on with real-time voice cloning algorithm.",
        ],
      },
      {
        title: "Data Analyst Intern",
        subtitle: "Objectwin inc.",
        date: "May 2020 - July 2020",
        content: [
          "Phase 1 included Data Cleaning & Data Annotation for object detection task",
          "Used YOLO v5 for Fire Detection Project",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Computer Science",
          subtitle: "University of Texas at Austin",
          date: "2021 - 2024",
          content: ["GPA: 3.7/4"],
        },
      ],
    },
    {
      title: ["Relevant Classes"],
      data: [
        {
          title: "Project Based",
          content: [
            "Data Structures",
            "Computer Architecture",
            "Ethical Hacking",
            "Operating Systems",
            "Graphics",
          ],
        },
        {
          title: "Theory Based",
          content: ["Discrete Math", "Algorithms and Complexity "],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "900 W 26th Street, Austin, Texas",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 2817284337",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Aech3",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshulrao/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:raoharshul@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harshulrao1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
