
import './App.css'
import Navbar from './components/Navbar';

// import AppRouter from './routes/AppRouter';
import { Routes ,Route,Link} from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import AppRouter from './routes/AppRouter';


const App = () => {
  return (
    <>
    <Navbar/>
    <AppRouter/>
    </>
  )
}

export default App