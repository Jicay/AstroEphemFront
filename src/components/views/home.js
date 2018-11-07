import React, { Component } from "react";
import { Button } from 'reactstrap';
export default class Home extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div id="home">
                This is the home page.
                <Button>Click !</Button>
            </div>
        );
    }
}