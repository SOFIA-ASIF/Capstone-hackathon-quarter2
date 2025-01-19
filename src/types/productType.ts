export interface Product {
    _id: string;
    title: string;
    description: string;
    imageUrl: string;
    productImage: {
      _type: 'image';
      asset: {
        _ref: string;
      };
    };
    price: number;
    tags: string[];
    discountPercentage: number;
    isNew: boolean;
}
export interface IProduct {
  id: string;
  productImageUrl: string | undefined;
  productName: string | undefined;
  quantity: number;
  unitPrice: number;
}
