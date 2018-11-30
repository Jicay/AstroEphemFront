import React, {Component} from "react";
import {Container,} from 'reactstrap';
import DaysService from '../services/daysService';
import LocationHeaderContainer from "../containers/LocationHeaderContainer";
import SummaryContainer from "../containers/SummaryContainer";
import Week from "./Week";

const days_service = new DaysService();

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            days: []
        };
    }

    componentDidMount() {
        let self  =  this;
        days_service.getDays().then(function (result) {
            self.setState({ days:  result})
        });
    }
    render() {
        const { days } = this.state;
        return (
            <Container className="home">
                <LocationHeaderContainer/>
                <SummaryContainer/>
                <Week days={days} />
            </Container>
        );
    }
}