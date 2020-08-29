// dependencies
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// routes
import ColoradoMap from './routes/ColoradoMap'
import FourteenerMap from './routes/FourteenerMap'

// styles
import './css/styles.css'

function App() {
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
