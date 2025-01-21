"use client"
import ProductCard from '@/components/ProductCard';
import { client } from '@/sanity/lib/client';
import { Product } from '@/types/productType';
import { useState, useEffect } from 'react';
import Search from './Search';
import SearchHero from './SearchHero';

const SearchPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `*[_type == "product" && 
                        lower(title) match "*${searchTerm.toLowerCase()}*" 
                    ] {
                        _id,
                        title,
                        "imageUrl": productImage.asset->url, 
                        price,
                        tags,
                        dicountPercentage,
                        description,
                        isNew
                    } | order(title asc)`; 
                const data = await client.fetch(query, { searchTerm }); 
                setProducts(data);
                console.log(products)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchData();
    }, [searchTerm]);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    return (
        <>
            <SearchHero>
                <Search onSearch={handleSearch} />
            </SearchHero>
            <div className='flex flex-col gap-[56px] mx-4 md:mx-[130px]'>
                {products.length === 0 || searchTerm === '' ? (
                    <p className='mt-10 text-[24px] text-black text-center'>No products found</p> 
                ):(
                    <section className='w-full overflow-x-hidden'>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px] mt-[46px]">
                            {products.map((item: Product) => (
                                <ProductCard item={item} key={item._id} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};

export default SearchPage;