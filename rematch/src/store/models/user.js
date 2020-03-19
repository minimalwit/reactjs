export const user = {
  state: {
    numberUser: '',
    constant: 9999
  }, // initial state
  reducers: {
      // handle state changes with pure functions
      // increment(state, payload) {
      //     return state + payload
      // },
      addNumber(state, payload){
        return {
          ...state,
          numberUser: payload,
        }
      },
      
  },
  effects: dispatch => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      // async incrementAsync(payload, rootState) {
      //     await new Promise(resolve => setTimeout(resolve, 1000))
      //     dispatch.count.increment(payload)
      // },
  }),
}