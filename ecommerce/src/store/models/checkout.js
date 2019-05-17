import request from '../../utils/request'
var _ = require ('lodash')




export const checkout = {

  state: {
      customer: {
        email: '',
        name: '',
      },
      billing_address: {
        first_name: '',
        last_name: '',
        company_name: '',
        line_1: '',
        line_2: '',
        city: '',
        postcode: '',
        county: '',
        country: ''
      },
      shipping_address: {
        first_name: '',
        last_name: '',
        company_name: '',
        phone_number: '',
        line_1: '',
        line_2: '',
        city: '',
        postcode: '',
        county: '',
        country: '',
        instructions: '',
      }
  },
  reducers: {
    // handle state changes with pure functions
    addSubmitItem(state, payload) {
      
      // console.log(state.customer.name)
      console.log(state)
      console.log(payload)
      _.forEach(payload.customer, function(value, key) {
        if (key){
            const key_value = value
            _.forEach(state.customer, function(value, key2) {
            if(key ===key2){
              return {
                ...state,
                // ${key} : 
              }
            }
          });
        }
      });
      // const hello = state.map(key => 
      //   console.log( `${key} ${state[key]}` ) 
      // )
      // [payload.field]
      // if (item) {
      // if (xxx){ 
      //   const customer = state.customer.map(o=> {
      //     if (!_.isEmpty(o)) {
      //       console.log(o)
      //       return {
      //         ...state,
      //         // name : o.name,
      //         // email: o.email,
      //       }
      //     }
      // })
        return {
          ...state,
          // customer: [...customer]
          
        }
      // }
    //   if (item) {
    //     const cartItems = state.cartItems.map(o => {
    //       if (o.productId === payload) {
    //         return {
    //           ...o,
    //           amount: o.amount + 1
    //         }
    //       }
    //       return o
    //     })
    //     return {
    //       ...state,
    //       cartItems
    //     }
    //   }
    //   return {
    //     ...state,
    //     cartItems: [{
    //       productId: payload,
    //       amount: 1
    //     }, ...state.cartItems]
    //   }
    },

  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async incrementAsync(payload, rootState) {
    //   await new Promise(resolve => setTimeout(resolve, 1000))
    //   dispatch.count.increment(payload)
    // }

    async getCartItemsAsync() {
      const res = await request.get('/carts/123456/items')
      console.log(res.data)
      const cleanData = res.data.data.map((item) => {
        return {
          id: item.id,
          productId: item.product_id,
          amount: item.quantity,
          name: item.name,
          image: 'https://via.placeholder.com/300x400.png',
          price: item.meta.display_price.with_tax.value.formatted,
          pricePerUnit: item.meta.display_price.with_tax.unit.amount,
          description: item.description,
        }
      })
      console.log(cleanData)
      // dispatch.cart.setTotalPrice(this.select.total)
      dispatch.cart.setCartItems(cleanData)
    },
    async addItem(payload, rootState) {
      await request.post(`/carts/123456/items`, {
        data: payload
      })
      await dispatch.cart.getCartItemsAsync()
    },
    async deleteItem(payload, rootState) {
      await request.delete(`/carts/123456/items/${payload.id}`)
      await dispatch.cart.getCartItemsAsync()
    },


  }),
  selectors: {
    },


  }





