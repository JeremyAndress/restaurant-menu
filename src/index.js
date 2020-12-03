import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import './index.css';
import RouteCpx from './RouteCpx';
import Main from './pages/Main';
import Table from './pages/Table';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Switch>
        <RouteCpx exact path="/order" component={Main} /> 
        <RouteCpx exact path="/payment" component={Payment} /> 
        <Route exact path="/" component={Table}/>
        <Route component={NotFound}/>
    </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
