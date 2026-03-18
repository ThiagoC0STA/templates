import RevealAnimation from '@/components/animation/RevealAnimation';
import avatar1 from '@public/images/ns-avatar-15.png';
import avatar6 from '@public/images/ns-avatar-16.png';
import avatar2 from '@public/images/ns-avatar-17.png';
import avatar3 from '@public/images/ns-avatar-21.png';
import avatar4 from '@public/images/ns-avatar-22.png';
import avatar5 from '@public/images/ns-avatar-23.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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

const TestimonialStar = () => {
  return (
    <span className="flex items-center justify-start gap-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-[12px]" viewBox="0 0 16 17" fill="none">
        <g clipPath="url(#clip0_3794_1164)">
          <path
            d="M7.25672 1.39741C7.53172 0.749041 8.46832 0.749042 8.74332 1.39741L10.3663 5.22417C10.4823 5.4975 10.7445 5.68426 11.0454 5.70792L15.2582 6.03912C15.9719 6.09524 16.2614 6.96876 15.7175 7.42559L12.5079 10.1218C12.2786 10.3144 12.1784 10.6167 12.2485 10.9046L13.2291 14.936C13.3952 15.6191 12.6375 16.159 12.0264 15.793L8.41965 13.6325C8.16202 13.4782 7.83802 13.4782 7.5804 13.6325L3.9736 15.793C3.3625 16.159 2.60477 15.6191 2.77091 14.936L3.75155 10.9046C3.82159 10.6167 3.72147 10.3144 3.49221 10.1218L0.28245 7.42559C-0.261375 6.96876 0.0280544 6.09524 0.741835 6.03912L4.9547 5.70792C5.25561 5.68426 5.51774 5.4975 5.63367 5.22417L7.25672 1.39741Z"
            fill="#864FFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_3794_1164">
            <rect width={16} height={16} fill="white" transform="translate(0 0.911133)" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-[12px]" viewBox="0 0 16 17" fill="none">
        <g clipPath="url(#clip0_3794_1164)">
          <path
            d="M7.25672 1.39741C7.53172 0.749041 8.46832 0.749042 8.74332 1.39741L10.3663 5.22417C10.4823 5.4975 10.7445 5.68426 11.0454 5.70792L15.2582 6.03912C15.9719 6.09524 16.2614 6.96876 15.7175 7.42559L12.5079 10.1218C12.2786 10.3144 12.1784 10.6167 12.2485 10.9046L13.2291 14.936C13.3952 15.6191 12.6375 16.159 12.0264 15.793L8.41965 13.6325C8.16202 13.4782 7.83802 13.4782 7.5804 13.6325L3.9736 15.793C3.3625 16.159 2.60477 15.6191 2.77091 14.936L3.75155 10.9046C3.82159 10.6167 3.72147 10.3144 3.49221 10.1218L0.28245 7.42559C-0.261375 6.96876 0.0280544 6.09524 0.741835 6.03912L4.9547 5.70792C5.25561 5.68426 5.51774 5.4975 5.63367 5.22417L7.25672 1.39741Z"
            fill="#864FFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_3794_1164">
            <rect width={16} height={16} fill="white" transform="translate(0 0.911133)" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-[12px]" viewBox="0 0 16 17" fill="none">
        <g clipPath="url(#clip0_3794_1164)">
          <path
            d="M7.25672 1.39741C7.53172 0.749041 8.46832 0.749042 8.74332 1.39741L10.3663 5.22417C10.4823 5.4975 10.7445 5.68426 11.0454 5.70792L15.2582 6.03912C15.9719 6.09524 16.2614 6.96876 15.7175 7.42559L12.5079 10.1218C12.2786 10.3144 12.1784 10.6167 12.2485 10.9046L13.2291 14.936C13.3952 15.6191 12.6375 16.159 12.0264 15.793L8.41965 13.6325C8.16202 13.4782 7.83802 13.4782 7.5804 13.6325L3.9736 15.793C3.3625 16.159 2.60477 15.6191 2.77091 14.936L3.75155 10.9046C3.82159 10.6167 3.72147 10.3144 3.49221 10.1218L0.28245 7.42559C-0.261375 6.96876 0.0280544 6.09524 0.741835 6.03912L4.9547 5.70792C5.25561 5.68426 5.51774 5.4975 5.63367 5.22417L7.25672 1.39741Z"
            fill="#864FFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_3794_1164">
            <rect width={16} height={16} fill="white" transform="translate(0 0.911133)" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-[12px]" viewBox="0 0 16 17" fill="none">
        <g clipPath="url(#clip0_3794_1164)">
          <path
            d="M7.25672 1.39741C7.53172 0.749041 8.46832 0.749042 8.74332 1.39741L10.3663 5.22417C10.4823 5.4975 10.7445 5.68426 11.0454 5.70792L15.2582 6.03912C15.9719 6.09524 16.2614 6.96876 15.7175 7.42559L12.5079 10.1218C12.2786 10.3144 12.1784 10.6167 12.2485 10.9046L13.2291 14.936C13.3952 15.6191 12.6375 16.159 12.0264 15.793L8.41965 13.6325C8.16202 13.4782 7.83802 13.4782 7.5804 13.6325L3.9736 15.793C3.3625 16.159 2.60477 15.6191 2.77091 14.936L3.75155 10.9046C3.82159 10.6167 3.72147 10.3144 3.49221 10.1218L0.28245 7.42559C-0.261375 6.96876 0.0280544 6.09524 0.741835 6.03912L4.9547 5.70792C5.25561 5.68426 5.51774 5.4975 5.63367 5.22417L7.25672 1.39741Z"
            fill="#864FFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_3794_1164">
            <rect width={16} height={16} fill="white" transform="translate(0 0.911133)" />
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-[12px]" viewBox="0 0 16 17" fill="none">
        <g clipPath="url(#clip0_3794_1164)">
          <path
            d="M7.25672 1.39741C7.53172 0.749041 8.46832 0.749042 8.74332 1.39741L10.3663 5.22417C10.4823 5.4975 10.7445 5.68426 11.0454 5.70792L15.2582 6.03912C15.9719 6.09524 16.2614 6.96876 15.7175 7.42559L12.5079 10.1218C12.2786 10.3144 12.1784 10.6167 12.2485 10.9046L13.2291 14.936C13.3952 15.6191 12.6375 16.159 12.0264 15.793L8.41965 13.6325C8.16202 13.4782 7.83802 13.4782 7.5804 13.6325L3.9736 15.793C3.3625 16.159 2.60477 15.6191 2.77091 14.936L3.75155 10.9046C3.82159 10.6167 3.72147 10.3144 3.49221 10.1218L0.28245 7.42559C-0.261375 6.96876 0.0280544 6.09524 0.741835 6.03912L4.9547 5.70792C5.25561 5.68426 5.51774 5.4975 5.63367 5.22417L7.25672 1.39741Z"
            fill="#864FFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_3794_1164">
            <rect width={16} height={16} fill="white" transform="translate(0 0.911133)" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

const TestimonialLarge = () => {
  return (
    <RevealAnimation delay={0.2}>
      <div className="relative hidden h-[462px] lg:block" aria-label="Customer testimonials">
        {/* testimonial card one  */}
        <div
          className="absolute top-[27px] origin-center rotate-[-14deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 dark:bg-background-6 dark:border-stroke-7 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
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
                <h3 className="text-secondary text-tagline-1 dark:text-accent font-semibold">Nora F.</h3>
                <p className="text-tagline-2">Architect</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Nora F. on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-secondary dark:fill-accent">
                    <path d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z" />
                  </svg>
                </Link>
              </div>
              <blockquote
                className="font-inter-tight text-tagline-1 text-secondary dark:text-accent font-normal"
                cite="https://x.com/">
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
          <div className="border-stroke-1 dark:bg-background-6 dark:border-stroke-7 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
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
                <h3 className="text-secondary text-tagline-1 dark:text-accent font-semibold">Nora F.</h3>
                <p className="text-tagline-2">Architect</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Nora F. on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-secondary dark:fill-accent">
                    <path d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z" />
                  </svg>
                </Link>
              </div>
              <blockquote
                className="font-inter-tight text-tagline-1 text-secondary dark:text-accent font-normal"
                cite="https://x.com/">
                &quot;The templates and AI suggestions made everything effortless. I finally have a resume that feels
                professional.&quot;
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card three  */}
        <div
          className="absolute top-0 right-[275px] origin-center rotate-[-5deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 dark:bg-background-6 dark:border-stroke-7 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
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
                <h3 className="text-secondary text-tagline-1 dark:text-accent font-semibold">Katherine M.</h3>
                <p className="text-tagline-2">Sales Director</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Katherine M. on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-secondary dark:fill-accent">
                    <path d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z" />
                  </svg>
                </Link>
              </div>
              <blockquote
                className="font-inter-tight text-tagline-1 text-secondary dark:text-accent font-normal"
                cite="https://x.com/">
                &quot;The AI feedback was spot on. It fixed what I couldn&apos;t see.&quot;
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card four  */}
        <div
          className="absolute top-[50px] right-0 origin-center rotate-[7deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 dark:bg-background-6 dark:border-stroke-7 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
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
                <h3 className="text-secondary text-tagline-1 dark:text-accent font-semibold">David R.</h3>
                <p className="text-tagline-2">Sr. Business Analyst</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow David R. on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-secondary dark:fill-accent">
                    <path d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z" />
                  </svg>
                </Link>
              </div>
              <blockquote
                className="font-inter-tight text-tagline-1 text-secondary dark:text-accent font-normal"
                cite="https://x.com/">
                &quot;NestSaaS turned my generic resume into a powerful tool. I received 3 interview calls within two
                weeks!&quot;
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card five  */}
        <div
          className="absolute right-[195px] bottom-[27px] origin-center rotate-[-7deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Joel G., Sr. IT Manager">
          <div className="border-stroke-1 dark:bg-background-6 dark:border-stroke-7 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
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
                <h3 className="text-secondary text-tagline-1 dark:text-accent font-semibold">Joel G.</h3>
                <p className="text-tagline-2">Sr. IT Manager</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow Joel G. on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-secondary dark:fill-accent">
                    <path d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z" />
                  </svg>
                </Link>
              </div>
              <blockquote
                className="font-inter-tight text-tagline-1 text-secondary dark:text-accent font-normal"
                cite="https://x.com/">
                &quot;The AI suggestions made everything effortless. I finally have a resume that feels
                professional.&quot;
              </blockquote>
            </div>
          </div>
        </div>
        {/* testimonial card six  */}
        <div
          className="absolute bottom-[30px] left-[320px] origin-center rotate-[3deg] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:!z-8 hover:scale-105 hover:rotate-0"
          aria-label="Testimonial from Nora F., Architect">
          <div className="border-stroke-1 dark:bg-background-6 dark:border-stroke-7 flex w-[362px] flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)]">
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
                <h3 className="text-secondary text-tagline-1 dark:text-accent font-semibold">James D.</h3>
                <p className="text-tagline-2">Software Engineer</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <TestimonialStar />
                <Link href="https://x.com/" target="_blank" rel="noopener" aria-label="Follow James D. on Twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-secondary dark:fill-accent">
                    <path d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z" />
                  </svg>
                </Link>
              </div>
              <blockquote
                className="font-inter-tight text-tagline-1 text-secondary dark:text-accent font-normal"
                cite="https://x.com/">
                &quot;From job hunting chaos to clarity this tool saved me time and helped me land my dream job.&quot;
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
