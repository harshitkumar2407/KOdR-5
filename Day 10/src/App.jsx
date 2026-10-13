import { useContext } from 'react';
import { Ui_Theme } from './context/ThemeContext';

import Home from './components/Home.jsx';
import "./App.css"
import Login from './components/Login';
import Register from './components/Register';
import { UserInfo } from './context/MyContext';

const App = () => {

  const {user,setUser} = useContext(UserInfo)

  return (
  <>
    <Home />
    <p>App</p>
    </>);
};

export default App;