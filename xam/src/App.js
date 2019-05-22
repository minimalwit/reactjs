import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, } from 'react-router-dom'

import { connect } from 'react-redux'

// import request from './utils/request'
import './css/logup.css'

import Login from './components/login'
import Signup from './components/signup'

// function App() {
//   return (
//     <div className="App">
//       What up
//     </div>
//   );
// }

class App extends Component {


  state = {
    isToggle : false,
  }

  handleToggle = () => {
    // console.log(this.state.isToggle)
    this.setState({ 
      isToggle : (this.state.isToggle)?false:true
    })
  }

  render () {
    const {
      isToggle
    } = this.state

    return (
          <div className='app-grid '>
            <div className='app-top'>
              <Login handleToggle={this.handleToggle}/>
              <Signup/>
            </div>
            {isToggle &&
              <div className='app-bottom dark-1'>
              <div className='column grow  '>
                  App Expense
              </div>
            </div>
            }
          </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {  
    // getItems : dispatch.cars.getCartItems
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

