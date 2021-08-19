import "./checkoutSteps.scss";

const CheckoutSteps = ({ shipping, confirm, payment }) => {
  return (
    <div className="checkoutSteps">
      <div className="checkoutSteps__container">
        <div className={`checkoutSteps__content ${shipping && "active"}`}>
          <span className="checkoutSteps__text">Shipping</span>
        </div>
        <div className={`checkoutSteps__content ${confirm && "active"}`}>
          <span className="checkoutSteps__text">Confirm</span>
        </div>
        <div className={`checkoutSteps__content ${payment && "active"}`}>
          <span className="checkoutSteps__text">Payment</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
