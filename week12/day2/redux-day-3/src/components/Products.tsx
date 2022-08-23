import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const Products = (props: any): JSX.Element => {
  const dispatch = useAppDispatch();
  console.log(props);
  const products = useAppSelector((state) => state.products);
  return (
    <div className="productContainer">
      <h2>Products</h2>
      <div className="product">
        {products.map((product) => {
          return (
            <div className="productItems">
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button
                className="productButton"
                key={product.description}
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
