import { useContext, useMemo } from "react";
import { Input } from "../@Types/filter";
import { Context } from "../Context/FilterContext";
import { ProductsContext } from "../Context/ProductsContext";

const FilterBar = () => {
  const { filter, setFilter } = useContext(Context);
  const { products, setProducts } = useContext(ProductsContext);

  const worker: Worker = useMemo(() => {
    return new Worker(new URL("/src/worker.ts", import.meta.url));
  }, []);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>, type: Input) => {
    const { value } = evt.target;

    setFilter({
      ...filter,
      [type]: Number(value),
    });
  };

  const handleSearch = () => {
    worker.postMessage({ products, filter });
  };

  // TODO: REMOVE THIS LINE
  worker.onmessage = (event) => {
    setProducts(event.data);
  };

  return (
    <div className="flex items-center justify-center mx-auto my-10">
      <div className="px-6 py-3 rounded-full bg-white">
        <label htmlFor="from-input">From $</label>
        <input
          id="from-input"
          type="number"
          className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4"
          onChange={(e) => handleChange(e, "minPrice")}
        />
        <label htmlFor="to-input">To $</label>
        <input
          id="to-input"
          type="number"
          className="bg-[#e7e7e7] px-3 py-2 w-[100px] h-[30px] rounded-md ml-2 mr-4"
          onChange={(e) => handleChange(e, "maxPrice")}
        />
        <button className="underline cursor-pointer" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
