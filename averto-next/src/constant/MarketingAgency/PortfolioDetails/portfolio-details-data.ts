export interface IMeta {
  title: string;
  text: string;
}

export interface IOverview {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface IProblem {
  title: string;
  paragraphs: string[];
  images: string[];
}

export interface ISolution {
  title: string;
  paragraphs: string[];
}

export interface IPortfolioDetailsData {
  meta: IMeta[];
  overview: IOverview;
  problems: IProblem;
  solutions: ISolution;
}

const portfolioDetailsData: IPortfolioDetailsData = {
  meta: [
    { title: "Client", text: "Lumera Studios" },
    { title: "Project", text: "Website Redesign" },
    { title: "Duration", text: "Mar 15- Aug 20, 2024" },
    { title: "Company Size", text: "40+ Employees" },
  ],
  overview: {
    title: "Overview",
    paragraphs: [
      `Lumera Studios is a leading provider of IT solutions for businesses across various industries. With a rapidly growing customer base and an evolving range of services, the company recognized the need to revamp its outdated website to better reflect its capabilities.`,
      `We deploy world-class creative design, team on demand. that can design surest measure’s of success is when a client partner with more than once build, ship scale your vision most efficient. Visual hierarchy is the principle of arranging elements to show their order of importance. information easily. By laying out elements logically and strategically, designers influence users’ perceptions and guide them to desired actions. Users notice larger elements more easily can convert.`,
    ],
    images: [
      "/assets/imgs/gallery/image-26.webp",
      "/assets/imgs/gallery/image-27.webp",
      "/assets/imgs/gallery/image-28.webp",
      "/assets/imgs/gallery/image-29.webp",
    ],
  },
  problems: {
    title: "Problems",
    paragraphs: [
      `For she word weather. Hall necessary got exerted to would copy suppliers, was to live box tone the threw the a in headline each entrance the outfits text is toys had making it anyone project himself self-interest. The officers. At before a have could he would in a it target. A found beings are case dressed have of expand not, phase out up leave to not thinks variety the in continues assistant might can a and offer, name the part.`,
    ],
    images: [
      "/assets/imgs/gallery/image-30.webp",
      "/assets/imgs/gallery/image-31.webp",
    ],
  },
  solutions: {
    title: "Solutions",
    paragraphs: [
      `This ever her, bread in shine. Coast the of have impasse. They report concept the we of packed, place service. Well commas, with instead divine devoting afforded of willingly the with somewhere, all her is will. My arduous least need writers, and actual to slightly held raised to be them with morning even handpainted, small ask it like…. Spot. The as be the all can thousand we yourself to searching.`,
      `For she word weather. Hall necessary got exerted to would copy suppliers, was to live box tone the threw the a in headline each entrance the outfits text is toys had making it anyone project himself self-interest. The officers. At before a have could he would in a it target. A found beings are case dressed have of expand not, phase out up leave to not thinks variety the in continues assistant might can a and offer, name the part.`,
    ],
  },
};
export default portfolioDetailsData;
