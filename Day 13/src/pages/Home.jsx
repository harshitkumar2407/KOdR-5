import React, { useContext } from "react";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();
  console.log("Home Page user ->", user);

  return (
    <div>
      Welcome {user.email} <br />
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default Home;
