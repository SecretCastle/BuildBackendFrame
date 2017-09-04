import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header/Header'
import ContentMain from './content/index'
import Menu from './menu/index'

import { connect } from 'react-redux'
import { sendMsgToYou , demoActionTest } from '../actions/types'

class App extends React.Component {

    render() {

        const { dispatch } = this.props

        
        
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        )
    } 
}

export default connect()(App)

