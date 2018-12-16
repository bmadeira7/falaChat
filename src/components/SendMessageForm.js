import React, { Component } from "react";

class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    const styles = {
      container: {
        padding: 10,
        borderTop: "1vh solid #6BE0E9",
        marginBottom: 10
      },
      form: {
        display: "flex"
      },
      
    };
    return (
      <div style={styles.container}>
        <div>
          <form onSubmit={this.onSubmit} style={styles.form}>
            <input
            className="messageInputForm"
              type="text"
              placeholder="Type a message here then press ENTER"
              onChange={this.onChange}
              value={this.state.text}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SendMessageForm;
