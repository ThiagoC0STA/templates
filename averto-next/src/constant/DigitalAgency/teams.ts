export interface ITeam {
  id: number;
  number: string;
  name: string;
  post: string;
  image: string;
  shape: string;
  isActive: boolean;
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
      number: "01",
      name: "Berrymen Wills",
      post: "CEO/ FOUNDER",
      image: "/assets/imgs/team/team-1.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
    {
      id: 2,
      number: "02",
      name: "Emilly Mayore",
      post: "UI/UX DESIGNER",
      image: "/assets/imgs/team/team-2.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: true,
    },
    {
      id: 3,
      number: "03",
      name: "Nelson Scott",
      post: "WEB DESIGNER",
      image: "/assets/imgs/team/team-3.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
    {
      id: 4,
      number: "04",
      name: "Noah Bennett",
      post: "Creative Director",
      image: "/assets/imgs/team/team-18.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
    {
      id: 5,
      number: "05",
      name: "Sophia Martinez",
      post: "Web Developer",
      image: "/assets/imgs/team/team-19.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: true,
    },
    {
      id: 6,
      number: "06",
      name: "Liam Nguyen",
      post: "Project Manager",
      image: "/assets/imgs/team/team-20.webp",
      shape: "/assets/imgs/shape/shape-9.webp",
      isActive: false,
    },
  ],
};

export default teamData;
