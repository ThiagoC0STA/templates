export interface IAward {
  title: string;
  year: string;
  image: string;
  category: string;
}

export interface AwardsData {
  section: {
    subtitle: string;
    title: string;
    description: string;
  };
  list: IAward[];
}


const awardsData:AwardsData = {
    section: {
      subtitle: "Our Awards",
      title: "Celebrating our success",
      description:
        "Our dedication to pushing creative limits has earned us prestigious accolades and recognition from industry-leading platforms.",
    },
    list: [
      {
        title: "Creative Excellence Award",
        year: "2024",
        image: "/assets/imgs/gallery/image-3.webp",
        category: "Best Branding Project",
      },
      {
        title: "Visionary Design Award",
        year: "2023",
        image: "/assets/imgs/gallery/image-34.webp",
        category: "Best Digital Campaign",
      },
      {
        title: "Global Art Direction Award",
        year: "2022",
        image: "/assets/imgs/gallery/image-35.webp",
        category: "Best Art Direction",
      },
      {
        title: "Elite Event Design Award",
        year: "2021",
        image: "/assets/imgs/gallery/image-36.webp",
        category: "Best Event Branding",
      },
    ],
  };
  
  export default awardsData;
  