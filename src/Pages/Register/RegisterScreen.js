import { RegisterStyled } from "../../layout/register/RegisterStyled"
import {Link, useNavigate} from "react-router-dom"

export default function RegisterScreen (){
    const navigate = useNavigate();
    function submitRegister(event){
        event.preventDefault();
        navigate('/login')
    }
    return(
    <RegisterStyled>
        <h2>History Atlas</h2>
        <input placeholder='email'></input>
        <input placeholder='password'></input>
        <input placeholder='username'></input>
        <input placeholder='picture'></input>
        <div onClick={submitRegister} className='loginButton'>Register</div>
        <Link to="/login"><p>Already have an account? Log in here!</p></Link>
    </RegisterStyled>
    )
}