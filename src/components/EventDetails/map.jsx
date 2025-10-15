import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ lat, lon, venue }) => {
    const center = [Number(lat) || 0, Number(lon) || 0];

    return (
        <MapContainer center={center} zoom={15} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
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