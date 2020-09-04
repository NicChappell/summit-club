// dependencies
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp
} from '@fortawesome/free-solid-svg-icons'

const NavBottom = (props) => {
    // // destructure props
    // const {
    //     details: fourteener,
    //     setFourteener,
    //     setShowDetails,
    //     showDetails
    // } = props

    // // destructure fourteener
    // const {
    //     mountainPeak,
    //     mountainRange,
    //     elevationFeet,
    //     standardRoute,
    //     distanceMiles,
    //     elevationGainFeet,
    //     difficulty,
    //     photo,
    //     slug
    // } = fourteener

    // state hooks
    const [display, setDisplay] = useState(false)
    const [styles, setStyles] = useState({ bottom: '-190px' })

    useEffect(() => {
        display
            ? setStyles({ bottom: '0' })
            : setStyles({ bottom: '-190px' })
    }, [display])

    const handleClick = () => setDisplay(!display)

    return (
        <div className="navigation-bottom" style={{ ...styles }}>
            <div
                className="control"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={display ? faAngleDown : faAngleUp} />
            </div>
            <div className="fourteener">
                asdf
                {/* <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
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
                </button> */}
            </div>
        </div>
    )
}

export default NavBottom
