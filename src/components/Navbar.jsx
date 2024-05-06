import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#bf9f65] h-[40px] ">
        <p className="pt-2.5 text-white uppercase text-[12px] text-center font-bold tracking-wide underline">
          SHOP ₹49999 get free bag | No question asked
        </p>
      </div>
      <div className="sticky top-0 z-50 bg-white shadow-md ">
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
            <p>Contact</p>
            <p>About</p>
            <p>Sales</p>
            <p>Gifting</p>
            <p>Spring Collection</p>
            <p>Accessories</p>
          </div>

          <div className="flex justify-center items-center gap-6 translate-x-[60px] ml-2 mr-4 text-2xl">
            <CiSearch />
            <BsCart2 />
            <VscAccount />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
