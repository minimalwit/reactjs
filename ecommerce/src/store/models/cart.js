import request from '../../utils/request'

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
      // ตัว delete ผมแนะนำทำเป็น reduce item mode หมดเลยก็ได้นะครับ 
      // แล้วตอนจบ filter เอา product ที่ amount <= 0 ออก
      const item = state.cartItems.find(o => o.productId === payload);
      // console.log(item)
      // let mode=""
      if (item) {
        const cartItems = state.cartItems.map(o => {
          if (o.productId === payload) {
            // mode="REDUCE_ITEM"
            return {
              ...o,
              amount: o.amount - 1
            }
          }
          // if (o.productId === payload && o.amount === 1){
          //   mode="DELETE_ITEM"
          //   return true
          // }
          return o
        })
        // if (mode==="REDUCE_ITEM") {
        //   return {
        //     ...state,
        //     cartItems: cartItems
        //   }
        // }
        // const deleledItemsState = cartItems.filter(o => o !== item)
        const deleledItemsState = cartItems.filter(o => o.amount > 0)
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
    async deleteCartItemsAsync (id) {
      // delete  
      // https://api.moltin.com/v2/carts/123456/items/{{cartItemID}}
      const header = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },  
      }
      const deletemsg = `https://api.moltin.com/v2/carts/123456/items/${id}`
      await request.delete(deletemsg,header)
      this.getCartItemsAsync()
    },

    async addCartItemsAsync (id) {
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
    getTotal() {
      return (rootState, props) => 
        // sum array / object in javascript
        rootState.reduce((a, b) => a + (b.pricePerUnit * b.amount),0)
    },
  }
}