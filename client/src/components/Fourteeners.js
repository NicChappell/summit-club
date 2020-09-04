// dependencies
import React from 'react'
import {
    FullscreenControl,
    GeolocateControl,
    NavigationControl
} from 'react-map-gl'

// components
import Markers from './Markers'

const Fourteeners = props => {
    // destructure props
    const {
        fourteeners,
        handleGeolocate,
        setTarget
    } = props

    return (
        <div className="fourteeners">
            <Markers
                fourteeners={fourteeners}
                setTarget={setTarget}
            />
            <div className="geolacte-control">
                <GeolocateControl
                    onGeolocate={handleGeolocate}
                    onViewportChange={() => console.log("how to handle this onViewportChange() event!?")}
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

export default Fourteeners
