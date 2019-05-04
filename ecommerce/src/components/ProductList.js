import React from 'react'
import { Box } from 'grommet'
import ProductItem from './ProductItem'
import request from '../utils/request'

class ProductList extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.search !== this.props.search) {
      console.log('Search change', this.props.search)
      this.updateData()
    }
  }

  updateData = async () => {
    // https://api.moltin.com/v2/products?include=main_image&filter=like(name,*{searchvalue}*)
    const searchvalue = `https://api.moltin.com/v2/products?include=main_image&filter=like(name,*${this.props.search}*)`
    console.log(searchvalue)
    const res = await request.get(searchvalue)
    const data = res.data.data.map(item => {
      let image = 'https://via.placeholder.com/300x400.png';
      if (item.relationships.main_image) {
        const fileId = item.relationships.main_image.data.id
        const file = res.data.included.main_images.find(function(el) {
          return fileId === el.id;
        });
        image = file.link.href
      }
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        image,
        price: item.meta.display_price.with_tax.formatted,
      }
    })
    // console.log("didupdate") 
    // console.log(data)
    this.setState({
      data,
    })
  }

  
  fetchData = async () => {
    const res = await request.get('/products?include=main_image')
    const data = res.data.data.map(item => {
      let image = 'https://via.placeholder.com/300x400.png';
      if (item.relationships.main_image) {
        const fileId = item.relationships.main_image.data.id
        const file = res.data.included.main_images.find(function(el) {
          return fileId === el.id;
        });
        image = file.link.href
      }
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        image,
        price: item.meta.display_price.with_tax.formatted,
      }
    })
    this.setState({
      data,
    })
  }

  render() {
    const { data } = this.state
    // console.log("render")
    // console.log(data)
    return (
      <Box
        direction="column"
        pad="small"
        fill
      >
        <Box pad="small" background="light-3" >
          Product list
        </Box>
        <Box
          pad="small"
          direction="row"
          fill
          wrap
          overflow="auto"
        >
          {
            data.map((product) => (
              <ProductItem {...product} />
            ))
          }
        </Box>
      </Box>
    )
  }
}

export default ProductList