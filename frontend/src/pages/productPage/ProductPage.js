import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "redux/actions/productActions";

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const { loading, error, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch]);
  
  return (
    <section className="productPage">
      <div className="productPage__container">
        <div className="productPage__imageDiv"></div>
        <div className="productPage__content">
          <h1 className="productPage__header">{product.name}</h1>
          <div className="productPage__ratings">
          <StarRatings
              rating={product.ratings}
              starRatedColor="#daa49a"
              numberOfStars={5}
              starDimension="20px"
              // starSpacing="5px"
              name="rating"
            />
            
          </div>
          <div className="productPage__price"></div>
          <div className="productPage__status"></div>
          <div className="productPage__description"></div>
          <div className="productPage__submit"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
