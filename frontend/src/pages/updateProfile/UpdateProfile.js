import { useState, useEffect } from "react";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  clearErrors,
  updateProfile,
  updateProfileReset,
  loadUser,
} from "redux/actions/authActions";
import "./updateProfile.scss";

const UpdateProfile = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/avatar.png");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { error, isUpdated, loading } = useSelector(
    (state) => state.userUpdate
  );

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
      setAvatar(user.avatar.url);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("User Updated Successfully");
      dispatch(loadUser());

      history.push("/profile");
      dispatch(updateProfileReset());
    }
  }, [dispatch, alert, error, isUpdated, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("avatar", avatar);

    dispatch(updateProfile(formData));
  };

  const handleFile = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader(); // This is a javascript api for handling file uploads

      reader.onload = () => {
        // this is a load event
        if (reader.readyState === 2) {
          // readyState means the state of the file load. 2 means it is loaded completely
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);

      console.log(reader);
    }
  };

  return (
    <div className="updateProfile">
      <>
        <MetaData title="Update Profile" />
        <div className="updateProfile">
          <form
            className="updateProfile__form"
            onSubmit={(e) => handleSubmit(e)}
            encType="multipart/form-data"
            noValidate
          >
            <h2 className="updateProfile__header">Update Profile</h2>
            <div className="updateProfile__formGroup">
              <label className="updateProfile__formLabel">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="updateProfile__formInput"
              />
            </div>
            <div className="updateProfile__formGroup">
              <label className="updateProfile__formLabel">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="updateProfile__formInput"
              />
            </div>
            <div className="updateProfile__formGroup">
              <label className="updateProfile__formLabel">Choose Avatar</label>
              <div className="updateProfile__formGroupSub">
                <img src={avatarPreview} alt="" />
                <input
                  type="file"
                  name="avatar"
                  onChange={handleFile}
                  className="updateProfile__formInput avatar"
                  accept="images/*"
                />
              </div>
            </div>

            <div className="updateProfile__submit">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="updateProfile__submitBtn"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default UpdateProfile;
