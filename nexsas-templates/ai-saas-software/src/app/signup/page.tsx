import SignUp from '@/src/components/auth/sign-up';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sign Up - AI SaaS Software || Nexsas',
};

const page = () => {
  return <SignUp />;
};

export default page;
