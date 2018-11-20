import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar.js';


class App extends Component {

  state = {
    date: new Date(),
    processStep: 0,
    wentToGym: false,
  }

  onChange = (date) => {
    console.log(date)
    this.setState({ date })
  }

  answeredGymQuestion = (wentToGym) => {
    this.setState({wentToGym:wentToGym})


    this.setState({processStep: this.state.processStep+1})
  }

  getStepHTML = () => {

    switch (this.state.processStep) {
      case 0:
            return <div>
                    Did you go to the gym?
                      <button onClick={() => this.answeredGymQuestion(true)}>Yes</button>
                      <button onClick={() => this.answeredGymQuestion(false)}>No</button>
                  </div>

      case 1:
          return <div>
                  <Calendar
                    onChange={this.onChange}
                    date={this.state.date}
                    wentToGym={this.state.wentToGym}
                  />
                </div>

      default:

    }
  }

  render() {


    return (


      <div>
        {this.getStepHTML()}
      </div>
    );
  }
}

export default App;
