import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GrServices } from "react-icons/gr";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 h-[300px] mt-8">
      <p className="text-4xl font-semibold text-center pt-10">
        4 REASONS TO BUY FROM
      </p>
      <p className="underline text-center text-sm py-4">Nasher Miles</p>

      <div className="grid grid-cols-4 gap-10 mx-24 mt-4 ">
        <div>
          <LiaShippingFastSolid className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            Free Shipping
          </p>
          <p className="text-center text-sm text-black/70">
            Free shipping for order above ₹500 <br /> across India.
          </p>
        </div>
        <div>
          <TbTruckReturn className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            Free Shipping
          </p>
          <p className="text-center text-sm text-black/70">
            Hassle free 7 days return.{" "}
          </p>
        </div>
        <div>
          <RiCustomerServiceLine className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            Free Shipping
          </p>
          <p className="text-center text-sm text-black/70">
            Our efficient supply chain brings you <br /> value without
            compromising on quality.{" "}
          </p>
        </div>
        <div>
          <GrServices className="text-[50px] mx-auto" />
          <p className="text-center font-semibold text-xl py-2">
            Free Shipping
          </p>
          <p className="text-center text-sm text-black/70">
            A customer first service culture is core to <br /> our company
            values.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
