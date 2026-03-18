"use client";
import Link from "next/link";
import { HeroData, IBrand } from "@/constant/AiAgency/hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface HeroSectionProps {
  data: HeroData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data: heroData }) => {
  return (
    <section className="hero-area-4">
      <div className="hero-area-4-inner section-spacing-top">
        {/* Background and Shapes */}
        <div className="area-bg">
          <img src={heroData?.bgImage} alt="bg" />
        </div>
        <div className="area-shape-1">
          <img
            className="fade-anim"
            data-direction="left"
            data-delay="1.05"
            src={heroData?.shape1}
            alt="shape"
            suppressHydrationWarning={true}
          />
        </div>
        <div className="area-shape-2">
          <img
            className="fade-anim"
            data-direction="right"
            data-delay="1.20"
            src={heroData?.shape2}
            alt="shape"
            suppressHydrationWarning={true}
          />
        </div>

        {/* Main Hero Content */}
        <div className="container">
          <div className="section-content section-spacing-top">
            <div className="section-title-wrapper">
              <div className="title-wrapper move-anim" data-delay="0.45" suppressHydrationWarning={true}>
                <h1 className="section-title" suppressHydrationWarning={true}>
                  <span suppressHydrationWarning={true}>{heroData?.titleSpanOne}</span> {heroData?.titleText}{" "}
                  <span suppressHydrationWarning={true}>{heroData?.titleSpanTwo}</span>
                </h1>
              </div>
            </div>
            <div className="text-wrapper fade-anim" data-delay="0.60" suppressHydrationWarning={true}>
              <p className="text" suppressHydrationWarning={true}>{heroData?.subtitle}</p>
            </div>
            <div className="btn-wrapper fade-anim" data-delay="0.75" suppressHydrationWarning={true}>
              <Link
                className="t-btn t-btn-primary bg-active"
                href={heroData?.primaryBtnLink || "#"}
              >
                {heroData?.primaryBtnText}
              </Link>
              <Link
                className="t-btn t-btn-primary"
                href={heroData?.secondaryBtnLink || "#"}
              >
                {heroData?.secondaryBtnText}
              </Link>
            </div>
          </div>
        </div>

        {/* Brand Slider */}
        <div className="brand-area-4">
          <div className="container">
            <div className="brand-area-4-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper fade-anim" suppressHydrationWarning={true}>
                    <h2 className="section-title" suppressHydrationWarning={true}>{heroData?.brandTitle}</h2>
                  </div>
                </div>
              </div>
              <div className="brands-wrapper-box">
                <div className="brands-wrapper fade-anim">
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView={"auto"}
                    loop={true}
                    speed={5000}
                    autoplay={{
                      delay: 1,
                      disableOnInteraction: false,
                    }}
                    spaceBetween={0}
                    className="brand-slider-active"
                  >
                    {heroData?.brands?.map((brand: IBrand, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="brand-item-4">
                          <img src={brand?.image} alt={`brand-${index}`} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
