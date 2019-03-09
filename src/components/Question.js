import React, { Component } from "react";
import cookie from "../assets/images/cookie.png";
import ReCAPTCHA from "react-google-recaptcha";
import "./style.scss";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bolachaScore: 0,
      biscoitoScore: 0
    };
    this.recaptchaRef = React.createRef();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(option) {
    const { bolachaScore, biscoitoScore } = this.state;
    this.setState({
      [option]: this.state[option] + 1
    });
    //this.recaptchaRef.current.execute();
  }

  render() {
    const { biscoitoScore, bolachaScore } = this.state;
    return (
      <div className="Question">
        <img className="main-image" src={cookie} alt="cookie" />
        <h3 className="question-phrase">Afinal, bolacha ou biscoito?</h3>
        <div className="wrapper-vote">
          <div className="container bolacha">
            <div className="score">{bolachaScore}</div>
            <button
              onClick={() => {
                this.handleButtonClick("bolachaScore");
              }}
            >
              Bolacha
            </button>
          </div>
          <div className="container biscoito">
            <div className="score">{biscoitoScore}</div>
            <button
              onClick={() => {
                this.handleButtonClick("biscoitoScore");
              }}
            >
              Biscoito
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
