import React, { Component } from "react";

import Comment from "./Comment";
class Comments extends Component {
  renderComment({ comments, key }) {
    return <Comment key={key} comments={comments} />;
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.comments).map(key =>
          this.renderComment({ comments: this.props.comments[key], key: key })
        )}
      </div>
    );
  }
}

export default Comments;
