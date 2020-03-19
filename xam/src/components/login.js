import React, { Component } from 'react'
import '../css/logup.css'
import { connect } from 'react-redux'


class login extends Component {


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
      // login
      // getLogin
      login
    } = this.props;
    
    try {
      // await login(this.state)
      await login(this.state)
      console.log('login success')
    } catch (e) {
      console.log('login fail')
    }
  }

  handleLogout = () =>{
    const {
      logout
    } = this.props
    logout()
  }


  // onClick={() => this.props.handleToggle()}
  //<p className='username grow light-2'>Username</p>
  //<p className='password grow light-2'>Password</p>
  render() {
    const {
      isShowExpense
    } = this.props.user

    return (
      <div className='column-side grid
                      center-item height-top
                      light-1'>
        <p className='label 
                      grow 
                      center-self
                      light-2'>
          Login side
        </p>

        <input  type='text'
                name='username'
                className='username input-front' 
                placeholder="Username"
                onChange={this.handleChange}/>
        <input  type='text'
                name='password'
                className='password input-front' 
                placeholder="Password"
                onChange={this.handleChange}/>
        {!isShowExpense ?
        <input  type="button" 
                className='form-button input-button'
                value='Sign in'
                onClick={this.handleLogin}/>
        : 
        <input  type="button" 
                className='form-button input-button'
                value='Sign out'
                onClick={this.handleLogout}/>
        }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    // login: dispatch.user.login
    // getLogin: dispatch.user.getLogin
    login : dispatch.user.login,
    logout: dispatch.user.logout
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (login)