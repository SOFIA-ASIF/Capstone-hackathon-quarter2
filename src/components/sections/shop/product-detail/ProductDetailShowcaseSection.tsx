"use client"
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { MinusIcon, PlusIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/productType";
import { useAtom } from "jotai/react";
import { cartAtom } from "@/lib/jotai";

const ProductDetailShowcaseSection = ({ productId }: { productId: string }) => {

	const [product, setProduct] = useState<Product | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const[quantity, setQuantity] = useState(0)
	const[size, setSize] = useState<"S" | "M" | "L">("S")
	const[cart, setCart] = useAtom(cartAtom)

	const handleQuantityIncrement = () => {
		// maximum cannot be more than 5
		if (quantity === 5) return;
		setQuantity(quantity + 1);
	}

	const handleQuantityDecrement = () => {
		if (quantity === 1) return;
		setQuantity(quantity - 1);
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/singleProduct/${productId}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data: Product = await response.json();
				setProduct(data);
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [productId]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!product) {
		return <div>Product not found</div>;
	}

	const colors = [
		{
			"id": 1,
			"colorHexCode": "#6c6377",
			"isActive": true,
    	},
		{
			"id": 2,
			"colorHexCode": "#b3b7bf",
			"isActive": true,
		},
		{
			"id": 2,
			"colorHexCode": "#5c3b58",
			"isActive": true,	
		}
	]

	const extraDetailsData = [
		{
			item: "Tags",
			value: product.tags,
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

	
	const handleAddToCart = () => {
		const productInCart = cart.find((product: IProduct) => product.id === productId);
	
		// NOTE: When we already have the product in the cart [EXISTING PRODUCT]
		if (productInCart) {
			let updatedProducts = [];
			const productObject: IProduct = {
				id: productId,
				productImageUrl: productInCart?.productImageUrl,
				productName: productInCart?.productName,
				quantity,
				unitPrice: Number(productInCart?.unitPrice),
			};
		
			// NOTE: Remove it from cart & set afresh
			const filteredProducts = cart.filter(
				(product: IProduct) => product.id !== productId
			);
		
			updatedProducts = filteredProducts;
			updatedProducts.push(productObject);
		
			setCart(updatedProducts);
		}
	
		// NOTE: When we dont have the product already in the cart [FRESH PRODUCT]
		if (!productInCart) {	
			const productObject: IProduct = {
				id: productId,
				productImageUrl: product?.imageUrl,
				productName: product?.title,
				quantity,
				unitPrice: Number(product?.price),
			};
			setCart((prevProducts) => [...prevProducts, productObject]);
		}
	};

	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-2">
			{/* LHS */}
			<div className="flex">
				<div className=" flex flex-col bg-primary-light  rounded-[8px] h-[500px] justify-center items-center">
					<img
						src={product.imageUrl}
						alt="product"
						className="w-[425px] h-[500px] object-cover rounded-[10px]"
					/>
				</div>
			</div>
			{/* RHS */}
			<div>
				<p className="text-[40px]">{product.title}</p>
				<p className="text-[#959595] lg:text-2xl text-lg lg:mt-0 text-[24px] font-medium mt-2">
					{product.price}$
				</p>
				<div className="flex items-center gap-[22px]">
					<div className="flex">
						<Star size={24} className="text-[#ffc700]" />
						<Star size={24} className="text-[#ffc700]" />
						<Star size={24} className="text-[#ffc700]" />
						<Star size={24} className="text-[#ffc700]" />
						<Star size={24} className="text-[#ffc700]" />
					</div>
					<Separator
						orientation="vertical"
						className="h-[40px] border border-customGray2"
					/>
					<p>5 Customer Review</p>
				</div>

				<p className="mt-4">
					{product.description}
				</p>

				<div className="mb-6">
					<p className="text-[#959595] text-[16px] mb-[12px] mt-[22px]">
						Size
					</p>
					<Pagination className="flex !justify-start">
						<PaginationContent className="flex gap-[38px]">
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#" isActive={size === "S"} onClick={() => setSize("S")}>
									S
								</PaginationLink>
							</PaginationItem>
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#" isActive={size === "M"} onClick={() => setSize("M")}>
									M
								</PaginationLink>
							</PaginationItem>
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#" isActive={size === "L"} onClick={() => setSize("L")}>
									L
								</PaginationLink>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
				<div>
					<h4 className="text-[#9F9F9F] text-[16px] mb-3">Color</h4>
					<div className="flex gap-4 items-center">
						{colors.map((item) => (
							<button key={item.id} className={`w-[30px] h-[30px] flex-shrink-0 rounded-full border-2 ${item.isActive ? 'border-[#B88E2F]' : ''}`} style={{ backgroundColor: item.colorHexCode }}></button>
						))}
					</div>
                </div>
				<div className="flex flex-col md:flex-row gap-[18px] items-center mt-16">
					<div className="inline-flex h-[64px] px-[15px] gap-[35px] items-center border border-customGray2 rounded-[10px]">
						<MinusIcon className="cursor-pointer" onClick={handleQuantityDecrement} />
						<p className="font-semibold text-normal select-none">{quantity}</p>
						<PlusIcon className="cursor-pointer" onClick={handleQuantityIncrement} />
					</div>
					<div>
						<Button className="bg-primary text-white border border-primary hover:text-primary hover:bg-white rounded-[15px] h-[64px] w-[120px]" onClick={handleAddToCart}>
							Add to Cart
						</Button>
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

export default ProductDetailShowcaseSection;