import { useState } from 'react';
import Globe from 'react-globe.gl';
export function GlobeComponent({markerArray}){
    const [synopsis, setSynopsis] = useState("Nothing Here Yet")
    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

  // Gen random data
  const N = 30;
    const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: 25,
        color: 'red'
    }));
    return(
        <>
        <Globe
        width={700}
        height={700}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        htmlElementsData={gData}
        htmlElement={d => {
        const el = document.createElement('div');
        el.innerHTML = markerSvg;
        el.style.color = d.color;
        el.style.width = `${d.size}px`;
        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.onclick = () => console.info(d);
        return el;
        }}
        />
        </>
    )
}