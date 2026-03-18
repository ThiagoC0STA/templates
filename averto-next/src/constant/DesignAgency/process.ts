export interface ISteps {
  number: string;
  title: string;
  items: string[];
}
export interface ProcessData {
  subtitle: string;
  title: string;
  steps: ISteps[];
}

const processData: ProcessData = {
  subtitle: "WORK PROCESS",
  title: "Our approach is to create",
  steps: [
    {
      number: "001",
      title: "Discover",
      items: ["UX Research", "Competitive Analysis", "Define Flow"],
    },
    {
      number: "002",
      title: "Concept & Design",
      items: ["Idea gathering & sketch", "Wireframes", "UI Design"],
    },
    {
      number: "003",
      title: "Execution",
      items: ["Quality assurance", "Launch Product", "Maintenance"],
    },
  ],
};

export default processData;
