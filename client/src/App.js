// dependencies
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'

// routes
import ColoradoMap from './routes/ColoradoMap'
import FourteenerMap from './routes/FourteenerMap'

// styles
import 'mapbox-gl/dist/mapbox-gl.css'
import './css/styles.css'

function App() {
    // // state hook variables
    // const [user, setFourteeners] = useState({})

    // // fetch data and update state when component mounts
    // useEffect(() => {
    //     // get fourteeners
    //     axios.get(`/api/v1/fourteeners`)
    //         .then(res => setFourteeners(res.data))
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ColoradoMap} />
                    <Route exact path="/:slug" component={FourteenerMap} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
