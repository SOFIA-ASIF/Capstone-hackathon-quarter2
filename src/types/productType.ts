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