import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'
import NavBar from '@/components/common/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import LoadingIndicator from '@/components/common/LoadingIndicator'

export const metadata: Metadata = {
	title: 'Furniro E-Commerce Website',
	description: 'Get any furniture items on the fly',
}

const poppin = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"] })


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={poppin.className} >
				<main className="bg-white">
					<LoadingIndicator />
					<NavBar />
					{children}
					<div className="mt-[56px]">
						<FooterSection />
					</div>
				</main>

			</body>
		</html>
	)
}
