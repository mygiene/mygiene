import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { auth, firestore } from "../../firebase/utils";
import { AuthContext } from "../auth/auth";
import { FaIcon } from "../BaseComponent/FaIcon";
import UserNavigation from "../BaseComponent/UserNavigation";
import EditProfile from "./EditProfile";
import ProfileWrapper from "./style.profile";

const ProfilePage = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [submitting, setsubmitting] = useState(false);

  function deleteMyAccount() {
    const proceed = confirm(
      "Are you sure you want to delete your account? Your details will be deleted permanently."
    );
    if (proceed) {
      setsubmitting(true);
      firestore
        .collection("users")
        .doc(authState.user.id)
        .delete()
        .then(() => {
          auth.currentUser
            .delete()
            .then(() => {
              toast.info("Account Deleted Permanently!");
              setsubmitting(false);
              router.push("/");
            })
            .catch((err) => {
              setsubmitting(false);
              if (err?.message) toast.info(err?.message);
              console.log(err);
            });
        })
        .catch((err) => {
          setsubmitting(false);
          if (err?.message) toast.info(err?.message);
          console.log(err);
        });
    }
  }
  if (submitting)
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <img src="/loader2.svg" alt="loading" />
        </div>
      </div>
    );
  return (
    <>
      <ProfileWrapper>
        <div className="container">
          <div className="top-section">
            <div>
              <h3>Account</h3>
            </div>
            <hr />
          </div>
          <div className="profile-view">
            <UserNavigation />

            <div className="right-side">
              <div>
                <h3>Profile Details</h3>
                <EditProfile {...authState.user} />
                <button onClick={deleteMyAccount}>
                  Delete My Account
                  <FaIcon className="fa-trash fa-lg" />
                </button>
              </div>
              <hr />
              <div className="profile_details">
                <div className="profile_details-name">
                  <span>Name </span>
                  <span>{authState.user?.displayName}</span>
                </div>
                <div className="profile_details-email">
                  <span>Email Id</span>
                  <span>{authState.user?.email || "Add an E-mail"}</span>
                </div>
                <div className="profile_details-contact">
                  <span>Contact No</span>
                  <div>
                    <span>{authState.user?.mobile || ""}</span>
                  </div>
                </div>
                <div className="profile_details-address">
                  <span>Address</span>

                  <div>
                    {authState.user?.address?.length > 0 &&
                      authState.user?.address.map((m) => (
                        <div>
                          <span>{m.address}</span>
                          <span>({m.type})</span>
                        </div>
                      ))}
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
