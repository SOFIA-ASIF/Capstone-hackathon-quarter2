import { IBilling } from "@/types/BillingDetailsType";
import { IProduct } from "@/types/productType";
import { atomWithStorage } from "jotai/utils";

const cartAtom = atomWithStorage<IProduct[]>("CART_ITEMS", [])
const billingAtom = atomWithStorage<IBilling | null>("BILLING_ITEM", null);

export { cartAtom, billingAtom };