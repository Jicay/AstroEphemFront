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
        }),
        moon: shape({
            name: string,
            rising: string,
            setting: string
        })
    };

    render() {
        const { date, sun, moon } = this.props.day;
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
        const rising_naval = new Date(sun.rising_naval)
        const rising_civil = new Date(sun.rising_civil)
        const rising = new Date(sun.rising)
        const setting = new Date(sun.setting)
        const setting_civil = new Date(sun.setting_civil)
        const setting_naval = new Date(sun.setting_naval)
        const setting_astronomical = new Date(sun.setting_astronomical)

        const nbSecond = 24*60*60;
        const percent_r_astronomical = this.percentage(rising_astronomical, nbSecond);
        const percent_r_naval = this.percentage(rising_naval, nbSecond);
        const percent_r_civil = this.percentage(rising_civil, nbSecond);
        const percent_rising = this.percentage(rising, nbSecond);
        const percent_setting = this.percentage(setting, nbSecond);
        const percent_s_civil = this.percentage(setting_civil, nbSecond);
        const percent_s_naval = this.percentage(setting_naval, nbSecond);
        const percent_s_astronomical = this.percentage(setting_astronomical, nbSecond);

        const styleSun = "linear-gradient(to right, " +
            "#000000 " + (percent_r_astronomical - 1) + "%, " +
            "#2B5695 " + percent_r_astronomical + "%, " +
            "#2B5695 " + (percent_r_naval - 1) + "%, " +
            "#4B7BC0 " + percent_r_naval + "%, " +
            "#4B7BC0 " + (percent_r_civil - 1) + "%, " +
            "#F0B076 " + percent_r_civil + "%, " +
            "#F0B076 " + (percent_rising - 1) + "%, " +
            "#FFFE88 " + percent_rising + "%, " +
            "#FFFE88 " + percent_setting + "%, " +
            "#F0B076 " + (percent_setting + 1) + "%, " +
            "#F0B076 " + percent_s_civil + "%, " +
            "#4B7BC0 " + (percent_s_civil + 1) + "%, " +
            "#4B7BC0 " + percent_s_naval + "%, " +
            "#2B5695 " + (percent_s_naval + 1) + "%, " +
            "#2B5695 " + percent_s_astronomical + "%, " +
            "#000000 " + (percent_s_astronomical +1) + "%" +
            ")";

        const moon_rising = new Date(moon.rising)
        const moon_setting = new Date(moon.setting)

        const percent_m_rising = this.percentage(moon_rising, nbSecond);
        const percent_m_setting = this.percentage(moon_setting, nbSecond);

        let styleMoon = "";

        if (percent_m_rising < percent_m_setting) {
            styleMoon = "linear-gradient(to right, " +
                "#2B5695 " + (percent_m_rising - 1) + "%, " +
                "#AAAAAA " + percent_m_rising + "%, " +
                "#AAAAAA " + percent_m_setting + "%, " +
                "#2B5695 " + (percent_m_setting + 1) + "%" +
                ")";
        } else {
            styleMoon = "linear-gradient(to right, " +
                "#AAAAAA " + percent_m_setting + "%, " +
                "#2B5695 " + (percent_m_setting + 1) + "%, " +
                "#2B5695 " + (percent_m_rising - 1) + "%, " +
                "#AAAAAA " + percent_m_rising + "%" +
                ")";
        }

        console.log(weekDay, day, year);
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
                            <div className="hour">00</div>
                            <div className="hour">01</div>
                            <div className="hour">02</div>
                            <div className="hour">03</div>
                            <div className="hour">04</div>
                            <div className="hour">05</div>
                            <div className="hour">06</div>
                            <div className="hour">07</div>
                            <div className="hour">08</div>
                            <div className="hour">09</div>
                            <div className="hour">10</div>
                            <div className="hour">11</div>
                            <div className="hour">12</div>
                            <div className="hour">13</div>
                            <div className="hour">14</div>
                            <div className="hour">15</div>
                            <div className="hour">16</div>
                            <div className="hour">17</div>
                            <div className="hour">18</div>
                            <div className="hour">19</div>
                            <div className="hour">20</div>
                            <div className="hour">21</div>
                            <div className="hour">22</div>
                            <div className="hour">23</div>
                        </div>
                        <div className="day_light" style={{background: styleSun}}/>
                        <div className="day_light" style={{background: styleMoon}}/>
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