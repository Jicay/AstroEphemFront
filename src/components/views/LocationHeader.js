import React from "react";
import {Button, Form, FormGroup, FormText, Input} from 'reactstrap';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

// Polyfill Promises for IE and older browsers.
require('es6-promise').polyfill();


export default class LocationHeader extends React.Component {

    static defaultProps = {
        isFetching: false
    }

    constructor(props) {
        super(props);
        this.state = {
            lat: '',
            lon: ''
        };
    }

    handleLatChange = (e) => {
        this.setState({lat: e.target.value});
    };

    handleLonChange = (e) => {
        this.setState({lon: e.target.value});
    };

    handleLocationChange = (e) => {
        if (e.length === 0) {
            return;
        }
        const {lat, lon} = e[0];
        const {refreshWeek} = this.props;
        if (lat !== undefined && lon !== undefined) {
            this.setState({
                lon: lon.toFixed(2),
                lat: lat.toFixed(2)
            });
            refreshWeek(lat.toFixed(2), lon.toFixed(2))
        }
    }

    render() {
        const {refreshWeek, isFetching, completeLocation, places} = this.props;
        return (
            <div className="location-form">
                <Form inline={true}>
                    <FormGroup>
                        <AsyncTypeahead
                            {...this.state}
                            labelKey="city"
                            minLength={3}
                            onSearch={completeLocation}
                            onChange={this.handleLocationChange}
                            placeholder="Chercher un lieu..."
                            options={places}
                            align="left"
                            isLoading={isFetching}
                            emptyLabel="Aucun lieu trouvé"
                            searchText="Recherche en cours"
                            renderMenuItemChildren={(option, props) => (
                                <div>{option.city}</div>
                            )}
                        />
                        <FormText xs="1">
                            ou saisissez vos coordonnées :
                        </FormText>
                        <Input id="latitude" name="latitude" placeholder="Latitude" value={this.state.lat} onChange={this.handleLatChange} />
                        <Input id="longitude" name="longitude" placeholder="Longitude" value={this.state.lon} onChange={this.handleLonChange}/>
                        <Button onClick={() => {refreshWeek(this.state.lat, this.state.lon)}}>Valider</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}