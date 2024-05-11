import { Link, useParams } from "react-router-dom";
import data from "../../public/data.json";
import { FaCircle } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { useContext, useState } from "react";
import { CartContext } from "../context/Context";

const SingleProduct = () => {
  const { cart, setCart, addToCart } = useContext(CartContext);
  // console.log(useContext(CartContext));
  // console.log(cart);

  const [count, setCount] = useState(1);
  const [cartAdded, setCartAdded] = useState(true);

  const { productId } = useParams();

  const product = data.find((item) => {
    return item.id == productId;
  });

  const handleDecrement = () => {
    setCount(count > 1 ? count - 1 : 0);
  };
  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleAddtoCart = () => {
    console.log("Adding to cart:", product);
    setCartAdded(!cartAdded);
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      updatedCart[existingItemIndex].quantity += count;
    } else {
      // Otherwise, add the product to the cart with the selected quantity
      updatedCart.push({ ...product, quantity: count });
    }

    console.log("Updated Cart:", updatedCart);
    setCart(updatedCart);
  };

  // console.log(cart);

  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-3">
        <div className="col-span-2 grid grid-cols-2 pr-20 pl-14 mt-10">
          {product.childrenImages.map((item, index) => (
            <div key={index} className="">
              <img
                src={item}
                alt="image"
                className="w-[369px] h-[369px] my-4 rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 -translate-x-[60px]">
          <p className="text-sm">Home/ Luggage/ The Line</p>
          <p className="text-3xl font-semibold mt-6 tracking-wide">
            {product.title}
          </p>
          <p className="text-lg font-semibold mt-6 tracking-wide">
            CATEGORY:{" "}
            <span className="text-black/60"> {product.category} </span>
          </p>
          <div className="flex justify-normal text-center mt-3">
            <p className="text-lg font-semibold translate-y-[5px]">
              PRICE: <span className="text-black/60">Rs {product.price} </span>
            </p>
            <p className="bg-red-500 text-white py-1 ml-3 px-3 rounded-md">
              75% off
            </p>
          </div>
          <div className="border rounded-md text-black/80 border-black mr-2 p-2 mt-10">
            3 monthly payments of ₹1033 withSnapmint logo UPI & Cards Accepted,
            Online approval in 2 minutesSnapmint EC button
          </div>
          <div className="pt-10 ">
            <span className="font-semibold text-lg">
              DESCRIPTION: <br />
            </span>{" "}
            <span className="text-black/80 ">{product.description}</span>
          </div>
          <div className="flex justify-start text-center gap-8 mt-6 text-rose-600 font-semibold text-xl">
            <p> {product.rating.rate} ⭐⭐⭐⭐ </p>
            <p>({product.rating.count}) rating</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold text-black/80 ">COLOUR</p>
            <div className="flex justify-start items-center  gap-4 text-3xl mt-2">
              <FaCircle className="text-yellow-500 hover:cursor-pointer" />
              <FaCircle className="text-red-500 hover:cursor-pointer" />
              <FaCircle className="text-green-500 hover:cursor-pointer" />
              <FaCircle className="text-pink-500 hover:cursor-pointer" />
              <FaCircle className="text-purple-500 hover:cursor-pointer" />
              <FaCircle className="text-teal-500 hover:cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-start items-center text-4xl my-4">
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
          <div className="flex justify-start items-center gap-16 mt-8">
            {cartAdded ? (
              <button
                onClick={handleAddtoCart}
                className="bg-[#bf9f65] text-xl py-2 px-8 w-[190px] text-white rounded-md"
              >
                ADD TO CART
              </button>
            ) : (
              <button
                onClick={handleAddtoCart}
                className="bg-red-500 text-xl py-2 px-8 w-[190px] text-white rounded-md"
              >
                Remove
              </button>
            )}

            <button className="bg-[#bf9f65] text-xl py-2 px-8 W-[200px] text-white rounded-md">
              CHECKOUT
            </button>
          </div>
          <div className="mt-8 flex">
            <FaTruckMoving className="text-5xl" />
            <p className="translate-y-3 ml-1 font-semibold">DELIVERY OPTION</p>
          </div>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Enter your zipcode"
              className="bg-gray-200 h-10 py-2 pr-6 pl-1 rounded-sm border border-black placeholder:text-black/70"
            />
            <span className="border border-black py-2 ml-2 h-10 bg-gray-200 hover:bg-blue-100 px-6 cursor-pointer">
              Check
            </span>
          </div>
          <div className="mt-10 py-2 text-black/80 ">
            <p className="font-semibold text-lg pb-2">RETURNS & WARRANTY</p>
            <p>
              Lifetime Warranty: Our limited lifetime warranty covers cracks on
              body shell under normal use. However, please note that scratches
              are not included in the warranty coverage. Warranty on accessories
              such as wheels, handles and lock will be applicable for 1 year
              from the date of purchase.
            </p>
            <p>
              Free returns within 7 Days:{" "}
              <span className="underline cursor-pointer">
                {" "}
                Read more about our Return Policy{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
