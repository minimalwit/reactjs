import React, { Component } from 'react'
import { Box, Button, Grid } from 'grommet';
import { FormClose } from 'grommet-icons';
import { connect } from 'react-redux';

import store from '../store';
class CartItemList extends Component {

  handleDeleteToCart = (id) => {
    console.log('Delete from cart')
    const {
      deleteItem,
    } = this.props;
    deleteItem(id)
    
  }

  componentDidUpdate(prevProps, prevState) {
    // if(prevState !== this.state) {
    if(prevState) {
      console.log('send Post to update cart')
      const {
        updateCart,
      } = this.props;
      updateCart()
    }

  }

  render() {
    const {
      cartItems,
      totalPrice,
    } = this.props

    return (
      <Box pad="small">
        { 
            cartItems.map(item =>   
              ( 
                <Grid
                  areas={[
                    { name: "left"   , start: [0, 0], end: [0, 0] },
                    { name: "right"  , start: [1, 0], end: [1, 0] }
                  ]}
                  columns={["small", "xxsmall"]}
                  rows={["xxsmall"]}
                  gap="xxsmall"
                >
                  <Box gridArea="left" pad="small" border="bottom">
                    {item.name} x {item.amount}
                  </Box>
                  
                  <Button 
                    icon={<FormClose  />}
                    gridArea="right"
                    onClick={(e) => this.handleDeleteToCart(item.id)}
                  />
                </Grid>
          ))}
          <Box width="small" pad="small" border="bottom">
            {totalPrice} $USD
          </Box>
      </Box>
    )
  }
}
const mapStateToProps = state => {
  const getTotal = store.select.cart.getTotal 
  // const total = state.cart.cartItems.map(o => o.price)//.reduce((total, b) => total + (b.price))
  // console.log(state.cart.cartItems)
  // console.log(total)
  return {
    cartItems: state.cart.cartItems,
    totalPrice: (getTotal(state.cart.cartItems)*0.01).toFixed(2)
    // totalPrice: state.cart.totalPrice
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // deleteItem: dispatch.cart.deleteItem,
    deleteItem: dispatch.cart.deleteCartItemsAsync,
    updateCart: dispatch.cart.getCartItemsAsync
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItemList)