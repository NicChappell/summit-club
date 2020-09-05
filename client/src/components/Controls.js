// dependencies
import React from 'react'
import {
    FullscreenControl,
    GeolocateControl,
    NavigationControl
} from 'react-map-gl'

const Controls = ({ handleGeolocate }) => {
    return (
        <div className="controls">
            <div className="geolacte-control">
                <GeolocateControl
                    onGeolocate={handleGeolocate}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </div>
            <div className="fullscreen-control">
                <FullscreenControl />
            </div>
            <div className="navigation-control">
                <NavigationControl />
            </div>
        </div>
    )
}

export default Controls
