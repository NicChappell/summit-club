// initialize the map
const map = L.map('map')

// colorado bounds + 0.5 degree padding
const coloradoBounds = [
    [(36.992426 - 0.5), (-102.041574 + 0.5)],
    [(41.003444 + 0.5), (-109.060062 - 0.5)]
]

// set map view to given bounds
map.fitBounds(coloradoBounds)
// restrict map view to given bounds 
map.setMaxBounds(coloradoBounds)
// set the lower zoom limit
map.setMinZoom(map.getZoom())
// set the upper zoom limit
map.setMaxZoom(18)

// define and add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    accessToken: 'pk.eyJ1IjoibmljY2hhcHBlbGwiLCJhIjoiY2tjMmdsZGcxMDA2MDJ6bDg5ZWt5cGozdiJ9.-pMdK6BaZnLaPADQDm0GbQ',
    id: 'mapbox/streets-v11'
}).addTo(map)

// define and add layers to map
const markerLayer = L.layerGroup().addTo(map)
const circleLayer = L.layerGroup().addTo(map)

// define custom mountain icon
const icon = new L.icon({
    iconUrl: '../img/icon.svg',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -24]
})

// state variables
let button = {}
let latlng = {}

// leaflet event handlers
const handleLocationError = (e) => alert(e.message)
const handleLocationFound = (e) => {
    // update state
    button.classList.remove('hide')
    latlng = {
        lat: e.latlng.lat,
        lng: e.latlng.lng
    }

    // add new marker and circle to map
    const marker = newMarker(latlng)
    // const mrah = newCircle([(e.latlng.lat - 0.5), (e.latlng.lng + 0.5)])
    const circle = newCircle(latlng)

    // validate location
    validateLocation(marker, circle)
}

// attach leaflet event handlers
map.on('locationerror', handleLocationError)
map.on('locationfound', handleLocationFound)

// add new marker to map
const newMarker = latlng => L.marker(latlng).addTo(markerLayer)

// add new mountain marker to map
const newMountainMarker = latlng => L.marker(latlng, { icon }).addTo(markerLayer)

// add new circle to map
const newCircle = latlng => {
    // instantiate new circle object
    const circle = L.circle(latlng, {
        color: '#ff5722',
        fillColor: '#ff9800',
        fillOpacity: 0.5,
        radius: 5000
    })

    // add to circle layer
    circle.addTo(circleLayer)

    return circle
}

const validateLocation = (marker, circle) => {
    // calculate distance between marker and circle center
    const dist = map.distance(marker.getLatLng(), circle.getLatLng())

    // determine if marker is inside circle
    const isInside = dist < circle.getRadius()

    // update state
    console.log(isInside)

    isInside
        ? circle.setStyle({ color: '#4caf50', fillColor: '#8bc34a ' })
        : circle.setStyle({ color: '#ff5722', fillColor: '#ff9800' })

    return isInside
}

const init = () => {
    // select nodes and update state variables
    button = document.querySelector('#button')

    // add click event listener to button node
    button.addEventListener('click', () => console.log(latlng))

    // detect user location
    map.locate()

    // fetch fourteeners
    axios.get('/api/fourteeners')
        .then(res => {
            // destructure response
            const { data: fourteeners } = res

            // define and add markers to map
            fourteeners.forEach(fourteener => {
                // destructure fourteener
                const {
                    mountain_peak,
                    mountain_range,
                    elevation_ft,
                    lat,
                    lng,
                    standard_route,
                    distance_mi,
                    elevation_gain_ft,
                    difficulty,
                    photo
                } = fourteener

                const popup = `
                    <div class="popup">
                        <div class="photo">
                            <img alt=${mountain_peak} src=${photo} />
                        </div>
                        <p class="name">${mountain_peak}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="key">
                                        Elevation
                                    </td>
                                    <td class="value">
                                        ${elevation_ft} feet
                                    </td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Range
                                    </td>
                                    <td class="value">
                                        ${mountain_range}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Standard Route
                                    </td>
                                    <td class="value">
                                        ${standard_route}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Distance
                                    </td>
                                    <td class="value">
                                        ${distance_mi} miles
                                    </td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Elevation Gain
                                    </td>
                                    <td class="value">
                                        ${elevation_gain_ft} feet
                                    </td>
                                </tr>
                                <tr>
                                    <td class="key">
                                        Difficulty
                                    </td>
                                    <td class="value">
                                        ${difficulty}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `

                const mountainMarker = newMountainMarker({ lat, lng })
                mountainMarker.bindPopup(popup, {
                    closeButton: false
                })

                const circle = newCircle({ lat, lng })
            })
        })
        .catch(err => console.log(err))
}

init()