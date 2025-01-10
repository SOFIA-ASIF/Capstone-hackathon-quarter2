"use client"
import React, { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext } from "@/components/ui/pagination";

export const ShopPaginationSection = () =>  {

	const [active, setActive] = useState<"1" | "2" | "3" | "Next">("1")

	return (
		<section>
			<Pagination>
				<PaginationContent className="flex gap-[20px] md:gap-[38px]">
					<PaginationItem>
						<PaginationLink href="#" onClick={() => setActive("1")} isActive={active === "1"}>
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" onClick={() => setActive("2")} isActive={active === "2"}>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" onClick={() => setActive("3")} isActive={active === "3"}>
							3
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" onClick={() => setActive("Next")} isActive={active === "Next"} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</section>
	);
}

export default ShopPaginationSection;
