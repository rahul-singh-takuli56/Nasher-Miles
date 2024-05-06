import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/980_AB_GIF_Wave04_SP_TopBanner_Unrec_1242x450.jpg",
    "https://m.media-amazon.com/images/S/aplus-media/sc/a65c3643-0e8b-4f37-9199-cf81db7d3c3c.__CR0,0,970,300_PT0_SX970_V1___.jpg",
    "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/10/amazon-sale-amazon-pay-1665411918.jpg",
    "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/d/AmazonStores/A21TJRUUN4KGV/c8f3fcef4f826d04f0f13129cdcd60c4.w3000.h1500.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <FaAngleLeft
        className="absolute left-0 top-[50%] bg-white text-black/70 hover:scale-125 duration-200 hover:bg-slate-110 border border-white rounded-full text-3xl py-1 mx-4"
        onClick={prevSlide}
      />
      <FaAngleRight
        className="absolute right-0 top-[50%] bg-white text-black/70 hover:scale-125 duration-200 hover:bg-slate-110 border border-white rounded-full text-3xl py-1 mx-4"
        onClick={nextSlide}
      />

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image${index}`}
          className={`mx-auto w-[1500px] h-[650px]  ${
            index === currentIndex ? "block" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default Banner;
