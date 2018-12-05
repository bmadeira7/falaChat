import React, { Component } from "react";
import "./styles.css";
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="loginPage container">
        <div>
       
          <h1 className="text-center title cover">
            Welcome to<p className="fala"> <i className="far fa-paper-plane"></i>  FALA</p>- a messaging application
          </h1>
          <div className="card loginCard">
            <div className="card-body">
              <h2 className="text-center">Enter your username:</h2>
              <form
                className="d-flex justify-content-center"
                onSubmit={this.onSubmit}
              >
                <input
                  type="text"
                  placeholder="Your full name"
                  onChange={this.onChange}
                />
                <input className="btn btn-secondary" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
