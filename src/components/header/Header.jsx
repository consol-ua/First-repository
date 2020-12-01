import s from "./header.module.css";
import Burger from "./burger/Burger";

const Header = () => {
  return (
    <header className={s.header}>
      <Burger />
      {/* <div className={s.test}>
        <div className={s.header__menu}></div>
      </div> */}
      <div className={s.header__logo}></div>
      <div className={s.header__search}></div>
      <div className={s.header__havigation}></div>
    </header>
  );
};

export default Header;
