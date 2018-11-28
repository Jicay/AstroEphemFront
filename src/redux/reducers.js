import { combineReducers } from 'redux';
import { GET_WEEK_INFOS } from './action';

function getWeekInfo(state = {}, action) {
    switch (action.type) {
        case GET_WEEK_INFOS:
            return {
                ...state,
                lat: action.lon,
                lon: action.lat
            };
        default:
            return state
    }
}

export default combineReducers({
    getWeekInfo
});