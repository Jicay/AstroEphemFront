import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from "./components/views/home";
import Contact from "./components/views/contact";
import rootReducer from "./redux/reducers.js";

import 'bootstrap/dist/css/bootstrap.min.css';

const middleware = [ thunk ];

const store = createStore(rootReducer, applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/*' component={Home} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));