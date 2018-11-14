import axios from 'axios';
const API_URL = 'https://astroephem.herokuapp.com';

export default class DaysService{

    constructor(){}


    getDays() {
        const url = `${API_URL}/days`;
        return axios.get(url).then(response => response.data);
    }
}