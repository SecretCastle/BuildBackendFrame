import React from 'react'
import { createStore , combineReducers } from 'redux';
import { sendMsgToYou , demoActionTest } from '../../../../../actions/types'
import { connect } from 'react-redux'
import DashBoardComp from './dashboardComp'

class DashBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : 'haha'
        }
      
    }
    render(){
        const { dispatch , clickName } = this.props
        console.log(clickName);
        return (
            <div>
                <h1>DashBoard</h1>
                <h2>text=>{clickName}</h2>
                <DashBoardComp
                    onClickMe={
                        text => {
                            dispatch(sendMsgToYou(text))
                        }
                    }
                />
            </div>  
        )
    }
    
}

function getProps(state){
    console.log('===',state);
    return{
        clickName: state.demoSend
    }
}

module.exports = connect(getProps)(DashBoard)