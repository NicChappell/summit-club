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
map.setMaxZoom(13)

// define and add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    accessToken: 'pk.eyJ1IjoibmljY2hhcHBlbGwiLCJhIjoiY2tjMmdsZGcxMDA2MDJ6bDg5ZWt5cGozdiJ9.-pMdK6BaZnLaPADQDm0GbQ',
    attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11'
}).addTo(map)

// define and add pin layer to map
const pinLayer = L.layerGroup().addTo(map);

// define custom map icons
const icon = L.icon({
    iconUrl: '../img/icon.svg',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -24]
})

const init = () => {
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
                        <img alt=${mountain_peak} class="photo" src=${photo} />
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
                                        Range:
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

                L.marker({ lat, lng }, { icon })
                    .addTo(pinLayer)
                    .bindPopup(popup, {
                        closeButton: false,
                        maxWidth: 'auto'
                    })
            })
        })
        .catch(err => console.log(err))
}

init()