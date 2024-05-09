import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import data from "../../public/data.json";

const ShopByColor = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [showIcons, setshowIcons] = useState(true);

  const images = [
    {
      id: 1,
      url: "https://www.jiomart.com/images/product/original/rvgugdzlim/nasher-miles-pink-polypropylene-bruges-hard-sided-trolley-bag-1-pc-65cm-product-images-orvgugdzlim-p590988639-0-202201061830.jpg?im=Resize=(420,420)",
      alt: "Peach",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PqipH6udDh0tFyeELHtTF3En12e5cGoIZhFnWzSHnA&s",
      alt: "Pink",
    },
    {
      id: 3,
      url: "https://assets.ajio.com/medias/sys_master/root/20220630/zOBw/62bdb82bf997dd03e2ac1ebf/-473Wx593H-410314625-purple-MODEL.jpg",
      alt: "Purple",
    },
    {
      id: 4,
      url: "https://assets.ajio.com/medias/sys_master/root/20230618/TmQJ/648efec5d55b7d0c6372d20d/-473Wx593H-466239762-green-MODEL.jpg",
      alt: "Green",
    },
    {
      id: 5,
      url: "https://m.media-amazon.com/images/I/61uDrX7cXvL._SL1500_.jpg",
      alt: "Blue",
    },
    {
      id: 6,
      url: "https://5.imimg.com/data5/SELLER/Default/2024/1/374480724/FW/KF/TH/25291671/4-wheel-luggage-trolley-bag-500x500.jpg",
      alt: "Yellow",
    },
    {
      id: 7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9jikRKuOizwI_g-G3LEnktSCDpL15MPMB_g4T02Ckw&s",
      alt: "Black",
    },
    {
      id: 8,
      url: "https://assets.ajio.com/medias/sys_master/root/20231113/H5kE/6552254cafa4cf41f5845c7b/-473Wx593H-466788491-white-MODEL3.jpg",
      alt: "White",
    },
    {
      id: 9,
      url: "https://5.imimg.com/data5/NG/ML/GN/SELLER-81203496/20-brown-premium-fabric-cabin-luggage-suitcase-trolley-bag-51-cms--500x500.jpg",
      alt: "brown",
    },
    {
      id: 10,
      url: "https://target.scene7.com/is/image/Target/GUEST_a3c7d087-4d2d-45ba-aaaa-967f5d065be3",
      alt: "Orange",
    },
    {
      id: 11,
      url: "https://m.media-amazon.com/images/I/61uDrX7cXvL._SL1500_.jpg",
      alt: "Blue",
    },
    {
      id: 12,
      url: "https://5.imimg.com/data5/SELLER/Default/2024/1/374480724/FW/KF/TH/25291671/4-wheel-luggage-trolley-bag-500x500.jpg",
      alt: "Yellow",
    },
    {
      id: 13,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9jikRKuOizwI_g-G3LEnktSCDpL15MPMB_g4T02Ckw&s",
      alt: "Black",
    },
  ];

  const handleLeft = () => {
    setcurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleRight = () => {
    setcurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + 7, images.length);

  return (
    <div className="lg:ml-14 ml-1 ">
      <p className="lg:text-3xl text-xl font-semibold text-center lg:my-14 mt-4 ">
        Shop By Colour
      </p>
      <div className="flex justify-between text-center">
        <CiCircleChevLeft
          onClick={handleLeft}
          className="lg:translate-y-[140px] translate-y-[60px] lg:translate-x-[30px]  lg:text-[50px] text-[30px] text-black hover:bg-white lg:hover:scale-110 duration-1000 rounded-full hover:text-black "
        />
        {showIcons && currentIndex !== images.length - 1 && (
          <CiCircleChevRight
            onClick={handleRight}
            className="lg:translate-y-[140px] translate-y-[60px] lg:-translate-x-[90px]  lg:text-[50px] text-[30px] text-black hover:bg-white lg:hover:scale-110 duration-1000 transition-all rounded-full hover:text-black"
          />
        )}
      </div>

      <div className="flex justify-start items-center lg:ml-16  ">
        {data.slice(startIndex, endIndex).map((item) => (
          <Link to={`/productlist/${item.id}`} key={item.id}>
            <img
              src={item.imagebyColor.url}
              alt={item.imagebyColor.colour}
              className="lg:w-[180px] w-[60px] lg:h-[200px] h-[75px]"
            />
            <p className="lg:text-xl text-xs lg:font-semibold lg:py-2 pt-1 pb-3 text-center">
              {item.imagebyColor.colour}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByColor;
