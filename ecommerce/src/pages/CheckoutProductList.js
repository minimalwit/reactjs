import React from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
} from 'grommet'
// import { Shop } from 'grommet-icons'
import { connect } from 'react-redux'

class CheckoutProductList extends React.Component {
  render() {
    const { name, description, image, price } = this.props
    return (
      <Box
        direction="column"
        //basis="medium"
        basis="auto"
        pad="small"
        border={{ size: 'xsmall' }}
        flex={false}
      >
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
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItem: dispatch.cart.addCartItemsAsync,
    // addItem: dispatch.cart.addItem
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProductList)
