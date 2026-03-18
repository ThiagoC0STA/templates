import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Solutions = () => {
  const solutionsData = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(0, 3);
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[80px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-[35px] md:space-y-[70px]">
          {/* heading  */}
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2>All-in-one wealth management</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Manage your money with guidance that evolves with your goals.</p>
            </RevealAnimation>
          </div>
          <div className="space-y-14">
            {/* cards  */}
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
              {solutionsData.map((solution, index) => (
                <RevealAnimation key={solution.id} delay={0.4 + index * 0.1}>
                  <div className="dark:bg-background-8 w-full max-w-[405px] space-y-6 rounded-[20px] bg-white p-8">
                    <span className={`${solution.icon} text-secondary dark:text-accent inline-block text-[52px]`} />
                    <div className="space-y-2">
                      <h3 className="text-heading-5">{solution.title}</h3>
                      <p className="line-clamp-3 w-full max-w-[275px]">{solution.description}</p>
                    </div>
                    <div>
                      <LinkButton
                        href={`/services/${solution.slug}`}
                        className="btn btn-white hover:btn-primary btn-md dark:btn-transparent">
                        View more
                      </LinkButton>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            {/* btn  */}
            <RevealAnimation delay={0.8}>
              <div className="flex justify-center text-center">
                <LinkButton
                  href="/services"
                  className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent w-[85%] md:w-auto">
                  View all solutions
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
