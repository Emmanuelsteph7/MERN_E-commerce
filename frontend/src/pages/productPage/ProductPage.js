import Loader from "components/loader/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "assets/images/card.jpg";
import StarRatings from "react-star-ratings";
import { clearErrors, getProductDetails } from "redux/actions/productActions";
import { addItemToCart } from "redux/actions/cartActions";
import { useAlert } from "react-alert";
import "./productPage.scss";
import MetaData from "components/metaData/MetaData";
import Quantity from "components/quantity/Quantity";

const ProductPage = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, product } = useSelector((state) => state.product);

  useEffect(() => {
    if (error) {
      alert.error(error);
      return dispatch(clearErrors);
    }

    dispatch(getProductDetails(match.params.id));
  }, [dispatch, error, alert, match.params.id]);

  const increaseStock = () => {
    let number;

    if (quantity >= product.stock) {
      number = quantity + 0;
      return setQuantity(number);
    }

    number = quantity + 1;
    setQuantity(number);
  };

  const decreaseStock = () => {
    let number;

    if (quantity <= 1) {
      number = quantity - 0;
      return setQuantity(number);
    }

    number = quantity - 1;
    setQuantity(number);
  };

  const addToCart = () => {
    dispatch(addItemToCart(match.params.id, quantity));
    alert.success("Item Successfully Added to Cart");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {product && (
            <>
              <MetaData title={product.name} />
              <section className="productPage">
                <div className="productPage__container container">
                  <div className="productPage__imageDiv">
                    <img className="productPage__image" src={Card} alt="" />
                  </div>
                  <div className="productPage__content">
                    <div className="productPage__head">
                      <h1 className="productPage__header header1">
                        {product.name}
                      </h1>
                      <p className="productPage__headProductId small">
                        <span>Product # {product._id}</span>
                      </p>
                    </div>
                    <div className="productPage__ratings">
                      <StarRatings
                        rating={product.ratings}
                        starRatedColor="#daa49a"
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="2px"
                        name="rating"
                      />
                      <span className="productPage__reviews">
                        ({product.numOfReviews} Reviews)
                      </span>
                    </div>
                    <div className="productPage__price">
                      <span className="productPage__priceAmount header5">
                        ${product.price}
                      </span>
                      <div className="productPage__priceCart">
                        {/* <div className="productPage__priceCartLogic">
                          <button
                            className="productPage__priceCartLogicBtn red"
                            onClick={decreaseStock}
                          >
                            -
                          </button>
                          <span className="productPage__priceCartLogicNumber">
                            {quantity}
                          </span>
                          <button
                            className="productPage__priceCartLogicBtn blue"
                            onClick={increaseStock}
                          >
                            +
                          </button>
                        </div> */}
                        <Quantity
                          value={quantity}
                          increaseFunc={increaseStock}
                          decreaseFunc={decreaseStock}
                        />
                        <button
                          className="productPage__priceCartBtn btn"
                          disabled={product.stock === 0}
                          onClick={addToCart}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="productPage__status">
                      <span className="productPage__statusHeader">Status:</span>
                      <span
                        className={`productPage__statusStock ${
                          product.stock <= 0 && "fail"
                        }`}
                      >
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <div className="productPage__description">
                      <h4 className="productPage__descriptionHeader header3">
                        Description
                      </h4>
                      <div className="productPage__descriptionBody">
                        {product.description}
                      </div>
                    </div>
                    <div className="productPage__submit">
                      <div className="productPage__submitInfo">
                        <span className="productPage__submitHeader">
                          Sold by:
                        </span>
                        <span className="productPage__submitSeller">
                          {product.seller}
                        </span>
                      </div>
                      <div className="productPage__submitBtnDiv">
                        <button className="productPage__submitBtn btn">
                          Submit Your Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
