export interface ISocials {
  fb: string;
  ln: string;
  in: string;
}
export interface IMember {
  name: string;
  role: string;
  image: string;
  socials: ISocials;
}
export interface TeamData {
  subtitle: string;
  title: string;
  teamPageLink: string;
  teamPageLinkTitle: string;
  members: IMember[];
}

const teamData: TeamData = {
  subtitle: "OUR TEAM",
  title: "Meet our members",
  teamPageLink: "/design-agency/team",
  teamPageLinkTitle: "Discover All",
  members: [
    {
      name: "Berrymen Wills",
      role: "CEO and founder",
      image: "/assets/imgs/team/team-4.webp",
      socials: {
        fb: "#",
        ln: "#",
        in: "#",
      },
    },
    {
      name: "Emilly Mayore",
      role: "UI/UX Designer",
      image: "/assets/imgs/team/team-5.webp",
      socials: {
        fb: "#",
        ln: "#",
        in: "#",
      },
    },
    {
      name: "Nelson Scott",
      role: "Web Developer",
      image: "/assets/imgs/team/team-6.webp",
      socials: {
        fb: "#",
        ln: "#",
        in: "#",
      },
    },
    {
      name: "Berrymen Wills",
      role: "CEO and founder",
      image: "/assets/imgs/team/team-4.webp",
      socials: {
        fb: "#",
        ln: "#",
        in: "#",
      },
    },
    {
      name: "Emilly Mayore",
      role: "UI/UX Designer",
      image: "/assets/imgs/team/team-5.webp",
      socials: {
        fb: "#",
        ln: "#",
        in: "#",
      },
    },
    {
      name: "Nelson Scott",
      role: "Web Developer",
      image: "/assets/imgs/team/team-6.webp",
      socials: {
        fb: "#",
        ln: "#",
        in: "#",
      },
    },
  ],
};

export default teamData;
