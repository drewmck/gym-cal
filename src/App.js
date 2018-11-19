import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar.js';


class App extends Component {

  state = {
    date: new Date(),
  }

  onChange = date => {
    console.log(date)
    this.setState({ date })
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default App;
