"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import React from "react";

import { useRouter } from "next-nprogress-bar";
import { Button } from "./ui/button";

type ProductTypes = {
    _id: string,
	slug: string,
    title: string,
    subtitle: string,
    description: string,
    imageUrl: string,
    SalesPrice: string,
    DiscountPer: string,
    ShowPrice: string,
    isDiscounted: boolean,
};

interface IProps {
	item: ProductTypes;
}

function ProductCard( { item } : IProps) {
	const router = useRouter();
	const icons = [
		{
			iconUrl: "/images/share_icon.png",
			title: "Share",
			action: () => { },
		},
		{
			iconUrl: "/images/like_icon.png",
			title: "Like",
			action: () => { },
		},
	];

	const cardVariant = {
		initial: { opacity: 0, x: 120, scale: 0.5 },
		animate: { opacity: 1, x: 0, scale: 1 },
	};

	return (
		<motion.div
			initial="initial"
			animate="initial"
			whileHover="animate"
			viewport={{ once: false }}
			transition={{ duration: 0.5 }}
			className="relative cursor-pointer"
			onClick={() => router.push(`/shop/product/${item._id}`)}
		>
			<div className="relative">
				<img
					src={item.imageUrl}
					alt="product"
					className="h-[301px] w-full object-cover"
				/>
				<div className='absolute top-[24px] right-6'>
					{item.isDiscounted && (
					<div className='flex items-center justify-between gap-2'>
						<span className='w-12 h-12 rounded-full flex items-center justify-center bg-[#E97171] text-white font-medium'>-{item.DiscountPer}%</span>
					</div>
					)}
				</div>
			</div>
			<div className="bg-[#F4F5F7] p-4">
				<p className="text-customBlack text-24 font-semibold">{item.title}</p>
				<p className="text-customGray font-medium text-normal py-[8px]">
					{item.subtitle}
				</p>
				<div className="flex justify-between items-center">
					<p className="text-customBlack text-20 font-semibold">{item.ShowPrice}</p>
					<p className="line-through text-customGray">{item.SalesPrice}</p>
				</div>
			</div>
			<motion.div
				className={cn(
					"absolute p-4 left-0 right-0 top-0 bottom-0 bg-[#3A3A3A]/80"
				)}
				variants={cardVariant}
			>
				<div className="pt-[30%]">
					<div className="flex justify-center">
						<Button
							className="bg-white text-primary p-8 font-bold hover:bg-white"
							onClick={() => router.push(`/shop/product/${item._id}`)}
						>
							View Products
						</Button>
					</div>
					<div className="flex justify-center gap-5 mt-[24px]">
						{icons.map((icon, index) => (
							<div
								className="flex gap-1 items-center hover:cursor-pointer"
								key={index}
								onClick={icon.action}
							>
								<div>
									<img src={icon.iconUrl} alt="icon" />
								</div>
								<p className="text-white">{icon.title}</p>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default ProductCard;
