import React, { useEffect } from "react";
import InfiniteScroll from "../InfiniteScroll/infiniteScroll";
import "./reviewers.css";
const Reviewers = ({ actions, sReviewers, sLoading }) => {
  const { reviewersActions } = actions;

  useEffect(() => {
    reviewersActions.fetchProgramCriticalAnalysisDataInitData();
  }, []);

  const renderPage = () => (
    <div>
      <h2>Reviewers List:</h2>
      <InfiniteScroll list={sReviewers} />
    </div>
  );

  return (
    <div className="reviewers-container">
      {sReviewers.length && renderPage()}
    </div>
  );
};

export default Reviewers;
