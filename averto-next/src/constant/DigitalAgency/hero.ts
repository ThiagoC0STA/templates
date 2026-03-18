export interface HeroData {
  subtitle?: string;
  typewriterStrings?: string[];
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  videoUrl?: string;
  shapeImg?: string;
  lines?: string[];
}

const heroData:HeroData = {
  subtitle: "WE CREATE",
  typewriterStrings: [
    "Bold Ideas",
    "UX Design",
    "Web Studio",
    "Fast Builds",
    "Pro Motion",
  ],
  description:
    "Averto, a digital agency crafted by a dedicated team of creatives champions the essence of simplicity and elegance.",
  button: {
    text: "Let’s Connect",
    url: "/contact",
  },
  videoUrl:"/videos/Man_Looking.mp4",
  shapeImg: "/assets/imgs/shape/shape-1.webp",
  lines: ["line-1", "line-2", "line-3", "line-4"],
};

export default heroData;
