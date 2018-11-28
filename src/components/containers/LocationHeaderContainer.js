import { connect } from 'react-redux';
import Summary from "../views/summary";
import {GET_WEEK_INFOS} from "../../redux/action";
import LocationHeader from "../views/locationHeader";

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch  => {
    return {
        onClick: () => dispatch(GET_WEEK_INFOS)
    }
}

export default connect(
    mapDispatchToProps
)(LocationHeader)