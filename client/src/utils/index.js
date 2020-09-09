// dependencies
import {
    useRef,
    useEffect
} from 'react'
import distance from '@turf/distance'
import { point } from '@turf/helpers'

export const calcDist = (a, b) => {
    const from = point([a.longitude, a.latitude])
    const to = point([b.longitude, b.latitude])
    const options = { units: 'kilometers' }

    return distance(from, to, options)
}

// center: [lng, lat] coordinates
// radius: distance in kilometers
export const createCircle = (center, radius) => {
    // destructure center
    const [
        longitude,
        latitude
    ] = center

    // distances
    const distX = radius / (111.320 * Math.cos(latitude * Math.PI / 180))
    const distY = radius / 110.574

    // points
    const points = 64

    // coordinates
    const coords = []
    for (let i = 0; i < points; i++) {
        const theta = (i / points) * (2 * Math.PI)
        const x = distX * Math.cos(theta)
        const y = distY * Math.sin(theta)

        coords.push([(longitude + x), (latitude + y)])
    }
    coords.push(coords[0])

    return {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [coords]
                }
            }]
        }
    }
}

export const debounce = (callback, time = 250) => {
    let interval

    return (...args) => {
        clearTimeout(interval)

        interval = setTimeout(() => {
            interval = null

            callback(...args)
        }, time)
    }
}

export const useDidMount = () => {
    const didMountRef = useRef(false)

    useEffect(() => {
        didMountRef.current = true
    }, [])

    return didMountRef.current
}
