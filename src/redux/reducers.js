import { combineReducers } from 'redux';
import { REQUEST_WEEK, RECEIVE_WEEK } from './action';

function getWeekInfo(state = {}, action) {
    switch (action.type) {
        case REQUEST_WEEK:
        case RECEIVE_WEEK:
            return {
                ...state,
                week: week(state.week, action)
            };
        default:
            return state
    }
}

function week(state = {isFetching: false}, action) {
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
    weekInfo: getWeekInfo
});