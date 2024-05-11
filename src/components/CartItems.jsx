import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { CartContext } from "../context/Context";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  // console.log(cart);
  const handleDecrement = () => {
    setCount(count > 1 ? count - 1 : 0);
  };
  const handleIncreament = () => {
    setCount(count + 1);
  };
  return (
    <div className="mx-12">
      <p className="text-3xl text-center font-semibold mb-2 mt-2">CHECKOUT</p>
      <div className="absolute flex justify-start items-center text-4xl translate-x-[760px] translate-y-[20px] ">
        <CiSquareMinus onClick={handleDecrement} className="cursor-pointer" />
        <p className="text-2xl text-black/70">{count}</p>
        <CiSquarePlus onClick={handleIncreament} className="cursor-pointer" />
        <p className="text-lg pl-2 tracking-wide">Quantity</p>
      </div>
      <div className=" grid grid-cols-3">
        <div className="col-span-2  shadow-lg py-4  flex justify-around ">
          <img
            src={cart.image}
            alt="Image"
            className="w-[290px] h-[290px] border-1 shadow-2xl"
          />
          <div className=" -translate-x-[100px] space-y-2">
            <p className="text-xl font-semibold tracking-wide uppercase">
              {cart.title.slice(0, 28)}
            </p>
            <p className=" text-black/80 tracking-wide">Shirt BLue</p>
            <p className=" text-black/80 tracking-wide">Colour: Blue</p>
            <p className=" text-black/70 tracking-wide">Size: XL</p>
            <p className="text-black/70 tracking-wide">Price: Rs{cart.price}</p>
            <div className="flex justify-start gap-2  uppercase items-center pt-4 text-xl text-black/80">
              <p>
                <MdDelete className="text-2xl text-gray-800 cursor-pointer" />
              </p>{" "}
              <p> Remove Item </p>
              <p className="text-2xl font-semibold ml-[120px]">
                ₹ {cart.price}
              </p>
            </div>
          </div>
        </div>

        <div className="ml-2  py-4 px-2">
          <p className="text-2xl font-semibold uppercase text-left pb-4 ">
            Total Amount
          </p>
          <p className="text-black/60 text-lg">
            Product amount:{" "}
            <span className="ml-[200px] space-y-4"> ₹ {cart.price}</span>
          </p>
          <p className="text-black/60 text-lg">
            Shipping charge{" "}
            <span className="ml-[200px] space-y-4">₹ {cart.price}</span>{" "}
          </p>
          <hr className="w-[450px] my-4 border-black/20 shadow-lg border border-t-1" />
          <p className="text-black/70 text-lg">
            The total amount is{" "}
            <span className="ml-[180px]">₹ {cart.price} </span>
          </p>
          <p className="text-lg pt-10 text-black/90">Expected delivery date </p>
          <p className="text-lg pt-2 text-black/60">
            10-July-2024 - 20-July-2024{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
