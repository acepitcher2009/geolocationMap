import React, {useState} from 'react'
import { LatLngExpression } from 'leaflet';
import { CircleMarker, useMapEvents } from 'react-leaflet';


const AddMarker = ({ location, setLocation }: any) => {
    const [position, setPosition] = useState((null as unknown) as LatLngExpression);
    let radius: number = 75;
        
    useMapEvents({
        click: (event) => {
            setPosition(event.latlng);
            
        },
    });

    return position === null ? null : (
        <CircleMarker center={position} radius={radius} />
        
    )
}
export default AddMarker;

