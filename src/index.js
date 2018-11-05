import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/views/home";
import Contact from "./components/views/contact";

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

ReactDOM.render(<App />, document.getElementById('app'));