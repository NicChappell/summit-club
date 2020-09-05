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
        photo,
        slug
    } = fourteener

    // state hooks
    const [buttonStyles, setButtonStyles] = useState({ right: '-125px' })
    const [containerStyles, setContainerStyles] = useState({ bottom: '-285px' })

    // update state when fourteener changes
    useEffect(() => {
        if (!isEmpty(fourteener)) {
            setButtonStyles({ right: '0' })
            setContainerStyles({ bottom: '0' })
        } else {
            setButtonStyles({ right: '-125px' })
            setContainerStyles({ bottom: '-285px' })
        }
    }, [fourteener])

    const handleButtonClick = () => {
        setFourteener(fourteener)
        setTarget({})
    }

    const handleControlClick = () => setTarget({})

    const renderContent = () => {
        if (!isEmpty(fourteener)) {
            return (
                <div className="fourteener">
                    <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
                    <div className="details">
                        <div className="mountain-details">
                            <span>
                                <span className="mountain-peak">{mountainPeak}</span>
                                <span className="elevation">{elevationFeet.toLocaleString()} ft</span>
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
                                <span className="value elevation-gain">{elevationGainFeet.toLocaleString()} ft</span>
                            </span>
                            <span>
                                <span className="key">Distance:</span>
                                <span className="value distance">{distanceMiles} mi</span>
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="nav-bottom" style={{ ...containerStyles }}>
            <div className="nav-links" style={{ ...buttonStyles }}>
                <button
                    className="btn-small"
                    onClick={handleButtonClick}
                >
                    Check-in
                </button>
            </div>
            <div
                className="control"
                disabled={!isEmpty(fourteener)}
                onClick={handleControlClick}
            >
                <FontAwesomeIcon icon={!isEmpty(fourteener) ? faAngleDown : faAngleUp} />
            </div>
            {renderContent()}
        </div>
    )
}

export default NavBottom
