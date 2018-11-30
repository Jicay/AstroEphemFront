import { connect } from 'react-redux';
import Summary from "../views/summary";

const mapStateToProps = state => {
    console.log("Summery", state);
    return {
        week: state.weekInfo.weekDetails
    }
}

export default connect(
    mapStateToProps
)(Summary)