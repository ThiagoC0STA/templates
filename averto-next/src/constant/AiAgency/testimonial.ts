export interface TestimonialItem {
  text: string;
  name: string;
  post: string;
  avatar: string;
}

export interface TestimonialData {
  subtitle: string;
  title: string;
  reviewCount: string;
  ratingText: string;
  testimonials: TestimonialItem[];
}

const testimonialData: TestimonialData = {
  subtitle: "OUR TESTIMONIALS",
  title: "The Impact of Our AI Solutions",
  reviewCount: "269+",
  ratingText: "(4.9 rating based reviews)",
  testimonials: [
    {
      text: `“Our approach ensures that every project we undertake is strategically crafted to build and elevate brands, driving success through a perfect balance of creativity and technical expertise. From concept to execution, we prioritize quality, functionality.”`,
      name: "Sarah Matthews",
      post: "CEO, TechNex Solutions",
      avatar: "/assets/imgs/client/client-15.webp",
    },
    {
      text: `“Working with Averto AI Agency has been a game-changer for our company. Their innovative solutions streamlined our operations and enhanced our customer engagement. The team’s expertise in AI is unmatched, and their commitment to delivering results is evident in every project.”`,
      name: "Alexandra Reed",
      post: "CEO, Lumina Corp.",
      avatar: "/assets/imgs/client/client-14.webp",
    },
    {
      text: `“Averto perfectly combines creativity and technical expertise. Their AI-powered marketing strategies helped us reach new audiences and improve our ROI significantly. The team’s ability to tailor solutions to our needs was impressive. A truly futuristic partner in business.”`,
      name: "Michael Turner",
      post: "Marketing Manager, NexGen",
      avatar: "/assets/imgs/client/client-9.webp",
    },
    {
      text: `"Averto helped us harness the power of AI to enhance our customer support system. Their chatbot integration was seamless, and the results were instant—reduced response times and happier customers! Their attention to detail and forward-thinking approach is second to none."`,
      name: "Emily Collins",
      post: "Product Manager, Zenith",
      avatar: "/assets/imgs/client/client-10.webp",
    },
  ],
};

export default testimonialData;
