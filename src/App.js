import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import GlobalStyle from './GlobalStyles';
import { useState } from 'react';
export default function App(){
    const [token, setToken] = useState()
    return(
        <>
        <GlobalStyle/>
        <Router>
            <Routes>
                <Route token={token} path="/" element={<Home/>}></Route>
                <Route setToken={(e)=>setToken(e)} path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
        </>
    )
}