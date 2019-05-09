import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Box, Stack, Image, Text,Heading } from 'grommet'


class CheckoutPage extends Component {

  componentDidMount(){
    this.props.getCartItems()
  }

  render() {
    const { name, description, image, price } = this.props
    return (
      <Box 
        direction="row"
        pad="small"
        >
        <Box width="medium">
        <Box>
          <Stack fill anchor="top-right">
            <Box height="small">
              <Image fit="cover" src={image} />
            </Box>
            <Box background="brand" pad="xsmall">
              <Text>{price}</Text>
            </Box>
          </Stack>
        </Box>
        <Box align="center">
          <Heading textAlign="center" level={4} margin={{vertical: 'xsmall'}}>
            {name}
          </Heading>
          <Text textAlign="center">
            {description}
          </Text>
          </Box>
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



