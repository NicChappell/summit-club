// dependencies
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// routes
import Home from './routes/Home'

// components
import Navigation from './components/Navigation'

// styles
import 'mapbox-gl/dist/mapbox-gl.css'
import './css/styles.css'

function App() {
    return (
        <div className="app">
            <Navigation />
            <Router>
                <div className="router">
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
