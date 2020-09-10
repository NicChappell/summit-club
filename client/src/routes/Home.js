// dependencies
import React, {
    useEffect,
    useRef,
    useState
} from 'react'
import {
    StaticMap,
    WebMercatorViewport
} from 'react-map-gl'

// utilities
import {
    debounce,
    useDidMount
} from '../utils'

// components
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

const Home = (props) => {
    // destructure props
    const {
        fourteener,
        fourteeners,
        location,
        target,
        user
    } = props

    // ref hooks
    const mapContainer = useRef(null)

    // state hooks
    const [mapDimensions, setMapDimensions] = useState({ width: '100%', height: 420 })
    const [viewState, setViewState] = useState(initState)

    // custom hooks
    const didMount = useDidMount()

    const resizeMap = () => {
        // destructure map container
        const { current: div } = mapContainer

        // update state
        setMapDimensions({
            width: div.clientWidth,
            height: div.clientHeight
        })
    }

    const newViewport = () => {

        setViewState(new WebMercatorViewport({
            width: mapDimensions.width,
            height: mapDimensions.height
        }).fitBounds(coloradoBounds, { padding: 20 }))
    }

    // effect hooks
    useEffect(() => {
        // debounce resize map function
        const debouncedResizeMap = debounce(resizeMap, 250)

        // add event listener
        window.addEventListener('resize', debouncedResizeMap)

        // remove event listener
        return () => window.removeEventListener('resize', debouncedResizeMap)
    }, [])

    useEffect(() => resizeMap(), [mapContainer])

    useEffect(() => {
        if (didMount) {
            setViewState(new WebMercatorViewport({
                width: mapDimensions.width,
                height: mapDimensions.height
            }).fitBounds(coloradoBounds, { padding: 20 }))
        }
    }, [mapDimensions])

    return (
        <div className="container home">
            <div className="row">
                <div className="col s12">
                    <h2>The interactive map for tracking your hiking and climbing adventures.</h2>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <div className="static-map" ref={mapContainer}>
                        <StaticMap
                            {...viewState}
                            height={mapDimensions.height}
                            mapStyle="mapbox://styles/nicchappell/cke921s5l0bf919t8tuen8b08"
                            width={mapDimensions.width}
                        >
                            <Fourteeners fourteeners={fourteeners} />
                        </StaticMap>
                    </div>
                </div>
                <div className="col s6">
                    <h2>Fourteeners</h2>
                    <p className="flow-text">Colorado is home to some of the highest terrain in North America, including 58 mountain peaks that rise above 14,000 feet (4,270 meters), the most of any state.</p>
                    <p className="flow-text">Climbing a fourteener is the quintessential Colorado bucket list item. Summit Club makes it easy to keep track of the fourteeners you've summited.</p>
                    <button className="btn">Sign in</button>
                    <button className="btn">Sign up</button>
                    <h2>“By failing to prepare, you are preparing to fail.” – Benjamin Franklin</h2>
                    <p className="flow-text">With detailed route information and current weather conditions, Summit Club is your go-to source for planning your next fourteener.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
