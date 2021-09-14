import React from "react";
import "./infiniteItem.css";
const InfiniteItem = ({
  data: { firstName, lastName, email, comments, catchPhrase },
  num
}) => {
  return (
    <div className="list-group-item">
      <span>
        <span className="list-headline">First Name:</span> {firstName}
      </span>
      <span>
        <span className="list-headline">Last Name:</span> {lastName}
      </span>
      <span>
        <span className="list-headline">Email:</span> {email}
      </span>
      <span>
        <span className="list-headline">Comments:</span> {comments}
      </span>
      <span>
        <span className="list-headline">Catch Phrase:</span> {catchPhrase}
      </span>

      {/* <img src={image} /> */}
    </div>
  );
};
export default InfiniteItem;
