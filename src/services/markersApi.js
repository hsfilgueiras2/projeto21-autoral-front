import api from "./api";

export async function getMarkers(token){
    const response = await api.get('/markers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}