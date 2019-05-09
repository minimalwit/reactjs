import request from '../../utils/request'
// var _ = require('lodash');

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
      // console.log("delete jaa")
      // console.log(state)
      // console.log(payload)
      const item = state.cartItems.find(o => o.productId === payload);
      // console.log(item)
      let mode=""
      if (item) {
        const cartItems = state.cartItems.map(o => {
          if (o.productId === payload && o.amount > 1) {
            mode="REDUCE_ITEM"
            return {
              ...o,
              amount: o.amount - 1
            }
          }
          if (o.productId === payload && o.amount === 1){
            mode="DELETE_ITEM"
            return true
          }
          return o
        })

        
        if (mode==="REDUCE_ITEM") {
          return {
            ...state,
            cartItems: cartItems
          }
        }
        const deleledItemsState = state.cartItems.filter(o => o!== item)
        console.log("newState")
        console.log(deleledItemsState)
        return {
          ...state,
          cartItems: deleledItemsState
        }
      }
      
      return {
        ...state,
        ...state.cartItems,
      }
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
    
    async addCartItemsAsync (id) {
      // {
      //   "data": {
      //     "type": "cart_item",
      //     "id": "9b5ae037-04bb-4f98-8e6b-c02411047f31",
      //     "quantity": 1
      //   }
      // }
      const header = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },  
      }
      

      const updateCartInfo = {
        method: 'POST',
        "data": {
            "type": "cart_item",
            "id" : id,
            "quantity": 1
        }
      };
      await request.post ('/carts/123456/items',updateCartInfo,header)
      // const res = await request.get('/carts/123456/items',updateCartInfo)
      this.getCartItemsAsync()
      // const res = await request.get(searchvalue)
      // const cleanData = res.data.data.map((item) => {
      //   return {
      //     id: item.id,
      //     productId: item.product_id,
      //     name: item.name,
      //     amount: item.quantity,
      //   }
      // })
      // dispatch.cart.setCartItems(cleanData)
    },

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
          totalPrice: item.meta.display_price.with_tax.value.formatted,
          pricePerUnit: item.meta.display_price.with_tax.unit.formatted,
        }
      })
      dispatch.cart.setCartItems(cleanData)
      dispatch.cart.setTotalPrice(cleanData)
    }


  })
}