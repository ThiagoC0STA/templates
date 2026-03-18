import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const AvatarGroup = () => {
  return (
    <div className="flex -space-x-3">
      <RevealAnimation delay={0.4}>
        <Image
          className="bg-ns-yellow inline-block size-9 rounded-full ring-2 ring-white dark:ring-black"
          src={avatar1}
          alt="Avatar 1"
        />
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <Image
          className="bg-ns-red inline-block size-9 rounded-full ring-2 ring-white dark:ring-black"
          src={avatar2}
          alt="Avatar 2"
        />
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <Image
          className="bg-ns-green inline-block size-9 rounded-full ring-2 ring-white dark:ring-black"
          src={avatar3}
          alt="Avatar 3"
        />
      </RevealAnimation>
      <RevealAnimation delay={0.7}>
        <div className="text-secondary/80 bg-ns-cyan text-tagline-3 inline-flex size-9 cursor-pointer items-center justify-center rounded-full font-medium ring-2 ring-white dark:ring-black">
          99+
        </div>
      </RevealAnimation>
    </div>
  );
};

export default AvatarGroup;
