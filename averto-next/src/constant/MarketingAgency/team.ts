export interface ISocial {
  icon: string;
  url: string;
}

export interface ITeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: ISocial[];
}

export interface ITeamCTA {
  text: string;
  url: string;
}

export interface TeamData {
  subtitle: string;
  title: string;
  cta: ITeamCTA;
  members: ITeamMember[];
}


const teamData:TeamData = {
  subtitle: "Our Team Members",
  title: "The minds behind FeAvertoux",
  cta: {
    text: "Our Members",
    url: "/marketing-agency/team",
  },
  members: [
    {
      id: "michael",
      name: "Michael Torres",
      role: "CEO & Founder",
      image: "/assets/imgs/team/team-14.webp",
      socials: [
        { icon: "fa-brands fa-instagram", url: "#" },
        { icon: "fa-brands fa-behance", url: "#" },
        { icon: "fa-brands fa-twitter", url: "#" },
      ],
    },
    {
      id: "jessica",
      name: "Jessica Harper",
      role: "Creative Officer",
      image: "/assets/imgs/team/team-15.webp",
      socials: [
        { icon: "fa-brands fa-instagram", url: "#" },
        { icon: "fa-brands fa-behance", url: "#" },
        { icon: "fa-brands fa-twitter", url: "#" },
      ],
    },
    {
      id: "david",
      name: "David Miller",
      role: "Digital Marketing Director",
      image: "/assets/imgs/team/team-16.webp",
      socials: [
        { icon: "fa-brands fa-instagram", url: "#" },
        { icon: "fa-brands fa-behance", url: "#" },
        { icon: "fa-brands fa-twitter", url: "#" },
      ],
    },
    {
      id: "emily",
      name: "Emily Watson",
      role: "Project Manager",
      image: "/assets/imgs/team/team-17.webp",
      socials: [
        { icon: "fa-brands fa-instagram", url: "#0" },
        { icon: "fa-brands fa-behance", url: "#0" },
        { icon: "fa-brands fa-twitter", url: "#0" },
      ],
    },
  ],
};

export default teamData;
