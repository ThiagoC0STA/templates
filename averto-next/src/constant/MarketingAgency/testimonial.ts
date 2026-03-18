export interface TestimonialItem {
  text: string;
  rating: number;
  name: string;
  position: string;
  avatar: string;
}

export interface TestimonialData {
  subtitle: string;
  title: string;
  testimonials: TestimonialItem[];
}

 const testimonialData: TestimonialData = {
    subtitle: "Our Testimonials",
    title: "See the Averto impact",
    testimonials: [
      {
        text: `\"Averto took our digital presence to the next level. Their expertise in social media and influencer marketing was exactly what we needed to stand out in the luxury fashion space.\"`,
        rating: 5,
        name: "Mike Larson",
        position: "CMO, Elevate Fashion",
        avatar: "/assets/imgs/client/client-11.webp"
      },
      {
        text: `\"Working with Averto was a game changer for our brand. Their digital marketing strategies and creative approach helped us connect with our audience on a whole new level.\"`,
        rating: 5,
        name: "Sarah Jensen",
        position: "CEO, Revitalize Wellness",
        avatar: "/assets/imgs/client/client-12.webp"
      },
      {
        text: `\"Averto's marketing strategies helped us generate more leads than we could have imagined. Their attention to detail and real-time adjustments made all the difference.\"`,
        rating: 5,
        name: "James Porter",
        position: "COO, Connect Real Estate",
        avatar: "/assets/imgs/client/client-13.webp"
      },
      // The original data had duplicates, so I've included them here too
      {
        text: `\"Averto took our digital presence to the next level. Their expertise in social media and influencer marketing was exactly what we needed to stand out in the luxury fashion space.\"`,
        rating: 5,
        name: "Mike Larson",
        position: "CMO, Elevate Fashion",
        avatar: "/assets/imgs/client/client-11.webp"
      },
      {
        text: `\"Working with Averto was a game changer for our brand. Their digital marketing strategies and creative approach helped us connect with our audience on a whole new level.\"`,
        rating: 5,
        name: "Sarah Jensen",
        position: "CEO, Revitalize Wellness",
        avatar: "/assets/imgs/client/client-12.webp"
      },
      {
        text: `\"Averto's marketing strategies helped us generate more leads than we could have imagined. Their attention to detail and real-time adjustments made all the difference.\"`,
        rating: 5,
        name: "James Porter",
        position: "COO, Connect Real Estate",
        avatar: "/assets/imgs/client/client-13.webp"
      },
    ]
  };
  export default testimonialData;