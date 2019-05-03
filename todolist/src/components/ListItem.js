import React, { Component } from 'react';
class ListItem extends Component {
    state = { 

    }

    render() { 
        const data = this.props.data
        const value = data.title
        const onEditTask = this.props.onEditTask
        const val = this.props.val
        const onToggleListItem = this.props.onToggleListItem
        const onDeleteTask = this.props.onDeleteTask
        return ( 
            <li>
                <div className="list">
                    <input checked={this.props.data.isCompleted} val={val} type="checkbox" onChange={onToggleListItem} />
                    <input className="task_content" value={value} onChange={(e)=> onEditTask(e)} val={val}></input>
                    <button className="del_btn" onClick={()=> onDeleteTask(val)}> x </button>
                </div>
            </li>
         );
    }
}
 
export default ListItem;