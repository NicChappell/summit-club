// dependencies
import React from 'react'

// components
import ColoradoMap from '../components/ColoradoMap'

const Home = () => {
    return (
        <div className="container home">
            <div className="row">
                <div className="col s12 map">
                    <ColoradoMap />
                </div>
            </div>
        </div>
    )
}

export default Home
