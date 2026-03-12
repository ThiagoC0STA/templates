import { IContactInformation, ISocialLinks } from '@/interface';
import Link from 'next/link';
import SocialLink from '../shared/SocialLink';

const ContactInformation = ({
  contactInformation,
  social,
}: {
  contactInformation: IContactInformation;
  social: ISocialLinks;
}) => {
  return (
    <div className="space-y-[22px] p-11">
      <div className="space-y-2">
        <h4 className="text-accent">Contact information</h4>
        <p>
          <Link href={`tel:${contactInformation?.phoneNumber || ''}`} className="text-accent/60">
            {contactInformation?.phoneNumber}
          </Link>
        </p>
        <p>
          <Link href={`mailto:${contactInformation?.email || ''}`} className="text-accent/60">
            {contactInformation?.email}
          </Link>
        </p>
      </div>
      {/*Social links*/}
      <SocialLink SocialLinks={social} />
    </div>
  );
};

export default ContactInformation;
