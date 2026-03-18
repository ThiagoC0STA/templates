export interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

export interface TextSliderData {
  items: ITextSlide[];
}
const textSliderData: TextSliderData = {
  items: [
    {
      id: 1,
      text: `Elevate your brand with design-driven solutions`,
      suffix: `Empowering brands through intelligent creativity`,
    },
    {
      id: 2,
      text: `Transform brand success with design-powered strategies`,
      suffix: `Redefining success through innovative design`,
    },
    {
      id: 3,
      text: `Design. Impact. Innovation.`,
      suffix: `Building the next big thing`,
    },
    {
      id: 4,
      text: `Smarter design through design-infused creativity`,
      suffix: `Fueling brand success`,
    },
    {
      id: 5,
      text: `Elevate your brand with design-driven solutions`,
      suffix: `Empowering brands through intelligent creativity`,
    },
    {
      id: 6,
      text: `Transform brand success with design-powered strategies`,
      suffix: `Redefining success through innovative design`,
    },
    {
      id: 7,
      text: `Design. Impact. Innovation.`,
      suffix: `Building the next big thing`,
    },
    {
      id: 8,
      text: `Smarter design through design-infused creativity`,
      suffix: `Fueling brand success`,
    },
  ],
};

export default textSliderData;
