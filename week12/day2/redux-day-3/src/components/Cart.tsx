import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import rootReducer from "../reducers/rootReducer";
// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://mxakcphctxajogkuteth.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDE0NTg3OCwiZXhwIjoxOTM1NzIxODc4fQ.0qra9FQYuKCkgMteZ0ZAe2wrMx2v1IFGwsU60Oi4KwY";
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Cart = (): JSX.Element => {
  const cart = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  // const sendToDatabase = async () => {
  //   const { data, error } = await supabase
  //     .from("ProductsDatabase")
  //     .insert([{ name: "Amanda", items: cart }]);
  //   console.log(data);
  //   console.log(error);
  // };
  return (
    <div className="cartContainer">
      <h3>Cart</h3>
      {cart.map((item) => {
        return (
          <div>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      <button className="productButton">
        {/* Add this to button above ---> onClick={sendToDatabase} */}
        Complete Order
      </button>
    </div>
  );
};

export default Cart;
