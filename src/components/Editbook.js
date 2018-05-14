import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

class Editbook extends Component {
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
    if (!localStorage.getItem("jwtToken")) {
      this.props.history.push("/login");
    }

    this.setState(this.props.location.state); 
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      isbn,
      title,
      author,
      description,
      published_date,
      publisher
    } = this.state;

    axios
      .put("/api/book/"+this.state._id, {
        isbn,
        title,
        author,
        description,
        published_date,
        publisher
      })
      .then(result => {
        console.log(result);
        this.props.history.push("/");
      });
  };

  render() {
    
    const d = this.state.published_date;
    const date = d.substr(0, 10);
    
    
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Edit Book</h2>
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
            value={date}
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
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Save Book
          </button>
        </form>
      </div>
    );
  }
}

export default Editbook;
