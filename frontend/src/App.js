import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import ProductPage from "pages/productPage/ProductPage";
import Register from "pages/register/Register";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/search/:keyword" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/product/:id" component={ProductPage} />
      <Footer />
    </div>
  );
};

export default App;
