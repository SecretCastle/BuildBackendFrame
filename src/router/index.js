import { Router, Route , hashHistory , IndexRoute ,browserHistory } from 'react-router'

import App from '../components/app'


const Routes = 
<Router>
    <IndexRoute component = {App}/>
    <Route path = "/" component = {App}> 
    </Route>
</Router>   

export default Routes