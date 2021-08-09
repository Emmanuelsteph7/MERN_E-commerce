import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import ProductPage from "pages/productPage/ProductPage";
import Register from "pages/register/Register";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import { loadUser } from "redux/actions/authActions";
import { useDispatch } from "react-redux";
import Profile from "pages/profile/Profile";
import ProtectedRoute from "components/protectedRoute/ProtectedRoute";
import UpdateProfile from "pages/updateProfile/UpdateProfile";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/search/:keyword" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/product/:id" component={ProductPage} />
      <ProtectedRoute path="/profile" component={Profile} exact />
      <ProtectedRoute path="/profile/update" component={UpdateProfile} />

      <Footer />
    </div>
  );
};

export default App;
