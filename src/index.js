/**
root file
*/

/**
 * 根文件主要做初始化处理
 */
import './assets/main'

import App from './components/app'
import Routes from './router/index'
import { Router , hashHistory} from 'react-router'


ReactDOM.render(
    <Router history= {hashHistory} routes={Routes}/>,
    document.getElementById('App')
)