const FilterBar = () => {
    return (
        <div className="flex items-center justify-center mx-auto my-10">
            <div className="px-6 py-3 rounded-full bg-white">
                <label htmlFor="from-input" className="">
                    From $
                </label>
                <input
                    id="from-input"
                    type="number"
                    className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4"
                />

                <label htmlFor="to-input" className="">
                    To $
                </label>
                <input id="to-input" type="number" className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4" />
                <button className="underline cursor-pointer"> Search </button>
            </div>
        </div>
    );
};

export default FilterBar;
