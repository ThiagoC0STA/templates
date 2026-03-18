export interface TeamSectionContent {
  subtitle: string;
  title: string;
  completedProjects: string;
  projectsText: string;
  exploreLink: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  socials: {
    instagram: string;
    twitter: string;
    facebook: string;
    linkedin: string;
  };
}

export const teamSectionContent: TeamSectionContent = {
  subtitle: "TEAM MEMBERS",
  title: "Where Creativity Meets Technology: Our Talents for solutions",
  completedProjects: "50+",
  projectsText: "Completed Projects",
  exploreLink: "/ai-agency/team",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Alexandra Moore",
    position: "Chief AI Architect",
    image: "/assets/imgs/team/team-10.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    position: "Head of Data Science",
    image: "/assets/imgs/team/team-11.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jordan Williams",
    position: "AI Ethics Officer",
    image: "/assets/imgs/team/team-12.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ethan Brooklyn",
    position: "AI Research Lead",
    image: "/assets/imgs/team/team-13.webp",
    socials: {
      instagram: "#",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];
