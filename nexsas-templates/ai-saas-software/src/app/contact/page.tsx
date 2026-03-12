import ContactUs from '@/src/components/contact/contact';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact - AI SaaS Software || Nexsas',
};

const page = () => {
  return <ContactUs />;
};

export default page;
