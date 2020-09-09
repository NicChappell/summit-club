// dependencies
import React, { useState } from 'react'
import {
    Link,
    NavLink,
    useLocation
} from 'react-router-dom'
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

// images
import logo from '../img/logo.svg'

const NavTop = (props) => {
    // destructure props
    const {
        fourteener,
        setFourteener
    } = props

    // react router hooks
    const location = useLocation()
    console.log(location)

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

    if (location.pathname === '/colorado-map') {
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

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col s12 content">
                        <div className="brand">
                            <Link to="/">
                                <img alt="Summit Club" src={logo} />
                            </Link>
                            <span>Summit Club</span>
                        </div>
                        <div className="desktop hide-on-small-only">
                            <ul>
                                <li>
                                    <NavLink to="/fourteeners">
                                        Fourteeners
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/colorado-map">
                                        Map
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/profile">
                                        Profile
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/sign-in">
                                        Sign In
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/sign-up">
                                        Sign Up
                                    </NavLink>
                                </li> */}
                                <li>
                                    <button className="btn-flat btn">
                                        Sign Out
                                    </button>
                                </li>
                            </ul>




                        </div>
                        <div className="mobile hide-on-med-and-up">
                            mobile
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavTop
