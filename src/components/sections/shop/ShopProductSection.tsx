"use client"
import { useState, useEffect } from "react"
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/productType";

const ShopProductSection = () => {
    
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
                setProducts(data);
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
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt-[46px]">
				{products.map((item: Product) => (
					<ProductCard item={item} key={item._id} />
				))}
			</div>
		</section>
	);
}

export default ShopProductSection;
