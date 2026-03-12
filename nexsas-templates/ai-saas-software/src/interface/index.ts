// footer
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  name: string;
  href: string;
}

export interface FooterData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  address: {
    label: string;
    text: string;
  };
  contact: {
    label: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
  };
  social: FooterSocialLink[];
  linkGroups: FooterLinkGroup[];
  bottomBar: {
    links: FooterLink[];
  };
}

// pricing

export interface FeatureCategory {
  features: string[];
  limit: number;
  checks: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured: boolean;
  ctaHref: string;
  ctaLabel?: string;
  featureCategories: FeatureCategory[];
}

// blog markdown
export interface BlogPost {
  slug: string;
  content: string;
  title: string;
  titleItalic?: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
  thumbnail: string;
  heroImages?: string[];
  tags: string[];
  description?: string;
  showHomepage?: boolean;
  related?: string[];
  featured?: boolean;
  [key: string]: unknown;
}

// services markdown
export interface ServicePost {
  slug: string;
  content: string;
  title: string;
  titleItalic?: string;
  description: string;
  icon: string;
  heroImage?: string;
  whatItDoes?: string[];
  whoItsFor?: string[];
  related?: string[];
  ctaText?: string;
  ctaHref?: string;
  [key: string]: unknown;
}

// team markdown
export interface TeamMember {
  slug: string;
  content: string;
  name: string;
  role: string;
  image: string;
  heroImage?: string;
  email?: string;
  phone?: string;
  phoneHref?: string;
  order?: number;
  [key: string]: unknown;
}

// use case markdown
export interface UseCasePost {
  slug: string;
  content: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  projectType: string;
  completionDate: string;
  showHomepage?: boolean;
  [key: string]: unknown;
}

// mobile menu
export interface MobileMenuSubItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuData {
  id: string;
  title: string;
  submenu: MobileMenuSubItem[];
}
