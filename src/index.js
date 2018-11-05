import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/views/home";
import Contact from "./components/views/contact";

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/*' component={Home} />
        </Switch>
    </BrowserRouter>,
    document.querySelector('#app')
);