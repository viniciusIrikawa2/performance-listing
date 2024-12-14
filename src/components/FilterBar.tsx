import { useState } from "react";

interface IFilter {
    minPrice: number;
    maxPrice: number;
}

type Input = 'minPrice' | 'maxPrice'

const FilterBar = () => {
    const initialValue: IFilter = {
        minPrice: 0,
        maxPrice: 0
    }
    const [filter, setFilter] = useState(initialValue);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, type: Input) => {
        const { value } = evt.target

        setFilter({
            ...filter,
            [type]: Number(value)
        })
    };

    return (
        <div className="flex items-center justify-center mx-auto my-10">
            <div className="px-6 py-3 rounded-full bg-white">
                <label htmlFor="from-input">
                    From $
                </label>
                <input
                    id="from-input"
                    type="number"
                    className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4"
                    onChange={(e) => handleChange(e, 'minPrice')}/>
                <label htmlFor="to-input">
                    To $
                </label>
                <input id="to-input" 
                       type="number" 
                       className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4" 
                       onChange={(e) => handleChange(e, 'maxPrice')}/>
                <button className="underline cursor-pointer"> Search </button>
            </div>
        </div>
    );
};

export default FilterBar;
