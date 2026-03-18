export interface ProcessStep {
  title: string;
  description: string;
  active: boolean;
}

export interface ProcessData {
  subtitle: string;
  title: string;
  videoUrl: string;
  steps: ProcessStep[];
}

const processData: ProcessData = {
  subtitle: "WORK PROCESS",
  title: "How Averto Innovate",
  videoUrl:"/videos/how_we_work.mp4",
  steps: [
    {
      title: "Discovery & Consultation",
      description:
        "We start by understanding your business needs, challenges, and goals. Our team collaborates with you to identify opportunities where AI can drive the most impact and gather all the necessary information to develop a tailored solution.",
      active: true,
    },
    {
      title: "Solution Design & Ideation",
      description:
        "We begin the ideation phase where we brainstorm and design solutions based on the information gathered. We present options and select the one that aligns best with your goals.",
      active: false,
    },
    {
      title: "Development & Integration",
      description:
        "We develop and integrate the AI-driven solution, ensuring it meets your specifications and delivers the intended business value. Our team supports you through deployment and ensures smooth integration.",
      active: false,
    },
  ],
};

export default processData;