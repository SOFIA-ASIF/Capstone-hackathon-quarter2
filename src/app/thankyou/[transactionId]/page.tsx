"use client";

import { useAtomValue } from "jotai";
import Link from "next/link";
import { billingAtom, cartAtom } from "@/lib/jotai";

export default function ThankYouPage({ params }: { params: { transactionId: string; }}) {
    const billingInfo = useAtomValue(billingAtom);
    const cartItems = useAtomValue(cartAtom);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-lg w-full">
                <h1 className="text-4xl font-bold text-primary">Thank You for Your Purchase!</h1>
                <p className="text-lg text-gray-700 mt-2">
                    Your order has been successfully placed. You will receive your items in 3-4 business days.
                </p>
                {params.transactionId && (
                    <p className="mt-4 text-gray-500">
                        Transaction ID: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{params.transactionId}</span>
                    </p>
                )}

                <div className="mt-6 text-left">
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                    <ul className="mt-2 space-y-3">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between bg-gray-50 p-3 rounded-lg shadow">
                                <div>
                                    <p className="font-medium">{item.productName}</p>
                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-medium">${(item.unitPrice * item.quantity).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {billingInfo &&                
                    <div className="mt-6 text-left">
                        <h2 className="text-xl font-semibold">Shipping To</h2>
                        <p className="text-gray-700 mt-2">{billingInfo.firstName} {billingInfo.lastName}</p>
                        <p className="text-gray-500">{billingInfo.street}, {billingInfo.town}, {billingInfo.province}, {billingInfo.country}</p>
                        <p className="text-gray-500">Phone: {billingInfo.phone}</p>
                    </div>
                }

                <div className="mt-6">
                    <Link href="/">
                        <button className="bg-black hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-lg">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
