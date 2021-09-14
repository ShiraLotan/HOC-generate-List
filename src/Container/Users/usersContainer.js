import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jsxActions as userActions } from "../../Actions/Users/usersActions";
import Users from "../../Components/Users/users";

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      usersActions: bindActionCreators(userActions, dispatch)
    }
  };
}

let UsersContainer = connect((state) => {
  const users = state.usersReducers;

  return {
    sUsers: users.get("users"),
    sLoading: users.get("loading")
  };
}, mapDispatchToProps)(Users);

export default UsersContainer;
