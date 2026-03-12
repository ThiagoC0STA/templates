'use client';

import contactFormImage from '@/public/images/opai-img-21.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LocationIcon } from '@/src/components/shared/icon';
import SubmitButton from '@/src/components/shared/ui/button/submit-button';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section className="pt-26 pb-20 md:pt-34 md:pb-28 lg:pt-44 lg:pb-36">
      <div className="main-container">
        <div className="space-y-9 lg:space-y-16 xl:space-y-18">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 text-center font-normal tracking-[-2.4px] max-md:leading-[1.1]">
                We&apos;d love to Hear from You
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[320px] font-normal">
                Let&apos;s explore how Nexsas can support your goals with AI-driven solutions.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.1}>
            <div className="group relative w-full rounded-2xl bg-[url('/images/opai-img-138.jpg')] bg-cover bg-center bg-no-repeat p-5 md:p-8">
              <div className="relative z-20 space-y-10 rounded-xl bg-white/30 p-5 backdrop-blur-[30px] md:space-y-14 md:p-8 lg:space-y-19">
                <div className="flex flex-col items-center justify-center gap-x-14 gap-y-10 md:flex-row md:gap-y-0">
                  <form
                    action="#"
                    className="w-full space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <fieldset className="mb-6 space-y-2">
                      <label
                        htmlFor="name"
                        className="text-inter-tight text-tagline-2 text-background-13/90 inline-block font-normal"
                      >
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="border-stroke-3/25 focus-within:border-stroke-3/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-md border px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Your name"
                      />
                    </fieldset>
                    <fieldset className="mb-6 space-y-2">
                      <label
                        htmlFor="email"
                        className="text-inter-tight text-tagline-2 text-background-13/90 inline-block font-normal"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="border-stroke-3/25 focus-within:border-stroke-3/70 text-background-13/90 placeholder:text-background-13/60 w-full rounded-md border px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Your email"
                      />
                    </fieldset>
                    <fieldset className="mb-4 space-y-2">
                      <label
                        htmlFor="message"
                        className="text-inter-tight text-tagline-2 text-background-13/90 inline-block font-normal"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Enter your message"
                        className="border-stroke-3/25 focus-within:border-stroke-3/70 text-background-13/90 placeholder:text-background-13/60 h-45.5 w-full rounded-md border px-4.5 py-3 focus-within:outline-none"
                      />
                    </fieldset>
                    <fieldset className="mb-14 flex items-center justify-between gap-x-5">
                      <label className="flex cursor-pointer items-center gap-1.5">
                        <input
                          type="checkbox"
                          name="terms"
                          required
                          className="peer sr-only"
                          aria-label="I accept with the Terms of uses and privacy policy"
                        />
                        <span className="border-stroke-3/40 peer-checked:border-primary-500 after:bg-background-13/60 relative size-5 cursor-pointer rounded-[2px] border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100" />
                        <span className="text-tagline-3 text-background-13/60 peer-checked:text-background-13/90 font-medium select-none">
                          I accept with the Terms of uses and privacy policy
                        </span>
                      </label>
                    </fieldset>
                    <div className="inline-block pt-12 md:pt-14">
                      <SubmitButton>Send Message</SubmitButton>
                    </div>
                  </form>
                  <RevealAnimation delay={0.2}>
                    <div className="ring-background-7 h-[563px] w-full rounded-[10px] ring-8">
                      <figure className="relative size-full overflow-hidden rounded-lg">
                        <Image
                          src={contactFormImage}
                          alt="contact-form-img"
                          className="size-full object-cover"
                        />
                        <div className="bg-background-13/20 absolute top-1/2 left-1/2 flex h-12 w-[334px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-x-2.5 rounded-lg backdrop-blur-md">
                          <LocationIcon />
                          <span className="font-inter-tight text-tagline-3 font-normal text-white/90">
                            1320 Geoage ST Brisbane, QLD, Japan 4009
                          </span>
                        </div>
                      </figure>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
