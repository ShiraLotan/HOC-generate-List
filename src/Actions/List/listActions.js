const axios = require("axios").default;

export const actionsTypes = {
  FETCH_LIST_START: "FETCH_LIST_START",
  FETCH_LIST_SUCCESS: "FETCH_LIST_SUCCESS",
  FETCH_LIST_FAILED: "FETCH_LIST_FAILED"
};

function fetchListStart() {
  return { type: actionsTypes.FETCH_LIST_START };
}
function fetchListSuccess(payload) {
  return { type: actionsTypes.FETCH_LIST_SUCCESS, payload };
}
function fetchListFailed() {
  return { type: actionsTypes.FETCH_LIST_FAILED };
}

export const jsxActions = {};

jsxActions.fetchListInitData = function (api) {
  return function (dispatch, getState) {
    dispatch(fetchListStart());
    axios
      .get(`http://localhost:3001/${api}`)
      .then((res) => {
        dispatch(fetchListSuccess({ data: res.data, list: api }));
      })
      .catch((err) => {
        dispatch(fetchListFailed());
        console.log(err);
      });
  };
};
