import React from "react";
import Input from "../../UI/Input";
import styles from "./PieceItemForm.module.scss";

const PieceItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount :"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={styles.formBtn} type="submit">
        Add to cart
      </button>
    </form>
  );
};

export default PieceItemForm;
