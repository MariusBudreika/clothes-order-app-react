import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles.item}>
      {[{ id: "c1", name: "T-shirt", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.cartTotal}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.cartBtns}>
        <button className={styles.cartBtnsClose} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.cartBtnsOrder}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
