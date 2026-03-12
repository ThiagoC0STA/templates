import CTA from '@/src/components/shared/cta';
import DetailsContent from '@/src/components/use-case/details-content';
import HowItWorks from '@/src/components/use-case/how-it-works';
import type { UseCasePost } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const useCases = getMarkDownData<UseCasePost>('src/data/use-cases');
  return useCases?.map((u) => ({ slug: u?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const useCase = getMarkDownContent('src/data/use-cases', slug);
    const title = (useCase?.data?.title as string) ?? 'Use Case';
    const description = (useCase?.data?.description as string) ?? undefined;
    return buildMetadata(`${title} - Use Case || Nexsas`, description, `/use-case/${slug}`);
  } catch {
    return buildMetadata(
      'Use Case Details - AI SaaS Software || Nexsas',
      undefined,
      `/use-case/${slug}`
    );
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let useCase;
  try {
    useCase = getMarkDownContent('src/data/use-cases', slug);
  } catch {
    notFound();
  }

  return (
    <>
      <DetailsContent useCase={useCase} />
      <HowItWorks />
      <CTA />
    </>
  );
};

export default page;
