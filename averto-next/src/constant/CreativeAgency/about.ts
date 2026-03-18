interface CounterItem {
  number: number;
  suffix: string;
  text: string;
}
export interface AboutData {
  subtitle: string;
  title: string;
  buttonLink: string;
  buttonText: string;
  counters: CounterItem[];
}

const about:AboutData = {
  subtitle: "( Since 2019 )",
  title:
    "Feux is where creativity meets latest technology for transformative results. As a next-generation Start-up agency",
  buttonLink: "/creative-agency/about",
  buttonText: "About Us",
  counters: [
    { number: 3, suffix: "+", text: "Years of experience" },
    { number: 40, suffix: "+", text: "Satisfied clients" },
    { number: 100, suffix: "+", text: "Projects delivered" },
  ],
};

export default about;