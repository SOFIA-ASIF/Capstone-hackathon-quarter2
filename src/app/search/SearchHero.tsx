import { ChevronRight, Search } from "lucide-react"
import Link from "next/link"
import React from "react";

const SearchHero = ({ children }: { children: React.ReactNode }) => {
    return(
        <section className='bg-shop-hero h-[316px] flex justify-center flex-col items-center'>
            <div className='text-center w-full lg:py-0 py-4 md:mt-0 mt-12'>
                <h1 className='lg:text-[48px] font-medium lg:leading-[72px] select-none md:text-2xl text-xl'>Search</h1>
                <div className='flex items-center leading-6 gap-[6px] justify-center'>
                    <Link href="/" className='font-medium lg:text-base text-sm'>Home</Link>
                    <ChevronRight />
                    <span className='lg:text-base font-normal text-[#000000] select-none text-sm'>Search</span>
                </div>
                <div className="mt-10">
                    {children}
                </div>
            </div>
      </section>
    )
}

export default SearchHero;