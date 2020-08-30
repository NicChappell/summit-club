// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const PopupInfo = ({ info }) => {
    // destructure info
    const {
        mountainPeak,
        mountainRange,
        elevationFeet,
        standardRoute,
        distanceMiles,
        elevationGainFeet,
        difficulty,
        photo,
        slug
    } = info

    return (
        <div className="popup-info">
            <img alt={mountainPeak} src={photo} />
            <table className="striped">
                <tbody>
                    <tr>
                        <td>Mountain Peak</td>
                        <td>{mountainPeak}</td>
                    </tr>
                    <tr>
                        <td>Mountain Range</td>
                        <td>{mountainRange}</td>
                    </tr>
                    <tr>
                        <td>Elevation</td>
                        <td>{elevationFeet} feet</td>
                    </tr>
                    <tr>
                        <td>Standard Route</td>
                        <td>{standardRoute}</td>
                    </tr>
                    <tr>
                        <td>Distance</td>
                        <td>{distanceMiles} miles</td>
                    </tr>
                    <tr>
                        <td>Elevation Gain</td>
                        <td>{elevationGainFeet} feet</td>
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
