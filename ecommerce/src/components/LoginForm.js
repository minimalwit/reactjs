import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, Button } from 'grommet'


export class LoginForm extends Component {
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
      login
    } = this.props;
    try {
      await login(this.state)
      alert('login success')
    } catch (e) {
      alert('login fail')
    }
  }

  render() {
    // ดัก Event Onchange แล้วเก็บ state ที่ component form
    return (
      <div>
        <TextInput
          name="username"
          placeholder="username"
          onChange={this.handleChange} />
        <TextInput
          name="password"
          placeholder="password"
          type="password"
          onChange={this.handleChange} />
        <Button
          label="Sign in"
          onClick={this.handleLogin} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    login: dispatch.user.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)

