import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
export default function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}