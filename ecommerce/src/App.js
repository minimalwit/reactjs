import React, { Component } from 'react';
import { Grommet, Box } from 'grommet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import AppBar from './components/AppBar'
import ProductListPage from './pages/ProductListPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'


class App extends Component {
  
  render() {
    const { isLoading } = this.props
    if (isLoading) {
      return (
        <h1>Loading...</h1>
      )
    }


    return (
      <Router>
        <Grommet plain full>
          <Box direction="column" fill>
            <AppBar />
            <Switch>
              <Route path="/" exact component={ProductListPage}/>
              <Route path="/checkout" exact component={CheckoutPage}/>
              <Route path="/login" exact component={LoginPage}/>
              <PrivateRoute path="/profile" exact component={ProfilePage}/>
              <Route path="**" component={() => <h1>Not found</h1>} /> 
            </Switch>
            
          </Box>
        </Grommet>
      </Router>
      
    );
  }
}

// K'Aek recomment K'Jump to fix this issue.
// Add loading state during login to relief user waiting
const mapStateToProps = (state) => {
  return {
    isLoading: !state._persist.rehydrated
  }
}

export default connect(mapStateToProps)(App);
