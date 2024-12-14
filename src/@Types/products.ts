export interface Product {
    SKU: string;
    id: string;
    productName: string;
    description: string;
    price: string;
    image: string;
};

export type ProductList = Product[];