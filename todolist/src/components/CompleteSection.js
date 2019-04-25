import React, { Component } from 'react';
import List from '../components/List'
class CompleteSection extends Component {
    state = { 
        
    }
    
    render() { 
        
        const list = this.props.data
        const onDeleteTask = this.props.onDeleteTask
        const onEditTask=this.props.onEditTask
        let isShow = ""
        let isShowText = ""
        
        if(this.props.showComplete){
            isShow = "content show"
            isShowText = "Hide"
            console.log(isShowText)
            console.log(this.props.showComplete)
        }else{
            isShow = "content notshow"
            isShowText = "Show"
            console.log(isShowText)
        }

        const onToggleListItem= this.props.onToggleListItem
        return (
            <div>
                <div className="label-top">
                    <div>
                        <span>{`${list.length} complete` }</span>
                    </div>
                    <div className="right">
                        <button className="show_btn" onClick = {this.props.handleShow}>{isShowText}</button>
                    </div>
                </div>
                <div className={isShow}>
                    <List onDeleteTask={onDeleteTask} onEditTask={onEditTask} data={list} onToggleListItem={onToggleListItem}/>
                </div>
            </div>
        );
    }
}

 
export default CompleteSection;