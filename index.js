import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import * as Papa from "https://unpkg.com/papaparse@5.3.2/papaparse.min.js"

const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

//const data = ({ nodes: Array.from(new Set(links.flatMap(l => [l.source, l.target])), id => ({ id })), links })

const response = fetch('state_wise_data.csv')
  .then(response => response.text())
  .then(v => Papa.parse(v))
  .catch(err => console.log(err))

console.log("CSV")
response.then(v => console.log(v))

const width = 200
const height = 200


const svg = d3.create("svg")
  .attr("viewBox", [-width / 2, -height / 2, width, height])
  .style("font", "12px sans-serif");

svg.append("defs").selectAll("marker")
  .data(types)
  .join("marker")
  .attr("id", d => `arrow-${d}`)
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", 15)
  .attr("refY", -0.5)
  .attr("markerWidth", 6)
  .attr("markerHeight", 6)
  .attr("orient", "auto")
  .append("path")
  .attr("fill", color)
  .attr("d", "M0,-5L10,0L0,5");

var tag = document.createElement("p");
var text = document.createTextNode("Tutorix is the best e-learning platform");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);
element.appendChild(svg)

console.log("I am here!")

d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
  .text(function (d) { return "I’m number " + d + "!"; });