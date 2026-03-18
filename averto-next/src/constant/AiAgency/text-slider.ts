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
      text: `Where Artificial Intelligence Meets Bold Creativity`,
      suffix: `Empowering Brands Through Intelligent Design`,
    },
    {
      id: 2,
      text: `Innovating the Future with AI-Driven Solutions`,
      suffix: `Redefining User Experiences`,
    },
    {
      id: 3,
      text: `Intelligence. Impact. Innovation.`,
      suffix: `We Build the Next Big Thing`,
    },
    {
      id: 4,
      text: `Smarter Design Through Artificial Intelligence`,
      suffix: `Fueling Brand Transformation`,
    },
    {
      id: 5,
      text: `Where Artificial Intelligence Meets Bold Creativity`,
      suffix: `Empowering Brands Through Intelligent Design`,
    },
    {
      id: 6,
      text: `Innovating the Future with AI-Driven Solutions`,
      suffix: `Redefining User Experiences`,
    },
    {
      id: 7,
      text: `Intelligence. Impact. Innovation.`,
      suffix: `We Build the Next Big Thing`,
    },
    {
      id: 8,
      text: `Smarter Design Through Artificial Intelligence`,
      suffix: `Fueling Brand Transformation`,
    },
  ],
};

export default textSliderData;
