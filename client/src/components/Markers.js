// dependencies
import React, { PureComponent } from 'react'
import { Marker } from 'react-map-gl'

// marker icon
const ICON = `M7.5,0L7.5,0C3.4,0,0,3.3,0,7.5c0,0,0,0,0,0c0,1.4,0.5,2.8,1.1,4L6,19.2C6.3,19.7,6.9,20,7.5,20
c0.6,0,1.2-0.3,1.5-0.8l4.9-7.7c0.6-1.1,1.1-2.5,1.1-4C15,3.4,11.7,0,7.5,0C7.5,0,7.5,0,7.5,0z`

// marker size
const SIZE = 20

// use pure component for best performance
class Markers extends React.PureComponent {
    render() {
        // destructure props
        const {
            fourteeners,
            setTarget
        } = this.props

        return fourteeners.map((fourteener, index) => (
            <Marker
                key={index}
                longitude={fourteener.longitude}
                latitude={fourteener.latitude}
            >
                <svg
                    height={SIZE}
                    onClick={() => setTarget(fourteener)}
                    style={{
                        cursor: 'pointer',
                        transform: `translate(${-SIZE / 2}px, ${-SIZE}px)`
                    }}
                    viewBox="0 0 15 20"
                >
                    <path d={ICON} fill="#6a4025" stroke="none" />
                    <circle cx="7.5" cy="7" r="2.7" fill="#ffffff" stroke="none" />
                </svg>
            </Marker>
        ))
    }
}

export default Markers
