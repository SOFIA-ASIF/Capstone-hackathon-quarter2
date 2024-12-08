"use client";

import { Separator } from "@/components/ui/separator";
import ReactStars from "react-stars";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import MainButton from "@/components/common/MainButton";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function ProductDetailShowcaseSection() {

	const mini = [
		"/images/sofa_mini.png",
		"/images/sofa_mini.png",
		"/images/sofa_mini.png",
		"/images/sofa_mini.png",
	];

	const extraDetailsData = [
		{
			item: "SKU",
			value: "SS001",
		},
		{
			item: "Category",
			value: "Sofas",
		},
		{
			item: "Tags",
			value: "Sofa, Chair, Home, Shop",
		},
		{
			item: "Share",
			value: (
				<div className="flex gap-[23px]">
					<div>
						<img src="/images/facebook.png" alt="facebook" />
					</div>
					<div>
						<img src="/images/linkedin.png" alt="linkedin" />
					</div>
					<div>
						<img src="/images/twitter.png" alt="twitter" />
					</div>
				</div>
			),
		},
	];
	const quantity = 1

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{/* LHS */}
			<div className="flex gap-8 ">
				<div className="hidden md:inline-flex flex-col gap-8">
					{mini.map((item, index) => (
						<div
							key={index}
							className="bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2"
						>
							<img src={item} alt="product mini glance" />
						</div>
					))}
				</div>
				<div className=" flex flex-col bg-primary-light  rounded-[8px] h-[500px] justify-center items-center">
					<img
						src="/images/p_3.png"
						alt="product"
						className="w-[425px] h-[500px] object-cover rounded-[10px]"
					/>
				</div>
			</div>
			{/* RHS */}
			<div>
				<p className="text-[42px]">Respira Xen</p>
				<p className="text-customGray text-[24px] font-medium">
					7000
				</p>
				<div className="flex items-center gap-[22px]">
					<ReactStars count={5} color1="#FFC700" size={24} color2={"#FFC700"} />
					<Separator
						orientation="vertical"
						className="h-[40px] border border-customGray2"
					/>
					<p>5 Customer Review</p>
				</div>

				<p className="mt-4">
					Setting the bar as one of the loudest speakers in its class, the
					Kilburn is a compact, stout-hearted hero with a well-balanced audio
					which boasts a clear midrange and extended highs for a sound.
				</p>

				<div>
					<p className="text-customGray text-[14px] mb-[12px] mt-[22px]">
						Size
					</p>
					<Pagination className="flex !justify-start">
						<PaginationContent className="flex gap-[38px]">
							<PaginationItem>
								<PaginationLink href="" isActive>
									L
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="">XL</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="">XS</PaginationLink>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>

				<div className="flex gap-[18px] items-center mt-32">
					<div className="inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-customGray2 rounded-[10px]">
						<MinusIcon className="cursor-pointer" />
						<p className="font-semibold text-normal select-none">{quantity}</p>
						<PlusIcon className="cursor-pointer" />
					</div>
					<div>
						<MainButton
							text="Add to Cart"
							classes="bg-white text-black hover:bg-white border border-black rounded-[15px]"
						/>
					</div>
				</div>

				<div className="my-[41px]">
					<Separator className="border border-[#D9D9D9]" />
				</div>

				<div className="flex flex-col gap-4">
					{extraDetailsData.map((item, index) => (
						<div key={index} className="flex gap-4">
							<p className="text-customGray">{item.item}</p>
							<p className="text-customGray">:</p>
							<div className="text-customGray">{item.value}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
