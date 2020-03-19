import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, } from 'react-router-dom'

import { connect } from 'react-redux'

// import request from './utils/request'
import './css/logup.css'

import Login from './components/login'
import Signup from './components/signup'
import Expense from './components/expense'

// function App() {
//   return (
//     <div className="App">
//       What up
//     </div>
//   );
// }

class App extends Component {


  state = {
    isShowLogin:  false
  }

// <div className='app-top'>
//               <Login />
//               <Signup/>
//             </div>
// {isShowExpense &&
            // {/* /{isShowExpense && */}
  render () {
    const {
      isShowExpense
    } = this.props.user
    console.log(isShowExpense)
    return (
          <div className='app-grid '>
            
            {this.state.isShowLogin &&
            <div className='app-top'>
              <Login />
              <Signup/>
            </div>
            }

            {true &&
            <div className='app-top column dark-1'>
              <Expense/>
            </div>
            }
          </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {  
    // getItems : dispatch.cars.getCartItems
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

