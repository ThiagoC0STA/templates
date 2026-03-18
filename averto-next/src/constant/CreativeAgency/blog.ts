export interface SectionTitle {
  subtitle: string;
  title: string;
}

export interface Blog {
  id: number;
  tag: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export interface BlogData {
  sectionTitle: SectionTitle;
  blogs: Blog[];
}

const blogData:BlogData = {
  sectionTitle: {
    subtitle: "Our Insights",
    title: "Press Releases",
  },
  blogs: [
    {
      id: 1,
      tag: "Branding Strategy",
      title: "Why Creative Strategy is the Key to Brand Loyalty",
      date: "August 01, 2024",
      image: "/assets/imgs/blog/blog-7.webp",
      slug: "why-creative-strategy-is-the-key-to-brand-loyalty",
    },
    {
      id: 2,
      tag: "Customer Experience",
      title: "How Averto Merges Creativity with Strategy and Innovations",
      date: "July 22, 2024",
      image: "/assets/imgs/blog/blog-8.webp",
      slug: "how-averto-merges-creativity-with-strategy-and-innovations",
    },
    {
      id: 3,
      tag: "Branding Strategy",
      title: "How Averto Creates Meaningful Brand Identity",
      date: "July 15, 2024",
      image: "/assets/imgs/blog/blog-9.webp",
      slug: "how-averto-creates-meaningful-brand-identity",
    },
  ],
};

export default blogData;
