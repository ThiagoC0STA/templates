'use client';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { FacebookBrandIcon, GoogleIcon } from '@/src/components/shared/icon';
import SubmitButton from '@/src/components/shared/ui/button/submit-button';
import Link from 'next/link';

const SignUp = () => {
  return (
    <section className="pt-28 pb-39 md:pt-36 lg:pt-54">
      <div className="main-container">
        <div className="flex flex-col items-center gap-14 md:gap-18">
          <div className="space-y-1.5 text-center md:space-y-3">
            <RevealAnimation delay={0.1}>
              <h2 className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 font-normal tracking-[-2.4px] max-md:leading-[1.2]">
                Let&apos;s get started
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="font-inter-tight text-tagline-2 text-background-13/60 md:max-w-[350px]">
                Let&apos;s explore how Nexsas can support your goals with AI-driven solutions.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.1}>
            <div className="bg-background-8 w-full max-w-[413px] rounded-xl p-2">
              <form
                action="#"
                className="bg-background-7 flex flex-col items-center gap-8 rounded-lg px-8 py-6 backdrop-blur-[60px] md:px-8 md:py-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex w-full flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <fieldset className="space-y-2">
                      <label
                        htmlFor="signup-username"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="signup-username"
                        name="username"
                        placeholder="Your name"
                        className="border-stroke-3/25 focus-within:border-stroke-3/50 text-background-13/90 placeholder:text-background-13/60 w-full rounded-md border bg-transparent px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Username"
                      />
                    </fieldset>
                    <fieldset className="space-y-2">
                      <label
                        htmlFor="signup-email"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="signup-email"
                        name="email"
                        placeholder="Email address"
                        className="border-stroke-3/25 focus-within:border-stroke-3/50 text-background-13/90 placeholder:text-background-13/60 w-full rounded-md border bg-transparent px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Your email"
                      />
                    </fieldset>
                    <fieldset className="space-y-2">
                      <label
                        htmlFor="signup-password"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="signup-password"
                        name="password"
                        placeholder="At least 8 character"
                        className="border-stroke-3/25 focus-within:border-stroke-3/50 text-background-13/90 placeholder:text-background-13/60 w-full rounded-md border bg-transparent px-4.5 py-3 focus-within:outline-none"
                        required
                        minLength={8}
                        aria-label="Password"
                      />
                    </fieldset>
                    <fieldset className="space-y-2">
                      <label
                        htmlFor="signup-confirm-password"
                        className="font-inter-tight text-tagline-2 text-background-13/90 block"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="signup-confirm-password"
                        name="confirm-password"
                        placeholder="Re-enter your password"
                        className="border-stroke-3/25 focus-within:border-stroke-3/50 text-background-13/90 placeholder:text-background-13/60 w-full rounded-md border bg-transparent px-4.5 py-3 focus-within:outline-none"
                        required
                        aria-label="Confirm Password"
                      />
                    </fieldset>
                  </div>

                  <SubmitButton>Sign Up</SubmitButton>

                  <p className="font-inter-tight text-tagline-3 text-background-13/60 text-center">
                    Already have an account?{' '}
                    <Link
                      href="/login"
                      className="text-background-13/90 font-medium underline hover:no-underline"
                    >
                      Log in
                    </Link>
                  </p>

                  <div className="relative flex items-center justify-center gap-2">
                    <span className="block h-px w-[43px] shrink-0 bg-[linear-gradient(270deg,rgba(13,16,23,0.4)_0%,rgba(13,16,23,0)_79%)]" />
                    <span className="font-inter-tight text-tagline-4 text-background-13/90">
                      Or
                    </span>
                    <span className="block h-px w-[43px] shrink-0 bg-[linear-gradient(90deg,rgba(13,16,23,0.4)_0%,rgba(13,16,23,0)_79%)]" />
                  </div>

                  <div className="flex flex-col gap-6">
                    <Link
                      href="#"
                      className="border-stroke-3/25 hover:bg-stroke-3/25 flex w-full items-center justify-center gap-2 rounded-md border px-8 py-3 transition-colors duration-300"
                    >
                      <GoogleIcon />
                      <span className="font-inter-tight text-tagline-3 text-background-13/90">
                        Continue with Google
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="border-stroke-3/25 hover:bg-stroke-3/25 flex w-full items-center justify-center gap-2 rounded-md border px-8 py-3 transition-colors duration-300"
                    >
                      <FacebookBrandIcon />
                      <span className="font-inter-tight text-tagline-3 text-background-13/90">
                        Continue with Facebook
                      </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
