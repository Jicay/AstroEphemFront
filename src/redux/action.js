export const REQUEST_WEEK = 'REQUEST_WEEK';

export const requestWeek = (lat, lon) => ({
    type: REQUEST_WEEK,
    lat,
    lon
});

export const GET_WEEK_INFOS = (lat, lon) =>  ({
    type: 'GET_WEEK_INFOS',
    lat,
    lon
});

const fetchWeek = (lat, lon) => dispatch => {
    dispatch(requestWeek(subreddit))
    return fetch(`https://astroephem.herokuapp.com/days?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
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
