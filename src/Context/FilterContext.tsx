import { createContext, useState, ReactNode } from 'react';
import { IFilter } from '../@Types/filter';

interface FilterProps {
    children: ReactNode;
}

interface FilterContextType {
    filter: IFilter;
    setFilter:  React.Dispatch<React.SetStateAction<IFilter>>;
}

const initialValue: IFilter = {
    minPrice: 0,
    maxPrice: 0
}

export const Context = createContext<FilterContextType>({
    filter: initialValue,
    setFilter: () => {},
});

export const FiltersProvider = ({ children }: FilterProps) => {
    const [filter, setFilter] = useState(initialValue);

    return (
        <Context.Provider value={{ filter, setFilter }}>
            {children}
        </Context.Provider>
    );
};