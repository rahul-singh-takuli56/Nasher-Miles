import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const images = [
    {
      id: 1,
      url: "https://assets.ajio.com/medias/sys_master/root/20230428/ZQit/644b717542f9e729d7570592/-473Wx593H-465384234-black-MODEL3.jpg",
      alt: "Luggage Sets",
    },
    {
      id: 2,
      url: "https://www.jiomart.com/images/product/original/rvw7ugtrar/nasher-miles-red-polyester-texas-expander-soft-sided-trolley-bag-1-pc-65-cm-product-images-orvw7ugtrar-p590948965-4-202201171547.jpg?im=Resize=(1000,1000)",
      alt: "Soft Side",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/medias/sys_master/root/20230428/vuUc/644b718242f9e729d7570750/-473Wx593H-465415570-pink-MODEL3.jpg",
      alt: "HardSide",
    },
    {
      id: 4,
      url: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/26796904/2024/2/29/dd7525e4-a83b-48ec-98c8-8fefc0511ae81709196100380-VIP-Corsa-Strolly-55-360-Textured-Cabin-Trolley-Suitcase-297-1.jpg",
      alt: " Backpacks",
    },
    {
      id: 5,
      url: "https://img.freepik.com/free-photo/suitcase-with-wheels-outdoors_23-2151043218.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714521600&semt=ais",
      alt: "Business",
    },
    {
      id: 6,
      url: "https://m.media-amazon.com/images/I/71zu2E1ikwL._AC_UY1100_DpWeblab_.jpg",
      alt: "Kids",
    },
  ];

  return (
    <div>
      <p className="text-3xl font-semibold  text-center mb-6 lg:mb-14 lg:mt-24 mt-6">
        Shop By Category
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:mx-10 mx-2 ">
        {images.map((item) => (
          <div key={item.id}>
            <Link to="/productList">
              <img
                src={item.url}
                alt={item.alt}
                className="w-[200px] lg:w-[380px] lg:h-[450px] h-[190px]  rounded-xl mx-auto  lg:hover:scale-110 duration-1000 transition-all"
              />
            </Link>
            <p className="lg:text-xl text-center font-semibold  my-2 lg:my-6 tracking-wide">
              {item.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
