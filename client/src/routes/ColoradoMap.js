// dependencies
import React, {
    useEffect,
    useRef,
    useState
} from 'react'
import MapGL, { LinearInterpolator } from 'react-map-gl'
import { easeCubic } from 'd3-ease'
import axios from 'axios'
import isEmpty from 'lodash.isempty'

// components
import Controls from '../components/Controls'
import Fourteener from '../components/Fourteener'
import Fourteeners from '../components/Fourteeners'

const coloradoBounds = [
    [-109.060062, 36.992426], // [west, south]
    [-102.041574, 41.003444]  // [east, north]
]

const coloradoCenter = {
    latitude: 38.997935,
    longitude: -105.550818
}

const initState = {
    latitude: coloradoCenter.latitude,
    longitude: coloradoCenter.longitude,
    zoom: 6, // between 0 and 22
    bearing: 0, // degrees between 0 and 360
    pitch: 0 // degrees between 0 and 60
}

const ColoradoMap = (props) => {
    // destructure props
    const {
        fourteener,
        fourteeners,
        location,
        setDistance,
        setFourteener,
        setFourteeners,
        setLocation,
        setTarget,
        target,
        user
    } = props

    // ref hooks
    const mapRef = useRef(null)

    // state hooks
    const [viewport, setViewport] = useState(initState)

    // update viewport when fourteener changes
    useEffect(() => {
        isEmpty(fourteener)
            ? setViewport({ ...viewport, zoom: 6 })
            : setViewport({ ...viewport, zoom: 12 })
    }, [fourteener])

    // update viewport when target changes
    useEffect(() => {
        if (!isEmpty(target)) {
            setViewport({
                ...viewport,
                latitude: target.latitude,
                longitude: target.longitude,
            })
        }
    }, [target])

    const handleClick = () => setTarget({})

    const handleGeolocate = ({ coords }) => {
        // destructore coords
        const {
            latitude,
            longitude
        } = coords

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
            latitude,
            longitude
        } = viewport

        // destructure colorado bounds
        const [sw, ne] = coloradoBounds
        // destructure sw
        const [west, south] = sw
        // destructure ne
        const [east, north] = ne

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

    const renderView = () => {
        if (isEmpty(fourteener)) {
            return (
                <Fourteeners
                    fourteeners={fourteeners}
                    setTarget={setTarget}
                />
            )
        } else {
            return (
                <Fourteener
                    fourteener={fourteener}
                    location={location}
                    mapRef={mapRef}
                    setDistance={setDistance}
                />
            )
        }
    }

    return (
        <MapGL
            {...viewport}
            className="colorado-map"
            fitBounds={coloradoBounds}
            height="100vh"
            mapStyle="mapbox://styles/nicchappell/cke921s5l0bf919t8tuen8b08"
            onClick={handleClick}
            onLoad={handleLoad}
            onViewportChange={handleViewportChange}
            ref={mapRef}
            transitionDuration={666}
            transitionInterpolator={new LinearInterpolator()}
            transitionEasing={easeCubic}
            width="100vw"
        >
            <Controls handleGeolocate={handleGeolocate} />
            {renderView()}
        </MapGL>
    )
}

export default ColoradoMap
