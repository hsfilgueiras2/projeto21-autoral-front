import { LoginStyled } from "../../layout/login/LoginStyled";
import { useNavigate, Link } from "react-router-dom";

export default function LoginScreen(){
    const navigate = useNavigate();

    function submitLogin(event){
        event.preventDefault();
        navigate('/')
    }
    return(
        <LoginStyled>
            <h2>History Atlas</h2>
            <input placeholder='email'></input>
            <input placeholder='password'></input>
            <div onClick={submitLogin} className='loginButton'>Login</div>
            <Link to="/register"><p>Don`t have an account? Register here!</p></Link>
        </LoginStyled>
    )
}
