import React from "react";
import {Container} from "reactstrap";

export default class Summary extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { lon, lat, city } = this.props.location;
        if (lat === undefined || lon === undefined) {
            return null;
        }
        return (
            <Container className="summary">
                <h1>Ephéméride pour {city} ({lat.toFixed(2)}, {lon.toFixed(2)})</h1>
            </Container>
        )
    }
}