import React, {Component} from "react";
import {Container,} from 'reactstrap';
import DaysService from '../services/daysService';
import LocationHeaderContainer from "../containers/LocationHeaderContainer";
import WeekContainer from "../containers/WeekContainer";

const days_service = new DaysService();

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