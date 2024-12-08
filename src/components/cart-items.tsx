'use client';
import React from 'react';
import Image from 'next/image';

const CartItems = () => {
	return (
		<section className="flex w-[90%] mx-auto flex-col md:mx-0 md:flex-row gap-8 py-20 lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
			<article className="w-full md:w-3/4">
				<table className="w-full">
					<thead className="w-full bg-[#F9F1E7]">
						<tr className="font-medium">
							<th className="py-4"></th>
							<th className="py-4">Product</th>
							<th className="py-4">Price</th>
							<th className="py-4">Quantity</th>
							<th className="py-4"></th>
						</tr>
					</thead>
					<tbody>
							<tr className="text-center">
								<td className="pt-8">
									<Image
										src="/images/p_4.png"
										alt="respira"
										width={100}
										height={100}
									/>
								</td>
								<td className="pt-8">Respira Xen</td>
								<td className="pt-8">7000</td>
								<td className="pt-8">1</td>
								<td className="pt-8">
									<button
										className="rounded-md bg-red-500 px-4 text-white hover:bg-red-700"
										onClick={() => {}}
									>
										Delete
									</button>
								</td>
							</tr>
					</tbody>
				</table>
			</article>

			<article className="h-[390px] w-[90%] mx-auto md:mx-0 p-4 md:w-1/3 bg-[#F9F1E7]">
				<h1 className="text-lg/7 text-center">Cart Totals</h1>
                    <div className="flex justify-between">
                        <p className="font-bold text-[18px]">Product</p>
                        <p className="font-bold text-[18px]">Subtotal</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-3 justify-between">
                        <div className="flex justify-between">
                            <p className="text-customGray2 text-sm ">
                                Respira Xen{" "}
                                <span className="font-bold text-black">X 2</span>
                            </p>
                            <p>140000</p>
                        </div>
                    </div>
			</article>
		</section>
	);
};

export default CartItems;