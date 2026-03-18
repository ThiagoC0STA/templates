
export interface IFeature {
    id:number;
    img:string;
    title:string;
    text:string;
}

export interface IChooseUs {
    subtitle:string;
    title:string;
    image:string;
    features: IFeature[];
}

const chooseUsData:IChooseUs = {
  subtitle: "Why Choose Us",
  title: "We give you the best solutions",
  image: "/assets/imgs/gallery/image-20.webp",
  features: [
    {
      id: 1,
      img: "/assets/imgs/shape/shape-37.webp",
      title: "Proven Marketing",
      text: "We offer you a comprehensive range of digital marketing services designed to help your business thrive."
    },
    {
      id: 2,
      img: "/assets/imgs/shape/shape-38.webp",
      title: "Brand Strategy",
      text: "We offer you a comprehensive range of digital marketing services designed to help your business thrive."
    },
    {
      id: 3,
      img: "/assets/imgs/shape/shape-39.webp",
      title: "Winning Design",
      text: "We offer you a comprehensive range of digital marketing services designed to help your business thrive."
    }
  ]
};

export default chooseUsData;