import Cal from 'react-calendar';
import './Calendar.css'
import React, { Component } from 'react';

class Calendar extends Component {

  onChange = date => this.props.onChange(date)
  content = ({ date, view }) => {
    if (date.getDate() === this.props.date.getDate())
      {
          if (this.props.wentToGym)
              return <p>Went to gym</p>

          else
              return <p>Did not go to gym</p>


      }

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
