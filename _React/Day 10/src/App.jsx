import { useContext } from "react";
import { Ui_Theme } from "./context/ThemeContext.jsx";

import Home from "./components/Home.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { UserInfo } from "./context/MyContext.jsx";

const App = () => {
  const { user, setUser } = useContext(UserInfo);

  return (
    <>
      <Home />
      <p>App</p>
    </>
  );
};

export default App;
