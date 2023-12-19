import React, { Component } from "react";
import "./QuizComponent.css";

class QuizComponent extends Component {
  render() {
    return (
        <div className="whole-quiz">
        <div className="quiz">

        <div className="questionBlock">
          <h2>Question</h2>
          <p id="questionNo">1 of 15</p>
          <h2 id="question">Which is the only mammal that can jump?</h2>
        </div>

        <div className="optionsBlock">
          <div className="options">
            <button className="option">Dog</button>
            <button className="option">Elephant</button>
            <button className="option">Goat</button>
            <button className="option">Lion</button>
          </div>
          <div className="settingButtons">
            <button id="previousButton">Previous</button>
            <button id="nextButton">Next</button>
            <button id="quitButton">Quit</button>
          </div>
        </div>
      </div>
        </div>
    );
  }
}

export default QuizComponent;
