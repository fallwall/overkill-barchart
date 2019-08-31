import React, { Component } from 'react';
import BarChart from './components/BarChart';
import Form from './components/Form';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [10, 70, 2],
      width: 700,
      height: 500,
      color: 'red',
      // data: [["Vermont", 2.1], ["North Dakota", 2.4], ["Iowa", 2.5], ["New Hampshire", 2.5], ["Hawaii", 2.8], ["Utah", 2.8], ["Colorado", 2.9], ["Idaho", 2.9], ["Massachusetts", 2.9], ["South Dakota", 2.9], ["Virginia", 2.9], ["Maine", 3], ["Wisconsin", 3], ["Nebraska", 3.1], ["Oklahoma", 3.2], ["Alabama", 3.3], ["Delaware", 3.3], ["Florida", 3.3], ["Kansas", 3.3], ["Missouri", 3.3], ["New Jersey", 3.3], ["Arkansas", 3.4], ["Indiana", 3.4], ["Minnesota", 3.4], ["Montana", 3.4], ["South Carolina", 3.4], ["Texas", 3.4], ["Rhode Island", 3.5], ["Tennessee", 3.5], ["Connecticut", 3.6], ["Georgia", 3.6], ["Wyoming", 3.6], ["Maryland", 3.8], ["Pennsylvania", 3.9], ["New York", 4], ["Ohio", 4], ["Oregon", 4], ["California", 4.1], ["Nevada", 4.1], ["Illinois", 4.2], ["North Carolina", 4.2], ["Kentucky", 4.3], ["Louisiana", 4.3], ["Michigan", 4.3], ["Washington", 4.6], ["West Virginia", 4.7], ["Arizona", 4.9], ["New Mexico", 4.9], ["Mississippi", 5.1], ["District of Columbia", 5.6], ["Alaska", 6.3]]
      // id: root
    }
  }

  handleFormColorChange = (ev) => {
    this.setState({
      color: ev.target.value
    })
    console.log(ev.target.value);
    console.log(this.state.color);
  }

  handleFormDataChange = (ev) => {
    this.setState(prevState => ({
      data: [...prevState.data, ev.target.value]
    }))
  }

  // handleFormSubmit = (ev) => {
  //   ev.preventDefault();


  // }
  render() {
    return (
      <div>
        <Form
          color={this.state.color}
          data={this.state.data}
          formSubmit={this.handleFormSubmit}
          formColorChange={this.handleFormColorChange}
          formDataChange={this.handleFormDataChange}
        />
        <BarChart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          color={this.state.color} />

      </div>
    )
  }
}
