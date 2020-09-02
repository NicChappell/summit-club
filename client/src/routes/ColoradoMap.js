// dependencies
import React, {
    useEffect,
    useRef,
    useState
} from 'react'
import MapGL, {
    LinearInterpolator
} from 'react-map-gl'
import axios from 'axios'
import isEmpty from 'lodash.isempty'

// components
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
    zoom: 5, // between 0 and 22
    bearing: 0, // degrees between 0 and 360
    pitch: 0 // degrees between 0 and 60
}

const ColoradoMap = () => {
    // ref hooks
    const mapRef = useRef(null)

    // state hooks
    const [fourteener, setFourteener] = useState({})
    const [fourteeners, setFourteeners] = useState([])
    // const [popupInfo, setPopupInfo] = useState({})
    const [viewport, setViewport] = useState(initState)

    // const handleMarkerClick = fourteener => {
    //     setPopupInfo(fourteener)
    // }

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
                    setFourteener={setFourteener}
                />
            )
        } else {
            return (
                <Fourteener
                    fourteener={fourteener}
                />
            )
        }
    }

    // const renderPopup = () => {
    //     if (!isEmpty(popupInfo)) {
    //         return (
    //             <Popup
    //                 tipSize={5}
    //                 anchor="top"
    //                 longitude={popupInfo.longitude}
    //                 latitude={popupInfo.latitude}
    //                 closeButton={false}
    //                 closeOnClick={false}
    //                 onClose={resetPopup}
    //             >
    //                 <PopupInfo info={popupInfo} />
    //             </Popup>
    //         )
    //     } else {
    //         return null
    //     }
    // }

    // const resetPopup = () => setPopupInfo({})

    // update map when fourteeners changes
    useEffect(() => {
        // // get map and fit bounds
        // const map = mapRef.current.getMap()
        // // console.log(map)
        // map.fitBounds(coloradoBounds)
        // // console.log(map.getZoom())
        
        // // setViewport({
        // //     ...viewport,
        // //     zoom: map.getZoom()
        // // })
    }, [fourteeners])

    return (
        <MapGL
            {...viewport}
            fitBounds={coloradoBounds}
            height='100vh'
            mapStyle="mapbox://styles/nicchappell/cke921s5l0bf919t8tuen8b08"
            // onClick={resetPopup}
            onLoad={handleLoad}
            onViewportChange={handleViewportChange}
            ref={mapRef}
            transitionDuration={666}
            transitionInterpolator={new LinearInterpolator()}
            width='100vw'
        >
            {renderView()}
        </MapGL>
    )
}

export default ColoradoMap
