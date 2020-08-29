// dependencies
import React, { useEffect, useState } from 'react'

const CheckIn = (props) => {
    // destructure props
    const {
        disabled,
        handleClick
    } = props

    // state hook variables
    const [] = useState('')
    return (
        <button
            className="btn-floating btn-large drop-pin"
            disabled={disabled}
            onClick={handleClick}
        >
            <i className="material-icons">pin_drop</i>
        </button>
    )
}

export default CheckIn
