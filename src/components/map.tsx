'use-client';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';


export default function Map() {
    const [geoData, setGeoData] = useState({ lat: 49.912,  lng: 15.628 });

    return (
        <MapContainer center={geoData} zoom={7.4} scrollWheelZoom={false} style={{ height: '100vh'}} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={geoData}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}