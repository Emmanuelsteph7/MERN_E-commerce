import { Link } from "react-router-dom";
import "./cartItem.scss";

const CartItem = ({ image, name, product, quantity, price }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__container">
        <div className="cartItem__image">
          <img
            src={image ? image : "/cartLogo.png"}
            alt=""
            className="cartCard__img"
          />
        </div>
        <div className="cartItem__name">
          <Link to={`/product/${product}`}>{name}</Link>
        </div>
        <div className="cartItem__amount">
          {quantity} x ${price.toFixed(2)} ={" "}
          <span className="cartItem__amountBold">
            ${(quantity * price).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
