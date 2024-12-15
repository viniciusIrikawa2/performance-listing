import { useContext } from "react";
import { Product } from "../@Types/products";
import { ProductsContext } from "../Context/ProductsContext";

const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <ul className="grid grid-cols-5 gap-3">
      {products.map((item: Product) => (
        <li key={item.SKU} className="my-5 flex flex-col justify-around border-2 bg-gradient-to-t from-[#dd3e3e] to-[#be1464] rounded-tr-[25px] rounded-br-[60px] rounded-bl-[25px] rounded-tl-[60px] py-6 px-6">
          <h2 className="font-bold text-lg text-white text-center mb-5">{item.productName}</h2>
          <div className="relative">
            <img src={item.image} alt={item.productName} width={150} height={150} className="rounded-full mx-auto p-5 mb-5 bg-[#da3c63]"/>
            <p className="font-semibold text-sm text-right absolute bottom-20 right-3 bg-yellow-200 px-2 py-1 rounded-lg shadow-md">
              $ {item.price}
            </p>
          </div>
          <p className="text-white leading-5 text-center text-sm">{item.description}</p>
          <button className="mt-5 bg-black rounded-full text-white py-3"> Buy </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
