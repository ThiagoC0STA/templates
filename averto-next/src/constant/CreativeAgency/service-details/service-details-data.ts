export interface IServiceDetails {
  sectionHeader: {
    subtitle: string;
    title: string;
  };
  video: {
    src: string;
    type: string;
  };
  content: {
    title: string;
    paragraphs: string[];
  };
}

const serviceDetailsData: IServiceDetails = {
  sectionHeader: {
    subtitle: "Solution Approach",
    title: "We give you the best of solutions",
  },
  video: {
    src: "/videos/Business_People.mp4",
    type: "video/mp4",
  },
  content: {
    title: "We Design Solution",
    paragraphs: [
      "Our creative team brings your brand to life with innovative design concepts. We bring the designs to life with development",
      "Our creative team brings your brand to life with innovative design concepts. We bring the designs to life with development",
    ],
  },
};

export default serviceDetailsData;
