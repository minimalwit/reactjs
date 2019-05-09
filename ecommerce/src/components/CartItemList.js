import React, { Component } from 'react'
import { Box, Button, Grid } from 'grommet';
import { FormClose } from 'grommet-icons';
import { connect } from 'react-redux';
// var _ = require('lodash');


class CartItemList extends Component {

  
  handleDeleteToCart = (id) => {
    console.log('Delete from cart')
    const {
      deleteItem,
    } = this.props;
    deleteItem(id)
    
  }


  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state) {
      console.log('send Post to update cart')
      this.updateCart()
    }

  }

  render() {
    const {
      cartItems,
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
                  <Box gridArea="left" pad="small">
                    {item.name} x {item.amount}
                  </Box>
                  <Button 
                    icon={<FormClose  />}
                    gridArea="right"
                    onClick={(e) => this.handleDeleteToCart(item.productId)}
                  />
                </Grid>
                           
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
const mapDispatchToProps = dispatch => {
  return {
    deleteItem: dispatch.cart.deleteItem
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItemList)