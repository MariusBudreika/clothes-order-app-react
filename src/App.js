import React, { useState } from "react";

import "./App.css";
import CartProvider from "./assets/store/CartProvider";
import Cart from "./components/Cart/Cart";
import Clothes from "./components/Clothes/Clothes";
import Header from "./components/Layout/Header";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Clothes />
      </main>
    </CartProvider>
  );
}

export default App;
