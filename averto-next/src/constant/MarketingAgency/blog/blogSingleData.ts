export interface BlogSection {
  title: string;
  content: string[];
  gallery?: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface BlogData {
  title: string;
  date: string;
  commentsCount: number;
  category: string;
  introText: string;
  coverImage: string;
  sections: BlogSection[];
  tags: string[];
}

export const blogSingleData: BlogData = {
  title: "Averto’s impact around all over the world",
  date: "February 12, 2025",
  commentsCount: 3,
  category: "BRANDING",
  introText:`Averto, a creative studio with its roots in innovation, design, and storytelling, is one such entity. With its commitment to excellence, Averto is making waves not just locally but across the globe.`,
  coverImage: "/assets/imgs/blog/blog-22.webp",
  sections: [
    {
      title: "Blog Overview",
      content: [
        "At Averto Creative Studio, we believe that creativity knows no borders. What started as a humble creative agency has grown into a global presence, delivering innovative design and branding solutions to clients from all corners of the world.",
        "In a world saturated with digital content, only a few creative studios manage to break through the noise and leave a lasting impression.",
      ],
      gallery: [
        "/assets/imgs/gallery/image-24.webp",
        "/assets/imgs/gallery/image-25.webp",
      ],
    },
    {
      title: "Innovative Approaches to Design",
      content: [
        "One of Averto's key strengths is its ability to adapt to the cultural and creative demands of various markets. By understanding regional nuances, cultural aesthetics, and market trends",
        "Averto crafts designs that are not only visually stunning but also culturally relevant. This adaptability has earned Averto a reputation for being a studio that can connect with audiences anywhere in the world.",
      ],
      quote: {
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime place at facere possimus!",
        author: "Sarah Thompson",
      },
    },
    {
      title: "Creativity Without Borders",
      content: [
        "Averto’s impact on the world is undeniable. From its international collaborations to its culturally sensitive designs, the studio is proving that creativity knows no borders.",
        "As Averto continues to grow and innovate, its influence will only expand, solidifying its position as a global leader in the creative industry.",
      ],
    },
  ],
  tags: ["Branding", "Design", "Corporate"],
};

export interface Comment {
  name: string;
  date: string;
  avatar: string;
  rating: number;
  message: string;
}

export const comments: Comment[] = [
  {
    name: "Mark Patterson",
    date: "16 Feb, 2025",
    avatar: "/assets/imgs/client/client-4.webp",
    rating: 5,
    message: "As a designer, I appreciate Averto’s commitment to sustainability and inclusivity. It is great to see a creative studio making such a positive impact globally!",
  },
  {
    name: "Ahmed Al-Badr",
    date: "15 Feb, 2025",
    avatar: "/assets/imgs/client/client-5.webp",
    rating: 5,
    message: "It’s amazing to see a creative studio with such a widespread influence. Their ability to adapt to various cultural markets shows true mastery in design. Great article!",
  },
  {
    name: "Jessica Lopez",
    date: "12 Feb, 2025",
    avatar: "/assets/imgs/client/client-6.webp",
    rating: 5,
    message: "Averto’s approach to global design is truly inspiring! I love how they manage incorporate cultural nuances their work while still keeping things modern and fresh!",
  },
];
