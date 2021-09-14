import React, { useEffect } from "react";
import InfiniteScroll from "../InfiniteScroll/infiniteScroll";
import Loader from "../Loader/loader";
import "./list.css";

const List = ({ actions, sList, sLoading, api }) => {
  const { listActions } = actions;

  useEffect(() => {
    listActions.fetchListInitData(api);
  }, []);

  const renderPage = () => (
    <div>
      <h2>{api} List:</h2>
      <InfiniteScroll list={sList[api]} />
    </div>
  );

  return (
    <div className="list-container">
      {sList[api]?.length ? renderPage() : <Loader />}
    </div>
  );
};

export default List;
