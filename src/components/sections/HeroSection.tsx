import React from "react";
import { Button } from "../ui/button";

function HeroSection() {
	return (
		<section className="bg-hero flex flex-col justify-center items-end w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom">
			<div className="bg-[#FFF3E3] mx-4 md:mr-[56px] md:ml-0 inline-block rounded-[10px] px-4 md:px-[39px] pt-[37px]  md:pt-[62px] pb-[37px]">
				<p className="text-customBlack font-semibold text-normal">
					New Arrival
				</p>
				<p className="text-primary py-4 md:py-2 text-header leading-tight md:text-large font-bold">
					Discover Our <br /> New Collection
				</p>
				<p className="text-customGray text-[18px] mb-[46px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
					Ut elit tellus, luctus nec ullamcorper mattis.
				</p>
				<Button className="w-[222px] bg-primary">Buy Now</Button>
			</div>
		</section>
	);
}

export default HeroSection;
