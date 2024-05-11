import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgArrowsVAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[#bf9f65] h-[40px] ">
        <p className="pt-2.5 text-white uppercase text text-[12px] text-center font-bold lg:tracking-wide underline">
          SHOP ₹49999 get free bag | No question asked
        </p>
      </div>

      {/* navbar for larger devices  */}
      <div className="hidden lg:block sticky top-0 z-50 bg-white shadow-md ">
        <div className="flex justify-center text-center ml-12 mt-3 py-2 static">
          <p>
            <Link to="/">
              <img
                src="https://nashermiles.com/cdn/shop/files/cYqmqD-nashermiles_logo.png?v=1702885836&width=190"
                alt="image"
                className="translate-y-[6px] -translate-x-[50px]"
              />
            </Link>
          </p>

          <div className="h-[35px] flex items-center font-serif text-[16px] uppercase justify-center gap-[50px] ml-[200px] -translate-x-[60px]">
            <Link to="/">Home</Link>
            <Link to="/shop-by-category"> Category</Link>
            <Link to="/shop-by-colour"> Colour</Link>
            <Link to="/shop-by-travel-type"> Travel</Link>
            <Link to="/featured"> Featured</Link>
            <Link to="/about-us"> About </Link>
            <Link to="/contact-us"> Contact </Link>
          </div>

          <div className="flex justify-center items-center gap-6 translate-x-[60px] ml-2 mr-4 text-2xl">
            <CiSearch className="text-2xl" />
            <div className="flex ">
              <Link to="/cart-items">
                <BsCart2 className="text-4xl" />
              </Link>
              <p className=" text-xs font-bold -translate-x-[20px] translate-y-[9px]">
                5
              </p>
            </div>
            <VscAccount className="text-2xl" />
          </div>
        </div>
      </div>

      {/* navbar for smaller devices  */}
      <div className="block lg:hidden sticky top-0 z-50 bg-white ">
        <div className="flex justify-center items-center py-4 gap-2">
          <p>
            <Link to="/">
              <img
                src="https://nashermiles.com/cdn/shop/files/cYqmqD-nashermiles_logo.png?v=1702885836&width=190"
                alt="image"
              />
            </Link>
          </p>
          <div className="flex justify-center items-center gap-2 text-3xl">
            <CiSearch />
            <BsCart2 />
            {IsMenuOpen ? (
              <RxCross1 onClick={handleMenu} />
            ) : (
              <RxHamburgerMenu onClick={handleMenu} />
            )}
          </div>
        </div>

        {IsMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white px-6 py-4 ">
            <div className="flex text-4xl justify-start text-center pb-10 -translate-x-2">
              <CgArrowsVAlt />
              <CgArrowsVAlt className="rotate-90 -translate-x-[35px]" />
              <p className="text-2xl">Nasher Miles</p>
              <RxCross1
                onClick={handleMenu}
                className="text-3xl translate-x-10 translate-y-1"
              />
            </div>

            <ul className=" space-y-5 font-serif text-2xl uppercase">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop-by-category"> Category</Link>
              </li>
              <li>
                <Link to="/shop-by-colour"> Colour</Link>
              </li>
              <li>
                <Link to="/shop-by-travel-type"> Travel</Link>
              </li>
              <li>
                <Link to="/featured"> Featured</Link>
              </li>
              <li>
                <Link to="/about-us"> About </Link>
              </li>
              <li>
                <Link to="/contact-us"> Contact </Link>
              </li>
            </ul>
            <ul className="space-y-3 pt-4 text-xl">
              <li>Log In</li>
              <li>Create account</li>
              <li>Search</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
