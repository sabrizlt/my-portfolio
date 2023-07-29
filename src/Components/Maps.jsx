// import React, { useEffect, useRef } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// const Map = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) {
//       const comisoCoordinates = [36.9495, 14.6028]; // Coordinate di Comiso
//       const initialZoom = 1; // Livello di zoom iniziale
//       const targetZoom = 13; // Livello di zoom delle coordinate di Comiso

//       mapRef.current = L.map("map", {
//         center: comisoCoordinates,
//         zoom: initialZoom,
//         zoomControl: false, // Disabilita il controllo dello zoom all'avvio
//       });

//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution: "Map data &copy; OpenStreetMap contributors",
//       }).addTo(mapRef.current);

//       const zoomAnimation = () => {
//         const currentZoom = mapRef.current.getZoom();
//         const nextZoom = currentZoom + 1;

//         if (nextZoom <= targetZoom) {
//           mapRef.current.flyTo(comisoCoordinates, nextZoom, {
//             duration: 0.5, // Durata dell'animazione in secondi
//             easeLinearity: 0.5, // Fattore di smorzamento dell'animazione
//           });

//           setTimeout(zoomAnimation, 100); // Aggiungi un ritardo di 500 millisecondi tra gli incrementi di zoom
//         }
//       };

//       zoomAnimation();
//     }
//   }, []);

//   return (
//     <div
//       id="map"
//       style={{
//         height: "400px",
//         width: "400px",
//         boxShadow: "5px 10px 5px #000000",
//       }}
//       className="mx-5 mt-5 border border-light comisoMaps"
//     />
//   );
//   };

// export default Map;
