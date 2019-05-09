import React, { Component } from 'react'
import { Box, Button, Grid } from 'grommet';
import { FormClose } from 'grommet-icons';
import { connect } from 'react-redux';
var _ = require('lodash');


      // {/* <Box pad="small">
      //         {item.productId} x {item.amount}
      //       </Box>
      //       <Button 
      //         label="x"
      //       /> */}

class CartItemList extends Component {

  
  handleDeleteToCart = (id) => {
    console.log('Delete from cart')
    const {
      deleteItem,
    } = this.props;
    deleteItem(id)
    
  }

  render() {
    let {
      cartItems,
    } = this.props

    console.log(cartItems)
    console.log(cartItems.length)
    console.log(_.isEmpty(cartItems))
    // const initialState = []
    if (cartItems!== null){
      cartItems = cartItems.filter((o) => o !== undefined && !_.isEqual(o,{}) && !_.isEqual(o,[])  && o!== null )
    }
    
    //     if (cartItem[0] === 0){
    //   console.log("cloneDeep jaa")
    //   cartItems = _.cloneDeep(initialState)
    // }
    console.log(_.isEmpty(cartItems))
    console.log(cartItems.length)
    console.log(cartItems)
    // this.preventDefault()

    return (
      <Box pad="small">
        {cartItems.map(item => (     
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
              {item.productId} x {item.amount}
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