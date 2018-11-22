import React from "react";
import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import fetch from 'isomorphic-fetch';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

// Polyfill Promises for IE and older browsers.
require('es6-promise').polyfill();


import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

const SEARCH_URI = 'https://astroephem.herokuapp.com/locations';

export default class LocationHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    _handleSearch = (query) => {
        this.setState({isLoading: true});
        this.makeAndHandleRequest(query)
            .then(({options}) => {
                this.setState({
                    isLoading: false,
                    options,
                });
            });
    }

    makeAndHandleRequest(query, page = 1) {
        return fetch(`${SEARCH_URI}?query=${query}`)
            .then((resp) => resp.json())
            .then(({results, total_count}) => {
                const options = results.map((i) => ({
                    city: i.city,
                    country_code: i.country_code,
                    country: i.country,
                    lat: i.lat,
                    lon: i.lon
                }));
                return {options, total_count};
            });
    }

    render() {
        return (
            <div class="location-form">
                <Form inline="true">
                    <FormGroup>
                        <AsyncTypeahead
                            {...this.state}
                            labelKey="city"
                            minLength={3}
                            onSearch={this._handleSearch}
                            placeholder="Chercher un lieu..."
                            align="left"
                            emptyLabel="Aucun lieu trouvé"
                            searchText="Recherche en cours"
                            renderMenuItemChildren={(option, props) => (
                                <div>{option.city}</div>
                            )}
                        />
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