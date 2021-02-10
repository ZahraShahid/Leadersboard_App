import React, { Component } from "react";
import "./App.css";
import Student from "./Student.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="lb_heading">Leadersboard</h1>
        <Student name="Laiba Zahid" uni="Hajvery University" score={341} />
        <Student name="Zahid Ahmed" uni="NUML" score={357} />
        <Student name="Ahtsiham Shahid" uni="FAST NUCES" score={318} />
        <Student name="Hadia Khan" uni="Punjab University" score={368} />
        <Student name="Zahra Shahid" uni="PUCIT" score={289} />
      </div>
    );
  }
}

export default App;
