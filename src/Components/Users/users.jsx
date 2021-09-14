import React, { useEffect } from "react";
import InfiniteScroll from "../InfiniteScroll/infiniteScroll";
import "./users.css";

const Users = ({ actions, sUsers, sLoading }) => {
  const { usersActions } = actions;

  useEffect(() => {
    usersActions.fetchProgramCriticalAnalysisDataInitData();
  }, []);

  const renderPage = () => (
    <div>
      <h2>Users List:</h2>
      <InfiniteScroll list={sUsers} />
    </div>
  );

  return <div className="users-container">{sUsers.length && renderPage()}</div>;
};

export default Users;
