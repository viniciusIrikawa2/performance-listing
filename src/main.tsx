import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProductsProvider } from "./Context/ProductsContext.tsx";
import { FiltersProvider } from "./Context/FilterContext.tsx";
import { FilteredProductsProvider } from "./Context/FilteredItemsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductsProvider>
      <FilteredProductsProvider>
        <FiltersProvider>
          <App />
        </FiltersProvider>
      </FilteredProductsProvider>
    </ProductsProvider>
  </StrictMode>
);
