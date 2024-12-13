import { useEffect, useState } from "react";
import ProductsList from "./ProductsList"
import { getAllProducts } from "../services/products";

const ProductsContainer = () => {
  const [products, setProducts] = useState();

  console.log(products);
  
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