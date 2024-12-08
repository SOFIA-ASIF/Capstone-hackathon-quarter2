import ContactForm from '@/components/contactform';
import Location from '@/components/Icons/location';
import Phone from '@/components/Icons/phone';
import Time from '@/components/Icons/time';
import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection';

export default function AboutPage() {
	return (
		<main>
			<ContactHeroSection />
			<section className="flex flex-col gap-20 pt-24 pb-16">
				<article className="text-center xl:w-5/12 2xl:w-3/12 mx-auto flex flex-col gap-4">
					<h2 className="text-4xl font-semibold">Get In Touch With Us</h2>
					<p className="text-[#9F9F9F]">
						For More Information About Our Product & Services. Please Feel Free
						To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
						Not Hesitate!
					</p>
				</article>

				<article className="flex flex-col w-full md:flex-row justify-between md:w-9/12 2xl:w-6/12 mx-auto p-14">
					<div className="flex flex-col w-full gap-12 md:w-1/3">
						<div className="flex flex-row gap-5">
							<Location />
							<div>
								<h3 className="text-2xl font-medium">Address</h3>
								<p>P. Sherman 42 Wallaby Way</p>
								<p>Sydney, Australia</p>
							</div>
						</div>

						<div className="flex flex-row gap-5">
							<Phone />
							<div>
								<h3 className="text-2xl font-medium">Phone</h3>
								<p>Mobile: (+1) 123-456-7890</p>
							</div>
						</div>

						<div className="flex flex-row gap-5">
							<Time />
							<div>
								<h3 className="text-2xl font-medium">Working Hours</h3>
								<p>Monday - Friday: 9am - 5pm</p>
								<p>Saturday - Sunday: 11am - 4pm</p>
							</div>
						</div>
					</div>

					<ContactForm />
				</article>
			</section>
			<ShopBannerSection />
		</main>
	);
}