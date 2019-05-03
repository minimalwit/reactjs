import React, { Component } from 'react';
import Header from './components/Header';
import './css/style.css'
import CompleteSection from './components/CompleteSection';
import List from './components/List'

class App extends Component {
  
  state = {
    list : [{
        id : 1,
        title: 'Task 1',
        isCompleted : true
    },{
        id : 2,
        title: 'Task 2',
        isCompleted : false
    },{
        id : 3,
        title: 'Task 3',
        isCompleted : false
    },
    {
        id : 4,
        title: 'Task 4',
        isCompleted : true
    }],
    showComplete : false,
  }

  handleShow = (event) =>{
    
      this.setState({
        showComplete: this.state.showComplete? false : true
      })
      console.log("showComplete : " + this.state.showComplete)
  }

  onCreateNewItem = () =>{
    let newObj = {
        id : 0,
        title: "Your task",
        isCompleted : false
    }
      let listlength = this.state.list.length
      newObj.id = listlength+1 
      const lists = this.state.list
      const list2 = [...lists, newObj]
      console.log(list2)
      this.setState({
        list:list2
      })
  }

  onToggleListItem = (e) => {
      let target = e.target
      let val = parseInt(target.getAttribute('val'))
      const lists = this.state.list
      const index = lists.findIndex((list) => list.id === val)
      let currentState = lists[index].isCompleted
      lists[index].isCompleted = !currentState
      this.setState({list: lists})
  }

  onEditTask = (e) => {
    let target = e.target
    let value = target.value
    let val = parseInt(target.getAttribute('val'))  // this may cast type in string
    const lists = this.state.list
    const index = lists.findIndex((list) => list.id === val)
    lists[index].title=value
    // const selectedItem = lists.find((list) => list.id === val)
    // selectedItem.title = value
    this.setState({
      list:lists
    })
  };

  onDeleteTask = (val) => {
    const lists = this.state.list;
    const index = lists.findIndex(list => list.id === val);
    lists.splice(index,1)
    this.setState({
      list:lists
    })
  };

  

  render() {
    const list = this.state.list
    const unfinishList = list.filter((el)=>{
      return el.isCompleted===false;
    })
    const finishedList = list.filter((el)=>{
      return el.isCompleted===true;
    })
    return (
        <div className="App">
            <div className="container">
                <Header onCreateNewItem={this.onCreateNewItem} />
                <CompleteSection onDeleteTask={this.onDeleteTask} onEditTask={this.onEditTask} onToggleListItem={this.onToggleListItem} data={finishedList} handleShow={this.handleShow} showComplete={!this.state.showComplete}/>
                <List onDeleteTask={this.onDeleteTask} data={unfinishList} onEditTask={this.onEditTask} onToggleListItem={this.onToggleListItem}/>
            </div>
        </div>
    );
  }
} 



export default App;
