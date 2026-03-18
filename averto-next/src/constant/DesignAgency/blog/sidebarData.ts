export interface ISocialLink {
  icon: string;
  url: string;
}

export interface IAuthorInfo {
  name: string;
  designation: string;
  image: string;
  text: string;
  socialLinks: ISocialLink[];
}

export interface IRecentBlog {
  title: string;
  date: string;
  image: string;
  url: string;
}

export const authorInfo: IAuthorInfo = {
  name: "Sarah Thompson",
  designation: "Artist/blogger",
  image: "/assets/imgs/gallery/image-23.webp",
  text: "Sarah Thomson is a passionate artist and blogger, blending creativity with storytelling.",
  socialLinks: [
    { icon: "fa-facebook-f", url: "#" },
    { icon: "fa-twitter", url: "#" },
    { icon: "fa-linkedin-in", url: "#" },
    { icon: "fa-instagram", url: "#" },
  ],
};

export const recentBlogs: IRecentBlog[] = [
  {
    title: "Our most recent updates and announcements",
    date: "February 12, 2025",
    image: "/assets/imgs/blog/blog-3.webp",
    url: "/design-agency/blog-details",
  },
  {
    title: "The Art of Creative Storytelling at Averto",
    date: "February 12, 2025",
    image: "/assets/imgs/blog/blog-16.webp",
    url: "/design-agency/blog-details",
  },
  {
    title: "Elevating Your Identity with our studio",
    date: "February 12, 2025",
    image: "/assets/imgs/blog/blog-18.webp",
    url: "/design-agency/blog-details",
  },
];

export const popularTags: string[] = [
  "Corporate",
  "Design Care",
  "Studio",
  "Industry",
  "UI/UX",
  "Graphics",
];
