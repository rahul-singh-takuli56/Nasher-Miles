import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import jsonData from "../../public/data.json";
import FilterItems from "../Sidebar/FilterItems";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="grid lg:grid-cols-5 grid-cols-3 lg:pt-10 pt-2 lg:pb-4 pb-2 bg-white/10">
      <FilterItems />
      <div className="lg:col-span-4 col-span-2 grid lg:grid-cols-3 space-y-8">
        {data.map((item) => (
          <Link
            to={`/productlist/${item.id}`}
            key={item.id}
            className="border-2 cursor-pointer border-black/10 lg:shadow-lg shadow-md lg:m-4   rounded-md lg:p-4 p-3 "
          >
            <img
              src={item.image}
              alt="image"
              className="mx-auto lg:w-[200px] h-[230px] hover:scale-110 transition-all duration-1000 hover:rotate-2 "
            />
            <FaHeart className="lg:text-3xl text-xl lg:translate-x-[315px] translate-x-[270px] lg:-translate-y-[230px] -translate-y-[230px] hover:text-red-500 font-bold" />
            <p className="text-yellow-700 font-bold pt-4">
              {item.title.slice(0, 36)}
            </p>
            <p className="text-black font-semibold">
              Price: ₹{" "}
              <span className="text-sm text-black/70 font-normal">
                {item.price}
              </span>
            </p>
            <div className="flex justify-start text-center gap-2">
              <p className="text-black font-semibold">
                Rating:{" "}
                <span className="text-sm text-black/70 font-normal ">
                  {item.rating.rate}
                </span>
              </p>
              <div className=" flex items-center justify-start">
                <FaStar className="text-xl text-yellow-500" />
                <FaStar className="text-xl text-yellow-500" />
                <FaStar className="text-xl text-yellow-500" />
              </div>
              <p>({item.rating.count})</p>
            </div>
            <p className="text-black font-semibold">
              Description:
              <span className="text-black/70 font-normal line-clamp-2">
                {item.description}
              </span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
