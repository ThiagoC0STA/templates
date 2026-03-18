import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureCards = [
  {
    id: 1,
    shape: 'ns-shape-9',
    title: 'Real-time sales tracking',
    description:
      'Easily monitor your transactions and revenue from anywhere, ensuring you stay updated on your financial performance while on the move.',
  },
  {
    id: 2,
    shape: 'ns-shape-3',
    title: 'Smart inventory management',
    description:
      'Effortlessly track your stock levels and leverage AI-driven insights to automate the reordering process, keeping your inventory optimized.',
  },
  {
    id: 3,
    shape: 'ns-shape-12',
    title: 'Integrated payment processing',
    description:
      'Securely accept a variety of payment methods, making transactions smooth and hassle-free for your customers.',
  },
  {
    id: 4,
    shape: 'ns-shape-2',
    title: 'Cloud-based reporting',
    description:
      'Gain access to comprehensive reports at any time and from any location, empowering you to make informed decisions.',
  },
  {
    id: 5,
    shape: 'ns-shape-7',
    title: 'Multi-location support',
    description:
      'Enjoy seamless management of operations across multiple locations, ensuring consistency and efficiency in your business.',
  },
];

const Services = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-[100px]">
      <div className="mx-5 max-w-full space-y-14 min-[425px]:max-w-[380px] min-[475px]:max-w-[450px] sm:mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        <div className="bg-secondary relative overflow-hidden rounded-4xl bg-cover bg-bottom px-2 py-8 min-[425px]:bg-[url('/images/ns-img-242.png')] min-[425px]:py-[60px] sm:px-0 lg:py-[100px]">
          <div className="mb-[70px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Empowering your next leap with smart</span>
            </RevealAnimation>
            <div className="mx-1 space-y-3 sm:mx-0">
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto max-w-[400px] text-white sm:max-w-[500px] lg:max-w-[602px]">
                  Designed for Growth-Oriented Businesses
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60">Your Complete Retail Management System</p>
              </RevealAnimation>
            </div>
          </div>
          <div className="grid grid-cols-12 justify-center gap-y-6 px-5 sm:px-10 lg:gap-6 lg:px-[74px] xl:gap-8">
            {featureCards.map((item, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                <div
                  className={cn(
                    item.id === 4 ? 'xl:col-start-3' : 'xl:col-start-auto',
                    'col-span-12 flex lg:col-span-4 xl:col-span-4',
                  )}>
                  <div className="flex min-h-[200px] flex-1 flex-col items-center space-y-4 rounded-[20px] bg-white/15 p-6 text-center backdrop-blur-[25px] sm:space-y-6 md:p-8">
                    <div className="mx-auto">
                      <span className={`${item.shape} text-accent text-[40px] sm:text-[52px]`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="sm:text-heading-5 text-heading-6 text-accent">{item.title}</h3>
                      <p className="text-accent/60">{item.description}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <div className="text-center">
          <RevealAnimation delay={0.9}>
            <LinkButton
              href="/contact-us"
              className="btn md:btn-xl btn-lg dark:hover:btn-accent btn-primary hover:btn-secondary mx-auto w-[90%] md:mx-0 md:w-auto">
              Get a Free Demo
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
