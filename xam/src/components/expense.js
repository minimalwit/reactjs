import React, { Component } from 'react'
import '../css/expense.css'
import '../css/logup.css'
import { connect } from 'react-redux'

class expense extends Component {

  state = {
    user    : '',
    amount  : '',
    type    : '',
    remark  : '',
    data    : '',
  }


  handleChange = (e, field) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCreateTrans =async() => {
    const {
      // login
      // getLogin
      login
    } = this.props;
    
    try {
      // await login(this.state)
      await login(this.state)
      console.log('login success')
    } catch (e) {
      console.log('login fail')
    }
  }


  
  render() {
    const {
      createTransaction,
      updateTransaction,
      deleteTransaction,
      getTransaction,
    } = this.props;


    return (
      <div>
        <div className='exp-grid'>
            <div className='exp-section1
                            grid-section1
                            justify-item-center
                            row grow'>
              <div className='s1f1 align-item-center'>
                <table className='table '>
                  <tr>
                    <th>   name   </th>
                  </tr>
                  <tr>
                    <td>Type:</td>
                    <td> Income / Expense</td>
                  </tr>
                  <tr>
                    <td>Create </td>
                    <td><input  type="button" 
                                className='input-submitbutton'
                                value='Create Transaction'
                                onClick={createTransaction}/>
                    </td>
                  </tr>
                  <tr>
                    <td>Update : </td>
                    <td><input  type="button" 
                                className='input-submitbutton'
                                value='Update Transaction'
                                onClick={updateTransaction}/>
                    </td>
                  </tr>
                  <tr>
                    <td>delete : </td>
                    <td><input  type="button" 
                                className='input-submitbutton'
                                value='Delete Transaction'
                                onClick={deleteTransaction}/>
                    </td>
                  </tr>
                  <tr>
                    <td>get : </td>
                    <td><input  type="button" 
                                className='input-submitbutton'
                                value='Get Transaction'
                                onClick={getTransaction}/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className='exp-section2 row grow'>
              <div className='column-side grid
                        center-item 
                        light-1'>
                        </div>
                <div className='column-side grid
                        center-item 
                        light-2'>
                        </div>
            </div>
            <div className='exp-section3 row grow'></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    // login: dispatch.exp.login
    // getLogin: dispatch.exp.getLogin
    createTransaction: dispatch.exp.createTransaction,
    updateTransaction: dispatch.exp.updateTransaction,
    deleteTransaction: dispatch.exp.deleteTransaction,
    getTransaction: dispatch.exp.getTransaction,
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(expense)