// dependencies
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

const ResetViewport = ({ setFourteener }) => {
    const handleClick = () => setFourteener({})

    return (
        <button
            className="btn"
            onClick={handleClick}
        >
            Go Back
            <FontAwesomeIcon icon={faUndo} />
        </button>
    )
}

export default ResetViewport
