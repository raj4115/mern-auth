import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

class Newbook extends Component {
  constructor() {
    super();
    this.state = {
      isbn: "",
      title: "",
      author: "",
      description: "",
      published_date: "",
      publisher: ""
    };
  }

  componentDidMount() {
   if(!localStorage.getItem("jwtToken")) {
    this.props.history.push("/login");
   }
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const { isbn, title, author, description, published_date, publisher } = this.state;

    axios.post("/api/book/", { isbn, title, author, description, published_date, publisher }).then(result => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">New Book</h2>
          <label htmlFor="isbn" className="sr-only">
            ISBN
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="ISBN"
            name="isbn"
            value={this.state.isbn}
            onChange={this.onChange}
            required
          />
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            required
          />
          <label htmlFor="author" className="sr-only">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Author"
            name="author"
            value={this.state.author}
            onChange={this.onChange}
            required
          />
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            required
          />
          <label htmlFor="published_date" className="sr-only">
            Date Published
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Published Date"
            name="published_date"
            value={this.state.published_date}
            onChange={this.onChange}
            required
          />
          <label htmlFor="publisher" className="sr-only">
            Publisher
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Publisher"
            name="publisher"
            value={this.state.publisher}
            onChange={this.onChange}
            required
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

export default Newbook;
