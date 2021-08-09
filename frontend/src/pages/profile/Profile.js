import MetaData from "components/metaData/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "redux/actions/authActions";
import "./profile.scss";
import LinkItem from "components/link/Link";
import Loader from "components/loader/Loader";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Your Profile" />
          <div className="profile">
            <div className="profile__container">
              <h2 className="profile__header">My Profile</h2>
              <div className="profile__body">
                <div className="profile__person">
                  <figure className="profile__avatar">
                    <img
                      src={user ? user.avatar.url : "/avatar.png"}
                      alt={user && user.name}
                      className="profile__avatarImg"
                    />
                  </figure>
                  <div className="profile__editProfile">
                    <LinkItem btn link="/profile/update" text="Edit Profile" />
                  </div>
                </div>
                <div className="profile__details">
                  <div className="profile__detailsContainer">
                    <div className="profile__detailHeader">Full Name</div>
                    <div className="profile__detailContent">
                      {user && user.name}
                    </div>
                  </div>
                  <div className="profile__detailsContainer">
                    <div className="profile__detailHeader">Email Address</div>
                    <div className="profile__detailContent">
                      {user && user.email}
                    </div>
                  </div>
                  <div className="profile__detailsContainer">
                    <div className="profile__detailHeader">Joined On</div>
                    <div className="profile__detailContent">
                      {user && String(user.createdAt).substring(0, 10)}
                    </div>
                  </div>
                  <div className="profile__detailsBtns">
                    {user && user.role !== "admin" && (
                      <LinkItem btn link="/orders" text="My Orders" />
                    )}
                    <LinkItem
                      btn
                      link="/password/update"
                      text="Change Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
