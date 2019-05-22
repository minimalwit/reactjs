import request from '../../utils/request'

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
      console.log(payload)

      // const token = 'akljhdfklhasdkf56546798'
      const header = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },  
      }
      const userInfo = {
        method: 'POST',
        'data': payload
      }
      const res = await request.post ('/carts/123456/items',userInfo,header)
      if (res){
      // if (payload.username ==='test' && payload.password==='test' ) {
        // dispatch.class.reducer
        // return dispatch.user.setAuthenticated(true)
        const token = res.data.data.map((item) => {
          return {
            id: item._id,
          }
        })
        return dispatch.user.setToken(token)
      }
      return Promise.reject('Username or password not found')
    },

    async getLogic(payload,rootState){

    },

    async doLogin(payload,rootState){
      const userInfo = {
        method: 'POST',
        data: {
          username: 'myname',
          password: 'mypassword'
        }
      }
      console.log(userInfo)
      const res = await request.post('/users/login',userInfo)
      console.log(res)
    },


    async signup(payload, rootState) {
      // const token = 'akljhdfklhasdkf56546798'
      // if (payload.username ==='qqq' && payload.password==='qqq' ) {
      //   // dispatch.class.reducer
      //   // return dispatch.user.setAuthenticated(true)
      //   return dispatch.user.setToken(token)
      // }
      // return Promise.reject('Username or password not found')

      console.log(payload)

      // const token = 'akljhdfklhasdkf56546798'
      const header = {
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
        },  
      }
      const userInfo = {
        method: 'POST',
        'data': payload
      }
      const res = await request.post ('/carts/123456/items',userInfo,header)
      if (res){
      // if (payload.username ==='test' && payload.password==='test' ) {
        // dispatch.class.reducer
        // return dispatch.user.setAuthenticated(true)
        const token = res.data.data.map((item) => {
          return {
            id: item._id,
          }
        })
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