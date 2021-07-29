import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";
import Home from "pages/home/Home";
import ProductPage from "pages/productPage/ProductPage";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductPage} />
      <Footer />
    </div>
  );
};

export default App;
