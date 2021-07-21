import React, { useContext } from "react";
import { AuthContext } from "../auth/auth";
import UserNavigation from "../BaseComponent/UserNavigation";
import EditProfile from "./EditProfile";
import ProfileWrapper from "./style.profile";

const ProfilePage = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  return (
    <>
      <ProfileWrapper>
        <div className="container">
          <div className="top-section">
            <div>
              <h3>Account</h3>
              <span>Name</span>
            </div>
            <hr />
          </div>
          <div className="profile-view">
            <UserNavigation />

            <div className="right-side">
              <div>
                <h3>Profile Details</h3>
                <EditProfile
                  name={user?.displayName}
                  email={user?.email}
                  address={user?.address}
                />
              </div>
              <hr />
              <div className="profile_details">
                <div className="profile_details-name">
                  <span>Name </span>
                  <span>{user?.displayName}</span>
                </div>
                <div className="profile_details-email">
                  <span>Email Id</span>
                  <span>{user?.email}</span>
                </div>
                <div className="profile_details-contact">
                  <span>Contact No</span>
                  <div>
                    <span>{user?.mobile || ""}</span>
                  </div>
                </div>
                <div className="profile_details-address">
                  <span>Address</span>

                  <div>
                    <input type="textarea" />
                    <input type="text" placeholder="Home/office" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileWrapper>
    </>
  );
};

export default ProfilePage;
