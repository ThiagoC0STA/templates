export interface ISocials {
  instagram: string;
  twitter: string;
  facebook: string;
  linkedin: string;
}

export interface ITeam {
  id: number;
  name: string;
  position: string;
  image: string;
  socials: ISocials;
}

export interface TeamData {
  section: {
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
  };
  members: ITeam[];
}

const teamData: TeamData = {
  section: {
    subtitle: "Our Team Members",
    title: "Meet our professionals",
    buttonText: "All Members",
    buttonUrl: "/digital-agency/team",
  },
  members: [
    {
      id: 1,
      name: "Alexandra Moore",
      position: "Chief AI Architect",
      image: "/assets/imgs/team/team-1.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      position: "Head of Data Science",
      image: "/assets/imgs/team/team-2.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 3,
      name: "Jordan Williams",
      position: "AI Ethics Officer",
      image: "/assets/imgs/team/team-3.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 4,
      name: "Ethan Brooklyn",
      position: "AI Research Lead",
      image: "/assets/imgs/team/team-7.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 5,
      name: "Sophia Turner",
      position: "Machine Learning Engineer",
      image: "/assets/imgs/team/team-8.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 6,
      name: "Daniel Carter",
      position: "Data Engineer",
      image: "/assets/imgs/team/team-9.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 7,
      name: "Olivia Bennett",
      position: "NLP Specialist",
      image: "/assets/imgs/team/team-18.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 8,
      name: "Michael Scott",
      position: "Computer Vision Scientist",
      image: "/assets/imgs/team/team-19.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      id: 9,
      name: "Chloe Anderson",
      position: "AI Product Manager",
      image: "/assets/imgs/team/team-20.webp",
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
  ],
};

export default teamData;
