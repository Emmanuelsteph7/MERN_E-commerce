import Quantity from "components/quantity/Quantity";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "redux/actions/cartActions";
import { useAlert } from "react-alert";
import "./cartCard.scss";
import { Link } from "react-router-dom";

const CartCard = ({
  image,
  link,
  itemName,
  price,
  quantityValue,
  id,
  stock,
}) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  // const { cartItems } = useSelector((state) => state.cart);

  const increaseStock = (id, quantity, stock) => {
    let number;

    if (quantity >= stock) return;

    number = quantity + 1;
    dispatch(addItemToCart(id, number));
  };

  const decreaseStock = (id, quantity) => {
    let number;

    if (quantity <= 1) return;

    number = quantity - 1;
    dispatch(addItemToCart(id, number));
  };

  const removeCartItem = (id) => {
    dispatch(removeItemFromCart(id));
    alert.success("Cart item removed");
  };
  return (
    <div className="cartCard">
      <div className="cartCard__container">
        <div className="cartCard__image">
          <img
            src={image ? image : "/cartLogo.png"}
            alt=""
            className="cartCard__img"
          />
        </div>
        <div className="cartCard__info">
          <Link to={link}>{itemName}</Link>
        </div>
        <div className="cartCard__price">${price}</div>
        <Quantity
          value={quantityValue}
          increaseFunc={increaseStock}
          decreaseFunc={decreaseStock}
          id={id}
          stock={stock}
          quantity={quantityValue}
          cartItem
        />
        <div className="cartCard__delete">
          <RiDeleteBin5Fill onClick={() => removeCartItem(id)} />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
