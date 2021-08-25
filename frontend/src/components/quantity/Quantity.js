import "./quantity.scss";

const Quantity = ({
  value,
  increaseFunc,
  decreaseFunc,
  id,
  quantity,
  stock,
  cartItem,
}) => {
  const handleIncrease = () => {
    increaseFunc(id, quantity, stock);
  };

  const handleDecrease = () => {
    decreaseFunc(id, quantity);
  };
  return (
    <div className="quantity">
      <button
        className="quantity__decrease btn"
        onClick={cartItem ? handleDecrease : decreaseFunc}
      >
        -
      </button>
      <span className="quantity__number">{value}</span>
      <button
        className="quantity__increase btn"
        onClick={cartItem ? handleIncrease : increaseFunc}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
