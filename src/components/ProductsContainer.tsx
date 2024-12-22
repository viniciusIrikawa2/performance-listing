import { useContext, useEffect } from "react";
import ProductsList from "./ProductsList"
import { getAllProducts } from "../services/products";
import { ProductsContext } from "../Context/ProductsContext";
import { FilteredItemsContext } from "../Context/FilteredItemsContext";

const ProductsContainer = () => {
  const {setProducts} = useContext(ProductsContext); 
  const { filteredItems, setFilteredItems } = useContext(FilteredItemsContext);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setFilteredItems(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductsList filteredItems={filteredItems}/>
  )
}

export default ProductsContainer;