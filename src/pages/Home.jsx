import About from "../components/About";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
// import ProductList from "../components/ProductList";
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
      {/* <ProductList /> */}
    </div>
  );
};

export default Home;
