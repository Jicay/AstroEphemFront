import {connect} from 'react-redux';
import Week from "../views/Week";
import {fetchWeekIfNeeded} from "../../redux/action";

const mapStateToProps = state => {
    return {
        ...state.weekInfo
    }
}

const mapDispatchToProps = (dispatch)  => {
    return {
        onLoad: (lat, lon) => dispatch(fetchWeekIfNeeded(lat, lon))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Week)