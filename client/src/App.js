// dependencies
import React, {
    useEffect,
    useState
} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'

// routes
import ColoradoMap from './routes/ColoradoMap'
import Fourteener from './routes/Fourteener'
import Fourteeners from './routes/Fourteeners'
import Home from './routes/Home'
import NoMatch from './routes/NoMatch'
import Profile from './routes/Profile'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'

// components
import NavBottom from './components/NavBottom'
import NavTop from './components/NavTop'

// styles
import 'mapbox-gl/dist/mapbox-gl.css'
import './css/styles.css'

function App() {
    // state hooks
    const [distance, setDistance] = useState(Infinity)
    const [fourteener, setFourteener] = useState({})
    const [fourteeners, setFourteeners] = useState([])
    const [location, setLocation] = useState({})
    const [user, setUser] = useState({})
    const [target, setTarget] = useState({})

    // effect hooks
    useEffect(() => {
        // fetch fourteeners and update state
        axios.get('/api/v1/fourteeners')
            .then(res => setFourteeners(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="app">
            <Router>
                <NavTop
                    fourteener={fourteener}
                    setFourteener={setFourteener}
                />
                <div className="router">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home />
                            )}
                        />
                        <Route
                            exact
                            path="/colorado-map"
                            render={() => (
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
                            )}
                        />
                        <Route
                            exact
                            path="/fourteeners"
                            render={() => (
                                <Fourteeners fourteeners={fourteeners} />
                            )}
                        />
                        <Route
                            exact
                            path="/fourteeners/:slug"
                            render={() => (
                                <Fourteener />
                            )}
                        />
                        <Route
                            exact
                            path="/profile"
                            render={() => (
                                <Profile />
                            )}
                        />
                        <Route
                            exact
                            path="/sign-in"
                            render={() => (
                                <SignIn />
                            )}
                        />
                        <Route
                            exact
                            path="/sign-up"
                            render={() => (
                                <SignUp />
                            )}
                        />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </div>
                <NavBottom
                    setFourteener={setFourteener}
                    setTarget={setTarget}
                    target={target}
                />
            </Router>
        </div>
    )
}

export default App
