import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { array } from "prop-types";
import Loader from "../Loader";

class Homepage extends Component {
  static propTypes = {
    posts: array.isRequired
  };

  returnTitle = obj => {
    const { id, title } = obj;
    return (
      <li key={id} onClick={() => console.log("test")}>
        <Link to={`/homepage/${id}`}>{title}</Link>
      </li>
    );
  };

  render() {
    const { posts } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <ul>
          {posts.map(post => {
            return this.returnTitle(post);
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Homepage;
