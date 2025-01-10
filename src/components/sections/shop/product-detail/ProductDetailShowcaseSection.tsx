import { Separator } from "@/components/ui/separator";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { MinusIcon, PlusIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";

interface ProductTypes{
    _id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    SalesPrice: string;
    DiscountPer: string;
    ShowPrice: string;
    isDiscounted: boolean;
};
const SINGLE_PRODUCT_QUERY = `*[_type == "product" && _id == $id][0]{
	_id, 
	title, 
	slug, 
	subtitle, 
	description, 
	SalesPrice, 
	ShowPrice, 
	isDiscounted, 
	DiscountPer, 
	"imageUrl": image[0].asset->url
}`;

const getData = async (productId: string): Promise<ProductTypes | null> => {
	try {
		const productFromCMS = await client.fetch(SINGLE_PRODUCT_QUERY, { id: productId });
		return productFromCMS;
	} catch (error) {
		console.error("Error fetching product:", error);
		return null;
	}
};

const ProductDetailShowcaseSection = async ({productId}: {productId: string;}) => {

	const specificProduct = await getData(productId)

	const mini = [
		"/images/sofa_mini.png",
		"/images/sofa_mini.png",
		"/images/sofa_mini.png",
		"/images/sofa_mini.png",
	];

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
							<img src={item} className="w-full h-full" alt="product mini glance" />
						</div>
					))}
				</div>
				<div className=" flex flex-col bg-primary-light  rounded-[8px] h-[500px] justify-center items-center">
					<img
						src={specificProduct?.imageUrl}
						alt="product"
						className="w-[425px] h-[500px] object-cover rounded-[10px]"
					/>
				</div>
			</div>
			{/* RHS */}
			<div>
				<p className="text-[40px]">{specificProduct?.title}</p>
				<p className="text-[#959595] lg:text-2xl text-lg lg:mt-0 text-[24px] font-medium mt-2">
					{specificProduct?.ShowPrice}
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
					{specificProduct?.description}
				</p>

				<div className="mb-6">
					<p className="text-[#959595] text-[16px] mb-[12px] mt-[22px]">
						Size
					</p>
					<Pagination className="flex !justify-start">
						<PaginationContent className="flex gap-[38px]">
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#" isActive>
									M
								</PaginationLink>
							</PaginationItem>
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#">
									L
								</PaginationLink>
							</PaginationItem>
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#">
									XL
								</PaginationLink>
							</PaginationItem>
							<PaginationItem className="h-[40px] w-[40px] rounded-md">
								<PaginationLink href="#">
									XXL
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
						<MinusIcon
							className="cursor-pointer"
						/>
						<p className="font-semibold text-normal select-none">1</p>
						<PlusIcon
							className="cursor-pointer"
						/>
					</div>
					<div>
						<Button
							className="bg-white text-black hover:bg-white border border-black rounded-[15px]"
						>
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