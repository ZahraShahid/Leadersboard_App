import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  render() {
    return (
      <div className="student">
        <div className="left">
          <h2 className="std_name">Zahra Shahid</h2>
          <p className="uni_name">PUCIT</p>
        </div>

        <div className="right">
          <div className="score">
            <h2>96</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
