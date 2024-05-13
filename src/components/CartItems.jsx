import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { CartContext } from "../context/Context";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    setCount(count > 1 ? count - 1 : 0);
  };
  const handleIncreament = () => {
    setCount(count + 1);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="mx-12 font-serif">
      <div>
        <p className="text-3xl text-center  font-serif mb-2 my-2 mr-[500px] shadow-lg">
          Total Items <span>({cart.length})</span>
        </p>
      </div>

      {cart.map((item) => (
        <div key={item.id} className="grid grid-cols-3">
          <div className="col-span-2  shadow-lg py-4  flex justify-around ">
            <img
              src={item.image}
              alt="Image"
              className="w-[260px] h-[260px] border-1 shadow-2xl"
            />
            <div className="pl-4 shadow-xl">
              <p className="text-xl text-orange-600 font-semibold tracking-wide uppercase w-[500px]">
                {item.title}
              </p>
              <p className=" text-black/80 tracking-wide">Shirt BLue</p>
              <p className=" text-black/80 tracking-wide">Colour: Blue</p>
              <p className=" text-black/70 tracking-wide">Size: XL</p>
              <p className="text-black/70 tracking-wide">
                Price: Rs{item.price}
              </p>
              <div className="flex justify-start gap-2  uppercase items-center pt-10 text-xl text-black/80">
                <p>
                  <MdDelete className="text-2xl text-gray-800 cursor-pointer" />
                </p>{" "}
                <p> Remove Item </p>
                <p className="text-2xl font-semibold ml-[120px]">
                  ₹ {item.price}
                </p>
                <div className=" flex justify-start items-center text-4xl -translate-x-[100px] -translate-y-[120px] ">
                  <CiSquareMinus
                    onClick={handleDecrement}
                    className="cursor-pointer"
                  />
                  <p className="text-2xl text-black/70">{count}</p>
                  <CiSquarePlus
                    onClick={handleIncreament}
                    className="cursor-pointer"
                  />
                  <p className="text-lg pl-2 tracking-wide">Quantity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="sticky translate-x-[955px] -translate-y-[580px] ml-2 py-4 px-2 w-[500px] bg-white shadow-lg min-h-xl">
        <p className="text-2xl font-semibold uppercase text-left pb-4 ">
          Total Amount
        </p>
        <p className="text-black/60 text-lg">
          Product amount:{" "}
          <span className="ml-[200px] space-y-4"> ₹ {totalAmount}</span>
        </p>
        <p className="text-black/60 text-lg">
          Shipping charge{" "}
          <span className="ml-[200px] space-y-4">₹ {totalAmount}</span>{" "}
        </p>
        <hr className="w-[450px] my-4 border-black/20 shadow-lg border border-t-1" />
        <p className="text-black/70 text-lg">
          The total amount is{" "}
          <span className="ml-[180px]">₹ {totalAmount} </span>
        </p>
        <p className="text-lg pt-10 text-black/90">Expected delivery date </p>
        <p className="text-lg pt-2 text-black/60">
          10-July-2024 - 20-July-2024{" "}
        </p>
      </div>
    </div>
  );
};

export default CartItems;
