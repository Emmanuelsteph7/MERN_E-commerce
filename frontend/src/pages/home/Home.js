import "./home.scss";
import ProjectCard from "./components/productCard/ProjectCard";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "redux/actions/productActions";
import { useEffect } from "react";
import Loader from "components/loader/Loader";
import { useAlert } from "react-alert";
import { useState } from "react";
import Pagination from "components/pagination/Pagination";
import PriceSlider from "components/priceSlider/PriceSlider";
import RatingsFilter from "components/ratingsFilter/RatingsFilter";

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const categories = [
    "Electronics",
    "Camera",
    "Laptop",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ];

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, products, productsCount, resPerPage } = useSelector(
    (state) => state.allProducts
  );

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(keyword, currentPage, price, category, ratings));
  }, [dispatch, alert, currentPage, keyword, price, error, category, ratings]);

  const handlePrice = (e) => {
    let newArr = [e.target.value, price[1]];
    setPrice(newArr);
  };

  const handleCategory = (e, val) => {
    let categoryItems = document.querySelectorAll(".home__categoryItem");
    categoryItems.forEach((item) => item.classList.remove("active"));

    e.target.classList.add("active");

    setCategory(val);
  };

  let mappedProducts = [];

  if (products) {
    mappedProducts = products.map((product) => {
      return <ProjectCard key={product._id} product={product} />;
    });
  }

  return (
    <>
      <MetaData title="Buy Best Products Online" />
      <section className="home">
        <div className="home__container container">
          <h1 className="home__header header1">Latest Products</h1>
          <div className="home__head">
            <div className="home__filter">
              <h4 className="home__filterHeader header3">Filter by Price</h4>
              <PriceSlider
                maxValue={price[1]}
                value={price[0]}
                minValue={1}
                sliderFunc={handlePrice}
              />
            </div>
            <div className="home__ratingsFilter">
              <h4 className="home__ratingsFilterHeader header3">
                Filter by Ratings
              </h4>
              <RatingsFilter value={ratings} ratingsFunc={setRatings} />
            </div>
          </div>
          <div className="home__category">
            <h4 className="home__categoryHeader header3">Categories</h4>
            <div className="home__categoryItems">
              <span
                className="home__categoryItem active"
                onClick={(e) => {
                  handleCategory(e, "");
                }}
              >
                All
              </span>
              {categories.map((category) => {
                return (
                  <span
                    className="home__categoryItem"
                    onClick={(e) => {
                      handleCategory(e, category);
                    }}
                    key={category}
                  >
                    {category}
                  </span>
                );
              })}
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <>
              {mappedProducts.length > 0 ? (
                <>
                  <div className="home__cardSection">{mappedProducts}</div>
                </>
              ) : (
                <>
                  <p className="home__cardSectionNull header5">
                    No product found!!!
                  </p>
                </>
              )}
              <div className="home__pagination">
                {resPerPage && productsCount ? (
                  <Pagination
                    currentPage={currentPage}
                    currentPageFunc={setCurrentPage}
                    dataLength={productsCount}
                    postsPerPage={resPerPage}
                  />
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
