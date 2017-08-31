import React from 'react'
import Header from '../../../components/header/Header'
import Menu from '../../../components/menu/index'
const className = require('classname')

class MainApp extends React.Component {
    
    render(){
        let contentWrapStyle = 
        className(
            {
            'contentWrap_hasMenu':true,
            },{
            'contentWrap_hasNoMenu':false
        })
        return(
            <div>
                <Header />
                    <div className = {contentWrapStyle}>
                        {this.props.children  || 'Hello World'}
                    </div>
                <Menu />
            </div>
        )
    }
}

module.exports = MainApp