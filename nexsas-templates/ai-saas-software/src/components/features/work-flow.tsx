import workflowImage from '@/public/images/opai-img-139.jpg';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { LinkPrimary } from '@/src/components/shared/ui/button';
import Image from 'next/image';

const workflowData = [
  {
    title: 'For SaaS companies',
    items: [
      'AI-powered docs, release notes, and in-app copy',
      'Support and help content that stays on-brand',
      'Product and feature descriptions at scale',
    ],
  },
  {
    title: 'For marketing teams',
    items: [
      'Campaign copy, ads, and landing pages in minutes',
      'Social posts and email sequences that convert',
    ],
  },
  {
    title: 'For agencies & studios',
    items: [
      'Client briefs, proposals, and reports on demand',
      'Multi-brand content without doubling your team',
    ],
    hasImage: true,
  },
] as const;

const WorkFlow = () => {
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="main-container space-y-10 md:space-y-14">
        <div className="space-y-3 text-center md:pb-4">
          <RevealAnimation delay={0.1}>
            <h2 className="font-manrope text-manrope-heading-4 md:text-manrope-heading-3 lg:text-manrope-heading-2 text-background-13/90 font-medium max-md:leading-[1.2]">
              Features that fit{' '}
              <span className="font-instrument-serif text-background-13/30 italic">
                your workflow
              </span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="font-inter-tight text-tagline-2 text-background-13/60">
              Nexsas is designed to streamline your workflow and help you create content faster and
              smarter.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-8">
            {workflowData.slice(0, 2).map((block, i) => (
              <RevealAnimation key={block.title} delay={i === 0 ? 0.1 : 0.2}>
                <div className="bg-background-7 border-background-8 space-y-7 rounded-xl border-8 p-7 text-left lg:p-10.5">
                  <h3 className="font-inter-tight text-background-13/90 text-2xl">{block.title}</h3>
                  <ul className="space-y-1.5">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="font-inter-tight text-tagline-2 text-background-13/60 before:bg-background-13/60 relative pl-4 before:absolute before:top-1/2 before:left-0 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
          <RevealAnimation delay={0.3} direction="right">
            <div className="bg-background-7 border-background-8 space-y-7 rounded-xl border-8 p-7 text-left lg:p-10.5">
              <h3 className="font-inter-tight text-background-13/90 text-2xl">
                {workflowData[2].title}
              </h3>
              <ul className="space-y-1.5">
                {workflowData[2].items.map((item) => (
                  <li
                    key={item}
                    className="font-inter-tight text-tagline-2 text-background-13/60 before:bg-background-13/60 relative pl-4 before:absolute before:top-1/2 before:left-0 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']"
                  >
                    {item}
                  </li>
                ))}
                <li className="max-h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src={workflowImage}
                    alt="Feature Work Flow"
                    className="h-full w-full object-cover"
                  />
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.1}>
          <div className="flex items-center justify-center">
            <LinkPrimary href="/contact" className="inline-flex">
              Get a strategy call
            </LinkPrimary>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default WorkFlow;
