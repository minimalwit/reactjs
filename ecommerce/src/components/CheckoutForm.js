import React, { Component } from 'react'
import { Heading, Form, FormField, Box, Button } from 'grommet'
import { connect } from 'react-redux'

class CheckoutForm extends Component {

  
  state = {
    customer : [],
    billing_address :[],
    shipping_address : [],
  }

  handleFormSubmit = () => {
    console.log('addSubmitItem')
    const {
      addSubmitItem,
 
    } = this.props;

    // console.log(this.state)
    addSubmitItem(this.state)
    // await addSubmitItem(this.state);
  }


  // ทำ State ให้มีลำดับชั้นเท่ากัน
  onChangeValue = (e) => {
    const { name, value } = e.target
    this.setState({[name]:value})
  }


  handleChangeCustomer = (e, field) => {
    //react web but not compatible with react native
    this.setState(
      { ...this.state,
        customer : { 
          ...this.state.customer,
          [e.target.name]: e.target.value
        }
    })
  }

  handleChangeBilling = (e, field) => {
    //react web but not compatible with react native
    this.setState(
      { ...this.state,
        billing_address : { 
          ...this.state.billing_address,
          [e.target.name]: e.target.value
        }
    })
  }

  handleChangeShipping = (e, field) => {
    //react web but not compatible with react native
    this.setState(
      { ...this.state,
        shipping_address : { 
          ...this.state.shipping_address,
          [e.target.name]: e.target.value
        }
    })
  }
           
//<Form onSubmit={() => this.props.onSubmit(this.state)}></Form>
  render() {
    return (
      <div>
        
        <Form>
          <Box direction="row" justify="between" >
            <Heading level="2">Your Info</Heading>
            <Button type="submit" label="Submit"/> 
          </Box>
          <div name="customer">
            <FormField name="name"  label="Name"  onChange={this.handleChangeCustomer}/>
            <FormField name="email" label="Email" onChange={this.handleChangeCustomer}/>
          </div>
          <div name="billing_address">
            <Heading level="2">Billing Address</Heading>
              <FormField name="first_name" label="First Name"     onChange={this.handleChangeBilling} />  
              <FormField name="last_name" label="Last Name"       onChange={this.handleChangeBilling} /> 
              <FormField name="company_name" label="Company Name" onChange={this.handleChangeBilling} /> 
              <FormField name="line_1" label="Address 1"          onChange={this.handleChangeBilling} /> 
              <FormField name="line_1" label="Address 2"          onChange={this.handleChangeBilling} /> 
              <FormField name="postcode" label="Postcode"         onChange={this.handleChangeBilling} /> 
              <FormField name="city" label="City"                 onChange={this.handleChangeBilling} /> 
              <FormField name="county" label="County"             onChange={this.handleChangeBilling} /> 
              <FormField name="country" label="Country"           onChange={this.handleChangeBilling} /> 
          </div>
          <div name="shipping_address">
          <Heading level="2">Shipping Address</Heading>
            <FormField name="first_name" label="First Name"       onChange={this.handleChangeShipping} /> 
            <FormField name="last_name" label="Last Name"         onChange={this.handleChangeShipping} />
            <FormField name="company_name" label="Company Name"   onChange={this.handleChangeShipping} />
            <FormField name="phone_number" label="Phone number"   onChange={this.handleChangeShipping} /> 
            <FormField name="line_1" label="Address 1"            onChange={this.handleChangeShipping} />
            <FormField name="line_1" label="Address 1"            onChange={this.handleChangeShipping} />
            <FormField name="line_2" label="Address 2"            onChange={this.handleChangeShipping} />
            <FormField name="postcode" label="Postcode"           onChange={this.handleChangeShipping} />
            <FormField name="city" label="City"                   onChange={this.handleChangeShipping} />
            <FormField name="county" label="County"               onChange={this.handleChangeShipping} />
            <FormField name="country" label="Country"             onChange={this.handleChangeShipping} /> 
            <FormField name="instructions" label="Instructions"   onChange={this.handleChangeShipping} />
          </div> 
        </Form>
      </div>
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
    // addItem: dispatch.cart.addCartItemsAsync,
    addSubmitItem: dispatch.checkout.addSubmitItem
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutForm)
