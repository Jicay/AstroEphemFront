import React from "react";
import { string } from 'prop-types'

export default class Summary extends React.Component {
    static propTypes = {
        lon: string,
        lat: string
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { lon, lat } = this.props;
        return (
            <div className="summary">
                <span>Latitude :</span><span>{lat}</span>
                <span>Longitude :</span><span>{lon}</span>
            </div>
        )
    }
}