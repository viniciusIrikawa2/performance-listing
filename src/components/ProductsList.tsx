import { ProductList } from "../@Types/products";
import { FixedSizeGrid, GridChildComponentProps } from "react-window";

interface ProductsListProps {
  filteredItems: ProductList;
}

const ProductsList = ({ filteredItems }: ProductsListProps) => {
  const columnCount = Math.floor(window.innerWidth / 250);
  const itemWidth = 250;
  const itemHeight = 420;

  const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= filteredItems.length) return null;

    const item = filteredItems[index];
    return (
      <div
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <li key={item.SKU} className="w-[230px] h-[400px] flex flex-col justify-between border-2 bg-gradient-to-t from-[#dd3e3e] to-[#be1464] rounded-xl p-4">
          <h2 className="font-bold text-lg text-white text-center mb-3 truncate">{item.productName}</h2>
          <div className="relative flex justify-center items-center">
            <img
              src={item.image}
              alt={item.productName}
              className="w-[150px] h-[150px] rounded-full bg-[#da3c63] p-3 mb-4"/>
            <p className="font-semibold text-sm text-right absolute bottom-2 right-2 bg-white px-2 py-1 rounded-lg shadow-md">
              $ {item.price}
            </p>
          </div>
          <p className="text-white text-sm text-center line-clamp-3 mb-3">{item.description}</p>
          <button className="mt-auto bg-black rounded-full text-white py-2">Buy</button>
        </li>
      </div>
    );
  };

  return (
    <>
      {filteredItems.length > 0 ? (
        <FixedSizeGrid
          columnCount={columnCount}
          rowCount={Math.ceil(filteredItems.length / columnCount)}
          columnWidth={itemWidth}
          rowHeight={itemHeight}
          height={window.innerHeight - 100}
          width={window.innerWidth - 20}
        >
          {Cell}
        </FixedSizeGrid>
      ) : (
        <p className="text-[#5b5b5b] text-center">No results</p>
      )}
    </>
  );
};

export default ProductsList;
