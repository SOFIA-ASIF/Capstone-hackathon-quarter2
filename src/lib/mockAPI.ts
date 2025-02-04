import { IBilling } from "@/types/BillingDetailsType";

export async function mockPaymentGateway(billingInfo: IBilling, cartItems: IProduct[]) {
    return new Promise((resolve) => {
        console.log("Processing payment...");
        console.log("Billing Info:", billingInfo);
        console.log("Cart Items:", cartItems);

        setTimeout(() => {
            resolve({
                status: "success",
                message: "Payment processed successfully!",
                transactionId: Math.random().toString(36).substr(2, 9),
            });
        }, 2500);
    });
}
