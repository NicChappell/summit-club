// dependencies
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// routes
import ColoradoMap from './routes/ColoradoMap'

// components
import NavBottom from './components/NavBottom'
import NavTop from './components/NavTop'

// styles
import 'mapbox-gl/dist/mapbox-gl.css'
import './css/styles.css'

function App() {
    // state hooks
    const [distance, setDistance] = useState(Infinity)
    console.log(distance)
    const [fourteener, setFourteener] = useState({})
    const [fourteeners, setFourteeners] = useState([])
    const [location, setLocation] = useState({})
    const [user, setUser] = useState({})
    const [target, setTarget] = useState({})

    return (
        <div className="app">
            <NavTop
                fourteener={fourteener}
                location={location}
                setFourteener={setFourteener}
            />
            <Router>
                <div className="router">
                    <Switch>
                        <Route path="/" render={() => (
                            <ColoradoMap
                                fourteener={fourteener}
                                fourteeners={fourteeners}
                                location={location}
                                setDistance={setDistance}
                                setFourteener={setFourteener}
                                setFourteeners={setFourteeners}
                                setLocation={setLocation}
                                setTarget={setTarget}
                                target={target}
                                user={user}
                            />
                        )} />
                    </Switch>
                </div>
            </Router>
            <NavBottom
                setFourteener={setFourteener}
                setTarget={setTarget}
                target={target}
            />
        </div>
    )
}

export default App