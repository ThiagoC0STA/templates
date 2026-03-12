import RevealAnimation from '@/components/animation/RevealAnimation';
import teamImage546 from '@public/images/ns-img-546.png';
import teamImage547 from '@public/images/ns-img-547.png';
import teamImage548 from '@public/images/ns-img-548.png';
import teamImage549 from '@public/images/ns-img-549.png';
import teamImage550 from '@public/images/ns-img-550.png';
import teamImage551 from '@public/images/ns-img-551.png';
import { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import FeatureImgCard from './FeatureImgCard';

interface TeamItem {
  id: string;
  title: string;
  imageSrc: StaticImageData;
  className?: string;
}

const teamItems: TeamItem[] = [
  {
    id: 'e-learning',
    title: 'E-learning',
    imageSrc: teamImage551,
    className: 'ml-6',
  },
  {
    id: 'podcasts',
    title: 'Podcasts',
    imageSrc: teamImage546,
  },
  {
    id: 'ads-marketing',
    title: 'Ads & marketing',
    imageSrc: teamImage547,
  },
  {
    id: 'enterprise-training',
    title: 'Enterprise training',
    imageSrc: teamImage548,
  },
  {
    id: 'storytelling',
    title: 'Storytelling',
    imageSrc: teamImage549,
  },
  {
    id: 'gaming-animation',
    title: 'Gaming & animation',
    imageSrc: teamImage550,
  },
];

const FeaturesV2 = () => {
  return (
    <section
      className="space-y-[76px] overflow-hidden py-[80px] md:py-[120px] lg:py-[154px]"
      aria-labelledby="team-heading"
      itemScope
      itemType="https://schema.org/ItemList">
      <div className="main-container">
        {/* content  */}
        <div className="space-y-3 text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <h2 id="team-heading" className="mx-auto max-w-[500px] font-normal lg:mx-0" itemProp="name">
              Tailored for every <span className="text-ns-linen">creator </span>and
              <span className="text-ns-linen">team</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-tagline-1 mx-auto max-w-[538px] font-normal lg:mx-0" itemProp="description">
              Whether you're building a course, podcast, ad, or enterprise solution NextSaaS adapts to your needs.
            </p>
          </RevealAnimation>
        </div>
      </div>

      {/* marquee  */}
      <RevealAnimation delay={0.3}>
        <div className="relative" aria-label="Voice styles for creators and teams">
          <Marquee autoFill speed={50}>
            <div className="flex items-center justify-center gap-x-6">
              {teamItems.map((item) => (
                <FeatureImgCard key={item.id} {...item} />
              ))}
            </div>
          </Marquee>

          <div
            className="absolute top-0 left-0 z-10 h-[110%] w-[120px] rotate-180 md:w-[180px] lg:w-[300px] xl:w-[426px]"
            style={{ background: 'linear-gradient(270deg, #ffffff 16.67%, rgba(244, 239, 231, 0) 100%)' }}
          />

          <div
            className="absolute top-0 right-0 z-10 h-[110%] w-[120px] md:w-[180px] lg:w-[300px] xl:w-[426px]"
            style={{ background: 'linear-gradient(270deg, #ffffff 16.67%, rgba(244, 239, 231, 0) 100%)' }}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default FeaturesV2;
