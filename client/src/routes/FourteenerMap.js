// dependencies
import React, {
    useEffect,
    useRef,
    useState
} from 'react'
import MapGL, {
    FullscreenControl,
    GeolocateControl,
    LinearInterpolator,
    Marker,
    NavigationControl
} from 'react-map-gl'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import isEmpty from 'lodash.isempty'

// components
import CheckIn from '../components/CheckIn'

// utilities
import { calcDist } from '../utils'

const coloradoCenter = {
    latitude: 38.997935,
    longitude: -105.550818
}

const initState = {
    latitude: coloradoCenter.latitude,
    longitude: coloradoCenter.longitude,
    zoom: 8, // between 0 and 22
    bearing: 0, // degrees between 0 and 360
    pitch: 0 // degrees between 0 and 60
}

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
C20.1,15.8,20.2,15.8,20.2,15.7z`

const SIZE = 20

const FourteenerMap = () => {
    // ref hooks
    const mapRef = useRef(null)

    // state hooks
    const [disabled, setDisabled] = useState(true)
    const [distance, setDistance] = useState(undefined)
    const [fourteener, setFourteener] = useState({})
    const [location, setLocation] = useState({})
    const [viewport, setViewport] = useState(initState)

    // react router hooks
    const { slug } = useParams()

    const handleClick = () => {
        const payload = {
            "id": "5f4c5feaf6dd3f66110aa295",
            "fourteener": fourteener._id
        }

        // update fourteener and update state
        axios.put('/api/v1/users/check-in', payload)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const handleGeolocate = ({ coords }) => {
        // destructore coords
        const {
            latitude,
            longitude
        } = coords

        setLocation({ latitude, longitude })
    }

    const handleLoad = () => {
        // fetch fourteener and update state
        axios.get(`/api/v1/fourteeners/${slug}`)
            .then(res => setFourteener(res.data))
            .catch(err => console.log(err))
    }

    const handleViewportChange = viewport => {
        if (
            viewport.latitude > (fourteener.latitude + 2) ||
            viewport.latitude < (fourteener.latitude - 2) ||
            viewport.longitude > (fourteener.longitude + 2) ||
            viewport.longitude < (fourteener.longitude - 2)
        ) {
            setViewport({
                ...viewport,
                latitude: fourteener.latitude,
                longitude: fourteener.longitude
            })
        } else {
            setViewport(viewport)
        }
    }

    const renderMarker = () => {
        if (!isEmpty(fourteener)) {
            return (
                <Marker
                    longitude={fourteener.longitude}
                    latitude={fourteener.latitude}
                >
                    <svg
                        height={SIZE}
                        viewBox="0 0 24 24"
                        style={{
                            cursor: 'pointer',
                            fill: '#6a4025',
                            stroke: 'none',
                            transform: `translate(${-SIZE / 2}px, ${-SIZE}px)`
                        }}
                    >
                        <path d={ICON} />
                    </svg>
                </Marker>
            )
        } else {
            return null
        }
    }

    // update state when distance changes
    useEffect(() => {
        distance < 30
            ? setDisabled(false)
            : setDisabled(true)
    }, [distance])

    // update state when fourteener changes
    useEffect(() => {
        if (!isEmpty(fourteener)) {
            setViewport({
                ...viewport,
                latitude: fourteener.latitude,
                longitude: fourteener.longitude,
                zoom: 12
            })
        }
    }, [fourteener])

    // update state when location changes
    useEffect(() => {
        if (!isEmpty(location)) {
            const a = {
                latitude: fourteener.latitude,
                longitude: fourteener.longitude
            }
            const b = {
                latitude: location.latitude,
                longitude: location.longitude
            }

            setDistance(calcDist(a, b))
        }
    }, [location])

    return (
        <MapGL
            {...viewport}
            height='100vh'
            mapStyle="mapbox://styles/nicchappell/cke921s5l0bf919t8tuen8b08"
            onLoad={handleLoad}
            onViewportChange={handleViewportChange}
            ref={mapRef}
            transitionDuration={1000}
            transitionInterpolator={new LinearInterpolator()}
            width='100vw'
        >
            {renderMarker()}

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

            <div className="check-in">
                <CheckIn
                    disabled={disabled}
                    handleClick={handleClick}
                />
            </div>
        </MapGL>
    )
}

export default FourteenerMap
