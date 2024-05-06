const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-6 ">
        <div className="ml-[160px]">
          <img
            src="https://cdn.shopify.com/s/files/1/0563/5289/9156/files/NbeTfu-About-us-banner_3-1.jpg?v=1704777196&width=526"
            alt="image"
            className="rounded-xl h-[520px] w-[600px]"
          />
        </div>
        <div className="mt-10 h-[400px]">
          <p className="font-semibold text-5xl tracking-wide pb-4">About Us</p>
          <p className="text-sm text-black/90 mb-4">
            We’re Nasher Miles. A new-age digital-first brand, committed to
            making travel easy,
            <br /> efficient and tasteful for you. <br />
            We are a company that’s led by individuals who come from diverse
            backgrounds with one <br /> thing in common - their love for travel.{" "}
            <br /> <br />A couple of years ago, at an international terminal
            waiting for our luggage on the <br /> baggage belt, we realized how
            monotonous every bag looked. This seemed like an <br /> opportunity
            to break the clutter and led to the creation of a brand that is
            driven by <br /> nothing but innovation. <br /> <br />
            Every single piece created at Nasher Miles is designed and
            engineered to set you apart.
          </p>
          <button className="bg-black text-white text-center p-2 rounded-md">
            KNOW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
