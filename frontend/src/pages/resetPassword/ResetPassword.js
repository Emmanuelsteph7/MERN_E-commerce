import React, { Fragment, useState, useEffect } from "react";

import MetaData from "components/metaData/MetaData";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "redux/actions/authActions";
import "./resetPassword.scss";

const ResetPassword = ({ history, match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, success } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Password updated successfully");
      history.push("/login");
    }
  }, [dispatch, alert, error, success, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("password", password);
    formData.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(match.params.token, formData));
  };

  return (
    <div className="resetPassword">
      <>
        <MetaData title="Reset Password" />
        <div className="resetPassword">
          <form
            className="resetPassword__form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
          >
            <h2 className="resetPassword__header">Forgot Password</h2>
            <div className="resetPassword__formGroup">
              <label className="resetPassword__formLabel">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="resetPassword__formInput"
              />
            </div>
            <div className="resetPassword__formGroup">
              <label className="resetPassword__formLabel">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="resetPassword__formInput"
              />
            </div>

            <div className="resetPassword__submit">
              <button type="submit" className="resetPassword__submitBtn btn">
                Set Password
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default ResetPassword;
