'use client'
import React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext } from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

function ShopPaginationSection() {

	const searchParams = useSearchParams()
	const page = searchParams.get('page')

	return (
		<section>
			<Pagination>
				<PaginationContent className="flex gap-[20px] md:gap-[38px]">
					<PaginationItem>
						<PaginationLink href="/shop?page=1" isActive={page === '1'}>1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/shop?page=2" isActive={page === '2'}>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/shop?page=3" isActive={page === '3'}>3</PaginationLink>
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
