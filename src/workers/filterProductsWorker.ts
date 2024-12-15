import { Product } from "../@Types/products";

onmessage = function (event) {
  const { products, filter } = event.data;

  const parsePrice = (price: string | number) => {
    const parsedPrice = Number(price);
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  const processedProducts = products.filter((product: Product) => {
    const productPrice = parsePrice(product.price);
    return productPrice >= filter.minPrice && productPrice <= filter.maxPrice;
  });

  postMessage(processedProducts);
};