import { useState } from "react";
import { RegisterStyled } from "../../layout/register/RegisterStyled"
import {Link, useNavigate} from "react-router-dom"
import { postRegister } from "../../services/registerApi";


export default function RegisterScreen(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();
    const [username, setUsername] = useState();

    const navigate = useNavigate();
    async function submitRegister(event){
        const response = await postRegister({email,password,username,image})
        console.log(response)
        event.preventDefault();
        navigate('/login')
    }
    return(
    <RegisterStyled>
        <h2>History Atlas</h2>
        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'></input>
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'></input>
        <input onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'></input>
        <input onChange={(e)=>{setImage(e.target.value)}} placeholder='image URL'></input>
        <div onClick={submitRegister} className='loginButton'>Register</div>
        <Link to="/login"><p>Already have an account? Log in here!</p></Link>
    </RegisterStyled>
    )
}