import { useEffect, useState } from "react";
import jsonData from "../../public/data.json";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="grid grid-cols-5 pt-10">
      <div className="col-span-1">Filtering the Products</div>
      <div className="col-span-4 grid grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="border-2 border-black/10 shadow-lg m-4 rounded-md p-4"
          >
            <img
              src={item.image}
              alt="image"
              className="mx-auto w-[200px] h-[230px]"
            />
            <p className="text-yellow-700 font-bold pt-4">
              {item.title.slice(0, 36)}
            </p>
            <p className="text-black font-semibold">
              Price: ₹{" "}
              <span className="text-sm text-black/70 font-normal">
                {item.price}
              </span>
            </p>
            <p className="text-black font-semibold">
              Rating:{" "}
              <span className="text-sm text-black/70 font-normal">
                {" "}
                {item.rating.rate}⭐⭐⭐⭐
              </span>
            </p>
            <p className="text-black font-semibold">
              Description:
              <span className="text-black/70 font-normal">
                {item.description.slice(0, 58)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
