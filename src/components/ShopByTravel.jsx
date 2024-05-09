import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const ShopByTravel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: "https://www.jaisuntourism.com/images/domestic-family.jpg",
      alt: "Domestic  Holiday",
    },
    {
      id: 2,
      url: "https://st.depositphotos.com/1001001/3958/i/450/depositphotos_39582193-stock-photo-family-vacation-portrait.jpg",
      alt: "Family Holiday",
    },
    {
      id: 3,
      url: "https://images.healthshots.com/healthshots/en/uploads/2022/09/07225829/family-vacation-1600x900.jpg",
      alt: "International Holiday",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/564x/a7/37/88/a73788f13c150ab87f38cd2a82c08c9d.jpg",
      alt: " University",
    },
    {
      id: 5,
      url: "https://s3-us-east-2.amazonaws.com/orbitz-media/blog/wp-content/uploads/2018/01/15174545/work-trip-into-vacation.jpg",
      alt: "Work Trip",
    },
    {
      id: 6,
      url: "https://st.depositphotos.com/1001001/3958/i/450/depositphotos_39582193-stock-photo-family-vacation-portrait.jpg",
      alt: "Family Holiday",
    },
    {
      id: 7,
      url: "https://images.healthshots.com/healthshots/en/uploads/2022/09/07225829/family-vacation-1600x900.jpg",
      alt: "International Holiday",
    },
    {
      id: 8,
      url: "https://i.pinimg.com/564x/a7/37/88/a73788f13c150ab87f38cd2a82c08c9d.jpg",
      alt: " University",
    },
  ];

  const handleleft = () => {
    setcurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const handleRight = () => {
    setcurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const startIndex = currentIndex;
  const endIndex = Math.min(startIndex + 4, images.length);

  return (
    <div>
      <p className="text-center lg:text-3xl text-xl font-semibold lg:pt-[80px] pt-[10px] lg:pb-10 pb-4">
        Shop By Travel Type
      </p>
      <div className="flex justify-between text-center ">
        <CiCircleChevLeft
          onClick={handleleft}
          className=" lg:translate-y-[190px] translate-y-[60px] lg:translate-x-[120px] lg:text-[50px] text-[34px]  text-white hover:bg-white lg:hover:scale-110 duration-1000 rounded-full hover:text-black"
        />
        <CiCircleChevRight
          onClick={handleRight}
          className=" lg:translate-y-[190px] translate-y-[60px]  lg:-translate-x-[130px]  lg:text-[50px] text-[30px]  text-white hover:bg-white lg:hover:scale-110 duration-1000 transition-all rounded-full hover:text-black"
        />
      </div>
      <div className="flex justify-center text-center">
        {images.slice(startIndex, endIndex).map((item) => (
          <div key={item.id} className="">
            <img
              src={item.url}
              alt={item.alt}
              className="lg:h-[300px] h-[70px] lg:w-[300px] w-[60px] lg:mx-3 mx-1 rounded-lg"
            />
            <p className="lg:text-xl text-xs font-semibold tracking-wide lg:py-4 py-2 ">
              {item.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByTravel;
