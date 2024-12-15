import { useContext, useEffect } from "react";
import ProductsList from "./ProductsList"
import { getAllProducts } from "../services/products";
import { ProductsContext } from "../Context/ProductsContext";

const ProductsContainer = () => {
  const {setProducts} = useContext(ProductsContext); 
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductsList/>
  )
}

export default ProductsContainer;