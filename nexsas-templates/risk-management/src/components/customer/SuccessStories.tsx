import { ICustomer } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import ShowCards from './ShowCards';
const customersData = getMarkDownData<ICustomer & { [key: string]: unknown }>('src/data/customer/');

const SuccessStories = () => {
  return <ShowCards storiesData={customersData} />;
};

SuccessStories.displayName = 'SuccessStories';
export default SuccessStories;
