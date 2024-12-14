import { useState } from "react";

interface IFilter {
    from: number;
    to: number;
}

type Input = 'from' | 'to'

const FilterBar = () => {
    const initialValue: IFilter = {
        from: 0,
        to: 0
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
                    onChange={(e) => handleChange(e, 'from')}/>
                <label htmlFor="to-input">
                    To $
                </label>
                <input id="to-input" 
                       type="number" 
                       className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4" 
                       onChange={(e) => handleChange(e, 'to')}/>
                <button className="underline cursor-pointer"> Search </button>
            </div>
        </div>
    );
};

export default FilterBar;
