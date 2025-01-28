"use client"
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductDetailTopSection = ({product_id,}: { product_id: string;}) => {

	const router = useRouter()

	return (
		<section className="hidden md:flex bg-primary-light px-4 md:px-[70px] h-[100px] gap-3 items-center">
			<div className="text-customGray2 cursor-pointer" onClick={() => router.push("/")}>Home</div>
			<ChevronRight />
			<div className="text-customGray2 cursor-pointer" onClick={() => router.push("/shop")}>Shop</div>
			<ChevronRight />
			<Separator
				orientation="vertical"
				className="h-[40px] border border-customGray2"
			/>
			<div className="font-semibold">Product {product_id}</div>
		</section>
	);
}

export default ProductDetailTopSection;