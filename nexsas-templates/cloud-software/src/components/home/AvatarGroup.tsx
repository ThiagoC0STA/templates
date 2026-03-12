import avatar1Image from '@public/images/ns-avatar-1.png';
import avatar2Image from '@public/images/ns-avatar-2.png';
import avatar3Image from '@public/images/ns-avatar-3.png';

import { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Avatar from '../ui/avatar/Avatar';

const avatarData = [
  {
    type: 'image',
    src: avatar1Image,
    alt: 'User avatar 1',
  },
  {
    type: 'image',
    src: avatar2Image,
    alt: 'User avatar 2',
  },
  {
    type: 'image',
    src: avatar3Image,
    alt: 'User avatar 3',
  },
  {
    type: 'count',
    content: '99+',
  },
];

const AvatarGroup = () => {
  return (
    <div className="avatar-group-images flex items-center gap-4 max-lg:justify-center">
      {/* avatar  */}

      <div className="flex -space-x-3.5">
        {avatarData.map((item, idx) => (
          <RevealAnimation key={idx} delay={0.7 + idx * 0.1} direction="right" offset={50}>
            {item.type === 'image' ? (
              <Avatar key={idx} alt={item.alt as string} src={item.src as StaticImageData} />
            ) : (
              <div className="dark:ring-stroke-7 text-secondary/80 bg-background-2 dark:bg-background-5 text-tagline-3 dark:text-accent/80 inline-flex size-12 items-center justify-center rounded-full font-medium ring-2 ring-white">
                {item.content}
              </div>
            )}
          </RevealAnimation>
        ))}
      </div>

      <RevealAnimation delay={1.1} direction="left" offset={50}>
        <div className="opacity-0">
          <p className="text-tagline-2 text-secondary dark:text-accent leading-[140%] font-medium">Trusted by 20k+</p>
          <p className="text-tagline-3">Customers Across the Globe</p>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default AvatarGroup;
