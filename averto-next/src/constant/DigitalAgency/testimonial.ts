export interface TestimonialContent {
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  prevButtonImage: string;
  nextButtonImage: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

export const testimonialSectionContent:TestimonialContent = {
  subtitle: "Our Testimonial",
  title: "What our clients say",
  buttonText: "Be a Client",
  buttonLink: "contact",
  prevButtonImage: "/assets/imgs/icon/icon-14.webp",
  nextButtonImage: "/assets/imgs/icon/icon-15.webp",
};

export const testimonialData:Testimonial[] = [
  {
    quote:
      "“Averto transformed our online presence with their innovative web design and marketing strategies. Their attention to detail and dedication to our goals were incredible.”",
    author: "Emily Jack H.",
    position: "UI/UX Designer, Luxeco",
    image: "/assets/imgs/client/client-1.webp",
  },
  {
    quote:
      "Working with Averto was a game-changer for our brand. Their team brought unparalleled creativity to our campaigns and aligned it perfectly with our marketing strategy.",
    author: "David Parker",
    position: "Social Media Manager, Flexwear",
    image: "/assets/imgs/client/client-2.webp",
  },
  {
    quote:
      "Averto delivered exceptional service at every stage of our project. Their team is responsive, professional, and dedicated to delivering real results.",
    author: "Olivia Bennett",
    position: "Creative Director, PureVibes",
    image: "/assets/imgs/client/client-3.webp",
  },
];
