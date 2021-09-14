const axios = require("axios").default;

export const actionsTypes = {
  FETCH_REVIEWERS_LIST_START: "FETCH_REVIEWERS_LIST_START",
  FETCH_REVIEWERS_LIST_SUCCESS: "FETCH_REVIEWERS_LIST_SUCCESS",
  FETCH_REVIEWERS_LIST_FAILED: "FETCH_REVIEWERS_LIST_FAILED"
};

function fetchReviewersListStart() {
  return { type: actionsTypes.FETCH_REVIEWERS_LIST_START };
}
function fetchReviewersListSuccess(payload) {
  return { type: actionsTypes.FETCH_REVIEWERS_LIST_SUCCESS, payload };
}
function fetchReviewersListFailed() {
  return { type: actionsTypes.FETCH_REVIEWERS_LIST_FAILED };
}

export const jsxActions = {};

jsxActions.fetchProgramCriticalAnalysisDataInitData = function () {
  return function (dispatch, getState) {
    dispatch(fetchReviewersListStart());
    axios
      .get("http://localhost:3001/reviewers")
      .then((res) => {
        dispatch(fetchReviewersListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchReviewersListFailed());
        console.log(err);
      });
  };
};
