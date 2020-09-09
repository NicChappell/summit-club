// dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheckCircle,
    faMap,
    faMapMarker
} from '@fortawesome/free-solid-svg-icons'

const Fourteeners = (props) => {
    // destructure props
    const { fourteeners } = props

    return (
        <div className="container fourteeners">
            <div className="row">
                {fourteeners.map(fourteener => {
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

                    return (
                        <div className="col s12 m6" key={slug}>
                            <div className="card">
                                <div className="card-image">
                                    <img src={photo} alt={mountainPeak} />
                                    <span className="card-title">{mountainPeak}</span>
                                </div>
                                <div className="card-content">
                                    <p>{mountainRange}</p>
                                    <p>{elevationFeet}</p>
                                    <p>{standardRoute}</p>
                                    <p>{distanceMiles}</p>
                                    <p>{elevationGainFeet}</p>
                                    <p>{difficulty}</p>
                                </div>
                                <div className="card-action">
                                    <div className="navigation">
                                        <Link className="btn-flat btn" to={`/fourteeners/${slug}`}>
                                            Map
                                            <FontAwesomeIcon icon={faMap} />
                                        </Link>
                                    </div>
                                    <div className="tags">
                                        <div className="chip summited">
                                            Summited
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        <div className="chip verified">
                                            Verified Check-in
                                            <FontAwesomeIcon icon={faMapMarker} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Fourteeners
