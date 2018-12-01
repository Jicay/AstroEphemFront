import { combineReducers } from 'redux';
import { REQUEST_WEEK, RECEIVE_WEEK, REQUEST_LOCATION, RECEIVE_LOCATION } from './action';

function weekInfo(state = {}, action) {
    switch (action.type) {
        case REQUEST_WEEK:
        case RECEIVE_WEEK:
            return {
                ...state,
                ...week(state.week, action)
            };
        default:
            return state
    }
}

function week(state = {isFetching: false, lat: "0", lon: "0", weekDetails: []}, action) {
    switch (action.type) {
        case REQUEST_WEEK:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_WEEK:
            return {
                ...state,
                isFetching: false,
                lat: action.lat,
                lon: action.lon,
                weekDetails: action.week
            }
        default:
            return state
    }
}

function location(state = {}, action) {
    switch (action.type) {
        case REQUEST_LOCATION:
        case RECEIVE_LOCATION:
            return {
                ...state,
                ...getLocation(state.locations, action)
            };
        default:
            return state
    }
}

function getLocation(state = [], action) {
    switch (action.type) {
        case REQUEST_LOCATION:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_LOCATION:
            return {
                ...state,
                isFetching: false,
                places: action.locations
            };
        default:
            return state;
    }
}

export default combineReducers({
    weekInfo,
    location
});