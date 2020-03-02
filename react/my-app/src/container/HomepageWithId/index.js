import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

class HomepageWithId extends Component {
  state = {
    redirectToHome: false
  };

  redirectToHome = () => {
    this.setState({
      redirectToHome: true
    });
  };

  render() {
    const { post, redirectToHome } = this.props;
    const { id, title, body } = post;
    console.log("state", this.state);
    return (
      <Fragment>
        {redirectToHome ? (
          <Redirect to="/homepage" />
        ) : (
          <div key={id}>
            <h1>{title}</h1>
            <div>{body}</div>

            <button>
              <Link to="/homepage">Back to homepage</Link>
            </button>
            <button onClick={this.redirectToHome}>Redirect</button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default HomepageWithId;
