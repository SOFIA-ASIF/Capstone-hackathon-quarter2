import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/productType";

const ProductDetailRelatedSection = async () => {

	return (
		<section className="w-full overflow-x-hidden">
			<div>
				<p className="text-[32px] font-bold text-center">Related Products</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] mt-[30px]">
				{/* {products.map((item: Product, index) => (
					<ProductCard item={item} key={index} />
				))} */}
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
