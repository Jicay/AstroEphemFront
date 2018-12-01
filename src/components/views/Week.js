import React, {Component} from "react";
import Day from "./Day";
import {array, number} from "prop-types";
import Summary from "./Summary";

export default class Home extends Component {

    static propTypes = {
        lat: number,
        lon: number,
        weekDetails: array
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onLoad} = this.props;
        onLoad(0, 0);
    }

    render() {
        const { lat, lon, weekDetails } = this.props;
        return (
            <div className="content">
                <Summary lat={lat} lon={lon}/>
                <div>
                    { weekDetails === undefined ? null : weekDetails.map((day) => (
                        <Day day={day}/>
                    ))}
                </div>
            </div>
        );
    }
}