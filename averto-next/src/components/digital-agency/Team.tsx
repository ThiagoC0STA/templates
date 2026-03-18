"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { teamData } from "@/content/digital-agency/home/team";
import Link from "next/link";

const Team = () => {
  return (
    <div className="team-digital pb-150">
      <div className="container container-fitness">
        <div className="row">
          <div className="col-12">
            <div className="section__header-v12">
              <h2 className="h2 section__header-title-v12 fade_up_anim">
                {teamData.sectionTitle}
              </h2>
              <p className="fade_up_anim" data-delay=".4">
                {teamData.sectionDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-100">
          <div className="col-12">
            <div className="team-digital__slider-wrapper">
              <Swiper
                className="team-digital__slider"
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                speed={2300}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".team-digital__slider-next",
                  prevEl: ".team-digital__slider-prev",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {teamData.teamMembers.map((member) => (
                  <SwiperSlide key={member.id} className="team-digital__item">
                    <div className="team-digital__item-thumb">
                      <Image
                        className="img-move"
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={350}
                      />
                    </div>
                    <div className="team-digital__item-content">
                      <h5 className="h5 team-digital__item-name">
                        <Link href={member.link}>{member.name}</Link>
                      </h5>
                      <p className="team-digital__item-position">
                        {member.position}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="team-digital__slider-navigation">
                  <div className="team-digital__slider-prev">
                    <Image
                      src={teamData.navigationIcons.prev}
                      alt="Previous"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="team-digital__slider-next">
                    <Image
                      src={teamData.navigationIcons.next}
                      alt="Next"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
