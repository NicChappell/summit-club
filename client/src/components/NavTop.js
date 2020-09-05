// dependencies
import React, {
    useEffect,
    useState
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp,
    faCog,
    faHome,
    faMapMarker,
    faSignInAlt,
    faUndo,
    faUser,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons'
import isEmpty from 'lodash.isempty'

const NavTop = (props) => {
    // destructure props
    const {
        fourteener,
        location,
        setFourteener
    } = props

    // state hooks
    const [display, setDisplay] = useState(false)
    const [buttonStyles, setButtonStyles] = useState({ left: '-52px' })
    const [containerStyles, setContainerStyles] = useState({ top: '-85px' })

    // update state when display changes
    useEffect(() => {
        display
            ? setContainerStyles({ top: '0' })
            : setContainerStyles({ top: '-85px' })
    }, [display])

    // update state when fourteener changes
    useEffect(() => {
        if (!isEmpty(fourteener)) {
            setButtonStyles({ left: '0' })
        } else {
            setButtonStyles({ left: '-52px' })
        }
    }, [fourteener])

    const handleControlClick = () => setDisplay(!display)

    return (
        <div className="nav-top" style={{ ...containerStyles }}>
            <div className="nav-links" style={{ ...buttonStyles }}>
                <button
                    className="btn-floating btn"
                    onClick={() => setFourteener({})}
                >
                    <FontAwesomeIcon icon={faUndo} />
                </button>
                <button
                    className="btn-floating btn"
                    onClick={() => console.log('check-in')}
                >
                    <FontAwesomeIcon icon={faMapMarker} />
                </button>
            </div>
            <div
                className="control"
                onClick={handleControlClick}
            >
                <FontAwesomeIcon icon={display ? faAngleUp : faAngleDown} />
            </div>
            <div className="menu">
                <button className="btn-flat btn">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </button>
                <button className="btn-flat btn">
                    <FontAwesomeIcon icon={faCog} />
                    <span>Settings</span>
                </button>
                <button className="btn-flat btn">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Profile</span>
                </button>
                <button className="btn-flat btn">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span>Sign-in</span>
                </button>
                <button className="btn-flat btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Sign-up</span>
                </button>
            </div>
        </div>
    )
}

export default NavTop
