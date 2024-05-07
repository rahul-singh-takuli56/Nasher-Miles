import Footer1 from "./Footer2";

const Footer = () => {
  return (
    <>
      <div className="bg-[#bf9f65] lg:h-[250px] h-[200px]">
        <div>
          <p className="lg:text-4xl lg:tex-xl text-3xl font-bold text-center lg:pt-10 pt-4">
            Newsletter
          </p>
          <p className="lg:text-sm text-xs  text-center lg:pt-8 pt-4">
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
