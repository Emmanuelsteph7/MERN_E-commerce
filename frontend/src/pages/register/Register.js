import { useState, useEffect } from "react";
import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, register } from "redux/actions/authActions";
import "./register.scss";
import LinkItem from "components/link/Link";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("/avatar.png");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, loading, user, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/");
    }
  }, [dispatch, alert, error, isAuthenticated, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("avatar", avatar);

    console.log(formData);
    dispatch(register(formData));
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
    <div className="register">
      <>
        <MetaData title="Register" />
        <div className="register">
          <form
            className="register__form"
            onSubmit={(e) => handleSubmit(e)}
            encType="multipart/form-data"
            noValidate
          >
            <h2 className="register__header">Register</h2>
            <div className="register__formGroup">
              <label className="register__formLabel">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="register__formInput"
              />
            </div>
            <div className="register__formGroup">
              <label className="register__formLabel">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register__formInput"
              />
            </div>
            <div className="register__formGroup">
              <label className="register__formLabel">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register__formInput"
              />
            </div>
            <div className="register__formGroup">
              <label className="register__formLabel">Choose Avatar</label>
              <div className="register__formGroupSub">
                <img src={avatarPreview} alt="" />
                <input
                  type="file"
                  name="avatar"
                  //   value={avatar}
                  onChange={handleFile}
                  className="register__formInput avatar"
                  accept="images/*"
                />
              </div>
            </div>
            <div className="register__forgotPwd">
              {/* <Link to="/password/forgot">Forgot Password?</Link> */}
              <LinkItem link="/password/forgot" text="Forgot Password?" />
            </div>

            <div className="register__submit">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="register__submitBtn"
              >
                Register
              </button>
            </div>
            <div className="register__newUser">
              {/* <Link to="signup">New User?</Link> */}
              <LinkItem link="/signup" text="New User?" />
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default Register;
