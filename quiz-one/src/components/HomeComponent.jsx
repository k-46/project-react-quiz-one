import React, { Component } from "react";
import "./HomeComponent.css";

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <h1>Quiz App</h1>
        <button className="playButton">Play</button>
      </div>
    );
  }
}

export default HomeComponent;
