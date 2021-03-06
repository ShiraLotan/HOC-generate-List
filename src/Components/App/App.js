import ListContainer from "../../Container/List/listContainer";
import React from "react";
import "./App.css";

const App = () => (
  <div className="App">
    <ListContainer api="users" />
    <ListContainer api="reviewers" />
  </div>
);

export default App;
