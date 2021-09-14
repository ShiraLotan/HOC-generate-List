const axios = require("axios").default;

export const actionsTypes = {
  FETCH_USERS_LIST_START: "FETCH_USERS_LIST_START",
  FETCH_USERS_LIST_SUCCESS: "FETCH_USERS_LIST_SUCCESS",
  FETCH_USERS_LIST_FAILED: "FETCH_USERS_LIST_FAILED"
};

function fetchUsersListStart() {
  return { type: actionsTypes.FETCH_USERS_LIST_START };
}
function fetchUsersListSuccess(payload) {
  return { type: actionsTypes.FETCH_USERS_LIST_SUCCESS, payload };
}
function fetchUsersListFailed() {
  return { type: actionsTypes.FETCH_USERS_LIST_FAILED };
}

export const jsxActions = {};

jsxActions.fetchProgramCriticalAnalysisDataInitData = function () {
  return function (dispatch, getState) {
    dispatch(fetchUsersListStart());
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        dispatch(fetchUsersListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersListFailed());
        console.log(err);
      });
  };
};
