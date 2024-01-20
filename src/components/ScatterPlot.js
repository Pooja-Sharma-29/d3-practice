import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const ScatterPlot = () => {
  const [data] = useState([
    [90, 20],
    [20, 100],
    [66, 44],
    [53, 80],
    [24, 182],
    [80, 72],
    [10, 76],
    [33, 150],
    [100, 15],
  ]);
  const svgRef = useRef();

  useEffect(() => {
    // setting up container
    const w = 400;
    const h = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("margin-top", "100px")
      .style("margin-bottom", "100px")
      .style("overflow", "visible");

    // setting up scaling
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, w]);

    const yScale = d3.scaleLinear().domain([0, 200]).range([h, 0]);

    // setting up axis
    const xAxis = d3.axisBottom(xScale).ticks(data.length);

    const yAxis = d3.axisLeft(yScale).ticks(10);

    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);

    svg.append("g").call(yAxis);

    // setting up axis labeling

    svg
      .append("text")
      .attr("x", w / 2)
      .attr("y", h + 50)
      .text("x");

    svg
      .append("text")
      .attr("y", h / 2)
      .attr("x", -50)
      .text("y");

    // setting up svg data
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => xScale(d[0]))
      .attr("cy", (d) => yScale(d[1]))
      .attr("r", 2);
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ScatterPlot;
