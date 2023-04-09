
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
/*
const LoginStyled = styled.div`
width:100vw;
height:100vh;
background: #FFFFFF;
display:flex;
align-items:center;
flex-direction:column;
h2{
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
text-align: center;
color: #126BA5;
}
input{
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom:6px;

}
input::placeholder{
    margin-left:11px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}
.loginButton{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
background: #52B6FF;
border-radius: 4.63636px;
width: 303px;
height: 45px;
}
`
*/