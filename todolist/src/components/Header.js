import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        const onCreateNewItem = this.props.onCreateNewItem
        
        return ( 
            
            <div className="header">
                <div className="Bar-item">
                        <h2>New List</h2>
                </div>
                <div>
                    <button className="addBtn" onClick={()=> onCreateNewItem()}>+</button>
                </div>    
            </div>
         );
    }
}
 
export default Header;