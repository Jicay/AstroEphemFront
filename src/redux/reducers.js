import { combineReducers } from 'redux';
import { REQUEST_WEEK, RECEIVE_WEEK } from './action';

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

export default combineReducers({
    weekInfo
});