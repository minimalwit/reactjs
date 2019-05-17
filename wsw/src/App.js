import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, } from 'react-router-dom'

import { connect } from 'react-redux'

import { Grommet } from 'grommet'
import request from './utils/request'
import Front from './components/front'

// function App() {
//   return (
//     <div className="App">
//       What up
//     </div>
//   );
// }

class App extends Component {


  
  componentDidMount = async() => {
    // const {
    //   getItems
    // } = this.props  
    // getItems()
    try {
      const cmd = 'getMakes'
      const res = await request.get(`/?callback=JSON&cmd=${cmd}`)
      console.log (res)
    }catch (e){
      console.log("fail getdata")
    }

  }

//<Switch>
//          <Route path="/front" exact component={Front}/>
//        <Route path="**" component={() => <h1>Not found</h1>} /> 
//</Switch>
//<button onClick={this.props.history.push('/front')}> Front</button>
  render () {
    // let isToggle = false


    return (
      <Grommet>
        <Router>
          <div>
            <p> Hello world </p>

            <Front/>
            
          </div>
        </Router>
      </Grommet>

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

