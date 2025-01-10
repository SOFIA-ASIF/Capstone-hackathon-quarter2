import { CheckoutBillingForm } from "@/components/CheckoutBillingForm";
import FeaturesBannerSection from "@/components/common/FeaturesBannerSection";
import Hero from "@/components/common/Hero";
import CheckoutDetailSection from "@/components/sections/CheckoutDetailSection";

export default function CheckoutPage() {
	return (
		<div>
			<Hero title="Checkout" />
			<div className="mx-4 md:mx-[130px] flex gap-8 flex-col md:flex-row mt-[98px]">
				<CheckoutBillingForm />
				<CheckoutDetailSection />
			</div>
			<FeaturesBannerSection />
		</div>
	);
}
