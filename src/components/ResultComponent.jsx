import React, { Component } from "react";

export default class ResultComponent extends Component {
  render() {
    return (
      <div>
        <div className="third">
          <h2 className="res">Result</h2>
          <div className="result-box">
            <p className="txt">You need more practice!</p>
            <h1 className="score">Your score is 20%</h1>
            <div className="details">
              <div className="txt">Total number of questions</div>
              <div className="txt">15</div>
            </div>
            <div className="details">
              <div className="txt">Number of attempted questions</div>
              <div className="txt">9</div>
            </div>
            <div className="details">
              <div className="txt">Number of correct answers</div>
              <div className="txt">3</div>
            </div>
            <div className="details">
              <div className="txt">Number of wrong answers</div>
              <div className="txt">6</div>
            </div>
          </div>
          <div className="button">
          <button className="play-again">Play Again</button>
          <button className="home">Back to Home</button>
          </div>
        </div>
      </div>
    );
  }
}
