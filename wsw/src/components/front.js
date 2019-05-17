import React, { Component } from 'react'
import { Box, Grid } from 'grommet'

class front extends Component {

    //{ name: 'pic', start: [0, 0], end: [3, 3] },
   // { name: 'text1', start: [0, 3], end: [0, 5] },
   // { name: 'text2', start: [1, 3], end: [1, 5] },
  render() {
    return (
      <div>
      <Box 
        direction="row"
      
        pad="small">
        <Box 
        direction="column"
        width="medium"
        height="xmedium"
        pad="small"
        background="brand"> Picture </Box>
        <Box width="large">
            <Grid
                rows={['xsmall', 'xsmall', 'xsmall',]}
                columns={[  'small','small','small', 
                            'small','small','small',
                            ]}
                //gap="small"
                areas={[
                    
                    { name: 'pic', start: [0, 0], end: [5, 0] },
                    { name: 'pic2', start: [5, 0], end: [5, 0] },
                    { name: 'pic3', start: [0, 1], end: [5, 1] },
                    { name: 'pic4', start: [5, 1], end: [5, 1] },
                    { name: 'text2', start: [0, 2], end: [1, 2] },
                    { name: 'text3', start: [1, 2], end: [2, 2] },
                    { name: 'text4', start: [2, 2], end: [3, 2] },
                    { name: 'text5', start: [3, 2], end: [4, 2] },
                    { name: 'text6', start: [4, 2], end: [5, 2] },
                    { name: 'text7', start: [5, 2], end: [5, 2] },
                ]}
                >
                <Box gridArea="pic" background="dark-3" />
                <Box gridArea="pic2" background="dark-2" />
                <Box gridArea="pic3" background="dark-2" />
                <Box gridArea="pic4" background="neutral-1" />
                <Box gridArea="text1" background="light-5" />
                <Box gridArea="text2" background="accent-3" />
                <Box gridArea="text3" background="accent-2" />
                <Box gridArea="text4" background="neutral-1" />
                <Box gridArea="text5" background="status-warning" />
                <Box gridArea="text6" background="status-error" />
                <Box gridArea="text7" background="status-warning" />
                <Box gridArea="text8" background="neutral-5" />
            </Grid>
        </Box>
        </Box>
      </div>
    )
  }
}
export default front