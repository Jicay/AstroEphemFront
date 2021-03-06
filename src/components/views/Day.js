import {Component} from "react";
import { string, shape } from 'prop-types';
import {Col, Container, Row} from 'reactstrap';
import React from "react";


import '../../days.scss';
import PlanetDetail from "./PlanetDetail";
import SunDetail from "./SunDetail";

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
        }),
        planet: shape({
            name: string,
            rising: string,
            setting: string
        })
    };

    render() {
        const { date, sun, moon, venus, mars, jupiter, saturn } = this.props.day;
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

        return (
            <Container className="day">
                <Row>
                    <Col xs="2" className="day_date">
                        <span>{weekDay}</span>
                        {day}
                        <span>{year}</span>
                    </Col>
                    <Col xs="10" className="day_lights">
                        <div>
                            {[...Array(24).keys()].map(i => (
                                <div key ={i} className="hour">{("0" + i).slice(-2)}</div>
                            ))}
                        </div>
                        <div>
                            <SunDetail sun={sun}/>
                            <PlanetDetail planet={moon} colorUp="#AAAAAA" colorDown="#2B5695"/>
                            <PlanetDetail planet={venus} colorUp="#ad8d54" colorDown="#2B5695"/>
                            <PlanetDetail planet={mars} colorUp="#c1440e" colorDown="#2B5695"/>
                            <PlanetDetail planet={jupiter} colorUp="#ddb47e" colorDown="#2B5695"/>
                            <PlanetDetail planet={saturn} colorUp="#fceead" colorDown="#2B5695"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    percentage(rising_astronomical, nbSecond) {
        const secs = rising_astronomical.getSeconds() + (60 * rising_astronomical.getMinutes()) + (60 * 60 * rising_astronomical.getHours());
        const percent = 100 * secs / nbSecond;
        return Number((percent).toFixed(2));
    }
}