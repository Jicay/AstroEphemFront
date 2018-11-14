import {Component} from "react";
import { string, shape } from 'prop-types';
import {Col, Container, Row} from 'reactstrap';
import React from "react";



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
        console.log(this.props);
        return (
            <Container className="day">
                <Row>
                    <Col xs="3">
                        {date}
                    </Col>
                    <Col xs="auto">
                        {sun.rising}
                    </Col>
                </Row>
            </Container>
        );
    }
}