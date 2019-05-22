import React, { Component } from 'react'
import '../css/logup.css'
import { connect } from 'react-redux'


class signup extends Component {


  state = {
    username: '',
    password: '',
  }

  handleChange = (e, field) => {
    //react web but not compatible with react native
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = async () => {
    const {
      signup
    } = this.props;
    try {
      await signup(this.state)
      alert('login success')
    } catch (e) {
      alert('login fail')
    }
  }


  //<p className='username grow light-2'>Username</p>
  //<p className='password grow light-2'>Password</p>
  render() {
    return (
      <div className='column-side grid
                      center-item 
                      light-2'>
        <p className='label 
                      grow 
                      center-self
                      light-1'>
          Signup side
        </p>

        <input  type='text'
                name='username'
                className='username input' 
                placeholder="Username"
                onChange={this.handleChange}/>
        <input  type='text'
                name='password'
                className='password input' 
                placeholder="Password"
                onChange={this.handleChange}/>
        <input  type="button" 
                className='form-button input-button'
                value='Sign Up'
                onClick={this.handleLogin}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    signup: dispatch.user.signup
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (signup)