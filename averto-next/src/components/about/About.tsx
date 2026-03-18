"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";

import { aboutContent } from "@/content/about/about";

interface CounterProps {
  end: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentRef = countRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = Date.now();
            const startValue = 0;
            const endValue = end;

            const animate = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);

              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const current = Math.floor(
                startValue + (endValue - startValue) * easeOutQuart
              );

              setCount(current);

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={countRef} className="odometer">
      {count}
    </span>
  );
};

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev === aboutContent.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? aboutContent.gallery.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImage]);

  return (
    <>
      <div className="about__area pt-150 pb-150">
        <div className="container">
          <div className="row g-3 g-md-4 justify-content-between">
            <div className="col-lg-6 col-xl-5 fade_up_anim" data-delay=".2">
              <h2 className="h2">{aboutContent.hero.title}</h2>
            </div>
            <div className="col-lg-6 col-xl-6">
              <h6 className="h6 about__subhading fade_up_anim" data-delay=".4">
                {aboutContent.hero.subheading}
              </h6>
              <p className="fade_up_anim" data-delay=".6">
                {aboutContent.hero.description}
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-between about__quoteAuthor-wrapper">
            <div className="col-lg-5 fade_up_anim" data-delay=".2">
              <div className="about__quoteAuthor">
                <Image
                  src={aboutContent.author.avatar}
                  alt={aboutContent.author.name}
                  width={80}
                  height={80}
                />
                <div className="author-info">
                  <h6 className="h6 author-title">
                    {aboutContent.author.name}
                  </h6>
                  <p className="author-designation">
                    {aboutContent.author.designation}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 fade_up_anim" data-delay=".4">
              <blockquote className="about__quote">
                <h4 className="h4">{aboutContent.quote}</h4>
              </blockquote>
            </div>
          </div>
          <div className="row g-4 justify-content-between pt-72">
            {aboutContent.funFacts.map((fact) => (
              <div
                key={fact.id}
                className="col-md-4 fade_up_anim"
                data-delay={fact.delay}
              >
                <div className="fun-fact__item">
                  <h2 className="h2 counter-item">
                    <Counter end={fact.number} />
                    <span className="count-extra-info">{fact.suffix}</span>
                  </h2>
                  <span className="info">{fact.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about__gallery">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="gallery-sa__slider about__gallery-slider gallery-sa__magnific"
        >
          {aboutContent.gallery.map((item, index) => (
            <SwiperSlide key={item.id} className="gallery-sa__magnific-item">
              <button
                onClick={() => openLightbox(index)}
                className="gallery-sa__magnific-link"
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: 0,
                  width: "100%",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <i className="bi bi-zoom-in" aria-hidden="true"></i>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bootstrap Lightbox Modal */}
      <Modal
        show={lightboxOpen}
        onHide={closeLightbox}
        centered
        size="xl"
        className="lightbox-modal"
        contentClassName="bg-transparent border-0"
        dialogClassName="modal-fullscreen-lg-down"
      >
        <Modal.Body
          className="p-0 position-relative d-flex align-items-center justify-content-center"
          style={{ minHeight: "90vh" }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
            aria-label="Close"
            style={{
              zIndex: 1050,
              fontSize: "1.5rem",
              opacity: 0.9,
            }}
          ></button>

          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y ms-3"
            aria-label="Previous image"
            style={{
              width: "50px",
              height: "50px",
              zIndex: 1050,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            ‹
          </button>

          {/* Image Container */}
          <div className="d-flex align-items-center justify-content-center w-100 h-100 p-5">
            <Image
              src={aboutContent.gallery[currentImage].image}
              alt={aboutContent.gallery[currentImage].alt}
              width={1200}
              height={800}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
              }}
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y me-3"
            aria-label="Next image"
            style={{
              width: "50px",
              height: "50px",
              zIndex: 1050,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            ›
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
