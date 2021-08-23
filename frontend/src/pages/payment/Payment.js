import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import CheckoutSteps from "components/checkoutSteps/CheckoutSteps";
import { createOrder, clearErrors } from "redux/actions/orderActions";
import "./payment.scss";

const Payment = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.auth);
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const order = {
    orderItems: cartItems,
    shippingInfo,
  };

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  if (orderInfo) {
    order.itemsPrice = orderInfo.itemsPrice;
    order.shippingPrice = orderInfo.shippingPrice;
    order.taxPrice = orderInfo.taxPrice;
    order.totalPrice = orderInfo.totalPrice;
  }

  const handlePayment = () => {
    dispatch(createOrder(order));
    alert.success("Order Successful");
    history.push("/orders");
  };

  return (
    <>
      <MetaData title="Payment" />
      <div className="payment">
        <CheckoutSteps shipping confirm payment />
        <form className="payment__form" onSubmit={handlePayment} noValidate>
          <h2 className="payment__header">Card Info</h2>
          <div className="payment__formGroup">
            <label className="payment__formLabel">Card Number</label>
            <input
              type="text"
              name="cardnumber"
              className="payment__formInput"
            />
          </div>
          <div className="payment__formGroup">
            <label className="payment__formLabel">Card Expiry</label>
            <input
              type="text"
              name="cardexpiry"
              className="payment__formInput"
            />
          </div>
          <div className="payment__formGroup">
            <label className="payment__formLabel">Card CVC</label>
            <input type="number" name="cvc" className="payment__formInput" />
          </div>
          <div className="payment__submit">
            <button
              type="submit"
              //   disabled={loading ? true : false}
              className="payment__submitBtn"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
