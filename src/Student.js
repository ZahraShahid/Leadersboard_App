import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        score: this.props.score
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  addScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    const isSuccess = this.state.success;
    let text;
    if (isSuccess) {
      text = <span>Success!</span>;
    } else {
      text = "";
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="std_name">
            {this.props.name}
            <button className="add-btn" onClick={() => this.addScore()}>
              +
            </button>
          </h2>
          <p className="uni_name">
            {this.props.uni} {text}
          </p>
        </div>

        <div className="right">
          <div className="score">
            <h2>{this.state.score}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
