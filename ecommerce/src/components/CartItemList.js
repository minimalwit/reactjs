import React, { Component } from 'react'
import { Box } from 'grommet';
import { connect } from 'react-redux';

class CartItemList extends Component {
  render() {
    const {
      cartItems,
    } = this.props
    return (
      <Box pad="small">
        {cartItems.map(item => (
          <Box pad="small">
            {item.productId} x {item.amount}
          </Box>
        ))}
      </Box>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  }
}
export default connect(mapStateToProps)(CartItemList)