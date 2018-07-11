import React, { Component } from "react";

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter(event) {
    if (event.keyCode === 13 && this.refs.textComment.value > "") {
      this.props.postNewComment({
        comment: this.refs.textComment.value
      });
      this.refs.textComment.value = "";
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className="row">
        <textarea
          ref="textComment"
          className="form-control"
          cols="30"
          onKeyDown={this.handleEnter}
        />
      </div>
    );
  }
}

export default NewComment;
