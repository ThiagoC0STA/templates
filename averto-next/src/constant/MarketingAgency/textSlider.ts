export interface ITextSlide {
  id: number;
  text: string;
  href: string;
  img: string;
}

export interface TextSliderData {
  slides: ITextSlide[];
}


const textSliderData:TextSliderData = {
  slides: [
    {
      id: 1,
      text: "LET’S CONNECT",
      href: "/marketing-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 2,
      text: "LET’S CONNECT",
      href: "/marketing-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 3,
      text: "LET’S CONNECT",
      href: "/marketing-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 4,
      text: "LET’S CONNECT",
      href: "/marketing-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
    {
      id: 5,
      text: "LET’S CONNECT",
      href: "/marketing-agency/contact",
      img: "/assets/imgs/shape/shape-10.webp",
    },
  ],
};

export default textSliderData;
