import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header/Header'
import ContentMain from './content/index'
import Menu from './menu/index'

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}

export default App

