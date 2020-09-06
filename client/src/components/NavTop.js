// dependencies
import React, {
    useEffect,
    useState
} from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp,
    faFlag,
    faHome,
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
    const [buttonStyles, setButtonStyles] = useState({ left: '-52px' })
    const [containerStyles, setContainerStyles] = useState({ top: '-70px' })

    // update state when display changes
    useEffect(() => {
        display
            ? setContainerStyles({ top: '0' })
            : setContainerStyles({ top: '-70px' })
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
            <div className="container">
                <div className="row">
                    <div className="col s12 content">
                        <NavLink to="/" className="btn-flat btn">
                            <FontAwesomeIcon icon={faHome} />
                            <span>Home</span>
                        </NavLink>
                        <NavLink to="/fourteeners" className="btn-flat btn">
                            <FontAwesomeIcon icon={faFlag} />
                            <span>Fourteeners</span>
                        </NavLink>
                        <NavLink to="/profile" className="btn-flat btn">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Profile</span>
                        </NavLink>
                        <NavLink to="/sign-in" className="btn-flat btn">
                            <FontAwesomeIcon icon={faSignInAlt} />
                            <span>Sign-in</span>
                        </NavLink>
                        <button className="btn-flat btn">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span>Sign-out</span>
                        </button>
                        <NavLink to="/sign-up" className="btn-flat btn">
                            <FontAwesomeIcon icon={faUserPlus} />
                            <span>Sign-up</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavTop
