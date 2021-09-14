import { actionsTypes } from "../../Actions/Reviewers/reviewersAction";
import { Map } from "immutable";

const initialState = {
  loading: false,
  reviewers: []
};

export default function (state = Map(initialState), action) {
  switch (action.type) {
    case actionsTypes.FETCH_REVIEWERS_LIST_START:
      return state.set("loading", true);

    case actionsTypes.FETCH_REVIEWERS_LIST_SUCCESS:
      state = state.set("reviewers", action.payload);
      return state.set("loading", false);

    case actionsTypes.FETCH_REVIEWERS_LIST_FAILED:
      return state.set("loading", false);

    default:
      return state;
  }
}
