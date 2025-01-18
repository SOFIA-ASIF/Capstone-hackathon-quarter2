"use client"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Button } from "../ui/button";
import { Product } from "@/types/productType";

const OurProductSection = () => {

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/products');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				console.log(data)
				setProducts(data.slice(0,12));
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setIsLoading(false)
			}
		};

		fetchData();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	
	if (!products) {
		return <div>Error loading products</div>;
	}

	return (
		<section className="w-full overflow-x-hidden">
			<div>
				<p className="text-[32px] font-bold text-center">Our Product</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px]">
				{products.map((item: Product) => (
					<ProductCard item={item} key={item._id} />
				))}
			</div>
			<div className="flex justify-center mt-[32px]">
				<Button className="bg-transparent hover:bg-transparent text-primary font-bold border border-primary h-[48px]">Show more</Button>
			</div>
		</section>
	);
}

export default OurProductSection;