export interface SEODataType {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};


export type SocialLinksType = {
  [link: string]: string;
};

// * HERO SECTION

export interface GreetingsType  {
  name: string;
  title: string;
  description?: string;
  resumeLink?: string;
};

// * ABOUT ME
export interface AboutMeType  {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
}


// * SKILLS SECTION

type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

type SkillType = {
  title: string;
  lottieAnimationFile: string;
  skills: React.ReactNode[] | string[];
  softwareSkills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: SkillType[];
};

// * PROFICIENCY SECTION

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION

export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
};

// * EXPERIENCE SECTION

export type ExperienceType = {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
};

// * PROJECT SECTION

export type ProjectType = {
  name: string;
  desc: string;
  github?: string;
  link?: string;
};

// * FEEDBACK SECTION

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};


