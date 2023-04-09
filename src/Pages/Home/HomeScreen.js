import { useNavigate } from "react-router-dom";

export default function HomeScreen(){
    const navigate = useNavigate();
    function gotoLogin(event){
        event.preventDefault();
        navigate('/login')
    }

    return(
        <div onClick={gotoLogin}>Go To Login</div>
    )
}