import {Component} from "react";
import { string, shape } from 'prop-types';
import {Col, Container, Row} from 'reactstrap';
import React from "react";


import '../../days.scss';

export default class Day extends Component {
    static propTypes = {
        date: string,
        sun: shape({
            name: string,
            rising: string,
            setting: string,
            rising_civil: string,
            setting_civil: string,
            rising_naval: string,
            setting_naval: string,
            rising_astronomical: string,
            setting_astronomical: string
        })
    }

    render() {
        const { date, sun } = this.props.day;
        const weekDay = new Intl.DateTimeFormat('fr-FR', {
            weekday: "long"
        }).format(new Date(date));

        const day = new Intl.DateTimeFormat('fr-FR', {
            day: "2-digit"
        }).format(new Date(date));


        const year = new Intl.DateTimeFormat('fr-FR', {
            month: "short",
            year: "numeric"
        }).format(new Date(date));

        const rising_astronomical = new Date(sun.rising_astronomical)

        const nbSecond = 24*60*60;
        var secs = rising_astronomical.getSeconds() + (60 * rising_astronomical.getMinutes()) + (60 * 60 * rising_astronomical.getHours());
        const percent = 100 * secs / nbSecond;

        const style = "linear-gradient(to right, #000000 " + secs / nbSecond + "%, #2B5695)"

        console.log(style);

        console.log(weekDay, day, year);
        return (
            <Container className="day">
                <Row>
                    <Col xs="2" className="day_date">
                        <span>{weekDay}</span>
                        {day}
                        <span>{year}</span>
                    </Col>
                    <Col xs="9">
                        <div className="day_light" style={{background: style}}/>
                        {sun.rising}
                    </Col>
                </Row>
            </Container>
        );
    }
}