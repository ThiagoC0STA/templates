'use client';
import Link from 'next/link';
import { SubmitSecondary } from '../../ui/button';

const FooterForm = () => {
  return (
    <div className="space-y-3 text-center lg:text-left">
      <form
        className="flex flex-col items-center gap-2 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full sm:w-auto">
          <input
            type="email"
            required
            aria-label="Enter your email"
            placeholder="Enter your email"
            className="border-stroke-3/30 bg-background-4 placeholder:text-background-8 placeholder:text-tagline-2 text-background-8 text-tagline-2 block h-10 w-full max-w-full rounded-md border px-4 py-2 font-normal placeholder:font-normal focus:outline-none sm:min-w-[255px]"
          />
        </div>
        <SubmitSecondary type="submit" className="max-h-10! px-6! py-[9px]! max-md:w-full">
          Subscribe
        </SubmitSecondary>
      </form>
      <p className="text-tagline-4 font-normal text-white/60">
        By subscribing you agree to with our{' '}
        <Link href="#" className="font-medium text-white hover:underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default FooterForm;
