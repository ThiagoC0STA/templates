
export interface HeroData {
  title: string;
  highlightedText: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  shapes: {
    shape1: string;
    shape16: string;
    shape17: string;
  };
  mainImage: string;
}

const hero:HeroData = {
  title: "Unlock the Future of",
  highlightedText: "Software",
  subtitle: "- Start with Averto.",
  description:
    "Averto, a digital agency crafted by a dedicated team of creatives champions the essence of simplicity and elegance.",
  cta: {
    text: "Let’s Connect",
    href: "/creative-agency/contact",
  },
  shapes: {
    shape1: "/assets/imgs/shape/shape-18.webp",
    shape16: "/assets/imgs/shape/shape-16.webp",
    shape17: "/assets/imgs/shape/shape-17.webp",
  },
  mainImage: "/assets/imgs/gallery/image-12.webp",
};

export default hero;
