// Globals css
import "./globals.css";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// FontAwesome Icons css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../lib/fontawesome";

// yet-another-react-lightbox css
import "yet-another-react-lightbox/styles.css";

// swiper slider css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

// Nice-select2 css
import "nice-select2/dist/css/nice-select2.css";

// Template SCSS
import "@/scss/style.scss";
import ScrollTopWrapper from "@/components/ScrollTopWrapper";
import AnimationProvider from "@/providers/AnimationProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Averto - Creative Digital Agency NextJS Template",
  description:
    "Averto is a modern and responsive Next.js template designed for agencies and businesses. Featuring a sleek design, fast performance, and SEO optimization, Averto provides a perfect foundation for building a high-quality website.",
  keywords: [
    "NextJS template",
    "agency website template",
    "business website template",
    "responsive web design",
    "SEO optimized template",
    "modern NextJS template",
    "agency website design",
    "high-performance website template",
    "web development",
    "business template NextJS",
    "Averto template",
    "digital agency template",
    "corporate website template",
    "startup website template",
    "clean website design",
    "modern business template",
    "customizable NextJS template",
    "business landing page template",
    "professional web design template",
    "NextJS portfolio template",
    "creative agency website template",
    "landing page template",
    "NextJS website themes",
    "responsive business templates",
    "NextJS for agencies",
    "SEO friendly web template",
    "business site design template",
    "fast website template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <AnimationProvider>{children}</AnimationProvider>
        <ScrollTopWrapper width={20} height={20} className="progress-wrap" />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
