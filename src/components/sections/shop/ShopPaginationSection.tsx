'use client'
import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext } from "@/components/ui/pagination";

function ShopPaginationSection() {

	const page = '1'

	return (
		<section>
			<Pagination>
				<PaginationContent className="flex gap-[20px] md:gap-[38px]">
					<PaginationItem>
						<PaginationLink href="/shop?page=1" isActive={page === '1'}>1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/shop?page=2" isActive={page === '1'}>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/shop?page=3" isActive={false}>3</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="/shop?type=next" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</section>
	);
}

export default ShopPaginationSection;
