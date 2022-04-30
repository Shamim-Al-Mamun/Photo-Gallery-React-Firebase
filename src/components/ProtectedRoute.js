import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return (
      <div className="App ">
        <Navigate to="/" />
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
