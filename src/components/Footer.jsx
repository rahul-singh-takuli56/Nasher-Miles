import Footer1 from "./Footer2";

const Footer = () => {
  return (
    <>
      <div className="bg-[#bf9f65] h-[250px]">
        <div>
          <p className="text-4xl font-bold text-center pt-10">Newsletter</p>
          <p className="text-sm  text-center pt-8">
            Sign up for exclusive deals and early access to new products.
          </p>
          <div className="text-center pt-4">
            <input
              type="email"
              className="px-3 py-3 rounded-md w-[300px] focus:outline-none placeholder:text-black bg-[#bf9f65] border border-black"
              placeholder="Your email"
            />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Footer;
