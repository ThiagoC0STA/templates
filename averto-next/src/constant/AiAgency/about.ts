export interface AboutData {
  subtitle: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  aboutLink: string;
  buttonText: string;
}
const aboutData = {
  subtitle: "ABOUT AI",
  title: "Shaping Our Future with Advanced AI Technologies",
  paragraphs: [
    "We are passionate about harnessing the power of artificial intelligence to create smart, innovative solutions that drive growth and transformation.",
    "Our team of AI experts, data scientists, and creative technologists work collaboratively to develop customized AI models that solve complex challenges, streamline operations, and enhance user experiences.",
  ],
  image: "/assets/imgs/shape/shape-23.webp",
  imageAlt: "About AI",
  aboutLink: "/ai-agency/about",
  buttonText: "About Agency",
};

export default aboutData;
