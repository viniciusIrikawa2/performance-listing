import { useEffect, useState } from "react";
import ProductsList from "./ProductsList"
import { getAllProducts } from "../services/products";
import { ProductList } from "../@Types/products";

const ProductsContainer = () => {
  const [products, setProducts] = useState<ProductList>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductsList products={products}/>
  )
}

export default ProductsContainer;