import SearchForm from "./components/searchForm/SearchForm";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          Eming <span className="header__brandColored">ShopIT</span>
        </div>
        <SearchForm />
        <div className="header__loginCart">
          <button className="header__loginBtn">Login</button>
          <div className="header__cart">
            <span className="header__cartText">Cart</span>
            <span className="header__cartNumber">2</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
