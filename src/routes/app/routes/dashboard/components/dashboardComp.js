import React from 'react';
import { createStore , combineReducers } from 'redux';

class DashBoardComp extends React.Component {
  
  handleFn = () => {
    this.props.onClickMe('Hello World')
  }

  render(){
    
    return(
      <button
        onClick = {this.handleFn}
      >
        Click Me 
      </button>
    )
  }
}

export default DashBoardComp