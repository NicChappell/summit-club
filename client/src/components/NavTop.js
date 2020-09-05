// dependencies
import React, {
    useEffect,
    useState
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp,
    faMapMarker,
    faUndo
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
    const [containerStyles, setContainerStyles] = useState({ top: '-100px' })

    useEffect(() => {
        display
            ? setContainerStyles({ top: '0' })
            : setContainerStyles({ top: '-100px' })
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
                    className="btn-floating btn z-depth-0"
                    onClick={() => console.log('check-in')}
                >
                    <FontAwesomeIcon icon={faMapMarker} />
                </button>
                <button
                    className="btn-floating btn z-depth-0"
                    onClick={() => setFourteener({})}
                >
                    <FontAwesomeIcon icon={faUndo} />
                </button>
            </div>
            <div
                className="control"
                onClick={handleControlClick}
            >
                <FontAwesomeIcon icon={display ? faAngleUp : faAngleDown} />
            </div>
            <div>
                asdf
            </div>
        </div>
    )
}

export default NavTop
