export interface IBlogPost {
  id: number;
  tags: string[];
  image: string;
  title: string;
  href: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  posts: IBlogPost[];
}


const blog:BlogData = {
    subtitle: "OUR STORIES",
    title: "Blog and news",
    buttonText: "Discover All",
    buttonLink: "/design-agency/blog",
    posts: [
      {
        id: 1,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-1.webp",
        title: "The main role of AI in our digital marketing",
        href: "/design-agency/blog-details",
      },
      {
        id: 2,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-2.webp",
        title: "Creating a great seamless user experience",
        href: "/design-agency/blog-details",
      },
      {
        id: 3,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-3.webp",
        title: "Web design trends to watch in 2024",
        href: "/design-agency/blog-details",
      },
      {
        id: 4,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-4.webp",
        title: "The main role of AI in our digital marketing",
        href: "/design-agency/blog-details",
      },
      {
        id: 5,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-5.webp",
        title: "Creating a great seamless user experience",
        href: "/design-agency/blog-details",
      },
      {
        id: 6,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-6.webp",
        title: "Web design trends to watch in 2024",
        href: "/design-agency/blog-details",
      },
      {
        id: 7,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-1.webp",
        title: "The main role of AI in our digital marketing",
        href: "/design-agency/blog-details",
      },
      {
        id: 8,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-2.webp",
        title: "Creating a great seamless user experience",
        href: "/design-agency/blog-details",
      },
      {
        id: 9,
        tags: ["BRANDING", "MOCKUP"],
        image: "/assets/imgs/blog/blog-3.webp",
        title: "Web design trends to watch in 2024",
        href: "/design-agency/blog-details",
      },
    ],
  };
  
  export default blog;
  