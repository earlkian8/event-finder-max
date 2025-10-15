import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Map = ({ lat, lon, venue }) => {
    const center = [Number(lat) || 0, Number(lon) || 0];

    return (
        <MapContainer center={center} zoom={15} style={{ width: '100%', height: '100%' }}>
            <TileLayer/>
            <Marker position={center}>
                <Popup>
                    <div className="font-semibold">{venue?.name}</div>
                    <div className="text-sm">{venue?.address}</div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;