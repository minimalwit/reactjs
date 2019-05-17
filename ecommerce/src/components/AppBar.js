import React from 'react'
import { Box, Heading, Button } from 'grommet';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import store from '../store';
import ShoppingCartButton from './ShoppingCartButton';

class AppBar extends React.Component {
  render() {
    const { 
      isAuthenticated
    } = this.props

    return (
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{
          left: 'medium',
          right: 'medium',
          vertical: 'small'
        }}
        elevation='medium'
        style={{ zIndex: '1' }}
      >
        <Heading
          style={{cursor:"pointer"}}
          level="4"
          margin="xsmall"
          onClick={()=> this.props.history.push('/')}
        >
          Devincube store
        </Heading>
        
        <Box style={{width:300 }} direction="row" align="right">
          <ShoppingCartButton />
          {
            !isAuthenticated ? 
            <Button label="Login" onClick={()=> this.props.history.push('/login')}/> :
            <Button label="Logout" onClick={()=>this.props.logout()}/>
          }
          {
            isAuthenticated && <Button label="My Profile" onClick={() => this.props.history.push('/profile') }/> 
          }
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state =>{
  const isAuthenticated =  store.select.user.isAuthenticated
  return {
    isAuthenticated: isAuthenticated(state),
    // isAuthenticated: state.user.isAuthenticated
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    login: dispatch.user.login,
    logout: dispatch.user.logout,
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(AppBar))
