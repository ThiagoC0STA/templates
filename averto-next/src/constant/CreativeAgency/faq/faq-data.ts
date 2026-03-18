export interface IFaq {
  question: string;
  answer: string;
}

const faqData: IFaq[] = [
  {
    question: "What services does Averto offer you?",
    answer:
      "People know what an FAQ is, so make that your page title. Don’t over complicate things by calling it something else.",
  },
  {
    question: "How can I get started with Averto?",
    answer:
      "Start by contacting us through our website, and we’ll guide you step-by-step through the process.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we provide ongoing support packages tailored to your needs to ensure everything runs smoothly after launch.",
  },
];
export default faqData;
