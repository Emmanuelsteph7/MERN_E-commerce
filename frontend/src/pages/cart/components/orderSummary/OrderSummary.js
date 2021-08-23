import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./orderSummary.scss";

const OrderSummary = ({ confirm }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();

  let totalUnits = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );

  let totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    // if a user isn't logged in and has added things to the cart and wants to checkout,
    // it should take the user to the login page. After logging in, instead of taking the user to the home,
    // it should take the user to the shopping page
    history.push("/login?redirect=shipping");
  };

  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 25; // based on your charges
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2)); // based on your country's tax. this one is 5%
  const totalOrderPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const handleProceedToPayment = () => {
    const data = {
      itemsPrice: itemsPrice.toFixed(2),
      shippingPrice,
      taxPrice,
      totalOrderPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));
    history.push("/payment");
  };

  return (
    <div className="orderSummary">
      <div className="orderSummary__container">
        <h3 className="orderSummary__header">Order Summary</h3>
        <div className="orderSummary__info">
          {confirm ? (
            <>
              <div className="orderSummary__infoContent">
                <span className="orderSummary__infoContentKey">Subtotal</span>
                <span className="orderSummary__infoContentValue">
                  ${itemsPrice.toFixed(2)}
                </span>
              </div>
              <div className="orderSummary__infoContent">
                <span className="orderSummary__infoContentKey">Shipping</span>
                <span className="orderSummary__infoContentValue">
                  ${shippingPrice.toFixed(2)}
                </span>
              </div>
              <div className="orderSummary__infoContent">
                <span className="orderSummary__infoContentKey">Tax</span>
                <span className="orderSummary__infoContentValue">
                  ${taxPrice.toFixed(2)}
                </span>
              </div>
              <div className="orderSummary__infoContent">
                <span className="orderSummary__infoContentKey">Total</span>
                <span className="orderSummary__infoContentValue">
                  ${totalOrderPrice}
                </span>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="orderSummary__submit">
          {confirm ? (
            <button
              className="orderSummary__btn"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </button>
          ) : (
            <button className="orderSummary__btn" onClick={handleCheckout}>
              Check out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
