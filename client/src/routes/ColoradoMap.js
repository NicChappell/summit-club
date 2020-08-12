// dependencies
import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const ColoradoMap = () => {
    const [position, setPosition] = useState([39.5501, -105.7821])
    const [zoom, setZoom] = useState(13)

    return (
        <Map center={position} id="map" zoom={zoom}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )
}

export default ColoradoMap
