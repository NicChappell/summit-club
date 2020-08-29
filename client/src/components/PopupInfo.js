// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const PopupInfo = ({ info }) => {
    // destructure info
    const {
        mountain_peak,
        mountain_range,
        elevation_ft,
        standard_route,
        distance_mi,
        elevation_gain_ft,
        difficulty,
        photo,
        slug
    } = info

    return (
        <div className="popup-info">
            <img alt={mountain_peak} src={photo} />
            <table className="striped">
                <tbody>
                    <tr>
                        <td>Mountain Peak</td>
                        <td>{mountain_peak}</td>
                    </tr>
                    <tr>
                        <td>Mountain Range</td>
                        <td>{mountain_range}</td>
                    </tr>
                    <tr>
                        <td>Elevation</td>
                        <td>{elevation_ft} feet</td>
                    </tr>
                    <tr>
                        <td>Standard Route</td>
                        <td>{standard_route}</td>
                    </tr>
                    <tr>
                        <td>Distance</td>
                        <td>{distance_mi} miles</td>
                    </tr>
                    <tr>
                        <td>Elevation Gain</td>
                        <td>{elevation_gain_ft} feet</td>
                    </tr>
                    <tr>
                        <td>Difficulty</td>
                        <td>{difficulty}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/${slug}`} className="btn details">
                Check-in
                <i className="material-icons right">pin_drop</i>
            </Link>
        </div>
    )
}

export default PopupInfo
