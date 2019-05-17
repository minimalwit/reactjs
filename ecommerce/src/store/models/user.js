// import request from '../../utils/request'

export const user = {
    state: {
      // isAuthenticated : false,
      token: null
    },
    reducers: {
      // // setAuthenticated(state, payload) {
      //   return {
      //     ...state,
      //     isAuthenticated: payload
      //   }
      // },
      setToken (state,payload) {
        return {
          ...state,
          token: payload
        }
      },
  
    },
    effects: (dispatch) => ({
      async login(payload, rootState) {
        const token = 'akljhdfklhasdkf56546798'
        if (payload.username ==='test' && payload.password==='test' ) {
          // dispatch.class.reducer
          // return dispatch.user.setAuthenticated(true)
          return dispatch.user.setToken(token)
        }
        return Promise.reject('Username or password not found')
      },
      async logout(payload, rootState) {
        // dispatch.class.reducer
        // dispatch.user.setAuthenticated(false)
        dispatch.user.setToken(null)
      },
  
    }),
    selectors: {
      isAuthenticated () {
        return(rootState,props) => rootState.user.token !== null
      }
    }
  } //export user