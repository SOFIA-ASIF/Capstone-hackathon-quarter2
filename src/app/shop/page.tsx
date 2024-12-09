import Hero from "@/components/common/Hero";
import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import ShopFilterSection from "@/components/sections/shop/ShopFilterSection";
import ShopPaginationSection from "@/components/sections/shop/ShopPaginationSection";
import ShopProductSection from "@/components/sections/shop/ShopProductSection";

function ShopPage() {
	return (
		<div className="overflow-hidden">
			<Hero title="Shop" />
			<ShopFilterSection />
			<div className="mx-6 md:mx-[130px]">
				<ShopProductSection />
			</div>
			<div className="my-[70px]">
				<ShopPaginationSection />
			</div>
			<ShopBannerSection />
		</div>
	);
}

export default ShopPage;
