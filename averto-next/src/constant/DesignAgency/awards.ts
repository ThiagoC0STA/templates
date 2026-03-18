export interface IAward {
  image: string;
  title: string;
  category: string;
  year: string;
}

export interface IGroup {
  title: string;
  awards: IAward[];
}

export interface AwardData {
  subtitle: string;
  title: string;
  groups: IGroup[];

}

const awardData: AwardData = {
  subtitle: "OUR ACHIEVEMENTS",
  title: "Awards and recognition",
  groups: [
    {
      title: "Awwwards Site",
      awards: [
        {
          image: "/assets/imgs/gallery/image-43.webp",
          title: "Design Studio",
          category: "Site of The Day",
          year: "February 2024",
        },
        {
          image: "/assets/imgs/gallery/image-11.webp",
          title: "Design Agency",
          category: "Site of The Month",
          year: "August 2023",
        },
      ],
    },
    {
      title: "Dribbble Site",
      awards: [
        {
          image: "/assets/imgs/gallery/image-44.webp",
          title: "UI/UX Design",
          category: "Best Designer",
          year: "October 2021",
        },
      ],
    },
  ],
};

export default awardData;
