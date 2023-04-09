import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import LoginScreen from './Pages/Login/LoginScreen';
import RegisterScreen from './Pages/Register/RegisterScreen';
import HomeScreen from './Pages/Home/HomeScreen';
export default function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>}></Route>
                <Route path="/login" element={<LoginScreen/>}></Route>
                <Route path="/register" element={<RegisterScreen/>}></Route>
            </Routes>
        </Router>
    )
}