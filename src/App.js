import Home from './components/Home'
import Header from './components/Header'
// routes
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// global styles
import { GlobalStyles } from './GlobalStyles'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <GlobalStyles />
      </Router>
    </div>
  )
}

export default App
