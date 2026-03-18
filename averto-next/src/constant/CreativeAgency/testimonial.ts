export interface TestimonialData {
  name: string;
  role: string;
  text: string;
  avatar: string;
}
const testimonials: TestimonialData[] = [
  {
    name: "Emily Jack H.",
    role: "UI/UX Designer, Luxeco",
    text: "Outstanding designs that perfectly capture our brand!",
    avatar: "/assets/imgs/client/client-11.webp",
  },
  {
    name: "David Parker",
    role: "Social Media Manager, Flexwear",
    text: "Incredible creativity and precision. Highly appreciate works!",
    avatar: "/assets/imgs/client/client-12.webp",
  },
  {
    name: "Olivia Bennett",
    role: "Creative Director, PureVibes",
    text: "Transformed our vision into a software masterpiece. Superb!",
    avatar: "/assets/imgs/client/client-13.webp",
  },
];

export default testimonials;
