import React from "react";
import Navigation from "../BaseComponent/Navigation";
import UserNavigation from "../BaseComponent/UserNavigation";
import EditProfile from "./EditProfile";
import ProfileWrapper from "./style.profile";

const ProfilePage = () => {
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
                <EditProfile />
              </div>
              <hr />
              <div className="profile_details">
                <div className="profile_details-name">
                  <span>Name </span>
                  <span>John abc</span>
                </div>
                <div className="profile_details-email">
                  <span>Email Id</span>
                  <span>xyz@gmail.com</span>
                </div>
                <div className="profile_details-contact">
                  <span>Contact No</span>
                  <div>
                    <details open>
                      <summary>Home</summary>
                      <p>xxx-xxx-xxx</p>
                    </details>
                    <details open>
                      <summary>Office</summary>
                      <p>xxx-xxx-xxx</p>
                    </details>
                  </div>
                </div>
                <div className="profile_details-address">
                  <span>Address</span>
                  <div>
                    <details open>
                      <summary>Home</summary>
                      <p>xxx-xxx-xxx</p>
                    </details>
                    <details open>
                      <summary>Office</summary>
                      <p>xxx-xxx-xxx</p>
                    </details>
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
