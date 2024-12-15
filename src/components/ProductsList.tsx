import { useContext } from "react";
import { Product } from "../@Types/products";
import { FilteredItemsContext } from "../Context/FilteredItemsContext";

const ProductsList = () => {
  const { filteredItems } = useContext(FilteredItemsContext);
 
  return (
    <>
      <ul className="grid grid-cols-5 gap-3">
        {filteredItems.length > 0 && filteredItems.map((item: Product) => (
          <li key={item.SKU} className="my-2 flex flex-col justify-around border-2 bg-gradient-to-t from-[#dd3e3e] to-[#be1464] rounded-xl py-6 px-6">
            <h2 className="font-bold text-lg text-white text-center mb-5">{item.productName}</h2>
            <div className="relative">
              <img src={item.image} alt={item.productName} width={150} height={150} className="rounded-full mx-auto p-5 mb-5 bg-[#da3c63]"/>
              <p className="font-semibold text-sm text-right absolute bottom-20 right-3 bg-white px-2 py-1 rounded-lg shadow-md">
                $ {item.price}
              </p>
            </div>
            <p className="text-white leading-5 text-center text-sm">{item.description}</p>
            <button className="mt-5 bg-black rounded-full text-white py-3"> Buy </button>
          </li>
        ))}
      </ul>
      {filteredItems.length === 0 && (
        <p className="text-[#5b5b5b] text-center"> No results </p>
      )}
    </>
  );
};

export default ProductsList;
