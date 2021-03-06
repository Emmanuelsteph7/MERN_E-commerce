import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "countries-list";
import { saveShippingInfo } from "redux/actions/cartActions";
import { useState } from "react";
import "./shipping.scss";
import CheckoutSteps from "components/checkoutSteps/CheckoutSteps";

const Shipping = ({ history }) => {
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [country, setCountry] = useState(shippingInfo.country);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      address,
      city,
      postalCode,
      phoneNo,
      country,
    };

    dispatch(saveShippingInfo(data));
    history.push("/confirm");
  };

  const countriesList = Object.values(countries).map((country) => (
    <option value={country.name} key={country.name}>
      {country.name}
    </option>
  ));

  return (
    <>
      <MetaData title="Shipping Info" />
      <div className="shipping">
        <CheckoutSteps shipping />
        <form
          className="shipping__form form"
          onSubmit={(e) => handleSubmit(e)}
          noValidate
        >
          <h2 className="shipping__header header1">Shipping Info</h2>
          <div className="shipping__formGroup">
            <label className="shipping__formLabel">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="shipping__formInput"
            />
          </div>
          <div className="shipping__formGroup">
            <label className="shipping__formLabel">City</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="shipping__formInput"
            />
          </div>
          <div className="shipping__formGroup">
            <label className="shipping__formLabel">Phone Number</label>
            <input
              type="number"
              name="phoneno"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="shipping__formInput"
            />
          </div>
          <div className="shipping__formGroup">
            <label className="shipping__formLabel">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="shipping__formInput"
            />
          </div>
          <div className="shipping__formGroup">
            <label className="shipping__formLabel">Country</label>
            <select
              name="country"
              id=""
              className="shipping__formInput"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countriesList}
            </select>
          </div>

          <div className="shipping__submit">
            <button
              type="submit"
              //   disabled={loading ? true : false}
              className="shipping__submitBtn btn"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Shipping;
