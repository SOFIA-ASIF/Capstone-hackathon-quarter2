'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAtom } from 'jotai/react';
import { cartAtom } from '@/lib/jotai';
import { Button } from './ui/button';

const CartItems = () => {

	const [subTotal, setSubTotal] = useState(0);
	const [products, setProducts] = useAtom(cartAtom);

	const removeProductFromCart = (productId: number | string) => {
		const filteredProducts = products.filter(
		  (product: IProduct) => product.id !== productId
		);
		setProducts(filteredProducts);
	};

	const computeSubTotal = () => {
		let total = 0;
		for (const product of products) {
			total += product.quantity * product.unitPrice;
		}
		setSubTotal(total);
	};

	useEffect(() => {
		computeSubTotal();
	}, [products, computeSubTotal]);

	return (
		<section>
			<div className="pt-[72px] pb-[85px] flex gap-8 xl:flex-row flex-col w-[85%] mx-auto justify-between lg:px-0 px-3">
				<div className='relative overflow-x-auto w-full | cart-table'>
					<table className="w-full">
						<thead className="w-full bg-[#F9F1E7] h-14">
							<tr>
							<th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3"></th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3"></th>
							</tr>
						</thead>
						<tbody>
							{products.map((item) => (
								<tr className="text-center" key={item.id}>
									<td className="pt-8">
										<img
											src={item?.productImageUrl}
											alt="respira"
											className='w-[108px] h-[105px]'
										/>
									</td>
									<td className="pt-8">{item.productName}</td>
									<td className="pt-8">{item.unitPrice}</td>
									<td className="pt-8">{item.quantity}</td>
									<td className="pt-8">
										<Button
											className="rounded-md bg-red-500 h-[50px] w-[100px] px-4 text-white hover:bg-red-700"
											onClick={() => removeProductFromCart(item.id)}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="bg-[#F9F1E7] xl:w-fit rounded-sm lg:px-20 lg:pb-[80px] px-6 pb-6 max-h-[390px]">
                    <h1 className="text-center pt-[20px] text-[#000000] font-semibold lg:text-[32px] text-2xl leading-[48px] lg:mb-[61px] mb-6 select-none">Cart Totals</h1>
                    <div className="mb-[31px] flex justify-between items-center">
                        <span className="font-medium text-[16px] leading-6 select-none">Subtotal</span>
                        <span className="text-[#9F9F9F] text-base leading-6">${subTotal}</span>
                    </div>
                    <div className="flex justify-between items-center mb-[42px]">
                        <span className="font-medium text-[16px] leading-6 select-none">Total</span>
                        <span className="text-[#B88E2F] font-medium lg:text-[20px] text-lg leading-7">${subTotal}</span>
                    </div>
                    <Link href="/checkout" className="text-[#000000] text-center border-2 border-[#000000] py-[14px] text-[20px] leading-7 rounded-lg w-[222px] block mx-auto hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out">Check Out</Link>
                </div>
			</div>
		</section>
	);
};

export default CartItems;