import ProductCard from "@/components/ProductCard";
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
        ]{_id, title, slug, subtitle, description, SalesPrice, ShowPrice, isDiscounted, DiscountPer, "imageUrl": image[0].asset->url}`;

    const productsFromCMS = await client.fetch(PRODUCTS_QUERY, {});
    console.log(productsFromCMS)

    return productsFromCMS
}

const ShopProductSection = async () => {

    const products = await getData()

	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt-[46px]">
				{products.map((item: ProductTypes) => (
					<ProductCard item={item} key={item._id} />
				))}
			</div>
		</section>
	);
}

export default ShopProductSection;
