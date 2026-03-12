'use client';

import RevealAnimation from '@/src/components/animation/reveal-animation';
import { BadgeDefault } from '@/src/components/shared/ui/badge';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import BuiltInDeveloperTool from './built-in-developer-tool';
import BuiltInDeveloperToolV2 from './built-in-developer-tool-v2';
import CodeGenerationSupport from './code-generation-support';
import CustomIntegrations from './custom-integrations';
import GitTask from './git-task';

export const Capabilities = () => {
  return (
    <section className="py-13 md:py-24 lg:py-28 xl:py-36 2xl:py-44">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <BadgeDefault text="Developer-friendly capabilities" />
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="font-manrope text-manrope-heading-4 text-background-13/90 md:text-manrope-heading-3 lg:text-manrope-heading-2 font-medium max-md:leading-[1.2]">
              Built for developers{' '}
              <span className="font-instrument-serif text-background-13/50 italic">
                Ready <br className="hidden md:block" />
                for anything.
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              From custom APIs to code generation, Nexsas equips developers with
              <br className="hidden md:block" />
              the tools to build, automate, and scale faster.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          {/* Custom APIs / Built-in developer tools */}
          <RevealAnimation delay={0.1}>
            <BuiltInDeveloperTool />
          </RevealAnimation>

          {/* API access for custom integrations */}
          <RevealAnimation delay={0.2}>
            <CustomIntegrations />
          </RevealAnimation>

          {/* Automate git tasks */}
          <RevealAnimation delay={0.3}>
            <GitTask />
          </RevealAnimation>

          {/* Build faster with AI: JSON card + Code generation support */}
          <RevealAnimation delay={0.3}>
            <CodeGenerationSupport />
          </RevealAnimation>

          {/* Built-in developer tools (large card) */}
          <RevealAnimation delay={0.4}>
            <BuiltInDeveloperToolV2 />
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <LinkPrimary href="/features">Browse developer docs</LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
