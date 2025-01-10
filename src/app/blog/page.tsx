import BlogPaginationSection from "@/components/BlogPaginationSection";
import FeaturesBannerSection from "@/components/common/FeaturesBannerSection";
import Hero from "@/components/common/Hero";
import { BLOGS, CATEGORIES, RECENT_POSTS } from "@/lib/constants";
import React from "react";

export default function BlogPage() {
	return (
		<>
			<Hero title="Blog" />
			<section className="pt-[50px] lg:pt-[100px] lg:px-9 w-full">
				<div className="container mx-auto pt-[50px] lg:pt-[50px] lg:px-9">
					<div className="block lg:hidden">
						<div className="flex items-center rounded-[10px] border px-2 mx-2 py-2 border-[#9F9F9F] mb-11">
							<input
								type="text"
								className="px-4 py-2 w-full outline-none"
								placeholder="Search..."
							/>
							<button className="px-4">
								<img src="/images/search_icon.png" alt="Search Icon" />
							</button>
						</div>
					</div>
					<div className="grid lg:grid-cols-3 gap-4">
						<div className="lg:col-span-2">
							{BLOGS.map((item) => (
								<div key={item.id} className="px-4 lg:px:0">
									<img
										src={item.imageUrl}
										alt="Blog Post"
										className="w-full h-auto "
									/>
									<div className="flex items-center justify-between text-[#9F9F9F] py-2">
										<div className="flex items-center space-x-2 pt-3 pb-6">
											<img src="/images/admin.svg" alt="Admin Icon" />
											<span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
												{item.adminInfo}
											</span>
											<img src="/images/date.svg" alt="Calendar Icon" />
											<span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
												{item.createdAt}
											</span>
											<img src="/images/wood.svg" alt="Tag Icon" />
											<span className="pr-2 lg:pr-8 font-Poppins text-xs lg:text-base">
												{item.category}
											</span>
										</div>
									</div>
									<div className="lg:pb-8">
										<h2 className="text-3xl font-Poppins font-medium pb-3">
											{item.header}
										</h2>
										<p className="font-Poppins text-[#9F9F9F] font-light text-base pb-4">
											{item.text}
										</p>
										<button className="border-b border-black hover:text-[#B88E2F] outline-none text-base font-Poppins font-normal py-3 mb-[54px]">
											Read more
										</button>
									</div>
								</div>
							))}
						</div>
						<div className="lg:col-span-1 self-start px-4 lg:pl-8 sticky-sidebar overflow-y-auto">
							<div className="hidden lg:flex items-center rounded-[10px] border px-4 py-2 border-[#9F9F9F] overflow-hidden mb-11">
								<input
									type="text"
									className="px-4 py-2 w-full outline-none"
									placeholder="Search..."
								/>
								<button className=" px-4">
									<img src="/images/search.svg" alt="Search Icon" />
								</button>
							</div>
							<div className="md:mx-[34px] mb-20 md:mb-28">
								<h3 className="text-2xl font-medium font-Poppins mb-8">
									Categories
								</h3>
								<ul className="space-y-8 h-80">
									{CATEGORIES.map((item) => (
										<li key={item.id} className="flex justify-between font-Poppins text-base font-normal text-[#9F9F9F]">
											<span className='text-[#9F9F9F] w-full cursor-pointer'>{item.categoryName}</span>
											<span className='text-[#9F9F9F] w-4/12 flex justify-end'>{item.blogCount}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="md:mx-[34px] mb-28 ">
								<h3 className="text-2xl font-medium font-Poppins mb-8">
									Recent Posts
								</h3>
								{RECENT_POSTS.map((item) => (
									<div className="flex items-center bg-white rounded-lg shadow-xs mb-10" key={item.id}>
										<div
											className="flex-none rounded-lg overflow-hidden w-16 h-16"
											style={{ minWidth: "64px" }}
										>
											<img
												src={item.imageUrl}
												alt="Notebook"
												className="object-cover w-[80px] h-[80px]"
											/>
										</div>
										<div className="flex-grow ml-4 pr-8">
											<p className="text-sm font-Poppins font-normal pb-2 ">
												{item.header}
											</p>
											<p className="text-xs font-normal text-[#9F9F9F]">
												{item.createdAt}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<BlogPaginationSection />
				</div>
			</section>
			<div className="mt-10">
				<FeaturesBannerSection />
			</div>
		</>
	);
}