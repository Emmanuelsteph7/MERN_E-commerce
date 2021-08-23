import MetaData from "components/metaData/MetaData";
import { useSelector } from "react-redux";

import "./cart.scss";
import CartCard from "./components/cartCard.js/CartCard";
import OrderSummary from "./components/orderSummary/OrderSummary";

const Cart = () => {
  // const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <MetaData title="Your Cart" />
      <div className="cart">
        <div className="cart__container">
          {cartItems.length === 0 ? (
            <h2 className="cart__header">Your cart is empty</h2>
          ) : (
            <>
              <h2 className="cart__header">
                Your Cart: {cartItems.length}{" "}
                {cartItems.length > 1 ? "items" : "item"}
              </h2>
              <div className="cart__body">
                <div className="cart__content">
                  {cartItems.map((item) => {
                    return (
                      <CartCard
                        key={item.product}
                        image={item.image}
                        link={`/product/${item.product}`}
                        itemName={item.name}
                        price={item.price}
                        quantityValue={item.quantity}
                        id={item.product}
                        stock={item.stock}
                      />
                    );
                  })}
                </div>
                <OrderSummary />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
