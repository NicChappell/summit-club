// dependencies
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp
} from '@fortawesome/free-solid-svg-icons'
import isEmpty from 'lodash.isempty'

// images
import marker from '../img/marker.svg'

const NavBottom = (props) => {
    // destructure props
    const {
        setFourteener,
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
    const [display, setDisplay] = useState(false)
    const [buttonStyles, setButtonStyles] = useState({ right: '-5px' })
    const [containerStyles, setContainerStyles] = useState({ bottom: '-285px' })

    // update state when display changes
    useEffect(() => {
        if (!isEmpty(fourteener) && display) {
            setButtonStyles({ right: '5px' })
            setContainerStyles({ bottom: '0' })
        } else {
            setButtonStyles({ right: '-42px' })
            setContainerStyles({ bottom: '-285px' })
        }
    }, [display, fourteener])

    // update state when fourteener changes
    useEffect(() => {
        isEmpty(fourteener)
            ? setDisplay(false)
            : setDisplay(true)
    }, [fourteener])

    const handleButtonClick = () => setFourteener(fourteener)
    
    const handleControlClick = () => setDisplay(!display)
    
    const renderContent = () => {
        if (!isEmpty(fourteener)) {
            return (
                <div className="fourteener">
                    <div className="photo" style={{ backgroundImage: `url(${photo})` }}></div>
                    <div className="details">
                        <div className="mountain-details">
                            <span>
                                <span className="mountain-peak">{mountainPeak}</span>
                                <span className="elevation">{elevationFeet} ft</span>
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
                                <span className="value elevation-gain">{elevationGainFeet} ft</span>
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
        <div className="navigation-bottom" style={{ ...containerStyles }}>
            <div
                className="control"
                disabled={!isEmpty(fourteener)}
                onClick={handleControlClick}
            >
                <FontAwesomeIcon icon={display && !isEmpty(fourteener) ? faAngleDown : faAngleUp} />
            </div>
            <div className="check-in" style={{ ...buttonStyles }}>
                <button
                    className="btn-floating btn"
                    onClick={handleButtonClick}
                >
                    <img src={marker} alt="Check-in" />
                </button>
            </div>
            {renderContent()}
        </div>
    )
}

export default NavBottom
