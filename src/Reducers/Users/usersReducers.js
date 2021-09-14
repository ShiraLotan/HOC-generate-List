import { actionsTypes } from "../../Actions/Users/usersActions";
import { Map } from "immutable";

const initialState = {
  loading: false,
  users: []
};

export default function (state = Map(initialState), action) {
  switch (action.type) {
    case actionsTypes.FETCH_USERS_LIST_START:
      return state.set("loading", true);

    case actionsTypes.FETCH_USERS_LIST_SUCCESS:
      state = state.set("users", action.payload);
      return state.set("loading", false);

    case actionsTypes.FETCH_USERS_LIST_FAILED:
      return state.set("loading", false);

    default:
      return state;
  }
}
