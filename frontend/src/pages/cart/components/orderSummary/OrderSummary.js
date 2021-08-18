import { useSelector } from "react-redux";
import "./orderSummary.scss";

const OrderSummary = () => {
  const { cartItems } = useSelector((state) => state.cart);

  let totalUnits = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  let totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );
  return (
    <div className="orderSummary">
      <div className="orderSummary__container">
        <h3 className="orderSummary__header">Order Summary</h3>
        <div className="orderSummary__info">
          <div className="orderSummary__infoContent">
            <span className="orderSummary__infoContentKey">Subtotal</span>
            <span className="orderSummary__infoContentValue">
              {totalUnits} (Units)
            </span>
          </div>
          <div className="orderSummary__infoContent">
            <span className="orderSummary__infoContentKey">Est. total</span>
            <span className="orderSummary__infoContentValue">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="orderSummary__submit">
          <button className="orderSummary__btn">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
