import RevealAnimation from '@/components/animation/RevealAnimation';
import avatar1 from '@public/images/ns-avatar-15.png';
import avatar6 from '@public/images/ns-avatar-16.png';
import avatar2 from '@public/images/ns-avatar-17.png';
import avatar3 from '@public/images/ns-avatar-21.png';
import avatar4 from '@public/images/ns-avatar-22.png';
import avatar5 from '@public/images/ns-avatar-23.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TestimonialStar from '@/components/shared/TestimonialStar';

interface TestimonialData {
  id: string;
  name: string;
  position: string;
  avatar: StaticImageData;
  quote: string;
  xUrl: string;
}

const testimonialsData: TestimonialData[] = [
  {
    id: '1',
    name: 'Michael J.',
    position: 'Graphic Designer',
    avatar: avatar1,
    quote:
      'This platform transformed my creative process. The intuitive design tools and AI assistance helped me create stunning visuals in half the time.',
    xUrl: 'https://x.com/',
  },
  {
    id: '2',
    name: 'Anna S.',
    position: 'Marketing Manager',
    avatar: avatar2,
    quote:
      'The analytics dashboard gives me insights I never had before. Our campaign performance improved by 40% in just two months.',
    xUrl: 'https://x.com/',
  },
  {
    id: '3',
    name: 'Samuel K.',
    position: 'Operations Manager',
    avatar: avatar3,
    quote:
      'Streamlined our entire workflow. What used to take hours now takes minutes. The team productivity has skyrocketed.',
    xUrl: 'https://x.com/',
  },
  {
    id: '4',
    name: 'Brian C.',
    position: 'Financial Analyst',
    avatar: avatar4,
    quote:
      'The automated reporting features saved me 15 hours per week. I can now focus on strategic analysis instead of data crunching.',
    xUrl: 'https://x.com/',
  },
  {
    id: '5',
    name: 'Terry J.',
    position: 'Sales Manager',
    avatar: avatar5,
    quote:
      'Our sales pipeline visibility improved dramatically. The CRM integration made tracking deals effortless and increased our close rate by 25%.',
    xUrl: 'https://x.com/',
  },
  {
    id: '6',
    name: 'James D.',
    position: 'Software Engineer',
    avatar: avatar6,
    quote:
      'The development tools and integrations are top-notch. Deploying code has never been this smooth and reliable.',
    xUrl: 'https://x.com/',
  },
];

const TestimonialLarge = () => {
  return (
    <RevealAnimation delay={0.2}>
      <div className="relative hidden h-[462px] lg:block" aria-label="Customer testimonials">
        {/* testimonial card one  */}
        <div
          className="absolute top-[27px] origin-center rotate-[-14deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
            <div className="flex items-center justify-center gap-x-3">
              <figure className="size-12 overflow-hidden rounded-full">
                <Image
                  src={avatar1}
                  alt="Profile photo of Nora F., Architect"
                  className="h-full w-full object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </figure>
              <div>
                <h3 className="text-secondary text-tagline-1 font-semibold">Nora F.</h3>
                <p className="text-tagline-2">Architect</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Nora F. on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                      fill="#12161F"
                    />
                  </svg>
                </Link>
              </div>
              <blockquote className="font-inter-tight text-tagline-1 text-secondary font-normal" cite="https://x.com/">
                &quot;I was skeptical at first, but the results speak for themselves. I landed an interview at my top
                company!&quot;
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card two  */}
        <div
          className="absolute top-0 left-[320px] origin-center rotate-[5deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
            <div className="flex items-center justify-center gap-x-3">
              <figure className="size-12 overflow-hidden rounded-full">
                <Image
                  src={avatar2}
                  alt="Profile photo of John Doe, CEO"
                  className="h-full w-full object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </figure>
              <div>
                <h3 className="text-secondary text-tagline-1 font-semibold">Nora F.</h3>
                <p className="text-tagline-2">Architect</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Nora F. on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                      fill="#12161F"
                    />
                  </svg>
                </Link>
              </div>
              <blockquote className="font-inter-tight text-tagline-1 text-secondary font-normal" cite="https://x.com/">
                "The templates and AI suggestions made everything effortless. I finally have a resume that feels
                professional."
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card three  */}
        <div
          className="absolute top-0 right-[275px] origin-center rotate-[-5deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
            <div className="flex items-center justify-center gap-x-3">
              <figure className="size-12 overflow-hidden rounded-full">
                <Image
                  src={avatar3}
                  alt="Profile photo of Katherine M., Sales Director"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div>
                <h3 className="text-secondary text-tagline-1 font-semibold">Katherine M.</h3>
                <p className="text-tagline-2">Sales Director</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Katherine M. on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                      fill="#12161F"
                    />
                  </svg>
                </Link>
              </div>
              <blockquote className="font-inter-tight text-tagline-1 text-secondary font-normal" cite="https://x.com/">
                "The AI feedback was spot on. It fixed what I couldn't see."
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card four  */}
        <div
          className="absolute top-[50px] right-0 origin-center rotate-[7deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
            <div className="flex items-center justify-center gap-x-3">
              <figure className="size-12 overflow-hidden rounded-full">
                <Image
                  src={avatar4}
                  alt="Profile photo of David R., Sr. Business Analyst"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div>
                <h3 className="text-secondary text-tagline-1 font-semibold">David R.</h3>
                <p className="text-tagline-2">Sr. Business Analyst</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow David R. on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                      fill="#12161F"
                    />
                  </svg>
                </Link>
              </div>
              <blockquote className="font-inter-tight text-tagline-1 text-secondary font-normal" cite="https://x.com/">
                "NestSaaS turned my generic resume into a powerful tool. I received 3 interview calls within two weeks!"
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card five  */}
        <div
          className="absolute right-[195px] bottom-[27px] origin-center rotate-[-7deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Joel G., Sr. IT Manager">
          <div className="border-stroke-1 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
            <div className="flex items-center justify-center gap-x-3">
              <figure className="size-12 overflow-hidden rounded-full">
                <Image
                  src={avatar5}
                  alt="Profile photo of Joel G., Sr. IT Manager"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div>
                <h3 className="text-secondary text-tagline-1 font-semibold">Joel G.</h3>
                <p className="text-tagline-2">Sr. IT Manager</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Joel G. on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                      fill="#12161F"
                    />
                  </svg>
                </Link>
              </div>
              <blockquote className="font-inter-tight text-tagline-1 text-secondary font-normal" cite="https://x.com/">
                "The AI suggestions made everything effortless. I finally have a resume that feels professional."
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card six  */}
        <div
          className="absolute bottom-[30px] left-[320px] origin-center rotate-[3deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:!z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
            <div className="flex items-center justify-center gap-x-3">
              <figure className="size-12 overflow-hidden rounded-full">
                <Image
                  src={avatar6}
                  alt="Profile photo of James D., Software Engineer"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div>
                <h3 className="text-secondary text-tagline-1 font-semibold">James D.</h3>
                <p className="text-tagline-2">Software Engineer</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow James D. on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                    <path
                      d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                      fill="#12161F"
                    />
                  </svg>
                </Link>
              </div>
              <blockquote className="font-inter-tight text-tagline-1 text-secondary font-normal" cite="https://x.com/">
                "From job hunting chaos to clarity this tool saved me time and helped me land my dream job."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

const TestimonialMobile = () => {
  return (
    <div className="block lg:hidden" aria-label="Customer testimonials">
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
        {testimonialsData.map((testimonial, index) => (
          <RevealAnimation key={testimonial.id} delay={0.2 + index * 0.1}>
            <div
              key={testimonial.id}
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.position}`}
              className="max-sm:w-full">
              <div className="border-stroke-1 flex w-full flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)] sm:w-[362px]">
                <div className="flex items-center justify-center gap-x-3">
                  <figure className="size-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={`Profile photo of ${testimonial.name}, ${testimonial.position}`}
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <h3 className="text-secondary text-tagline-1 font-semibold">{testimonial.name}</h3>
                    <p className="text-tagline-2">{testimonial.position}</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <TestimonialStar />
                    <Link
                      href={testimonial.xUrl}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Follow ${testimonial.name} on Twitter`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                        <path
                          d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                          fill="#12161F"
                        />
                      </svg>
                    </Link>
                  </div>
                  <blockquote
                    className="font-inter-tight text-tagline-1 text-secondary line-clamp-3 font-normal"
                    cite={testimonial.xUrl}>
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-12 md:py-16 lg:py-22 xl:py-28" aria-labelledby="testimonials-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <RevealAnimation delay={0.1}>
            <h2 id="testimonials-heading" className="text-center">
              What our users are saying
            </h2>
          </RevealAnimation>
          {/* testimonial cards Large Screen */}
          <TestimonialLarge />
          {/* testimonial cards Small Screen */}
          <TestimonialMobile />
        </div>
      </div>
    </section>
  );
};

Testimonial.displayName = 'Testimonial';
export default Testimonial;
