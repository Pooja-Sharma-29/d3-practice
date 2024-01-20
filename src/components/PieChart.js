import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = () => {
  const [data] = useState([
    { property: "a", value: 4 },
    { property: "b", value: 3 },
    { property: "c", value: 10 },
    { property: "d", value: 2 },
    { property: "e", value: 8 },
  ]);
  const svgRef = useRef();

  useEffect(() => {
    const w = 400;
    const h = 500;
    const radius = w / 2;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("margin-top", "200px")
      .style("overflow", "visible");

    const formattedData = d3.pie().value((d) => d.value)(data);
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeSet2);

    svg
      .selectAll()
      .data(formattedData)
      .join("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => color(d.value))
      .style("opacity", 0.7);

    svg
      .selectAll()
      .data(formattedData)
      .join("text")
      .text((d) => d.data.property)
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .style("text-anchor", "middle");
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PieChart;
