import { connect } from 'react-redux';
import Summary from "../views/summary";

const mapStateToProps = state => {
    return {
        lat: state.lat,
        lon: state.lon
    }
}

export default connect(
    mapStateToProps
)(Summary)