import { useEffect, useState } from "react";
import "./priceSlider.scss";

const PriceSlider = ({ minValue, maxValue, name, sliderFunc, value }) => {
  const [mousePositionX, setMousePositionX] = useState(null);
  const [mousePositionWidth, setMousePositionWidth] = useState(null);

  useEffect(() => {
    let input = document.querySelector(".priceSlider__input");
    const handleMouse = (e) => {
      setMousePositionX(e.offsetX);
      setMousePositionWidth(e.target.offsetWidth);
      //   console.log(e.target.offsetWidth);
    };

    input.addEventListener("mousemove", handleMouse);

    return () => input.removeEventListener("mousemove", handleMouse);
  });

  let width = Math.floor((value / maxValue) * 100);
  let offsetWidth = Math.floor((mousePositionX / mousePositionWidth) * 100);
  return (
    <div className="priceSlider">
      <div className="priceSlider__main">
        <span className="priceSlider__minValue">${value}</span>
        <div className="priceSlider__inputContainer">
          <span
            className="priceSlider__toolTipText"
            style={{ left: `calc(${width}% - 22.5px)` }}
          >
            ${value}
          </span>
          <span
            className="priceSlider__toolTipText hover"
            style={{ left: `calc(${offsetWidth}% - 22.5px)` }}
          >
            ${offsetWidth * 10}
          </span>
          <div
            className="priceSlider__mainBg"
            style={{ width: `${width}%` }}
          ></div>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            name={name}
            value={value}
            // step={5}
            className="priceSlider__input"
            onInput={sliderFunc}
          />
        </div>
        <span className="priceSlider__maxValue">${maxValue}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
