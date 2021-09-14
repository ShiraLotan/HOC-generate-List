import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jsxActions as reviewersActions } from "../../Actions/Reviewers/reviewersAction";
import Reviewers from "../../Components/Reviewers/reviewers";

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      reviewersActions: bindActionCreators(reviewersActions, dispatch)
    }
  };
}

let ReviewersContainer = connect((state) => {
  const reviewers = state.reviewersReducer;

  return {
    sReviewers: reviewers.get("reviewers"),
    sLoading: reviewers.get("loading")
  };
}, mapDispatchToProps)(Reviewers);

export default ReviewersContainer;
