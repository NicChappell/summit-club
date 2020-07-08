// initialize the map
const map = L.map('map').setView([39.113, -105.359], 7)

// define and add tile layer to map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    accessToken: 'pk.eyJ1IjoibmljY2hhcHBlbGwiLCJhIjoiY2tjMmdsZGcxMDA2MDJ6bDg5ZWt5cGozdiJ9.-pMdK6BaZnLaPADQDm0GbQ',
    attribution: 'Map data &copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    minZoom: 7,
    maxZoom: 13,
    tileSize: 512,
    zoomOffset: -1
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
    // calculate map boundaries
    const bounds = map.getBounds()

    // set map boundaries
    map.setMaxBounds(bounds)

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