'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import type { BlogPost } from '@/src/interface';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, type FC } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const formatDisplayDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

interface FeaturedBlogProps {
  posts: BlogPost[];
}

const FeaturedBlog: FC<FeaturedBlogProps> = ({ posts }) => {
  const featuredPosts = posts?.filter((p) => p?.featured === true).slice(0, 3) ?? [];
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const updateSlideStyles = () => {
      const slides = swiper.slides;
      const activeIndex = swiper.activeIndex;
      const slidesPerView =
        typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1;

      slides.forEach((slide, index) => {
        slide.style.transition = 'opacity 0.6s ease-out, filter 0.6s ease-out';

        let offset = index - activeIndex;
        if (offset < 0) {
          offset += slides.length;
        }

        if (offset >= 0 && offset < slidesPerView) {
          slide.style.opacity = '1';
          slide.style.filter = 'blur(0px)';
        } else {
          slide.style.opacity = '0.3';
          slide.style.filter = 'blur(2px)';
        }
      });
    };

    swiper.on('init', updateSlideStyles);
    swiper.on('slideChangeTransitionStart', updateSlideStyles);

    return () => {
      swiper.off('init', updateSlideStyles);
      swiper.off('slideChangeTransitionStart', updateSlideStyles);
    };
  }, [featuredPosts.length]);

  if (featuredPosts.length === 0) return null;

  return (
    <RevealAnimation delay={0.3}>
      <section className="overflow-hidden py-13 md:py-20 lg:py-28 xl:py-36 2xl:py-44">
        <div className="main-container space-y-8 md:space-y-14">
          <div className="space-y-4 text-center max-md:pb-4">
            <RevealAnimation delay={0.1}>
              <BadgeDefault text="Featured Blog" />
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.1]">
                Don&apos;t miss{' '}
                <span className="font-instrument-serif text-background-13/30 italic">this</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60">
                5 AI Tools Every Business Needs to Streamline Operations
              </p>
            </RevealAnimation>
          </div>

          <div className="featured-blog-swiper overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="overflow-hidden!"
              modules={[Autoplay]}
              initialSlide={Math.min(1, featuredPosts.length - 1)}
              speed={1000}
              slidesPerView={1}
              spaceBetween={20}
              loop={featuredPosts.length > 1}
              allowTouchMove
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {featuredPosts.map((post, index) => (
                <SwiperSlide key={post?.slug ?? index}>
                  <article className="group underline-hover-effect-black h-auto space-y-4 rounded-lg bg-white p-2">
                    <figure className="h-[380px] w-full overflow-hidden rounded-lg md:h-[556px]">
                      <Link href={`/blog/${post?.slug}`} className="block size-full">
                        <Image
                          src={post?.thumbnail ?? ''}
                          alt={post?.title ?? ''}
                          width={556}
                          height={556}
                          className="size-full object-cover"
                        />
                      </Link>
                    </figure>
                    <div className="space-y-2 pb-6 md:pl-2">
                      <div className="flex items-center space-x-2">
                        {post?.tags?.[0] && (
                          <div className="border-stroke-3/25 inline-flex items-center justify-center gap-x-1.5 rounded-full border px-4 py-1.5">
                            <span className="font-inter-tight text-tagline-4 text-background-13/90 font-normal first-letter:uppercase">
                              {post.tags[0]}
                            </span>
                          </div>
                        )}
                        <time
                          dateTime={post?.publishDate}
                          className="text-tagline-4 text-background-13/90 flex items-center gap-x-1 font-normal"
                        >
                          {post?.publishDate && formatDisplayDate(post.publishDate)}
                        </time>
                      </div>
                      <Link href={`/blog/${post?.slug}`} className="blog-title-black block">
                        <h3 className="text-is-heading-5 md:text-is-heading-4 text-background-13/90 line-clamp-2 font-normal tracking-[-0.6px]">
                          {post?.title}
                        </h3>
                      </Link>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeaturedBlog;
