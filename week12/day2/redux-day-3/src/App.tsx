import React from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import Products from "./components/Products";
import Cart from "./components/Cart";
// import { supabase } from "./supabaseClient";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Benji Shops</h1>
      <div className="storeContainer">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
