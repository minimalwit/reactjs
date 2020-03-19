import request from '../../utils/request'

export const exp = {
  state: {
    expenseData:[]
  },
  reducers: {
    setExpenseItems(state, payload) {
      return {
        ...state,
        expenseData: payload
      }
    }
  },
  effects: (dispatch) => ({

    async getTransaction(payload,rootState){
      // get username/password by id
      const user_id='5ce62da5bd19770013f34f19'
      // /transactions?user=:user
      // console.log(payload)
      const res = await request.get(`/transactions?user=${user_id}`)
      console.log(res)
      const cleanData = res.data.map((item) => {
        return {
          trans_id:   item._id,
          user_id :   item.user,
          amount  :   item.amount,
          type    :   item.type,
          remark  :   item.remark,
          date    :   item.date,
        }
      })
      dispatch.exp.setExpenseItems(cleanData)
      console.log(this.state)
      
    },

    async createTransaction(payload,rootState){
      const date = new Date()
      const info = {
          // "user": userID,
          // "amount": Number,
          // "type": enum["income", "expense"],
          // "remark": String,
          // "date": Date
          // user    : payload.user_id,
          // amount  : payload.amount,
          // type    : payload.type,
          // remark  : payload.remark,
          // date    : date
          user    : '5ce62da5bd19770013f34f19',
          amount  : 15,
          type    : 'expense',
          remark  : 'motorcycle service',
          date    :  date
      }
      console.log(info)
      // console.log(payload)
      const res = await request.post('/transactions',info)
      console.log(res)
    },

    async updateTransaction(payload,rootState){
      // const trans_id = payload.trans_id
      const trans_id ='5ce7a1ffbd19770013f34f1b'
      const date = new Date()
      const info = {
          // "user": userID,
          // "amount": Number,
          // "type": enum["income", "expense"],
          // "remark": String,
          // "date": Date
          // user    : payload.user_id,
          // amount  : payload.amount,
          // type    : payload.type,
          // remark  : payload.remark,
          // date    : date
          user    : '5ce62da5bd19770013f34f19',
          amount  : 7888,
          type    : 'income',
          remark  : 'motorcycle service',
          date    :  date
      }
      console.log(info)
      // console.log(payload)
      const res = await request.put(`/transactions/${trans_id}`,info)
      console.log(res)
    },

    async deleteTransaction(payload,rootState){
      // const trans_id = payload.trans_id
      const trans_id='5ce7a1ffbd19770013f34f1b'
      const res = await request.delete(`/transactions/${trans_id}`)
      console.log(res)
    }

  }),
} //export exp