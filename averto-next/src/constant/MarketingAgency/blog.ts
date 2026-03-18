export interface IBlog {
  id: number;
  image: string;
  tag: string;
  title: string;
  url: string;
  readTime: string;
  date: string;
}

export interface IBlogCTA {
  url: string;
  text: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  cta: IBlogCTA;
  blogs: IBlog[];
}

const blogData: BlogData = {
  subtitle: "Latest Insights",
  title: "Our Blogs & News",
  cta: {
    url: "/marketing-agency/blog",
    text: "Explore All",
  },
  blogs: [
    {
      id: 1,
      image: "/assets/imgs/blog/blog-13.webp",
      tag: "News",
      title: "The benefits of influencer marketing",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 2,
      image: "/assets/imgs/blog/blog-14.webp",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 3,
      image: "/assets/imgs/blog/blog-15.webp",
      tag: "News",
      title: "The role of analytics market research",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 4,
      image: "/assets/imgs/blog/blog-13.webp",
      tag: "News",
      title: "The benefits of influencer marketing",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 5,
      image: "/assets/imgs/blog/blog-14.webp",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 6,
      image: "/assets/imgs/blog/blog-15.webp",
      tag: "News",
      title: "The role of analytics market research",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 7,
      image: "/assets/imgs/blog/blog-13.webp",
      tag: "News",
      title: "The benefits of influencer marketing",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 8,
      image: "/assets/imgs/blog/blog-14.webp",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 9,
      image: "/assets/imgs/blog/blog-15.webp",
      tag: "News",
      title: "The role of analytics market research",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 10,
      image: "/assets/imgs/blog/blog-13.webp",
      tag: "News",
      title: "The benefits of influencer marketing",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 11,
      image: "/assets/imgs/blog/blog-14.webp",
      tag: "News",
      title: "Leveraging data from Averto marketing success",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
    {
      id: 12,
      image: "/assets/imgs/blog/blog-15.webp",
      tag: "News",
      title: "The role of analytics market research",
      url: "/marketing-agency/blog-details",
      readTime: "3 min read",
      date: "October 3, 2024",
    },
  ],
};

export default blogData;
