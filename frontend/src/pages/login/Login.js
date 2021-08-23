import { useState, useEffect } from "react";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "redux/actions/authActions";
import "./login.scss";
import LinkItem from "components/link/Link";

const Login = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  // if a user isn't logged in and has added things to the cart and wants to checkout,
  // it should take the user to the login page. After logging in, instead of taking the user to the home,
  // it should take the user to the shopping page
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push(redirect);
    }
  }, [dispatch, alert, error, isAuthenticated, redirect, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <>
      <MetaData title="Login" />
      <div className="login">
        <form
          className="login__form"
          onSubmit={(e) => handleSubmit(e)}
          noValidate
        >
          <h2 className="login__header">Login</h2>
          <div className="login__formGroup">
            <label className="login__formLabel">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login__formInput"
            />
          </div>
          <div className="login__formGroup">
            <label className="login__formLabel">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login__formInput"
            />
          </div>
          <div className="login__forgotPwd">
            {/* <Link to="/password/forgot">Forgot Password?</Link> */}
            <LinkItem link="/password/forgot" text="Forgot Password?" />
          </div>

          <div className="login__submit">
            <button type="submit" className="login__submitBtn">
              Login
            </button>
          </div>
          <div className="login__newUser">
            {/* <Link to="signup">New User?</Link> */}
            <LinkItem link="/register" text="New User?" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
