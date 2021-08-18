import { Link } from "react-router-dom";
import SearchForm from "./components/searchForm/SearchForm";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import "./header.scss";
import LinkItem from "components/link/Link";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import { logout } from "redux/actions/authActions";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [subMenu, setSubMenu] = useState(false);

  const { loading, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  let slicedName;
  if (user && user.name) {
    let name = user.name;
    let spaceIndex = name.indexOf(" ");

    if (
      spaceIndex > -1 &&
      name[spaceIndex - 1] !== " " &&
      name[spaceIndex + 1] !== " "
    ) {
      slicedName = name.slice(0, spaceIndex);
    } else {
      slicedName = name;
    }
  }

  const handleLogout = () => {
    setSubMenu(!subMenu);
    dispatch(logout());
    alert.success("Logged Out Successfully");
  };

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
          <div className="header__cart">
            <Link to="/cart">
              <span className="header__cartText">Cart</span>
              <span className="header__cartNumber">{cartItems.length}</span>
            </Link>
          </div>
          <div className="header__user">
            {user ? (
              <>
                <figure
                  className="header__userDetails"
                  onClick={() => setSubMenu(!subMenu)}
                >
                  <img
                    className="header__userAvatar"
                    src={user.avatar.url ? user.avatar.url : "/avatar.png"}
                    alt=""
                  />
                  <span className="header__userName">{user && slicedName}</span>
                  <span className={`header__userArrow ${subMenu && "rotate"}`}>
                    <TiArrowSortedDown />
                  </span>
                </figure>
                <div className={`header__userSubMenu ${subMenu && "submenu"}`}>
                  {user && user.role === "user" ? (
                    <LinkItem
                      link="/orders"
                      text="Orders"
                      onClick={() => setSubMenu(!subMenu)}
                    />
                  ) : (
                    <LinkItem
                      link="/dashboard"
                      onClick={() => setSubMenu(!subMenu)}
                      text="Dashboard"
                    />
                  )}
                  <LinkItem
                    link="/profile"
                    onClick={() => setSubMenu(!subMenu)}
                    text="Profile"
                  />
                  <LinkItem link="/" text="Logout" onClick={handleLogout} />
                </div>
              </>
            ) : (
              !loading && (
                <LinkItem
                  link="/login"
                  btn
                  text="Login"
                  className="header__loginBtn"
                />
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
