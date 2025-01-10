import ProductCard from "@/components/ProductCard";
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

async function getData(): Promise<ProductTypes[]> {
	const PRODUCTS_QUERY = `*[
		_type == "product"
		&& defined(slug.current)
		][0...4]{_id, title, slug, subtitle, description, SalesPrice, ShowPrice, isDiscounted, DiscountPer, "imageUrl": image[0].asset->url}`;

	const productsFromCMS = await client.fetch(PRODUCTS_QUERY, {});
	console.log(productsFromCMS)

	return productsFromCMS
}

const ProductDetailRelatedSection = async () => {
	
	const products = await getData()

	return (
		<section className="w-full overflow-x-hidden">
			<div>
				<p className="text-[32px] font-bold text-center">Related Products</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px]">
				{products.map((item: ProductTypes, index) => (
					<ProductCard item={item} key={index} />
				))}
			</div>
			<div className="flex justify-center mt-[32px]">
				<Button
					className="bg-transparent hover:bg-transparent text-primary font-bold border border-primary h-[48px]"
				>Show More</Button>
			</div>
		</section>
	);
}

export default ProductDetailRelatedSection;
