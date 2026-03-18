"use client";
import Image from "next/image";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import HireMeButton from "../HireMeButton";
import Section from "../../global/Section";
import HeroName from "../HeroName";
import { personal_data } from "@/data/home";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PortfolioOverviewSubSection from "@/components/sections/PortfolioOverviewSubSection";
import SocialLinks from "../../global/SocialLinks";
import ArrowButtonNav from "@/components/ui/ArrowButtonNav";
import Achievements from "../Achievements";

const SubText = ({ text }: { text: string }) => {
  return (
    <div className="2xl:px-38 xl:px-28 lg:px-14">
      <p className="text-(--text-primary)! overflow-hidden">
        <span
          className="block slide-up"
          style={{
            transform: "translateY(100%)",
            animationDelay: "500ms",
          }}
        >
          {text}
        </span>
      </p>
    </div>
  );
};

const Home1 = () => {
  const parallaxLayer1Ref = useRef<HTMLImageElement>(null);
  const parallaxLayer2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const parallaxLayers = [
      parallaxLayer1Ref.current,
      parallaxLayer2Ref.current,
    ] as HTMLImageElement[];

    const ctx = gsap.context(() => {
      parallaxLayers.forEach((el) => {
        gsap.to(el, {
          ease: "none",
          y: 300,
          scrollTrigger: {
            trigger: el,
            start: "top top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="home" className="pt-0! pb-0!" separator={false}>
      <div className="relative pt-28 pb-8" ref={parallaxLayer1Ref}>
        <div className="space-y-12">
          <HeroName />

          <MaxWidthWrapper
            className="grid grid-cols-2 sm:gap-32 gap-8 text-center lg:text-3xl sm:text-2xl font-normal"
            width="wide"
          >
            <SubText text={personal_data.job} />
            <SubText text={personal_data.location} />
          </MaxWidthWrapper>
        </div>

        <MaxWidthWrapper className="lg:hidden space-y-8 mt-8">
          <SocialLinks theme />
          <div className="w-fit mx-auto">
            <ArrowButtonNav text="Let's work" section="contact" />
          </div>
        </MaxWidthWrapper>
      </div>

      <div
        ref={parallaxLayer2Ref}
        className="relative h-screen bg-(--color-landing) overflow-hidden border-(--border-fixed) grid lg:grid-cols-12"
      >
        <div className="col-span-3 lg:block hidden">
          <HireMeButton className="relative top-32 left-1/2 -translate-x-1/2 " />
        </div>

        <div className="lg:col-span-6 relative overflow-hidden z-10">
          <div className="absolute left-0 top-0 size-full -z-1">
            <Image
              src={personal_data.image}
              alt={personal_data.name}
              fill
              className="object-cover -z-10"
            />
          </div>
        </div>

        <div className="col-span-3 relative lg:block hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-32">
            <SocialLinks className="justify-center!" />
          </div>
        </div>
      </div>

      <Achievements />

      <PortfolioOverviewSubSection />
    </Section>
  );
};

export default Home1;
