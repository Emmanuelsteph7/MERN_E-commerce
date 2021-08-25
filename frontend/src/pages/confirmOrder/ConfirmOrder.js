import MetaData from "components/metaData/MetaData";
import { useSelector } from "react-redux";
import CheckoutSteps from "components/checkoutSteps/CheckoutSteps";
import "./confirmOrder.scss";
import OrderSummary from "pages/cart/components/orderSummary/OrderSummary";
import CartItem from "./cartItems/CartItem";

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  let mappedCartItems = cartItems.map((cart) => {
    let { image, name, product, quantity, price } = cart;

    return (
      <CartItem
        key={cart.product}
        image={image}
        name={name}
        product={product}
        quantity={quantity}
        price={price}
      />
    );
  });

  return (
    <>
      <MetaData title="Confirm Order" />
      <div className="confirmOrder">
        <CheckoutSteps shipping confirm />
        <div className="confirmOrder__container container">
          <div className="confirmOrder__body">
            <div className="confirmOrder__info">
              <h3 className="confirmOrder__header">Shipping Info</h3>
              <div className="confirmOrder__infoContainer">
                <div className="confirmOrder__content">
                  <span className="confirmOrder__contentHeader">Name:</span>
                  <span className="confirmOrder__contentInfo">
                    {user && user.name}
                  </span>
                </div>
                <div className="confirmOrder__content">
                  <span className="confirmOrder__contentHeader">Phone:</span>
                  <span className="confirmOrder__contentInfo">
                    {shippingInfo && shippingInfo.phoneNo}
                  </span>
                </div>
                <div className="confirmOrder__content">
                  <span className="confirmOrder__contentHeader">Address:</span>
                  <span className="confirmOrder__contentInfo">
                    {shippingInfo &&
                      `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}
                  </span>
                </div>
              </div>
            </div>
            <div className="confirmOrder__cartItems">
              <h3 className="confirmOrder__cartItemsHeader">
                Your Cart Items:
              </h3>

              {mappedCartItems}

              {/* <div className="confirmOrder__infoContainer">
                <div className="confirmOrder__content">
                  <span className="confirmOrder__contentHeader">Name:</span>
                  <span className="confirmOrder__contentInfo">gsdgdgd</span>
                </div>
                <div className="confirmOrder__content">
                  <span className="confirmOrder__contentHeader">Name:</span>
                  <span className="confirmOrder__contentInfo">gsdgdgd</span>
                </div>
                <div className="confirmOrder__content">
                  <span className="confirmOrder__contentHeader">Name:</span>
                  <span className="confirmOrder__contentInfo">gsdgdgd</span>
                </div>
              </div> */}
            </div>
          </div>
          <OrderSummary confirm />
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
