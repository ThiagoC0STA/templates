import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfo = [
  {
    id: 1,
    type: 'email',
    text: 'hello@nextsaas.com',
    href: 'mailto:hello@nextsaas.com',
    ariaLabel: 'Email us at hello@nextsaas.com',
    icon: {
      light: '/images/icons/mail.svg',
      dark: '/images/icons/mail-white.svg',
      alt: 'Email icon',
    },
  },
  {
    id: 2,
    type: 'phone',
    text: '(239) 555-0108',
    href: 'tel:2395550108',
    ariaLabel: 'Call us at (239) 555-0108',
    icon: {
      light: '/images/icons/phone.svg',
      dark: '/images/icons/phone-white.svg',
      alt: 'Phone icon',
    },
  },
  {
    id: 3,
    type: 'address',
    text: '1425 Harmony ave, Austin, TX 73301',
    href: null,
    ariaLabel: null,
    icon: {
      light: '/images/icons/location.svg',
      dark: '/images/icons/location-white.svg',
      alt: 'Location icon',
    },
  },
];

const ContactUs = () => {
  return (
    <section className="pt-16 pb-20 md:pt-[90px] md:pb-[150px] lg:pt-[100px] lg:pb-[200px]" aria-label="Contact Us">
      <div className="main-container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-4">
          {/* contact us text  */}
          <div className="space-y-9">
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Still have questions?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>Have questions about your financial future? Let&apos;s talk.</p>
              </RevealAnimation>
            </div>
            {/* contact info  */}
            <ul className="space-y-6" aria-label="Contact Information">
              {contactInfo.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-center gap-2">
                    <span
                      className="dark:bg-background-8 flex size-10 items-center justify-center rounded-full bg-white"
                      aria-hidden="true">
                      <Image
                        src={item.icon.light}
                        alt={item.icon.alt}
                        className="size-6 dark:hidden"
                        width={24}
                        height={24}
                      />
                      <Image
                        src={item.icon.dark}
                        alt={item.icon.alt}
                        className="hidden size-6 dark:block"
                        width={24}
                        height={24}
                      />
                    </span>
                    <p>
                      {item.href ? (
                        <Link href={item.href} aria-label={item.ariaLabel || item.text}>
                          {item.text}
                        </Link>
                      ) : (
                        item.text
                      )}
                    </p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          {/* contact form  */}
          <RevealAnimation delay={0.5}>
            <div className="dark:bg-background-8 lp:max-w-[605px] w-full rounded-[20px] bg-white p-4 lg:max-w-[560px] lg:p-[42px]">
              <form method="post">
                {/* name field  */}
                <fieldset className="mb-8 flex w-full flex-col items-start justify-start gap-2">
                  <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your name"
                    className="placeholder:text-tagline-1 border-stroke-3 focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    aria-required="true"
                  />
                </fieldset>
                {/* email field  */}
                <fieldset className="mb-8 flex w-full flex-col items-start justify-start gap-2">
                  <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    name="emailAddress"
                    placeholder="Enter your email"
                    className="placeholder:text-tagline-1 border-stroke-3 focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    aria-required="true"
                  />
                </fieldset>
                {/* message field  */}
                <fieldset className="mb-4 flex w-full flex-col items-start justify-start gap-2">
                  <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                    Message
                  </label>
                  <textarea
                    name="messages"
                    required
                    placeholder="Enter your message"
                    className="placeholder:text-tagline-1 border-stroke-3 focus-visible:outline-primary-500 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent placeholder:text-secondary/60 text-secondary min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                    aria-required="true"
                    defaultValue={''}
                  />
                </fieldset>
                {/* terms and conditions checkbox */}
                <fieldset className="mb-4 flex items-center gap-2">
                  <label
                    htmlFor="agree-terms"
                    className="flex cursor-pointer items-center gap-x-3"
                    aria-label="Agree to the terms and conditions">
                    <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                    <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                  </label>
                  <label
                    htmlFor="agree-terms"
                    className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                    I agree with the
                    <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                      {' '}
                      terms and conditions
                    </Link>
                  </label>
                </fieldset>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-secondary dark:btn-accent btn-md hover:btn-primary w-full first-letter:uppercase before:content-none"
                  aria-label="Submit contact form">
                  Submit
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
