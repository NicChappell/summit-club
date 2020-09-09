// dependencies
import React, {
    useEffect,
    useState
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp
} from '@fortawesome/free-solid-svg-icons'
import isEmpty from 'lodash.isempty'

const NavBottom = (props) => {
    // destructure props
    const {
        setFourteener,
        setTarget,
        target: fourteener
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
        photo
    } = fourteener

    // state hooks
    const [display, setDisplay] = useState(false)

    const containerState = () => {
        if (!isEmpty(fourteener) && !display) {
            return 'peaking'
        } else if (!isEmpty(fourteener) && display) {
            return 'opened'
        } else {
            return 'closed'
        }
    }

    const mapNavState = () => !isEmpty(fourteener) && display ? 'opened' : 'closed'

    // update state when fourteener changes
    useEffect(() => {
        if (!isEmpty(fourteener)) {
            setDisplay(true)
        }
    }, [fourteener])

    const handleButtonClick = () => {
        setFourteener(fourteener)
        setTarget({})
    }

    const handleControlClick = () => setDisplay(!display)

    return (
        <div className={`nav-bottom ${containerState()}`}>
            <div className={`map-nav ${mapNavState()}`}>
                <button
                    className="btn-small"
                    onClick={handleButtonClick}
                >
                    Check-in
                </button>
            </div>
            <div
                className="control"
                onClick={handleControlClick}
            >
                <FontAwesomeIcon icon={display ? faAngleDown : faAngleUp} />
            </div>
            <div className="content">
                <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
                <div className="details">
                    <div className="mountain-details">
                        <span>
                            <span className="mountain-peak">{mountainPeak}</span>
                            <span className="elevation">{elevationFeet && elevationFeet.toLocaleString()} ft</span>
                        </span>
                        <span className="mountain-range">{mountainRange}</span>
                    </div>
                    <div className="route-details">
                        <span>
                            <span className="key">Standard Route:</span>
                            <span className="value standard-route">{standardRoute}</span>
                        </span>
                        <span>
                            <span className="key">Difficulty:</span>
                            <span className="value difficulty">{difficulty}</span>
                        </span>
                        <span>
                            <span className="key">Elevation Gain:</span>
                            <span className="value elevation-gain">{elevationGainFeet && elevationGainFeet.toLocaleString()} ft</span>
                        </span>
                        <span>
                            <span className="key">Distance:</span>
                            <span className="value distance">{distanceMiles} mi</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBottom
