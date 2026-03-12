'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { useCallback, useState } from 'react';
import VoiceSampleItem from './VoiceSampleItem';

export interface VoiceSample {
  id: string;
  imgLink: string;
  name: string;
  description: string;
  audioPath: string;
}

const VoiceSamples = () => {
  const voiceSamples: VoiceSample[] = [
    {
      id: 'marie-curie',
      imgLink: '/images/ns-avatar-30.png',
      name: 'Marie Curie',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'rosalind-franklin',
      imgLink: '/images/ns-avatar-18.png',
      name: 'Rosalind Franklin',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'leonardo-da-vinci',
      imgLink: '/images/ns-avatar-37.png',
      name: 'Leonardo da Vinci',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'albert-einstein',
      imgLink: '/images/ns-avatar-36.png',
      name: 'Albert Einstein',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'isaac-newton',
      imgLink: '/images/ns-avatar-19.png',
      name: 'Isaac Newton',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'thomas-edison',
      imgLink: '/images/ns-avatar-34.png',
      name: 'Thomas Edison',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'ada-lovelace',
      imgLink: '/images/ns-avatar-33.png',
      name: 'Ada Lovelace',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'jane-goodall',
      imgLink: '/images/ns-avatar-31.png',
      name: 'Jane Goodall',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'charles-darwin',
      imgLink: '/images/ns-avatar-29.png',
      name: 'Charles Darwin',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'nikola-tesla',
      imgLink: '/images/ns-avatar-29.png',
      name: 'Nikola Tesla',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'stephen-hawking',
      imgLink: '/images/ns-avatar-38.png',
      name: 'Stephen Hawking',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
    {
      id: 'malala-yousafzai',
      imgLink: '/images/ns-avatar-28.png',
      name: 'Malala Yousafzai',
      description: 'Japanese Female – Calm & Intelligent',
      audioPath: '/audio/ai-voice-generator-voice-sample.mp3',
    },
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlayPause = useCallback((index: number) => {
    setPlayingIndex((currentIndex) => {
      if (currentIndex === index) {
        return null;
      }
      return index;
    });
  }, []);

  return (
    <section className="pt-[85px] pb-[100px] lg:pt-[112px] lg:pb-[200px]" aria-labelledby="voice-samples-heading">
      <div className="main-container">
        <div className="space-y-20">
          {/* content  */}
          <div className="space-y-5 text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory" aria-label="Voice Samples section badge">
                Voice Samples
              </span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 id="voice-samples-heading" className="font-normal">
                  Hear the <span className="text-ns-linen">difference</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary mx-auto max-w-[450px] lg:mx-0">
                  Browse our voice library and listen to realistic, expressive voices in different tones and accents.
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* samples collections  */}
          <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 lg:grid-cols-3">
            {voiceSamples.map((sample, index) => (
              <VoiceSampleItem
                key={sample.id}
                data={sample}
                index={index}
                isPlaying={playingIndex === index}
                onPlayPause={handlePlayPause}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceSamples;
