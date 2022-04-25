import clothesImage from "../../assets/clothes.jpg";
import Button from "../Cart/Button";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Clothes Market</h1>
        <Button onClick={props.onShowCart} />
      </header>
      <div className={styles.headerImgBox}>
        <img className={styles.headerImg} src={clothesImage} alt="" />
      </div>
    </>
  );
};

export default Header;
