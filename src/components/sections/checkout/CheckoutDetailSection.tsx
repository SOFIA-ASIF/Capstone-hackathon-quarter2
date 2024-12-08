"use client";
import MainButton from "@/components/common/MainButton";
import { Separator } from "@/components/ui/separator";

function CheckoutDetailSection() {
  return (
    <section>
      <div className="flex justify-between">
        <p className="font-bold text-[18px]">Product</p>
        <p className="font-bold text-[18px]">Subtotal</p>
      </div>

      <div className="mt-4 flex flex-col gap-3 justify-between">
        <div className="flex justify-between">
          <p className="text-customGray2 text-sm ">
            Respira Xen{" "}
            <span className="font-bold text-black">X 2</span>
          </p>
          <p>140000</p>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 justify-between">
        <div className="flex justify-between">
          <p className="text-customGray2 text-sm ">Total</p>
          <p className="text-primary font-bold text-[20px]">
            70000
          </p>
        </div>
      </div>

      <div className="my-[30px]">
        <Separator />
      </div>

      <p>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <strong>privacy policy</strong>.
      </p>

      <div className="my-16 flex justify-center">
        <MainButton
          text="Place order"
          classes="bg-white hover:bg-white border  border-black rounded-[15px] h-[55px] text-black"
        />
      </div>
    </section>
  );
}

export default CheckoutDetailSection;
