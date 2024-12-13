import { Product } from "../@Types/products";

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul>
      {products.map((item: Product) => (
        <li key={item.id} className="my-5"> 
          {item.productName} 
          {item.description}
          {item.price}
        </li>
      ))}
    </ul>
  )
}

export default ProductsList;