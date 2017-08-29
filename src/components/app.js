import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Header from './header/index'
import ContentMain from './content/index'
import Menu from './menu/index'

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <ContentMain />
                    <Menu />
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App

