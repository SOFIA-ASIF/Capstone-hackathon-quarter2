"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import CartSection from "../sections/shop/CartSection";

import { RemoveScroll } from "react-remove-scroll";
import { useRouter } from "next/navigation";

function NavBar() {
	const [showCart, setShowCart] = useState(false);
	const [menu, setMenu] = useState(false);
	const router = useRouter();

	const links = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Shop",
			link: "/shop",
		},
		{
			title: "Blog",
			link: "/blog",
		},
		{
			title: "Contact",
			link: "/contact",
		},
	];

	const icons = [
		{
			iconUrl: "/images/user_icon.png",
			alt: "user icon",
			action: () => console.log("You just clicked on the user icon"),
		},
		{
			iconUrl: "/images/search_icon.png",
			alt: "search icon",
			action: () => router.push("/search"),
		},
		{
			iconUrl: "/images/heart_icon.png",
			alt: "heart icon",
			action: () => console.log("You just clicked on the heart icon"),
		},
		{
			iconUrl: "/images/cart_icon.png",
			alt: "cart icon",
			action: () => setShowCart(!showCart),
		},
	];
	const toggleMenu = () => {
		setMenu(!menu);	
	};

	const handleCartOpen = () => {
		setShowCart(!showCart)
	}

	return (
		<div className="relative">
			<div className="md:sticky md:top-0 md:shadow-none z-20 relative">
				{/* DESKTOP */}
				<div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
					<div className="flex justify-between mx-[41px] items-center">
						<Link href="/">
							<div>
								<img src="/images/logo.png" alt="logo" />
							</div>
						</Link>
						<div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
							{links.map((link, index) => (
								<Link
									href={link.link}
									key={index}
									className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
								>
									<p>{link.title}</p>
								</Link>
							))}
						</div>
						<div className="flex items-center gap-[40px] select-none">
							{icons.map((icon, index) => (
								<div key={index} className="relative">
									<img
										src={icon.iconUrl}
										onClick={icon.action}
										alt={icon.alt}
										className="cursor-pointer"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* MOBILE */}
				<div className={`block lg:hidden shadow-sm  fixed top-0 w-full z-[20] bg-white py-4 animate-in fade-in zoom-in ${menu && " !bg-[#FFF3E3] py-2"}`}>
					<div className="flex justify-between mx-[10px]">
						<div className="flex gap-[50px] text-[16px] items-center select-none">
							<img src="/images/logo.png" alt="logo" className="w-[7rem]" />
						</div>
						<div className="flex items-center gap-[40px]">
							{menu ? (
								<X
									className="cursor-pointer animate-in fade-in zoom-in text-black"
									onClick={toggleMenu}
								/>
							) : (
								<MenuIcon
									onClick={toggleMenu}
									className="cursor-pointer animate-in fade-in zoom-in"
								/>
							)}
						</div>
					</div>
					{menu ? (
						<div className="my-8 select-none animate-in slide-in-from-right">
							<div className="flex flex-col justify-center items-center gap-8 mt-8 mx-4">
								{links.map((link, index) => (
									<Link
										key={index}
										href={link.link}
										className="text-black cursor-pointer"
									>
										<p>{link.title}</p>
									</Link>
								))}
								<div className="flex gap-[40px] items-center justify-center select-none">
									{icons.map((icon, index) => (
										<img
											src={icon.iconUrl}
											onClick={icon.action}
											alt={icon.alt}
											key={index}
											className="cursor-pointer w-[28px] h-[28px] object-contain"
										/>
									))}
								</div>
							</div>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
			{showCart && (
				<div
					className="hidden md:block absolute animate-out left-0 right-0 top-0 h-screen bg-black/20 z-[99]"
					onClick={handleCartOpen}
				></div>
			)}
			<div className="md:absolute md:top-0 md:right-0 z-[999]">
				{showCart && (
					<RemoveScroll>
						<CartSection toggleShowCart={handleCartOpen} />
					</RemoveScroll>
				)}
			</div>
		</div>
	);
}

export default NavBar;
