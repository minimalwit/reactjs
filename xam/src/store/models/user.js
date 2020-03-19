import request from '../../utils/request'

export const user = {
  state: {
    // isAuthenticated : false,
    token: null,
    isShowExpense: false
  },
  reducers: {
    // // setAuthenticated(state, payload) {
    //   return {
    //     ...state,
    //     isAuthenticated: payload
    //   }
    // },
    setToken (state,payload) {
      if(payload!==null){
        return {
          ...state,
          token: payload,
          isShowExpense: true
        }
      }
      return {
        ...state,
        token: payload,
        isShowExpense: false
      }
      
    },

  },
  effects: (dispatch) => ({

    async getLogin(payload,rootState){
      // get username/password by id
      const id='5ce62da5bd19770013f34f19'
      // console.log(payload)
      const res = await request.get(`/users/${id}`)
      console.log('get login info')
      console.log("username : "+res.data.username)
      console.log("password : "+res.data.password)
    },

    async login(payload,rootState){
      const info = {
          username  : 'test33',
          password  : 'test33'
      }
      console.log(info)
      // console.log(payload)
      const res = await request.post('/users/login',info)
      const token = res.data._id
      console.log(token)
      dispatch.user.setToken(token)
      // dispatch.user.toggleShowExpense()
      // console.log(res)
      // dispatch.user.getLogin()
    },


    async signup(payload, rootState) {
      const info = {
        username  : 'test33',
        password  : 'test33'
      }
      console.log(info)
      // console.log(payload)
      const res = await request.post('/users',info)
      // const token = res.data._id
      // console.log(token)
      // dispatch.user.setToken(token)
      console.log(res)

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