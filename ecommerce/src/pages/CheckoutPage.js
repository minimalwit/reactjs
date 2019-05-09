import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Box } from 'grommet'


class CheckoutPage extends Component {

  componentDidMount(){
    this.props.getCartItems()
  }

  render() {
    return (
      <Box 
        direction="row"
        pad="small"
        >
        <Box width="medium">
            cart items
        </Box>
        <Box flex>
            form
        </Box>

      </Box>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = (dispatch) => ({
  getCartItems: dispatch.cart.getCartItemsAsync
})

export default connect(mapStateToProps,mapDispatchToProps) (CheckoutPage)



