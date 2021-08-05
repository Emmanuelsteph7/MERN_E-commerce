import { Link } from "react-router-dom";
import SearchForm from "./components/searchForm/SearchForm";
import { Route } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link to="/">
            Eming <span className="header__brandColored">ShopIT</span>
          </Link>
        </div>
        {/* the reason for rendering this search component like this is so that it can be able to receive the history passed to it.
              history is mainly received by the components in the App.js file
         */}
        <Route render={({ history }) => <SearchForm history={history} />} />

        <div className="header__loginCart">
          <Link to="/login" className="header__loginBtn">
            Login
          </Link>
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
