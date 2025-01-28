"use client"
import FeaturesBannerSection from "@/components/common/FeaturesBannerSection";
import Hero from "@/components/common/Hero";
import Image from "next/image";
import ReactStars from "react-stars";

const ComparisionPage = () => {
    return(
        <>
            <Hero title="Product Comparision"/>
            <div className="max-w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center w-full my-12 gap-8">
                    <div className="flex flex-col items-start w-[100%] md:w-[25%]">
                        <h1 className="text-[28px] font-medium">Go to product page for more products</h1>
                        <button className="border-b border-black hover:text-[#B88E2F] outline-none text-base font-Poppins font-normal py-3 mb-[54px]">
							View more
						</button>
                    </div>
                    <div className="flex flex-col items-start">
                        <Image 
                            src="/images/sofa.png" 
                            alt="soga image" 
                            width={280} 
                            height={177} 
                            className="bg-[#f9f1e7] rounded-lg w-[280px] h-[177px]" 
                        />
                        <h1 className="text-[24px] font-medium">
                            Asgaard Sofa
                        </h1>
                        <p className="font-medium text-18px">Rs. 250,000.000</p>
                        <div className="mt-4 flex gap-x-2 justify-center">
                            <p className="font-medium text-[18px]">4.7</p>
                            <ReactStars count={5} size={28} color2={'#ffd700'} className="-mt-2" />
                            <p className="text-gray-300 text-[14px]">204 Review</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <Image 
                            src="/images/outdoor-sofa.png" 
                            alt="soga image" 
                            width={280} 
                            height={177} 
                            className="bg-[#f9f1e7] rounded-lg w-[280px] h-[177px]" 
                        />
                        <h1 className="text-[24px] font-medium">
                            Outdoor Sofa Set
                        </h1>
                        <p className="font-medium text-18px">Rs. 224,000.000</p>
                        <div className="mt-4 flex gap-x-2 justify-center">
                            <p className="font-medium text-[18px]">4.2</p>
                            <ReactStars count={5} size={28} color2={'#ffd700'} className="-mt-2" />
                            <p className="text-gray-300 text-[14px]">204 Review</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="font-semibold text-[24px]">Add a product</h1>
                        <button className="text-white bg-[#B88E2F] outline-none text-base font-Poppins font-normal mt-4 p-3 rounded-lg">
							Choose a product
						</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 mb-12">
                        <thead className="w-full h-14 border border-gray-300">
                            <tr className="border border-gray-300">
                                <th scope="col" className="p-3 font-medium text-center text-[28px] border border-gray-300">General</th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center p-4">
                                <td className="p-4">Sales Package</td>
                                <td>1 sectional sofa</td>
                                <td>1 three seater, two single seater</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Model Number</td>
                                <td>TFCBLIGRBL6SRHS</td>
                                <td>DTUBLIGRBL568</td>
                                <td></td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Secondary Material</td>
                                <td>Solid Wood</td>
                                <td>Solid Wood</td>
                                <td></td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Configuration</td>
                                <td>L-shaped</td>
                                <td>L-shaped</td>
                                <td></td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Upholestory Material</td>
                                <td>Fabric + Cotton</td>
                                <td>Fabric + Cotton</td>
                                <td></td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Upholestory Color</td>
                                <td>Bright Grey & Lion</td>
                                <td>Bright Grey & Lion</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <thead className="w-full h-14 border border-gray-300">
                            <tr className="border border-gray-300">
                                <th scope="col" className="p-3 font-medium text-center text-[28px] border border-gray-300">Product</th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center p-4">
                                <td className="p-4">Filling Material</td>
                                <td>Foam</td>
                                <td>Matte</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Finish Type</td>
                                <td>Bright Grey & Lion</td>
                                <td>Bright Grey & Lion</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Adjustable Headrest</td>
                                <td>Yes</td>
                                <td>No</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Maximum Load Capacity</td>
                                <td>280 KG</td>
                                <td>300 KG</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Orgin of Manufacture</td>
                                <td>India</td>
                                <td>India</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                        </tbody>
                        <thead className="w-full h-14 border border-gray-300">
                            <tr className="border border-gray-300">
                                <th scope="col" className="p-3 font-medium text-center text-[28px] border border-gray-300">Dimensions</th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center p-4">
                                <td className="p-4">Width</td>
                                <td>265.32 cm</td>
                                <td>265.32 cm</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Height</td>
                                <td>76 cm</td>
                                <td>76 cm</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Depth</td>
                                <td>167.76 cm</td>
                                <td>167.76 cm</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Weight</td>
                                <td>45 KG</td>
                                <td>65 KG</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Seat Height</td>
                                <td>41.52 cm</td>
                                <td>41.52 cm</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Leg Height</td>
                                <td>5.46 cm</td>
                                <td>5.46 cm</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                        </tbody>
                        <thead className="w-full h-14 border border-gray-300">
                            <tr className="border border-gray-300">
                                <th scope="col" className="p-3 font-medium text-center text-[28px] border border-gray-300">Warranty</th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                                <th scope="col" className="p-3 border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center p-4">
                                <td className="p-4">Warranty Summary</td>
                                <td>1 Year Manufacturing Warranty</td>
                                <td>1.2 Year Manufacturing Warranty</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Warranty Summary Type</td>
                                <td width="400px">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
                                <td width="400px">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Covered in Warranty</td>
                                <td>Warranty Against Manufacturing Defect</td>
                                <td>Warranty of the product is limited to manufacturing defects only.</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Not Covered in Warranty</td>
                                <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                                <td>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                            <tr className="text-center p-4">
                                <td className="p-4">Domestic Warranty</td>
                                <td>1 Year</td>
                                <td>3 Months</td>
                                <td className="opacity-0">dummy data</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <FeaturesBannerSection />
        </>
    )
}

export default ComparisionPage;