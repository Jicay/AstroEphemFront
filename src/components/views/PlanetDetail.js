import React, {Component} from "react";

export default class PlanetDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {planet, colorUp, colorDown} = this.props;
        const nbSecond = 24*60*60;

        const percentRising = this.percentage(planet.rising, nbSecond);
        const percentSetting = this.percentage(planet.setting, nbSecond);

        const gradient = [];

        gradient.push(this.risingGradient(percentRising, colorUp, colorDown))
        gradient.push(this.settingGradient(percentSetting, colorUp, colorDown))

        const gradientPlanet = gradient.flat().sort((a, b) => {
            if (a.percent < b.percent) {
                return -1;
            }
            if (a.percent > b.percent) {
                return 1;
            }
            return 0;
        }).map(a => (
            a.color + " " + a.percent + "%"
        )).join(", ");

        let stylePlanet = "linear-gradient(to right, " + gradientPlanet + ")";

        return (
            <div className="day_light" style={{background: stylePlanet}}/>
        )
    }

    percentage(eventDate, nbSecond) {
        if (eventDate === null) {
            return null;
        }
        const eventMoment = new Date(eventDate)
        const secs = eventMoment.getSeconds() + (60 * eventMoment.getMinutes()) + (60 * 60 * eventMoment.getHours());
        const percent = 100 * secs / nbSecond;
        return Number((percent).toFixed(2));
    }

    risingGradient(percentRising, colorUp, colorDown) {
        const gradient = [];
        if (percentRising === null) {
            return gradient;
        }
        gradient.push({percent: percentRising, color: colorUp});
        gradient.push({percent: percentRising < 1 ? 0 : percentRising-1, color: colorDown});

        return gradient
    }

    settingGradient(percentSetting, colorUp, colorDown) {
        const gradient = [];
        if (percentSetting === null) {
            return gradient;
        }
        gradient.push({percent: percentSetting, color: colorUp});
        gradient.push({percent: percentSetting > 99 ? 100 : percentSetting+1, color: colorDown});

        return gradient
    }
}