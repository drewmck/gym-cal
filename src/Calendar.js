import Cal from 'react-calendar';
import './Calendar.css'
import React, { Component } from 'react';

class Calendar extends Component {

  onChange = date => this.props.onChange(date)
  content = ({ date, view }) => {
    console.log (date, view);
    if (view === 'month' && date.getDay() === 0)
       return <p>Its Sunday!</p>
     else
        return null;
  }



  render() {
    return (
        <Cal
          onChange={this.onChange}
          value={this.props.date}
          tileContent = {this.content}
        />
    );
  }
}

export default Calendar;
