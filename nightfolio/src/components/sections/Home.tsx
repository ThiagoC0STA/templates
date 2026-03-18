import Home2 from "../common/home/variants/Home2";
import Home1 from "../common/home/variants/Home1";
import Home3 from "../common/home/variants/Home3";
import { home_option } from "@/data/config";

const Home = () => {
  return home_option === "home-1" ? (
    <Home1 />
  ) : home_option === "home-2" ? (
    <Home2 />
  ) : (
    <Home3 />
  );
};

export default Home;
