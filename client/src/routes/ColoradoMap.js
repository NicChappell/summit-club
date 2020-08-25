// dependencies
import React, { useEffect, useState } from 'react'
import MapGL, {
    FullscreenControl,
    GeolocateControl,
    LinearInterpolator,
    NavigationControl,
    Popup
} from 'react-map-gl'
import isEmpty from 'lodash.isempty'
import axios from 'axios'

// components
import Pins from '../components/Pins'
import PopupInfo from '../components/PopupInfo'

// utilities
import { calcDist } from '../utils'

// styles
import 'mapbox-gl/dist/mapbox-gl.css'

const coloradoBounds = {
    north: 41.003444,
    south: 36.992426,
    east: -102.041574,
    west: -109.060062
}

const coloradoCenter = {
    latitude: 38.997935,
    longitude: -105.550818
}

const initState = {
    latitude: coloradoCenter.latitude,
    longitude: coloradoCenter.longitude,
    zoom: 7, // between 0 and 22
    bearing: 0, // degrees between 0 and 360
    pitch: 0 // degrees between 0 and 60
}

const ColoradoMap = () => {
    // state hook variables
    const [fourteeners, setFourteeners] = useState([])
    const [location, setLocation] = useState({})
    const [popupInfo, setPopupInfo] = useState({})
    const [viewport, setViewport] = useState(initState)

    const handleMarkerClick = fourteener => {
        setPopupInfo(fourteener)

        const a = {
            latitude: fourteener.latitude,
            longitude: fourteener.longitude
        }
        const b = {
            latitude: location.latitude,
            longitude: location.longitude
        }

        console.log(calcDist(a, b))
    }

    const handleGeolocate = ({ coords }) => {
        // destructore coords
        const {
            latitude,
            longitude
        } = coords

        // update state
        setLocation({ latitude, longitude })
    }

    const handleLoad = () => {
        // fetch fourteeners and update state
        axios.get('/api/v1/fourteeners')
            .then(res => setFourteeners(res.data))
            .catch(err => console.log(err))
    }

    const handleViewportChange = viewport => {
        // destructure viewport
        const {
            latitude: latitude,
            longitude: longitude
        } = viewport

        // destructure colorado bounds
        const {
            north,
            south,
            east,
            west
        } = coloradoBounds

        // reset state if out-of-bounds
        if (latitude > (north + 0.5) || latitude < (south - 0.5)) {
            setViewport({
                ...viewport,
                latitude: initState.latitude,
                longitude: initState.longitude
            })
        } else if (longitude > (east + 0.5) || longitude < (west - 0.5)) {
            setViewport({
                ...viewport,
                latitude: initState.latitude,
                longitude: initState.longitude
            })
        } else {
            setViewport(viewport)
        }
    }

    const renderPopup = () => {
        if (!isEmpty(popupInfo)) {
            return (
                <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeButton={false}
                    closeOnClick={true}
                    onClose={resetPopup}
                >
                    <PopupInfo info={popupInfo} />
                </Popup>
            )
        } else {
            return null
        }
    }

    const resetPopup = () => setPopupInfo({})

    // calculate distance after component mounts
    useEffect(() => {
        var a = { latitude: 39.984, longitude: -75.343 }
        var b = { latitude: 39.123, longitude: -75.534 }

        var mrah = calcDist(a, b)
        console.log(mrah)
    }, [])

    return (
        <MapGL
            {...viewport}
            height='100vh'
            mapStyle="mapbox://styles/nicchappell/cke921s5l0bf919t8tuen8b08"
            onClick={resetPopup}
            onLoad={handleLoad}
            onViewportChange={handleViewportChange}
            transitionDuration={1000}
            transitionInterpolator={new LinearInterpolator()}
            width='100vw'
        >
            <Pins
                data={fourteeners}
                handleMarkerClick={handleMarkerClick}
            />

            {renderPopup()}

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
        </MapGL>
    )
}

export default ColoradoMap
