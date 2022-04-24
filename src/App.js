import React, { useState } from "react";

import "./App.css";
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
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Clothes />
      </main>
    </>
  );
}

export default App;
