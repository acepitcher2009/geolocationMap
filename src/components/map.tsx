import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import './Map.css';
import AddMarker from './AddMarker';
import DEVICELOCATION from './shared/DeviceLocation';



const Map = () => {
    const defaultPosition: LatLngExpression = [30.6072, -96.25];
    return (
        <div className="map_container">
            <MapContainer
                center={defaultPosition}
                zoom={10}
                scrollWheelZoom={true}
                style={{ height: "100vh"}}
                zoomControl={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <AddMarker />
                {DEVICELOCATION.map((location: {id: number, position: number[]}) => 
                        <Marker position={location.position as LatLngExpression}/>
                    
                )}
            </MapContainer>
        </div>
    )
}
export default Map;