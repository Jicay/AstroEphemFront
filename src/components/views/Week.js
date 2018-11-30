import React, {Component} from "react";
import Day from "./day";

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { days } = this.props;
        return (
            <div className="content">
                { days.map((day) => (
                    <Day day={day}/>
                ))}
            </div>
        );
    }
}