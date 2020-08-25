import distance from '@turf/distance'
import { point } from '@turf/helpers'

export const calcDist = (a, b) => {
    const from = point([a.longitude, a.latitude])
    const to = point([b.longitude, b.latitude])
    const options = { units: 'kilometers' }

    return distance(from, to, options)
}