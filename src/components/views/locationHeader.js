import React from "react";
import LocationSearchInput from "./locationSeachInput";
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';

export default class LocationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    render() {
        return (
            <div class="location-form">
                <Form inline="true">
                    <FormGroup>
                        <LocationSearchInput/>
                        <FormText xs="1">
                            ou saisissez vos coordonnées :
                        </FormText>
                        <Input id="latitude" name="latitude" placeholder="Latitude"/>
                        <Input id="longitude" name="longitude" placeholder="Longitude"/>
                        <Button>Valider</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}