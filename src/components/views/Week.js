import React, {Component} from "react";
import Day from "./Day";
import {array, object} from "prop-types";
import Summary from "./Summary";

export default class Week extends Component {

    static propTypes = {
        location: object,
        weekDetails: array
    }

    static defaultProps = {
        location: {},
        weekDetails: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onLoad} = this.props;
        onLoad("44.84", "-0.58");
    }

    render() {
        const { location, weekDetails } = this.props;
        return (
            <div className="content">
                <Summary location={location}/>
                <div>
                    { weekDetails.map((day, id) => (
                        <Day key={id} day={day}/>
                    ))}
                </div>
            </div>
        );
    }
}