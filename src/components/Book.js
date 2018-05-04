import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Book extends Component {
  render() {
    const date = new Date(this.props.location.state.published_date); 
    return (
      <div className="container">
        <div class="jumbotron">
          <h2 class="display-5">{this.props.location.state.title}</h2>
          <p class="lead">
          <strong><em>Description: </em></strong>&nbsp;{this.props.location.state.description}
          <hr/>
          <strong><em>Author: </em></strong>&nbsp;{this.props.location.state.author}
          </p>
          <hr class="my-4" />
          <p>
          <strong><em>ISBN: </em></strong>&nbsp;{this.props.location.state.isbn}
          </p>
          <p class="lead">
          <strong><em>Published Date: </em></strong>&nbsp;{date.toDateString()}
          <hr/>
          <strong><em>Publisher: </em></strong>&nbsp;{this.props.location.state.publisher}
          </p>
        </div>
      </div>
    );
  }
}

export default Book;
