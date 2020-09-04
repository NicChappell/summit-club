// dependencies
import React from 'react'
import isEmpty from 'lodash.isempty'

const Chip = (props) => {
    // destructure props
    const {
        details: fourteener,
        setShowDetails,
        showDetails
    } = props

    return (
        <div
            className="chip"
            onClick={() => setShowDetails(!showDetails)}
        >
            {!isEmpty(fourteener) ? <span>{fourteener.mountainPeak}</span> : null}   
            <i className="material-icons">info</i>
        </div>
    )
}

export default Chip
