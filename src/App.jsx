import React, { Component } from 'react';
import BarChart from './components/BarChart';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    // id: root
    }
   }
  render() {
    return (
      <div>
        <BarChart
          data={this.state.data}
          width={this.state.width}
          height={this.state.height} />
      </div>
    )
  }
}
