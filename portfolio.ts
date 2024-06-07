import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  AboutMeType
  
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Mubashir Ali",
  title: "Hello I'm",
  description:
    "As an undergraduate computational biologist and dedicated web application developer from Pakistan, I merge my passion for programming languages with cutting-edge biological research. Crafting elegant code, I weave intricate digital solutions, bridging science and technology. With each line written, I advance towards a future where innovation knows no bound.",
  resumeLink:
    "https://github.com/mubashir1837/Curriculum-Vitae/blob/main/Curriculum%20Vitae.pdf",
};

// Other exports...


// portfolio.ts


export const aboutMeInfo: AboutMeType[] = [
  {
    title: "Mubashir Ali",
    description: "Welcome, I am Mubashir Ali, proudly representing the breathtaking region of Gilgit Baltistan, Pakistan and currently based in the vibrant city of Islamabad, Pakistan. My academic journey commenced at Uswa Public School Yultar Skardu, where I successfully completed my matriculation, establishing a solid foundation for my educational pursuits.   Driven by a profound interest in the medical sciences, I pursued and completed my Intermediate Pre- medical at Uswa Cadet College Islamabad, deepening my understanding of the intricacies within the field. Complementing my formal education, I engaged in a transformative learning experience with Peking University and IBM, undertaking courses in Bioinformatics and Artificial Intelligence through Coursera. This endeavor not only broadened my knowledge horizons but also equipped me with valuable skills at the intersection of biology and cutting-edge technology. Recognizing the evolving landscape of digital work, I further honed my expertise by completing a freelancing training program with Digiskills. This comprehensive training has empowered me with the tools and insights necessary to navigate the dynamic world of freelancing in todays digital age.  As a result, I stand as a well-rounded individual, blending a strong educational background with expertise in Bioinformatics, Artificial Intelligence, and freelancing, ready to contribute meaningfully to the ever-changing dynamics of science and digital work.",
    image: "/images/pro-.jpg",
    bullets: [
      "Computational Biologist",
      "Web Developer",
      "Passionate about Programming",
    ],
  },
];


export const openSource = {
  githubUserName: "mubashir1837",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mubashirali1837@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100089259276299&mibextid=kFxxJD",
  instagram: "https://www.instagram.com/mubashir_aliyaar_37?igsh=MW0zb3c4Mm0xNTNxaw==",
  twitter: "https://x.com/MubashirAli1837?s=08",
  github: "https://github.com/mubashir1837",
  linkedin: "https://www.linkedin.com/in/mubashirali8",
};

export const skillsSection = {
  title: "Professional Expertise",
  subTitle:
    "Bioinformatics, Data analysis, Molecular Visualization, Bio conductor and SciPy",
  data: [
    {
      title: "Bioinformatics Tools and Algorithms",
      lottieAnimationFile: "/lottie/skills/data.json",
      skills: [
        emoji(
          "⚡Familiarity with bioinformatics tools and algorithms for sequence analysis, alignment, assembly, and annotation."
        ),
        emoji("⚡Ability to analyze large datasets using statistical methods and software packages such as pandas, NumPy, SciPy, and Bioconductor"),
        emoji(
          "⚡ Knowledge of biological databases such as NCBI, ENSEMBL, and UniProt, and experience in querying and managing biological data. "
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Machine Leanrning",
          iconifyTag: "carbon:machine-learning",
        },
        {
          skillName: "Laguage Modeling",
          iconifyTag: "arcticons:openai-chatgpt",
        },
        {
          skillName: "Data Structures",
          iconifyTag: "carbon:data-structured",
        },
        {
          skillName: "PyTorch",
          iconifyTag: "devicon:pytorch",
        },
        {
          skillName: "TensorFlow",
          iconifyTag: "devicon:tensorflow-wordmark",
        },
        {
          skillName: "OpenCV",
          iconifyTag: "skill-icons:opencv-dark",
        },
      ],
    },
    
    {
      title: "Programming and Web Development",
      lottieAnimationFile: "/lottie/skills/web.json",
      skills: [
        ,
        emoji(
          "⚡  Proficiency in programming languages commonly used in bioinformatics."
        ),
        emoji(
          "⚡ Skilled with Python, R, Perl, and JavaScript."
        ),
        emoji("⚡ Developing responsive static websites using Next.js."),
        emoji(
          "⚡ Skilled with Microsoft Office."
        ),
        emoji(
          "⚡ Utilizing WordPress to create educational websites."
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "vscode-icons:file-type-python",
        },
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "R",
          iconifyTag: "vscode-icons:file-type-rproj",
        },
        {
          skillName: "PyMOL",
          iconifyTag: "simple-icons:pyup",
        },
        {
          skillName: "SciPy",
          iconifyTag: "simple-icons:scipy",
        },
        {
          skillName: "MS Word",
          iconifyTag: "teenyicons:ms-word-solid",
        },
        {
          skillName: "MS Excel",
          iconifyTag: "teenyicons:ms-excel-solid",
        },
        {
          skillName: "Power Point",
          iconifyTag: "teenyicons:ms-powerpoint-solid",
        },
        {
          skillName: "BioPerl",
          iconifyTag: "nonicons:perl-16",
        },
        {
          skillName: "NumPy",
          iconifyTag: "vscode-icons:file-type-numpy",
        },
      ],
    },
    {
      title: "Communication Skills and Project Management",
      lottieAnimationFile: "/lottie/skills/communicate.json",
      skills: [
        emoji("⚡ Effective communication skills to collaborate with biologists, present findings, and write reports or scientific papers.."),
        emoji(
          "⚡ Ability to manage bioinformatics projects effectively, including setting timelines, prioritizing tasks, and coordinating with team members."
        ),
        emoji(
          "⚡ Willingness to stay updated with the latest advancements in bioinformatics, genomics, and computational biology through continuous learning and self-improvement."
        )
      ],
      softwareSkills: [
        {
          skillName: "comunication",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "IBM",
          iconifyTag: "logos:ibm",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        
        
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          iconifyTag: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Data Analysis",
    progressPercentage: "95",
  },
  {
    Stack: "Research Skill",
    progressPercentage: "90",
  },
 
  {
    Stack: "Programming Skill",
    progressPercentage: "80",
  },
  
  {
    Stack: "Molecular Visualization",
    progressPercentage: "100",
  },

  {
    Stack: "Analytical Skill",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Uswa Public School Yultar Skardu, Pakistan",
    subHeader: "Secondary School Education",
    duration: "March 2019 - September 2021",
    desc: "Matriculation in Science",
    grade: "",
    descBullets: [
      "I have completed my Secondary School Education from Uswa Public School Yultar, Skardu, Pakistan and secured A1 grade.",
    ], // Array of Strings
  },
  {
    schoolName: "Uswa College Islamabad, Pakistan",
    subHeader: "Higher Secondary School Education",
    duration: "September 2021 - July 2023",
    desc: "Intermediate in Pre-medical",
    grade: "",
    descBullets: [
      "I have completed my Intermediate in pre medical from Uswa College Islamabad, Pakistan and secured A1 grade.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Bioinformatics ",
    company: "Peking University China",
    companyLogo: "/img/icons/common/Peking.png",
    date: "December 2023 – Februaray 2024",
    desc: "I have completed Course in Bioinformatics from Peking University through Cousera.",
    descBullets: [
      "Molecular Visualization.",
      "Genomic Sequencing.",
    ],
  },
  {
    role: "Health and Food. ",
    company: "Stanford University USA",
    companyLogo: "/img/icons/common/Stanford.png",
    date: "February 2024 - March 2024 ",
    desc: "I have completed Course in Health and Food from Stanford University through Coursera.",
    descBullets: [
      "Nutrition and Dietetics.",
      "Food and Health.",
    ],
  },
  {
    role: "Freelancing Training",
    company: "Virtual University of Pakistan",
    companyLogo: "/img/icons/common/Virtual.png",
    date: "December 2024 – February 2024",
    desc: "I have completed Freelancing Training course from Virtual University of Pakistan.",
    descBullets: [
      "Digiskills Pakistan.",
      "Skilled with Upwork, Fiver and Freelacnce.",
    ],
  },
  {
    role: "Data Science and Artificial Intelligence ",
    company: "IBM",
    companyLogo: "/img/icons/common/ibm.jpg",
    date: "September 2024 -  December 2024",
    desc: "I have completed two courses from IBM",
    descBullets: [
      "Artificial Intelligence",
      "Data Science",
    ],
  },
  {
    role: "Preparing and Delivering Presentations",
    company: "Saylor Academy",
    companyLogo: "/img/icons/common/Saylor.png",
    date: "Oct 2023 – Present",
    desc: "I have completed course in Preparing and Delivering Presentations.",
    descBullets: [
      "Presentation Skill.",
      "Public Speaking.",
    ],
  },
  
  {
    role: "Courses",
    company: "Coursera",
    companyLogo: "/img/icons/common/Coursera.png",
    date: "September 2023 -  Present",
    desc: "I have completed multiple courses from cousera.",
    descBullets: [
      "Bioinformatics, Health and Food, Data Science and Artificial Intelligence.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Ecommerce Website",
    desc: "This is and ecommerce website designed with HTML, CSS and JavaScript",
    link: "https://shopppings.vercel.app",
  },
  {
    name: "Bioinformatics",
    desc: "I completed multiple projects by using deep learning and machinelearning in Bioinformatics.",
    link: "https://github.com/mubashir1837/iris_classfication",
  },
  {
    name: "Food ordering app",
    desc: "Created a food ordering website using HTML, CSS and JavaScript.",
    link: "https://foodkivi.netlify.app",
  },
  {
    name: "Calculator",
    desc: "This is a calculator app made with HTML, CSS and JavaScript.",
    link: "https://calculator-j.vercel.app",
  },
  {
    name: "Responsive Portfolio website",
    desc: "You can try this portfolio website, its awesome.",
    link: "https://mubashirali.vercel.app/",
  },
  {
    name: "Portfolio",
    desc: "See this awesome portfolio, and try it yourself",
    link: "https://awesome-portfolio2024.vercel.app",
    
	
  },
];

 export const feedbacks: FeedbackType[] = [
   {
     name: "Sadaqat Hussain",
     role: "Neuro Scientist",
     feedback:
      " ⭐⭐⭐⭐⭐",
  },  
   {
     name: "Zulfiqar Ali",
     role: "Data Analyst",
     feedback:
     " ⭐⭐⭐⭐⭐",
  },  
   {
     name: "Muhammad Nawaz Sharif",
     role: "Lecturer",
     feedback:
     " ⭐⭐⭐⭐⭐",
  },  
 ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Mubashir Ali",
  description: "This is awesome portfolio website",
  author: "Mubashir Ali",
  image: "https://avatars.githubusercontent.com/u/163585695?v=4",
  url: "https://mubashir-ale.vercel.app",
  keywords: [
    "Mubashir",
    "Mubashir Ali Portfolio",
    "mubashir-ali.vercel.app",
    "mubashirAlibalti",
    "Portfolio",
    "Mubashir Portfolio ",
    "Mubashir Ali website",
  ],
};