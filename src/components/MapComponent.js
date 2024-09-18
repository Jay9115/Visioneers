import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import indiaStateGeo from '../data/indiaStatesGeo.json';
import { useNavigate } from 'react-router-dom';

const MapComponent = () => {
    const [geoData, setGeoData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setGeoData(indiaStateGeo);
    }, []);

    const onEachFeature = (feature, layer) => {
        layer.on({
            click: () => {
                const stateName = feature.properties.name;
                navigate(`/state/${stateName}`);
            }
        });
    };

    const pointToLayer = (feature, latlng) => {
        const customIcon = L.icon({
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        });
        return L.marker(latlng, { icon: customIcon });
    };
    if (!geoData) return <div>Loading map...</div>;
    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <GeoJSON data={geoData} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </MapContainer>
    );
};

export default MapComponent;
