import React, { Component } from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import Day from "./day";
import DaysService from '../services/daysService';

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
        console.log(days);
        return (
            <Container className="home">
                { days.map((day) => (
                    <Day day={day}/>
                ))}
            </Container>
        );
    }
}