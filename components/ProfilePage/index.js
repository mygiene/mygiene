import React from "react";
import Navigation from "../BaseComponent/Navigation";
import ProfileWrapper from "./style.profile";

const ProfilePage = () => {
  return (
    <>
      <ProfileWrapper>
        <div className="container">
          <div className="top-section">top section</div>
          <div className="profile-view">
            <Navigation />

            <div className="right-side">
              <h3>Profile Details</h3>
              <hr />
              <div>
                hello
                <span contentEditable="true" id="text">
                  hey
                </span>
              </div>
            </div>
          </div>
        </div>
      </ProfileWrapper>
    </>
  );
};

export default ProfilePage;
