import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css'

// Import padrão do documento src/App.js
import App from './App'
import Joke from './Jokes';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} componet={App}></Route>
            <Route path='/jokes' component={Joke}></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));