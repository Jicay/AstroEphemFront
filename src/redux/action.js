export const REQUEST_WEEK = 'REQUEST_WEEK';
export const RECEIVE_WEEK = 'RECEIVE_WEEK';
export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const requestWeek = (lat, lon) => ({
    type: REQUEST_WEEK,
    lat,
    lon
});

export const receiveWeek = (json) => ({
    type: RECEIVE_WEEK,
    location: json.location.results[0],
    week: json.week,
});

export const requestLocation = (search) => ({
    type: REQUEST_LOCATION,
    query: search
});

export const receiveLocation = (search, json) => ({
    type: RECEIVE_LOCATION,
    query: search,
    locations: json.results
});

const fetchWeek = (lat, lon) => dispatch => {
    dispatch(requestWeek(lat, lon))
    return fetch(`https://astroephem.herokuapp.com/days?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(json => {dispatch(receiveWeek(json))})
}

const shouldFetchWeek = (state) => {
    const week = state.week;
    if (!week) {
        return true
    }
    return !week.isFetching;

}

export const fetchWeekIfNeeded = (lat, lon) => (dispatch, getState) => {
    if (shouldFetchWeek(getState())) {
        return dispatch(fetchWeek(lat, lon))
    }
}

const fetchLocation = (search) => dispatch => {
    dispatch(requestLocation(search))
    return fetch(`https://astroephem.herokuapp.com/locations?query=${search}`)
        .then(response => response.json())
        .then(json => {dispatch(receiveLocation(search, json))})
}

const shouldFetchLocation = (state) => {
    const location = state.location;
    if (!location) {
        return true
    }
    return !location.isFetching;

}

export const fetchLocationIfNeeded = (search) => (dispatch, getState) => {
    if (shouldFetchLocation(getState())) {
        return dispatch(fetchLocation(search))
    }
}
