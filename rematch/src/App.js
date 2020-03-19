import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  state={
    number: ''
  }

  handleChange = (e) =>{
    this.setState({[e.target.name]: [e.target.value] })
  }
  render() {
    return (
      <div className="App">
        Hello
        <br />
        {this.props.user.constant}
        <div>{`Number of User:: ${this.props.user.numberUser}`}</div>
        <input name='number' type="tel" onChange={this.handleChange} />
        {/* <div>{`Number of User:: ${props.addNumber}`}</div> */}
        <button onClick={() => this.props.addNumber(this.state.number)} value="test button">
          Test Button
        </button>
      </div>
    )
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       Hello
//       <br />
//       {props.user.constant}
//       <div>{`Number of User:: ${props.user.numberUser}`}</div>
//       <input type='tel' />
//       {/* <div>{`Number of User:: ${props.addNumber}`}</div> */}
//       <button onClick={() => props.addNumber(10)} value="test button">
//         Test Button
//       </button>
//     </div>
//   )
// }

const mapStateToProps = (state) => ({
  user: state.user,
})
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: dispatch.user.addNumber,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
