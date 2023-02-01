import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <button
        onClick={() => {
          auth.logout();
          navigate("/", { replace: true });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
