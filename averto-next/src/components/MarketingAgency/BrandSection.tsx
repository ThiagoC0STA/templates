"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BrandsData, Brand } from "@/constant/MarketingAgency/brand";

interface BrandProps {
  data: BrandsData;
}
const BrandSection: React.FC<BrandProps> = ({ data: brandsData }) => {
  const repeatedBrands = brandsData?.brands;

  return (
    <div className="brand-area-5">
      <div className="container">
        <div className="brand-area-5-inner section-spacing">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper fade-anim" suppressHydrationWarning={true}>
                <h2 className="section-title">
                  {brandsData?.title || "Trusted Clients"}
                </h2>
              </div>
            </div>
          </div>

          <div className="brands-wrapper-box fade-anim" suppressHydrationWarning={true}>
            <div className="brands-wrapper">
              <Swiper
                className="brand-slider-active"
                modules={[Autoplay]}
                slidesPerView="auto"
                loop={true}
                spaceBetween={0}
                speed={5000}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
              >
                {repeatedBrands?.map((brand: Brand) => (
                  <SwiperSlide key={brand?.id}>
                    <div className="brand-item-5">
                      <img src={brand?.image} alt="brand" loading="lazy" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
