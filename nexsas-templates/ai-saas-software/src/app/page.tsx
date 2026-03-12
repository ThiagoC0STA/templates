import type { BlogPost, UseCasePost } from '@/src/interface';
import { generateMetadata } from '@/src/utils/generateMetaData';
import getMarkDownData from '@/src/utils/getMarkDownData';
import parseUseCaseDate from '@/src/utils/parseUseCaseDate';
import { Metadata } from 'next';
import { About } from '../components/home/about';
import Blog from '../components/home/blog';
import { Capabilities } from '../components/home/capabilities';
import { Clients } from '../components/home/clients';
import { CoreFeatures } from '../components/home/core-features';
import { Hero } from '../components/home/hero';
import { HowItWork } from '../components/home/how-it-work';
import Integration from '../components/home/integration';
import Pricing from '../components/home/pricing';
import { Services } from '../components/home/services';
import Team from '../components/home/team';
import Testimonial from '../components/home/testimonial';
import UseCase from '../components/home/use-case';
import CTA from '../components/shared/cta';

export const metadata: Metadata = {
  ...generateMetadata(),
  title: 'AI SaaS Software || Nexsas',
};

const page = () => {
  const allPosts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate');
  const blogPosts = allPosts.filter((post) => post.showHomepage === true);
  const allUseCases = getMarkDownData<UseCasePost>('src/data/use-cases');
  const useCases = allUseCases
    .filter((u) => u.showHomepage === true)
    .toSorted((a, b) => parseUseCaseDate(b.completionDate) - parseUseCaseDate(a.completionDate))
    .slice(0, 6);

  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <About />
      <CoreFeatures />
      <Capabilities />
      <UseCase useCases={useCases} />
      <HowItWork />
      <Testimonial />
      <Pricing />
      <Blog posts={blogPosts} />
      <Integration />
      <Team />
      <CTA />
    </>
  );
};

export default page;
