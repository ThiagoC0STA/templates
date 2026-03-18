export interface ICounters {
  number: string;
  label: string;
}

export interface IAboutData {
  subtitle: string;
  shapes: string[];
  title: string;
  buttonLink: string;
  buttonText: string;
  counters: ICounters[];
  image: string;
}

const aboutData: IAboutData = {
  subtitle: "Who we are",
  shapes: ["/assets/imgs/shape/shape-32.webp"],
  title:
    "Averto believes in the power of creativity to ignite growth. We aim to empower businesses to unlock their full potential by delivering cutting-edge marketing solutions that drive results.",
  buttonLink: "/marketing-agency/about",
  buttonText: "About Us",
  counters: [
    { number: "100%", label: "Service satisfaction guarantee" },
    { number: "32k", label: "Successfully finished projects" },
    { number: "25+", label: "Experienced engineering members" },
  ],
  image: "/assets/imgs/gallery/image-18.webp",
};
export default aboutData;
