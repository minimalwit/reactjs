import React, { Component } from 'react'
import { Layer, Box, Button } from 'grommet'

class PaymentModal extends Component {
  render() {
    const { setShow } = this.props
    return (
      <Layer
        onEsc={() => setShow(false)}
        onClickOutside={() => setShow(false)}
      >
        <Box pad="medium">
          <Box pad="small">
            <Button primary label="Pay Now" onClick={this.payNow} />
          </Box>
          <Box pad="small">
            <Button label="Cash on Delivery" onClick={this.cod} />
          </Box>
        </Box>
        
      </Layer>
    )
  }
}

export default PaymentModal