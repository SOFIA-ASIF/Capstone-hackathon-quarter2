"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next-nprogress-bar";

export default function CartSection({ toggleShowCart }: { toggleShowCart: () => void }) {

	const subTotal = 100000
	const router = useRouter();

	return (
		<div className="w-[417px] h-[746px] bg-white p-[30px] flex justify-between flex-col">
			<div>
				<div className="flex justify-between items-center mb-[36px]">
					<p className="font-semibold text-[24px]">Shopping Cart</p>
					<div onClick={toggleShowCart} className="hover:cursor-pointer">
						<img src="/images/cart_alt_icon.png" alt="cart icon" />
					</div>
				</div>
				<Separator />
				<div className="mt-[24px] flex flex-col gap-[20px]">
					<div className="flex items-center gap-[32px] w-full justify-between">
						<div>
							<img
								src="/images/p_4.png"
								alt="product image"
								className="w-[108px] h-[105px] rounded-[1rem] object-cover"
							/>
						</div>
						<div>
							<p className="text-normal">Respira Xen</p>
							<p>
								2 X{" "}
								<span className="text-primary font-medium text-sm">
									14000
								</span>
							</p>
						</div>
						<div className="cursor-pointer" onClick={() => {}}>
							<img src={"/images/delete_icon.png"} alt="close icon" />
						</div>
					</div>
					<div className="flex items-center gap-[32px] w-full justify-between">
						<div>
							<img
								src="/images/p_1.png"
								alt="product image"
								className="w-[108px] h-[105px] rounded-[1rem] object-cover"
							/>
						</div>
						<div>
							<p className="text-normal">Syltherine</p>
							<p>
								1 X{" "}
								<span className="text-primary font-medium text-sm">
									27000
								</span>
							</p>
						</div>
						<div className="cursor-pointer" onClick={() => {}}>
							<img src={"/images/delete_icon.png"} alt="close icon" />
						</div>
					</div>
					<div className="flex items-center gap-[32px] w-full justify-between">
						<div>
							<img
								src="/images/p_3.png"
								alt="product image"
								className="w-[108px] h-[105px] rounded-[1rem] object-cover"
							/>
						</div>
						<div>
							<p className="text-normal">Lolito Bilo</p>
							<p>
								5 X{" "}
								<span className="text-primary font-medium text-sm">
									500
								</span>
							</p>
						</div>
						<div className="cursor-pointer" onClick={() => {}}>
							<img src={"/images/delete_icon.png"} alt="close icon" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex justify-between mb-[23px]">
					<p>Subtotal</p>
					<p className="text-primary text-normal font-semibold">
						Rs. {subTotal}
					</p>
				</div>
				{subTotal ? (
					<div>
						<Separator />
						<div className="mt-8 flex justify-center">
							<Button
								className="bg-white hover:bg-white text-black  border border-black rounded-[50px] h-[40px] w-[150px]"
								onClick={() => router.push("/checkout")}
							>CheckOut</Button>
						</div>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
