d3.select("body")
  .append("svg")
    .attr("width",50)
    .attr("height",50)
  .append("circle")
    .attr("cx",25)
    .attr("cy",25)
    .attr("r",25)
    .style("fill","blue")

d3.select("body")
  .append("svg2")
    .attr("width",250)
    .attr("height",50)
  .append("text")
    .text("Easy Peasy")
    .attr("x",0)
    .attr("y",25)
    .style("fill","blue")