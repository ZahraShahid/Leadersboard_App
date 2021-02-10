import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      failure: false
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
        } else if (this.state.score <= 150) {
          this.setState({ failure: true });
        }
      }
    );
  }

  addScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  subScore() {
    this.setState({
      score: this.state.score - 1
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

    const isFail = this.state.failure;
    let textf;
    if (isFail) {
      textf = <span className="x">failed!</span>;
    } else {
      textf = "";
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="std_name">
            {this.props.name}
            <button className="add-btn" onClick={() => this.addScore()}>
              +
            </button>
            <button className="sub-btn" onClick={() => this.subScore()}>
              -
            </button>
          </h2>
          <p className="uni_name">
            {this.props.uni} {text} {textf}
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
