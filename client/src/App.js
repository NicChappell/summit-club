// dependencies
import React from 'react'
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
    return (
        <div className="app">
            <NavTop />
            <Router>
                <div className="router">
                    <Switch>
                        <Route path="/" component={ColoradoMap} />
                    </Switch>
                </div>
            </Router>
            <NavBottom />
        </div>
    )
}

export default App
