// dependencies
import React, { useState } from 'react'
import {
    FullscreenControl,
    GeolocateControl,
    NavigationControl
} from 'react-map-gl'
import isEmpty from 'lodash.isempty'

// components
import Chip from './Chip'
import Details from './Details'
import Markers from './Markers'
import NavBottom from './NavBottom'

const Fourteeners = props => {
    // destructure props
    const {
        details,
        fourteeners,
        handleGeolocate,
        setTarget,
        setFourteener
    } = props

    // state hooks
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="fourteeners">
            <Chip
                details={details}
                setShowDetails={setShowDetails}
                showDetails={showDetails}
            />

            {/* <Details
                details={details}
                setFourteener={setFourteener}
                setShowDetails={setShowDetails}
                showDetails={showDetails}
            /> */}

            <Markers
                fourteeners={fourteeners}
                setTarget={setTarget}
            />

            <NavBottom />

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
