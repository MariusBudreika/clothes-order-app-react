import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles.cart}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.cartSummary}>
          <span className={styles.cartPrice}>{price}</span>
          <span className={styles.cartAmount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.cartActions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
