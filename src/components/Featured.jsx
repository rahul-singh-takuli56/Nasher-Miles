import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import data from "../../public/data.json";
import { Link } from "react-router-dom";

const Featured = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: "https://www.jiomart.com/images/product/original/rvgugdzlim/nasher-miles-pink-polypropylene-bruges-hard-sided-trolley-bag-1-pc-65cm-product-images-orvgugdzlim-p590988639-0-202201061830.jpg?im=Resize=(420,420)",
      alt: "Peach",
      city: "New York",
      priceRange: "$50 - $100",
      priceOff: "25%",
      color: "Pink",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PqipH6udDh0tFyeELHtTF3En12e5cGoIZhFnWzSHnA&s",
      alt: "Pink",
      city: "Los Angeles",
      priceRange: "$80 - $120",
      priceOff: "15%",
      color: "Pink",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/medias/sys_master/root/20220630/zOBw/62bdb82bf997dd03e2ac1ebf/-473Wx593H-410314625-purple-MODEL.jpg",
      alt: "Purple",
      city: "London",
      priceRange: "$70 - $110",
      priceOff: "20%",
      color: "Purple",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/medias/sys_master/root/20230618/TmQJ/648efec5d55b7d0c6372d20d/-473Wx593H-466239762-green-MODEL.jpg",
      alt: "Green",
      city: "Paris",
      priceRange: "$90 - $150",
      priceOff: "10%",
      color: "Green",
    },
    {
      id: 5,
      url: "https://m.media-amazon.com/images/I/61uDrX7cXvL._SL1500_.jpg",
      alt: "Blue",
      city: "Tokyo",
      priceRange: "$100 - $200",
      priceOff: "30%",
      color: "Blue",
    },
    {
      id: 6,
      url: "https://5.imimg.com/data5/SELLER/Default/2024/1/374480724/FW/KF/TH/25291671/4-wheel-luggage-trolley-bag-500x500.jpg",
      alt: "Yellow",
      city: "Sydney",
      priceRange: "$120 - $180",
      priceOff: "5%",
      color: "Yellow",
    },
    {
      id: 7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9jikRKuOizwI_g-G3LEnktSCDpL15MPMB_g4T02Ckw&s",
      alt: "Black",
      city: "Berlin",
      priceRange: "$60 - $100",
      priceOff: "18%",
      color: "Black",
    },
    {
      id: 8,
      url: "https://assets.ajio.com/medias/sys_master/root/20231113/H5kE/6552254cafa4cf41f5845c7b/-473Wx593H-466788491-white-MODEL3.jpg",
      alt: "White",
      city: "Madrid",
      priceRange: "$80 - $130",
      priceOff: "22%",
      color: "White",
    },
    {
      id: 9,
      url: "https://5.imimg.com/data5/NG/ML/GN/SELLER-81203496/20-brown-premium-fabric-cabin-luggage-suitcase-trolley-bag-51-cms--500x500.jpg",
      alt: "Brown",
      city: "Rome",
      priceRange: "$110 - $160",
      priceOff: "12%",
      color: "Brown",
    },
    {
      id: 10,
      url: "https://target.scene7.com/is/image/Target/GUEST_a3c7d087-4d2d-45ba-aaaa-967f5d065be3",
      alt: "Orange",
      city: "Toronto",
      priceRange: "$70 - $120",
      priceOff: "8%",
      color: "Orange",
    },
    {
      id: 11,
      url: "https://m.media-amazon.com/images/I/61uDrX7cXvL._SL1500_.jpg",
      alt: "Blue",
      city: "Seoul",
      priceRange: "$90 - $140",
      priceOff: "17%",
      color: "Blue",
    },
    {
      id: 12,
      url: "https://5.imimg.com/data5/SELLER/Default/2024/1/374480724/FW/KF/TH/25291671/4-wheel-luggage-trolley-bag-500x500.jpg",
      alt: "Yellow",
      city: "Moscow",
      priceRange: "$100 - $150",
      priceOff: "25%",
      color: "Yellow",
    },
    {
      id: 13,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9jikRKuOizwI_g-G3LEnktSCDpL15MPMB_g4T02Ckw&s",
      alt: "Black",
      city: "Athens",
      priceRange: "$80 - $130",
      priceOff: "20%",
      color: "Black",
    },
  ];

  const handleleft = () => {
    setcurrentIndex(currentIndex === 0 ? images.length : currentIndex - 1);
  };
  const handleRight = () => {
    setcurrentIndex(currentIndex === images.length ? 0 : currentIndex + 1);
  };

  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + 2, images.length);

  return (
    <>
      <p className="lg:text-4xl text-2xl font-semibold text-center tracking-wide lg:my-4 my-2">
        Featured
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:py-10 py-4 lg:mx-[70px] ml-4">
        <div className="">
          <img
            src="https://nashermiles.com/cdn/shop/files/3_ca3de46d-f68c-4dc2-93bf-167096187a08_2048x2048.jpg?v=1710223897"
            alt="image"
            className="lg:h-[547px] h-[300px]  lg:w-[421px] w-[300px] rounded-xl "
          />
          <p className="text-xl text-white translate-x-[30px] -translate-y-[530px]">
            8 PRODUCT
          </p>
          <Link to={"/productlist"}>
            <button className="bg-white text-black hover:bg-slate-200 -translate-y-[100px] translate-x-[15px] py-2 px-6   rounded-md font-semibold">
              View all
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-between lg:gap-4 gap-4 col-span-2 lg:ml-10 mr-2 lg:h-[550px] py-10 lg:py-1 ">
          {data.slice(startIndex, endIndex).map((item) => (
            <Link to={`/productlist/${item.id}`} key={item.id}>
              <img
                src={item.image}
                alt={item.category}
                className="lg:h-[470px] h-[160px] lg:w-[421px] w-[170px] border  rounded-lg lg:mt-8 shadow-lg shadow-gray-500 lg:hover:scale-105 duration-1000"
              />
              <p className="hidden lg:block lg:text-3xl text-xs">
                <FaHeart className="-translate-y-[460px] translate-x-[370px] hover:text-red-500 font-bold" />
              </p>
              <div className="flex items-center justify-normal">
                <p className="items-center lg:text-xl lg:py-0 py-2 text-xs lg:text-[13px] lg:font-semibold">
                  {item.category}
                </p>
                <p>⭐⭐⭐</p>
              </div>
              <div className="flex items-center justify-normal text-xs lg:text-[13px]">
                <p className="lg:text-xl text-black/70 text-xs lg:font-serif pr-1 lg:pr-0">
                  From- Rs {item.price} onwards
                </p>
                <p className="lg:ml-4 bg-red-500 text-xs lg:text-[13px] text-white lg:rounded-md rounded-sm lg:px-3 lg:py-2 py-1 ">
                  40% off
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-center ">
        <FaChevronCircleLeft
          onClick={handleleft}
          className=" lg:-translate-y-[420px] -translate-y-[250px] lg:translate-x-[540px] translate-x-[15px]  lg:text-[45px] text-[30px]  hover:bg-black hover:scale-110 duration-700 rounded-full hover:text-white"
        />
        <FaChevronCircleRight
          onClick={handleRight}
          className="lg:-translate-y-[420px] -translate-y-[250px] lg:-translate-x-[50px]  -translate-x-[15px] lg:text-[45px] text-[30px]  hover:bg-black hover:scale-110 duration-700 transition-all rounded-full hover:text-white"
        />
      </div>
    </>
  );
};

export default Featured;
