import RevealAnimation from '../animation/RevealAnimation';

const SimpleCheckIcon = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
      stroke=""
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-secondary dark:stroke-accent"
    />
  </svg>
);

export default function AboutFeaturesList() {
  const features = [{ label: 'On demand support' }, { label: 'Information Sharing' }, { label: 'Cloud Technology' }];

  return (
    <ul className="mb-14 flex list-none gap-6 max-sm:flex-col sm:items-center">
      {features.map((item, idx) => (
        <RevealAnimation key={item.label} delay={0.4 + idx * 0.1}>
          <li className="flex items-center justify-center gap-2 sm:justify-start">
            <SimpleCheckIcon />
            <span className="text-secondary dark:text-accent text-tagline-1 font-medium">{item.label}</span>
          </li>
        </RevealAnimation>
      ))}
    </ul>
  );
}
