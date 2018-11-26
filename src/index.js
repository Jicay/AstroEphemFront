import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import Home from "./components/views/home";
import Contact from "./components/views/contact";
import reducers from "./redux/reducers.js";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/*' component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export const store = createStore(
    reducers,
    {
        items: []
    }
);

ReactDOM.render(<App />, document.getElementById('app'));