"use client";

import { Separator } from "@/components/ui/separator";
import { useAtomValue } from "jotai";
import { Button } from "../ui/button";
import { billingAtom, cartAtom } from "@/lib/jotai";
import { mockPaymentGateway } from "@/lib/mockAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";

function CheckoutDetailSection() {

	const products = useAtomValue(cartAtom);
	const billingInfo = useAtomValue(billingAtom)
	const[isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const computeSubTotal = () => {
		let total = 0;
		for (const product of products) {
			total += Number(product.quantity) * Number(product.unitPrice);
		}
		return total;
	};

	const handleCheckout = async () => {
		try {
			setIsLoading(true)
			const response = await mockPaymentGateway(billingInfo!, products!) as { status: string, transactionId?: string };
			console.log("Payment Response:", response);
			
			if (response.status === "success") {
				router.push(`/thankyou/${response.transactionId}`)
			} else {
				alert("Payment failed! Please try again.");
			}
		} catch (error) {
			console.error("Payment Error:", error);
		} finally {
			setIsLoading(false)
		}
	};

	return (
		<section>
			<div className="flex justify-between">
				<p className="font-bold text-[18px]">Product</p>
				<p className="font-bold text-[18px]">Subtotal</p>
			</div>
			<div className="mt-4 flex flex-col gap-3 justify-between">
				{products.map((product: IProduct) => (
					<div key={product.id} className="flex justify-between">
						<p className="text-customGray2 text-sm ">
							{product.productName}{" "}
							<span className="font-bold text-black">X {product.quantity}</span>
						</p>
						<p>{Number(product.unitPrice) * Number(product.quantity)}</p>
					</div>
				))}
			</div>

			<div className="mt-4 flex flex-col gap-3 justify-between">
				<div className="flex justify-between">
					<p className="text-customGray2 text-sm ">Total</p>
					<p className="text-primary font-bold text-[20px]">
						${computeSubTotal()}
					</p>
				</div>
			</div>

			<div className="my-[30px]">
				<Separator />
			</div>

			<p>
				Your personal data will be used to support your experience throughout
				this website, to manage access to your account, and for other purposes
				described in our <strong>privacy policy</strong>.
			</p>

			<div className="my-16 flex justify-center">
				<Button
					className="bg-black hover:bg-white hover:text-black border  border-black rounded-[15px] h-[55px] text-white"
					onClick={handleCheckout}
					disabled={isLoading}
				>Place Order</Button>
			</div>
		</section>
	);
}

export default CheckoutDetailSection;