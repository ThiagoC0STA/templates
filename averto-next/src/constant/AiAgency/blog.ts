export interface Blog {
  image: string;
  tag: string;
  date: string;
  title: string;
  link: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  button: {
    text: string;
    iconClass: string;
    href: string;
  };
  blogs: Blog[];
}

const blogData: BlogData = {
  subtitle: "BLOGS & NEWS",
  title: "Insights & Stories",
  button: {
    text: "Explore More",
    iconClass: "fa-solid fa-arrow-right",
    href: "/ai-agency/blog",
  },
  blogs: [
    {
      image: "/assets/imgs/blog/blog-10.webp",
      tag: "Marketing",
      date: "October 3, 2024",
      title: "How AI is Shaping the Future of Brand Strategy",
      link: "/ai-agency/blog-details",
    },
    {
      image: "/assets/imgs/blog/blog-11.webp",
      tag: "Branding",
      date: "October 3, 2024",
      title: "Why Every Brand Needs an AI Strategy",
      link: "/ai-agency/blog-details",
    },
    {
      image: "/assets/imgs/blog/blog-12.webp",
      tag: "Design",
      date: "October 3, 2024",
      title: "How AI Helps Brands Stay Ahead in Competitive Markets",
      link: "/ai-agency/blog-details",
    },
  ],
};

export default blogData;
