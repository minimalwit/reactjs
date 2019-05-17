import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Box, InfiniteScroll } from 'grommet'
import CheckoutProductList from './CheckoutProductList'
import CheckoutForm from '../components/CheckoutForm'

class CheckoutPage extends Component {

  componentDidMount(){
    this.props.getCartItems()
  }

  render() {
    const { cartItems } = this.props
    return (
      <Box 
        direction="row"
        pad="small"
        >
          <Box
            width="medium"
           //height="medium"
            pad="small"
            overflow="auto"
          >
          <InfiniteScroll items={[...cartItems]}>
            {(product) => (
            
            //  cartItems.map((product) => (
                  <CheckoutProductList {...product} />
            //  ))
            
            )}
          </InfiniteScroll>
          </Box>
        <Box flex pad="medium">
            <CheckoutForm/>
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



