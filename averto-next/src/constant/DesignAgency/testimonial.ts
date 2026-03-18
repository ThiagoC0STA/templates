
export interface ITestimonial {
  text: string;
  image: string;
  name: string;
  designation: string;
}

export interface TestimonialData {
  subtitle: string;
  title: string;
  description: string;
  items: ITestimonial[];
}

const testimonialData: TestimonialData = {
  subtitle: "OUR TESTIMONIALS",
  title: "What our clients say",
  description:
    "We pride ourselves not only on the work we create but also on the relationships we build",
  items: [
    {
      text: "Working with Averto was an absolute game changer. Their creativity and attention to detail transformed our brand into something truly unique.",
      image: "/assets/imgs/client/client-7.webp",
      name: "Sarah Mitchell",
      designation: "CEO of Lumera Studios",
    },
    {
      text: "Averto Digital Agency transformed the way we’ve connected with our audience. From dynamic branding to innovative digital solutions.",
      image: "/assets/imgs/client/client-8.webp",
      name: "David Parker",
      designation: "Social Media Manager, Flexwear",
    },
    {
      text: "Averto has delivered exceptional service at every stage of our project. Their team is very responsive, professional, dedicated to delivering real results.",
      image: "/assets/imgs/client/client-9.webp",
      name: "Olivia Bennett",
      designation: "Creative Director, PureVibes",
    },
    {
      text: "The Averto team completely revamped our brand image, and the feedback from our clients has been amazing.",
      image: "/assets/imgs/client/client-10.webp",
      name: "Michael Turner",
      designation: "Founder, GreenSphere",
    },
  ],
};
export default testimonialData;
