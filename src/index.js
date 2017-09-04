/**
root file
*/

/**
 * 根文件主要做初始化处理
 */
import './assets/main'

import App from './components/app'
import { Router , hashHistory  } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'

const RouterConfig = {
    childRoutes:[
        {
            path:'/',
            component: App,
            indexRoute: {
                onEnter :(nextState , replace) => replace('/app/dashboard')
            },
            childRoutes:[
                require('./routes/app'),
                require('./routes/404'),
                {
                    path:'*',
                    indexRoute: { onEnter: (nextState, replace) => replace('/404') }
                }
            ]
        }
    ]
}

const store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <Router 
            history= {hashHistory} 
            routes={RouterConfig}
        />
    </Provider>
    ,
    document.getElementById('App')
)