// dependencies
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp,
    faFlag,
    faHome,
    faMap,
    faMapMarker,
    faSignInAlt,
    faSignOutAlt,
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

    const containerState = () => display ? 'opened' : 'closed'

    const mapNavState = () => {
        if (!isEmpty(fourteener) && !display) {
            return 'closed'
        } else if (!isEmpty(fourteener) && display) {
            return 'opened'
        } else {
            return 'hidden'
        }
    }

    const handleControlClick = () => setDisplay(!display)

    return (
        <div className={`nav-top ${containerState()}`}>
            <div className={`map-nav ${mapNavState()}`}>
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
            <div className="content">
                <NavLink to="/" className="btn-flat btn">
                    <FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/fourteeners" className="btn-flat btn">
                    <FontAwesomeIcon icon={faFlag} />
                    <span>Fourteeners</span>
                </NavLink>
                <NavLink to="/colorado-map" className="btn-flat btn">
                    <FontAwesomeIcon icon={faMap} />
                    <span>Map</span>
                </NavLink>
                {/* <NavLink to="/profile" className="btn-flat btn">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Profile</span>
                </NavLink>
                <button className="btn-flat btn">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Sign-out</span>
                </button> */}
                <NavLink to="/sign-in" className="btn-flat btn">
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span>Sign-in</span>
                </NavLink>
                <NavLink to="/sign-up" className="btn-flat btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span>Sign-up</span>
                </NavLink>
            </div>
            <div
                className="control"
                disabled={!isEmpty(fourteener)}
                onClick={handleControlClick}
            >
                <FontAwesomeIcon icon={display ? faAngleUp : faAngleDown} />
            </div>
        </div>
    )
}

export default NavTop
