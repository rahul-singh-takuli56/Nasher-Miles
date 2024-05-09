import About from "../components/About";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import ShopByCategory from "../components/ShopByCategory";
import ShopByColor from "../components/ShopByColor";
import ShopByTravel from "../components/ShopByTravel";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <ShopByCategory />
      <ShopByColor />
      <ShopByTravel />
      <Featured />
      <About />
      <Testimonial />
    </div>
  );
};

export default Home;
