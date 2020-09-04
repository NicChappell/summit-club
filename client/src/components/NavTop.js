// dependencies
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faAngleUp
} from '@fortawesome/free-solid-svg-icons'

const NavBottom = (props) => {
    // destructure props
    const {
        mrah
    } = props

    // state hooks
    const [display, setDisplay] = useState(false)
    const [styles, setStyles] = useState({ top: '-100px' })

    useEffect(() => {
        display
            ? setStyles({ top: '0' })
            : setStyles({ top: '-100px' })
    }, [display])

    const handleClick = () => setDisplay(!display)

    return (
        <div className="navigation-top" style={{ ...styles }}>
            <div
                className="control"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={display ? faAngleUp : faAngleDown} />
            </div>
            <div className="mrah">
                {mrah}
            </div>
        </div>
    )
}

export default NavBottom
