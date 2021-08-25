import { useState, useEffect } from "react";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, forgotPassword } from "redux/actions/authActions";
import "./forgotPassword.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", email);

    dispatch(forgotPassword(formData));
  };
  return (
    <div className="forgotPassword">
      <>
        <MetaData title="Forgot Password" />
        <div className="forgotPassword">
          <form
            className="forgotPassword__form form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
          >
            <h2 className="forgotPassword__header header1">Forgot Password</h2>
            <div className="forgotPassword__formGroup">
              <label className="forgotPassword__formLabel">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="forgotPassword__formInput"
              />
            </div>

            <div className="forgotPassword__submit">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="forgotPassword__submitBtn btn"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default ForgotPassword;
