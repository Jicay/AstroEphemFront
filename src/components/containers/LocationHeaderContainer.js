import {connect} from 'react-redux';
import {GET_WEEK_INFOS} from "../../redux/action";
import LocationHeader from "../views/locationHeader";

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch)  => {
    return {
        refreshLatLon: (lat, lon) => dispatch(GET_WEEK_INFOS(lat, lon))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationHeader)