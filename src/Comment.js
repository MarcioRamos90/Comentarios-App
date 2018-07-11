import React from "react";

const Comment = props => {
  return <p className="alert alert-secondary">{props.comments.comment}</p>;
};

export default Comment;
