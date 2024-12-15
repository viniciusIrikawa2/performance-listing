import { createContext, ReactNode, useState } from "react";
import { ProductList } from "../@Types/products";

interface FiltredItemsContextType {
    filteredItems: ProductList;
    setFilteredItems: React.Dispatch<React.SetStateAction<ProductList>>;
}

interface FilteredItemsProps {
    children: ReactNode;
}

export const FilteredItemsContext = createContext<FiltredItemsContextType>({
    filteredItems: [],
    setFilteredItems: () => {}
});

export const FilteredProductsProvider = ({children}: FilteredItemsProps) => {
    const [filteredItems, setFilteredItems] = useState<ProductList>([]);

    return (
        <FilteredItemsContext.Provider value={{ filteredItems, setFilteredItems }}>
            {children}
        </FilteredItemsContext.Provider>
    )
};