import React, { Component } from 'react';
import * as d3 from "d3";

export default class BarChart extends Component {

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    d3.selectAll("svg > *").remove();
    this.drawChart();
  }

  drawChart = () => {
    const data = this.props.data;

    const svg = d3.select("body").append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", this.props.color)

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - (10 * d) - 3)

  }

  render() {
    return (
      <div className="overkill-barchart-container">
        <div id={"#" + this.props.id} className="overkill-barchart"></div>
      </div>
    )
  }
}