import React from "react";
import ProductCard from "../ProductCard";
import { PRODUCTS } from "@/lib/constants";
import { Button } from "../ui/button";

function OurProductSection() {
  return (
    <section className="w-full overflow-x-hidden">
      <div>
        <p className="text-[32px] font-bold text-center">Our Product</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px]">
        {PRODUCTS.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-[32px]">
        <Button
          className="bg-transparent hover:bg-transparent text-primary font-bold border border-primary h-[48px]"
        >Show more</Button>
      </div>
    </section>
  );
}

export default OurProductSection;
