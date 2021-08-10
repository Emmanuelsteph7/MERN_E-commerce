import { useState, useEffect } from "react";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  updatePassword,
  updatePasswordReset,
} from "redux/actions/authActions";
import "./updatePassword.scss";

const UpdatePassword = ({ history }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.userUpdate
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Password Updated Successfully");

      history.push("/profile");
      dispatch(updatePasswordReset());
    }
  }, [dispatch, alert, error, isUpdated, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("password", password);

    dispatch(updatePassword(formData));
  };
  return (
    <div className="updatePassword">
      <>
        <MetaData title="Update Password" />
        <div className="updatePassword">
          <form
            className="updatePassword__form"
            onSubmit={(e) => handleSubmit(e)}
            noValidate
          >
            <h2 className="updatePassword__header">Update Password</h2>
            <div className="updatePassword__formGroup">
              <label className="updatePassword__formLabel">Old Password</label>
              <input
                type="password"
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="updatePassword__formInput"
              />
            </div>
            <div className="updatePassword__formGroup">
              <label className="updatePassword__formLabel">New Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="updatePassword__formInput"
              />
            </div>

            <div className="updatePassword__submit">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="updatePassword__submitBtn"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default UpdatePassword;
