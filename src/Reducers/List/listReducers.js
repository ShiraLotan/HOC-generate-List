import { actionsTypes } from "../../Actions/List/listActions";
import { Map } from "immutable";

const initialState = {
  loading: false,
  list: { users: [], reviewers: [] }
};

export default function (state = Map(initialState), action) {
  switch (action.type) {
    case actionsTypes.FETCH_LIST_START:
      return state.set("loading", true);

    case actionsTypes.FETCH_LIST_SUCCESS:
      state = state.setIn(["list", action.payload.list], action.payload.data);
      return state.set("loading", false);

    case actionsTypes.FETCH_LIST_FAILED:
      return state.set("loading", false);

    default:
      return state;
  }
}
