import api from "./api";

export async function postLogin({email,password}){
    console.log(process.env.REACT_APP_API_BASE_URL)
    const response = await api.post('/login', {
        email,
        password
    });
    return response.data;
}