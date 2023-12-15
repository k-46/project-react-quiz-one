import React, { Component } from "react";
import "./ResultComponent.css";

class ResultComponent extends Component {
  render() {
    return (
      <div className="result">
        <h1 style={{ color: "green" }}>Result</h1>
        <div className="resultBox">
          <h3>You need more practice!</h3>
          <h2 style={{ color: "blue" }}>Your score is 20%</h2>
          <div className="resultDetails">
            <p>Total number of questions</p>
            <p>20</p>
          </div>
          <div className="resultDetails">
            <p>Number of attempted questions</p>
            <p>20</p>
          </div>
          <div className="resultDetails">
            <p>Number of correct questions</p>
            <p>4</p>
          </div>
          <div className="resultDetails">
            <p>Number of wrong questions</p>
            <p>16</p>
          </div>
        </div>
        <div className="resultButtons">
          <button id="playAgainButton">Play Again</button>
          <button id="bk2Hme">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
