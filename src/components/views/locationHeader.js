import React from "react";
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import Geocoder from 'react-select-geocoder-tilehosting';

export default class LocationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    render() {
        const {onClick} = this.props;
        return (
            <div class="location-form">
                <Form inline="true">
                    <FormGroup>
                        <Geocoder
                            apiKey="FYgsALgP5zjyDjKnXBpH"
                            onChange={(value) => console.log(value)}
                            className="form-control"
                            geolocate={true}/>
                        <FormText xs="1">
                            ou saisissez vos coordonnées :
                        </FormText>
                        <Input id="latitude" name="latitude" placeholder="Latitude"/>
                        <Input id="longitude" name="longitude" placeholder="Longitude"/>
                        <Button onClick={onClick}>Valider</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}