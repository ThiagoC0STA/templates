import ServiceDetailsContent from '@/src/components/services/service-details-content';
import WhyUseSection from '@/src/components/services/why-use-section';
import CTA from '@/src/components/shared/cta';
import type { ServicePost } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const services = getMarkDownData<ServicePost>('src/data/services');
  return services?.map((s) => ({ slug: s?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = getMarkDownContent('src/data/services', slug);
    const title = (service?.data?.title as string) ?? 'Service';
    const description = (service?.data?.description as string) ?? undefined;
    return buildMetadata(`${title} - Services || Nexsas`, description, `/services/${slug}`);
  } catch {
    return buildMetadata(
      'Service Details - AI SaaS Software || Nexsas',
      undefined,
      `/services/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let service;
  try {
    service = getMarkDownContent('src/data/services', slug);
  } catch {
    notFound();
  }

  return (
    <>
      <ServiceDetailsContent service={service} />
      <WhyUseSection />
      <CTA />
    </>
  );
};

export default page;
