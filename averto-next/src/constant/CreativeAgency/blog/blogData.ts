export interface IBlog {
  id: number;
  tag: string;
  title: string;
  date: string;
  comments: number;
  image: string;
  text: string;
  url: string;
}

const blogData: IBlog[] = [
  {
    id: 1,
    tag: "BRANDING",
    title: "Averto’s impact around all over the world",
    date: "February 12, 2025",
    comments: 0,
    image: "/assets/imgs/blog/blog-22.webp",
    text: `At Averto Creative Studio, we believe that creativity knows no borders. What started as a humble creative agency has grown into a global presence, delivering innovative design and branding solutions to clients from all corners of the world.`,
    url: "/creative-agency/blog-details",
  },
  {
    id: 2,
    tag: "BRANDING",
    title: "How Averto transform concepts into captivating visuals",
    date: "February 12, 2025",
    comments: 0,
    image: "/assets/imgs/blog/blog-23.webp",
    text: `At Averto Creative Studio, we believe that creativity knows no borders. What started as a humble creative agency has grown into a global presence, delivering innovative design and branding solutions to clients from all corners of the world.`,
    url: "/creative-agency/blog-details",
  },
  {
    id: 3,
    tag: "BRANDING",
    title: "Innovation design solutions for modern brands",
    date: "February 12, 2025",
    comments: 0,
    image: "/assets/imgs/blog/blog-24.webp",
    text: `At Averto Creative Studio, we believe that creativity knows no borders. What started as a humble creative agency has grown into a global presence, delivering innovative design and branding solutions to clients from all corners of the world.`,
    url: "/creative-agency/blog-details",
  },
  {
    id: 4,
    tag: "BRANDING",
    title: "Breaking creative boundaries of modern design",
    date: "February 12, 2025",
    comments: 0,
    image: "/assets/imgs/blog/blog-25.webp",
    text: `At Averto Creative Studio, we believe that creativity knows no borders. What started as a humble creative agency has grown into a global presence, delivering innovative design and branding solutions to clients from all corners of the world.`,
    url: "/creative-agency/blog-details",
  },
];

export default blogData;
