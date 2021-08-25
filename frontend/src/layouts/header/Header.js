import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchForm from "./components/searchForm/SearchForm";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import "./header.scss";
import LinkItem from "components/link/Link";
import { TiArrowSortedDown } from "react-icons/ti";
import { logout } from "redux/actions/authActions";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [subMenu, setSubMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  const { loading, user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setAnimateHeader(true);
      } else {
        setAnimateHeader(false);
      }
    });

    return window.removeEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setAnimateHeader(true);
      } else {
        setAnimateHeader(false);
      }
    });
  }, []);

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
    setMenu(!menu);
    dispatch(logout());
    alert.success("Log Out Successful");
  };

  const handleSubmenu = () => {
    setSubMenu(!subMenu);
    setMenu(!menu);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <div
        className={`header__container container ${animateHeader && "animate"}`}
      >
        <div className="header__brand">
          <Link to="/">
            Eming <span className="header__brandColored">ShopIT</span>
          </Link>
        </div>
        {/* the reason for rendering this search component like this is so that it can be able to receive the history passed to it.
              history is mainly received by the components in the App.js file
         */}
        {/* <Route render={({ history }) => <SearchForm history={history} />} /> */}
        <nav
          className={`header__navigation ${menu && "show"} ${
            animateHeader && "animate"
          }`}
        >
          <SearchForm />

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
                    <span className="header__userName">
                      {user && slicedName}
                    </span>
                    <span
                      className={`header__userArrow ${subMenu && "rotate"}`}
                    >
                      <TiArrowSortedDown />
                    </span>
                  </figure>
                  <div
                    className={`header__userSubMenu ${subMenu && "submenu"}`}
                  >
                    {user && user.role === "user" ? (
                      <LinkItem
                        link="/orders"
                        text="Orders"
                        onClick={handleSubmenu}
                      />
                    ) : (
                      <LinkItem
                        link="/dashboard"
                        onClick={handleSubmenu}
                        text="Dashboard"
                      />
                    )}
                    <LinkItem
                      link="/profile"
                      onClick={handleSubmenu}
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
                    onClick={handleMenu}
                    className="header__loginBtn"
                  />
                )
              )}
            </div>
          </div>
        </nav>
        <div className="header__toggle">
          <div className="header__cart">
            <Link to="/cart">
              <span className="header__cartText">Cart</span>
              <span className="header__cartNumber">{cartItems.length}</span>
            </Link>
          </div>
          <div className="header__hamburger" onClick={handleMenu}>
            {menu ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
