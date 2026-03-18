import RevealAnimation from '../animation/RevealAnimation';
import ServiceCardOne from './ServiceCardOne';
import ServiceCardThree from './ServiceCardThree';
import ServiceCardTwo from './ServiceCardTwo';

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 space-y-14 overflow-hidden py-14 md:space-y-20 md:py-20 xl:space-y-[100px] xl:py-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[650px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mt-4 mb-3">In-depth overview of cryptocurrency solutions</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              An in-depth overview of cryptocurrency solutions reveals a rapidly evolving ecosystem designed to
              revolutionize traditional financial systems.
            </p>
          </RevealAnimation>
        </div>
      </div>

      <ServiceCardOne />

      <ServiceCardTwo />

      <ServiceCardThree />
    </section>
  );
};

export default Services;
