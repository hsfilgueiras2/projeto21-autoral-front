import { useNavigate } from "react-router-dom";
import { GlobeComponent } from "./Globe";
import { Topbar } from "../Topbar";
import { Sidebar } from "../Sidebar";
import { HomeStyled } from "../../layout/home/HomeStyled";
import { useEffect, useState } from 'react';
import { getMarkers } from "../../services/markersApi";

export default function HomeScreen({token}){
    console.log(token)
    const [synopsis, setSynopsis] = useState("Nothing Here Yet")
    const [markerArray, setMarkerArray] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const response = getMarkers(token)
        console.log(response)
        setMarkerArray(response)
    },[])
    return(
        <>
        <Topbar/>
        <Sidebar/>
        
        <HomeStyled>
            <main>
                <GlobeComponent setSynopsis={setSynopsis} markerArray={markerArray}></GlobeComponent>
            </main>
            <section>
                {synopsis}
            </section>
            
        </HomeStyled>
        </>
    )
}