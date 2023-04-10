import { useState } from "react";
import { LoginStyled } from "../../layout/login/LoginStyled";
import { useNavigate, Link } from "react-router-dom";
import { postLogin } from "../../services/loginApi";

export default function LoginScreen(props){
    const setToken = props.setToken
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    async function submitLogin(event){
        event.preventDefault();
        const response = await postLogin({email,password})
        console.log(response)
        if(response){
        setToken(response.token)
        navigate("/")
        }
        
    }
    return(
        <LoginStyled>
            <h2>History Atlas</h2>
            <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input>
            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'></input>
            <div onClick={submitLogin} className='loginButton'>Login</div>
            <Link to="/register"><p>Don`t have an account? Register here!</p></Link>
        </LoginStyled>
    )
}
