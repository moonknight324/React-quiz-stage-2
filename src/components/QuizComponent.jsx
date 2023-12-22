import React, { Component } from "react";
import data from "../resources/questions.json";

export default class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data,
      index: 0,
      prevQuestion: {},
      currQuestion: {},
      nextQuestion: {},
    };
  }

  componentDidMount() {
    this.showQuestion();
  }

  showQuestion = () => {
    const { index, questions } = this.state;
    if (index >= 0 && index < questions.length) {
      const prevQuestion = index > 0 ? questions[index - 1] : null;
      const currQuestion = questions[index];
      const nextQuestion = index < questions.length - 1 ? questions[index + 1] : null;

      this.setState({
        prevQuestion,
        currQuestion,
        nextQuestion,
      });
    }
  };

  handlePrev = () => {
    this.setState(
      (prevState) => ({
        index: prevState.index - 1,
      }),
      () => {
        this.showQuestion();
      }
    );
  };

  handleNext = () => {
    this.setState(
      (prevState) => ({
        index: prevState.index + 1,
      }),
      () => {
        this.showQuestion();
      }
    );
  };

  handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload(false);
    }
  };

  render() {
    const { currQuestion,index } = this.state;

    return (
      <div className="second">
        <div className="box">
          <h2>Question</h2>
          <div className="q-no">
            <p>1 of {this.state.questions.length}</p>
          </div>
          <div className="question">
            <p>{currQuestion ? currQuestion.question : null}</p>
          </div>
          <div className="option-btns-1">
            <button className="btn">{currQuestion ? currQuestion.optionA : null}</button>
            <button className="btn">{currQuestion ? currQuestion.optionB : null}</button>
          </div>
          <button className="btn">{currQuestion ? currQuestion.optionC : null}</button>
          <button className="btn">{currQuestion ? currQuestion.optionD : null}</button>
          <div>
            <button className="prev-btn" onClick={this.handlePrev}>
              Previous
            </button>
            <button className="next-btn" onClick={this.handleNext}>
              Next
            </button>
            <button className="quit-btn" onClick={this.handleQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
