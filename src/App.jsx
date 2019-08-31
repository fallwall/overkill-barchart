import React, { Component } from 'react';
import BarChart from './components/BarChart';
import Form from './components/Form';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      width: 700,
      height: 500,
      color: 'red',
      formData: []

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
    const newData = ev.target.value;
    const newDataIndex = ev.target.name;
    this.setState({
      formData: [newData, newDataIndex]
    })
    console.log(this.state.formData);
  }

  handleFormDataUpdate = () => {
    this.setState(prevState => ({
      data: [...prevState.data.filter((d,i)=> i !== parseInt(prevState.formData[1])), prevState.formData[0]],
      formData: []
    }))
  }

  render() {
    return (
      <div>
        <Form
          color={this.state.color}
          data={this.state.data}
          formSubmit={this.handleFormSubmit}
          formColorChange={this.handleFormColorChange}
          formDataChange={this.handleFormDataChange}
          formUpdate={this.handleFormDataUpdate}
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
