import {connect} from 'react-redux';
import {fetchWeekIfNeeded, fetchLocationIfNeeded} from "../../redux/action";
import LocationHeader from "../views/LocationHeader";

const mapStateToProps = (state) => {
    return {
        ...state.location
    }
}

const mapDispatchToProps = (dispatch)  => {
    return {
        refreshWeek: (lat, lon) => dispatch(fetchWeekIfNeeded(lat, lon)),
        completeLocation: (search) => dispatch(fetchLocationIfNeeded(search))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationHeader)