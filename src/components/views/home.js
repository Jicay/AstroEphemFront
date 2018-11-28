import React, {Component} from "react";
import {Container,} from 'reactstrap';
import Day from "./day";
import DaysService from '../services/daysService';
import LocationHeaderContainer from "../containers/LocationHeaderContainer";
import SummaryContainer from "../containers/SummaryContainer";

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
                <div className="content">
                    { days.map((day) => (
                        <Day day={day}/>
                    ))}
                </div>
            </Container>
        );
    }
}