// dependencies
import React, { useEffect, useState } from 'react'
import {
    GeolocateControl,
    NavigationControl
} from 'react-map-gl'
import isEmpty from 'lodash.isempty'

// components
import Markers from '../components/Markers'

const Fourteeners = props => {
    // state hooks
    const [thing, setThing] = useState('')
    const [location, setLocation] = useState({})

    // update state after component mounts
    useEffect(() => {
        setThing('hello world')
    }, [])

    const handleGeolocate = ({ coords }) => {
        // destructore coords
        const {
            latitude,
            longitude
        } = coords

        setLocation({ latitude, longitude })
    }

    return (
        <div className="fourteeners">
            <Markers {...props} />

            <div className="geolacte-control">
                <GeolocateControl
                    onGeolocate={handleGeolocate}
                    onViewportChange={() => console.log("how to handle this onViewportChange() event!?")}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
            </div>

            <div className="navigation-control">
                <NavigationControl />
            </div>
        </div>
    )
}

export default Fourteeners
