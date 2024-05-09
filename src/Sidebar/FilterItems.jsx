import { HiOutlineMinus } from "react-icons/hi2";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

const FilterItems = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  const handleAvailable = () => {
    setIsAvailable((prev) => !prev);
  };

  return (
    <div className="hidden lg:block pt-2 pl-4 pr-10">
      <div className="hidden lg:block col-span-1 pb-8  ">
        <p className="text-4xl font-semibold tracking-wide ">Luggage sets</p>
      </div>
      <div className="relative flex items-center justify-between  hover:cursor-pointer py-4">
        <p className="text-xl tracking-widest ">Availability</p>

        {isAvailable ? (
          <HiOutlineMinus
            onClick={handleAvailable}
            className="text-2xl translate-y-[5px]  "
          />
        ) : (
          <GoPlus
            onClick={handleAvailable}
            className="text-2xl translate-y-[5px]"
          />
        )}

        {isAvailable && (
          <div className="absolute translate-x-[10px] translate-y-[50px] ">
            <div className="flex center items-center">
              <input type="checkbox" />
              <p className="px-2"> In Stocks</p>
            </div>
            <div className="flex justify-start items-center">
              <input type="checkbox" />
              <p className="px-2"> Out of Stocks </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between  hover:cursor-pointer py-4">
        <p className="text-xl tracking-widest ">Size</p>

        <GoPlus className="text-2xl translate-y-[5px] " />
      </div>
      <div className="flex items-center justify-between  hover:cursor-pointer py-4">
        <p className="text-xl tracking-widest ">Price</p>
        <GoPlus className="text-2xl translate-y-[5px] " />
      </div>
      <div className="flex items-center justify-between  hover:cursor-pointer py-4">
        <p className="text-xl tracking-widest ">Colour</p>
        <GoPlus className="text-2xl translate-y-[5px] " />
      </div>
      <div className="flex items-center justify-between  hover:cursor-pointer py-4">
        <p className="text-xl tracking-widest ">Material</p>
        <GoPlus className="text-2xl translate-y-[5px] " />
      </div>
    </div>
  );
};

export default FilterItems;
