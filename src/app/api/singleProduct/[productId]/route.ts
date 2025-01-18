import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET( req: NextRequest, { params }: { params: Promise<{ productId: string }>}) {

    const productId = (await params).productId;

    if (!productId) {
        return NextResponse.json(
            { message: "Product ID is missing" },
            { status: 400 }
        );
    }

    try {
        const product = await client.fetch(
        `*[_type == "product" && _id == $id][0] {
            _id,
            title,
            "imageUrl": productImage.asset->url,
            price,
            tags,
            discountPercentage,
            description,
            isNew
        }`,
        { id: productId }
        );

        if (!product) {
        return NextResponse.json(
            { message: "Product not found" },
            { status: 404 }
        );
        }

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json(
            { message: "Error fetching product" },
            { status: 500 }
        );
    }
}
