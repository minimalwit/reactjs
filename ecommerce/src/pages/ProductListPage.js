import React, { Component } from 'react'
import { Grommet, Box, TextInput } from 'grommet'
import ProductList from '../components/ProductList'

export default class ProductListPage extends Component {

  state = {
    query: ''
  }

  render() {
    return (
      // move content from app.js to hear

      <Grommet plain full>
        <Box
          direction="row"
          pad="medium"
          fill
        >
          <Box width="medium">
            <TextInput onChange={(e) => this.setState({ query: e.target.value })} />
          </Box>
          <Box flex>
            <ProductList search={this.state.query} />
          </Box>
        </Box>
      </Grommet>
    )
  }
}
