import { connect } from 'react-redux';
import Summary from "../views/summary";

const mapStateToProps = state => {
    console.log("Summery", state);
    return {
        lat: state.weekInfo.lat,
        lon: state.weekInfo.lon
    }
}

export default connect(
    mapStateToProps
)(Summary)