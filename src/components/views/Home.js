import React, {Component} from "react";
import {Container,} from 'reactstrap';
import LocationHeaderContainer from "../containers/LocationHeaderContainer";
import WeekContainer from "../containers/WeekContainer";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="home">
                <LocationHeaderContainer/>
                <WeekContainer />
            </Container>
        );
    }
}