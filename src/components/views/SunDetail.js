import React, {Component} from "react";

export default class SunDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {sun} = this.props;
        const nbSecond = 24*60*60;

        const percentRisingA = this.percentage(sun.rising_astronomical, nbSecond)
        const percentRisingN = this.percentage(sun.rising_naval, nbSecond)
        const percentRisingC = this.percentage(sun.rising_civil, nbSecond)
        const percentRising = this.percentage(sun.rising, nbSecond)
        const percentSetting = this.percentage(sun.setting, nbSecond)
        const percentSettingC = this.percentage(sun.setting_civil, nbSecond)
        const percentSettingN = this.percentage(sun.setting_naval, nbSecond)
        const percentSettingA = this.percentage(sun.setting_astronomical, nbSecond)

        const gradient = [];

        gradient.push(this.risingGradient(percentRisingA, "#2B5695", "#000000"))
        gradient.push(this.settingGradient(percentSettingA, "#2B5695", "#000000"))
        gradient.push(this.risingGradient(percentRisingN, "#4B7BC0", "#2B5695"))
        gradient.push(this.settingGradient(percentSettingN, "#4B7BC0", "#2B5695"))
        gradient.push(this.risingGradient(percentRisingC, "#F0B076", "#4B7BC0"))
        gradient.push(this.settingGradient(percentSettingC, "#F0B076", "#4B7BC0"))
        gradient.push(this.risingGradient(percentRising, "#FFFE88", "#F0B076"))
        gradient.push(this.settingGradient(percentSetting, "#FFFE88", "#F0B076"))

        const gradientSun = gradient.flat().sort((a, b) => {
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

        let styleSun = "linear-gradient(to right, " + gradientSun + ")";

        return (
            <div className="day_light" style={{background: styleSun}}/>
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