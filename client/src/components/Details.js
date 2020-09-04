// dependencies
import React, { useEffect, useState } from 'react'
import isEmpty from 'lodash.isempty'

const Details = (props) => {
    // destructure props
    const {
        details: fourteener,
        setFourteener,
        setShowDetails,
        showDetails
    } = props

    // destructure fourteener
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
    } = fourteener

    // state hooks
    const [styles, setStyles] = useState({ width: '0' })

    useEffect(() => {
        showDetails
            ? setStyles({ width: '100%' })
            : setStyles({ width: '0' })
    }, [showDetails])

    return (
        <div className="details" style={{ ...styles }}>
            <button
                className="close btn-floating btn-small"
                onClick={() => setShowDetails(false)}
            >
                <i className="material-icons">close</i>
            </button>
            <div className="fourteener">
                <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
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
                <button className="btn">
                    Check-in
                    <i className="material-icons right">pin_drop</i>
                </button>
            </div>
        </div>
    )
}

export default Details
