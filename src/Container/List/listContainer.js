import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jsxActions as userActions } from "../../Actions/List/listActions";
import List from "../../Components/List/list";

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      listActions: bindActionCreators(userActions, dispatch)
    }
  };
}

let ListContainer = connect((state) => {
  const list = state.listReducers;

  return {
    sList: list.get("list"),
    sLoading: list.get("loading")
  };
}, mapDispatchToProps)(List);

export default ListContainer;
