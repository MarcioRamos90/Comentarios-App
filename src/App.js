import React, { Component } from "react";
import "bootstrap-css-only";

import NewComment from "./NewComment";
import Comments from "./Comments";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    };

    this.refComments = this.props.base.syncState("comments", {
      context: this,
      state: "comments"
    });

    this.postNewComment = this.postNewComment.bind(this);
  }
  postNewComment(comment) {
    const comments = { ...this.state.comments };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;
    this.setState({
      comments: comments
    });
  }

  auth(provider) {
    var auth = firebase.auth();
    provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(function(result) {
        // User signed in!
        var uid = result.user.uid;
        console.log(uid);
      })
      .catch(function(error) {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn && (
          <NewComment postNewComment={this.postNewComment} />
        )}
        {!this.state.isLoggedIn && (
          <div className="alert alert-info">
            <button onClick={() => this.auth("facebook")}>
              Entre com o Facebook para comentar
            </button>
          </div>
        )}
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
