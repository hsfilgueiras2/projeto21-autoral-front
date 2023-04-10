import api from "./api";

export async function postRegister({email,password,username,image}){
    console.log(process.env.REACT_APP_API_BASE_URL)
    const response = await api.post('/register', {
        email,
        password,
        username,
        image
    });
    return response.data;
}