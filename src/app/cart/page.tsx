import CartItems from '@/components/cart-items';
import { CartHeroSection } from '@/components/CartHeroSection';

export default function CartPage() {
	return (
		<main>
			<CartHeroSection />
			<CartItems />
		</main>
	);
}