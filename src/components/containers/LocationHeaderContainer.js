import {connect} from 'react-redux';
import {fetchWeekIfNeeded} from "../../redux/action";
import LocationHeader from "../views/LocationHeader";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch)  => {
    return {
        refreshWeek: (lat, lon) => dispatch(fetchWeekIfNeeded(lat, lon))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationHeader)