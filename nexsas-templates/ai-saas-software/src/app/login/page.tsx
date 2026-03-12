import Login from '@/src/components/auth/login';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Login - AI SaaS Software || Nexsas',
};

const page = () => {
  return <Login />;
};

export default page;
