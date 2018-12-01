import React from "react";
import { number } from 'prop-types'

export default class Summary extends React.Component {
    static propTypes = {
        lon: number,
        lat: number
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { lon, lat } = this.props;
        return (
            <div class="summary">
                <span>Latitude :</span><span>{lat}</span>
                <span>Longitude :</span><span>{lon}</span>
            </div>
        )
    }
}