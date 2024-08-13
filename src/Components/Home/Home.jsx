import Hero from "../Home/Hero/Hero";
import Banner from "./Banner/Banner";
import Caption from "./Caption/Caption";
import ServicesList from "./Service/List";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesList />
      <Banner />
      {/* <AboutHome /> */}
      <Caption />
    </>
  );
};

export default Home;
