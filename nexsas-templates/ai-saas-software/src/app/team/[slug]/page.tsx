import CTA from '@/src/components/shared/cta';
import CoreValue from '@/src/components/team/core-value';
import TeamDetailsContent from '@/src/components/team/team-details-content';
import type { TeamMember } from '@/src/interface';
import { generateMetadata as buildMetadata } from '@/src/utils/generateMetaData';
import getMarkDownContent from '@/src/utils/getMarkDownContent';
import getMarkDownData from '@/src/utils/getMarkDownData';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const members = getMarkDownData<TeamMember>('src/data/team');
  return members?.map((m) => ({ slug: m?.slug })) ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const member = getMarkDownContent('src/data/team', slug);
    const name = (member?.data?.name as string) ?? 'Team';
    const role = (member?.data?.role as string) ?? undefined;
    const description = role ? `${role} at Nexsas` : undefined;
    return buildMetadata(`${name} - Team || Nexsas`, description, `/team/${slug}`);
  } catch {
    return buildMetadata('Team Details - AI SaaS Software || Nexsas', undefined, `/team/${slug}`);
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  let member;
  try {
    member = getMarkDownContent('src/data/team', slug);
  } catch {
    notFound();
  }

  return (
    <>
      <TeamDetailsContent member={member} />
      <CoreValue />
      <CTA />
    </>
  );
};

export default page;
