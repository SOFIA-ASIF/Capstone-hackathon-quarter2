import CartItems from '@/components/cart-items';
import Hero from '@/components/common/Hero';

export default function CartPage() {
	return (
		<main>
			<Hero title="Cart" />
			<CartItems />
		</main>
	);
}