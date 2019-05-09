// import { request } from 'https';
import request from '../../utils/request'

var _ = require('lodash');
export const cart = {
  state: {
    cartItems: [
      // {
      //   productId: 1,
      //   amount: 2
      // }
    ],
    totalPrice: 0,

  },
  reducers: {
    // handle state changes with pure functions
    addItem(state, payload) {
      const item = state.cartItems.find(o => o.productId === payload);
      console.log(state)
      console.log(payload)
      if (item) {
        const cartItems = state.cartItems.map(o => {
          if (o.productId === payload) {
            return {
              ...o,
              amount: o.amount + 1
            }
          }
          return o
        })
        return {
          ...state,
          cartItems
        }
      }
      return {
        ...state,
        cartItems: [{
          productId: payload,
          amount: 1
        }, ...state.cartItems]
      }
    },
    deleteItem(state, payload) {
      console.log("delete jaa")
      
      const item = state.cartItems.find(o => o.productId === payload);
      console.log(state)
      console.log(payload)
      console.log(item)
      if (item) {
        const cartItems = state.cartItems.map(o => {
          if (o.productId === payload && o.amount > 1) {
            return {
              ...o,
              amount: o.amount - 1
            }
          }
          if (o.productId === payload && o.amount === 1){
            //remove list by filter
            // console.log(currentstate)
            const initialstate = {cartItems:[]}
            let currentstate = {...state}
            const cartItems = currentstate.cartItems.filter((n) => n !== item)
            console.log("newlist")
            console.log(cartItems)
            if (cartItems.length === 0) {
              return {...state,cartItems}
            }
            return {
              ...state,
              cartItems
            }
          }
        })
        return {
          ...state,
          cartItems
        }
      }
      return state
    },

    setCartItems (state,payload){
      return{
        ...state,
        cartItems: payload
      }
    },

    setTotalPrice(state,payload){
      return {
        ...state,
        totalPrice: payload
      }
    },

  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async incrementAsync(payload, rootState) {
    //   await new Promise(resolve => setTimeout(resolve, 1000))
    //   dispatch.count.increment(payload)
    // }
    async getCartAsync() {
      const res = await request.get('/carts/123456/items')
      console.log(res.data)
      const cleanData = res.data.data.map((item) => {
        return {
          id: item.id,
          productId: item.product_Id,
          amount: item.quantity,
          name: item.name,
          
        }


      })
    }


  })
}