import StarRatings from "react-star-ratings";
import Card from "assets/images/card.jpg";
import "./projectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__imageDiv">
          <img className="card__image" src={Card} alt="" />
        </div>
        <div className="card__body">
          <h3 className="card__header">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h3>
          <div className="card__ratingDiv">
            <StarRatings
              rating={product.ratings}
              starRatedColor="#daa49a"
              numberOfStars={5}
              starDimension="20px"
              // starSpacing="5px"
              name="rating"
            />
            <br />({product.numOfReviews} Reviews)
          </div>
          <p className="card__price">{`$${product.price}`}</p>
        </div>
        <div className="card__btnDiv">
          <Link to={`/product/${product._id}`}>
            <button className="card__btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
