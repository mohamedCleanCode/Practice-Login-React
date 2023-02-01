import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Login = () => {
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <label>
        Username:{" "}
        <input
          type="text"
          placeholder="Type username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          auth.login(user);
          navigate(redirectPath, { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
