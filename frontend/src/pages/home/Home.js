import "./home.scss";
import ProjectCard from "./components/productCard/ProjectCard";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "redux/actions/productActions";
import { useEffect } from "react";
import Loader from "components/loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.allProducts
  );

  console.log(error);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts());
  }, [dispatch, alert, error]);

  let mappedProducts = [];

  if (products) {
    mappedProducts = products.map((product) => {
      return <ProjectCard key={product._id} product={product} />;
    });
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Buy Best Products Online" />
          <section className="home">
            <div className="home__container">
              <h1 className="home__header">Latest Products</h1>
              <div className="home__cardSection">
                {products && mappedProducts}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
