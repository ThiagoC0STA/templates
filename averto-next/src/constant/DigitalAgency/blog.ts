export interface IBlog {
  id: number;
  tag: string;
  image: string;
  date: string;
  title: string;
  url: string;
}

export interface BlogData {
  section: {
    subtitle: string;
    title: string;
    buttonText: string;
    buttonUrl: string;
  };
  posts: IBlog[];
}

const blogData:BlogData = {
  section: {
    subtitle: "Our Blogs & News",
    title: "Latest insights",
    buttonText: "See All Blogs",
    buttonUrl: "/digital-agency/blog",
  },
  posts: [
    {
      id: 1,
      tag: "BRANDING",
      image: "/assets/imgs/blog/blog-1.webp",
      date: "February 12, 2025",
      title: "Averto’s impact around all over the world",
      url: "/digital-agency/blog-details",
    },
    {
      id: 2,
      tag: "DESIGN",
      image: "/assets/imgs/blog/blog-2.webp",
      date: "January 20, 2025",
      title: "Breaking creative boundaries of modern design",
      url: "/digital-agency/blog-details",
    },
    {
      id: 3,
      tag: "BRANDING",
      image: "/assets/imgs/blog/blog-3.webp",
      date: "November 27, 2024",
      title: "Our most recent updates and announcements",
      url: "/digital-agency/blog-details",
    },
  ],
};

export default blogData;
