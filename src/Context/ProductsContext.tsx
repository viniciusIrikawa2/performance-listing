import { createContext, useState, ReactNode } from 'react';
import { ProductList } from '../@Types/products';

interface ProductsContextType {
    products: ProductList;
    setProducts: React.Dispatch<React.SetStateAction<ProductList>>;
}
interface ProductsProps {
    children: ReactNode;
}

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    setProducts: () => {},
});

export const ProductsProvider = ({ children }: ProductsProps) => {
    const [products, setProducts] = useState<ProductList>([]);

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};