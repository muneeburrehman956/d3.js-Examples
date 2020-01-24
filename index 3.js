

var dataset = [80,100,5,120,180,30,40,120,160];
var svgHeight = 200,svgWidth = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);
 
var svg = d3.select('svg')
            .attr('width',svgWidth)
            .attr('height',svgHeight);
var darw_chart = svg.selectAll('rect')
                    .data(dataset)
                    .enter()
                    .append('rect')
                    .attr('y',function(d){
                                      return svgHeight - d;
                    })
                    .attr('width' , barWidth - barPadding )
                    .attr('height', function(d){
                                                 return d ;
                    })
                    .attr('transform',function(d,i){   // for showing all rectangles
                          var tanslate = [barWidth * i,0]; 
                                           return "translate("+ tanslate +")";
                    })       
                    .attr("class", "bar") // for color
                var text = svg.selectAll("text")
                                .data(dataset)
                                .enter()
                                .append("text")
                                .text(function(d) {
                        return d;
                    })
                    .attr("y", function(d, i) {
                        return svgHeight - d - 2;
                    })
                    .attr("x", function(d, i) {
                        return barWidth * i;
                    })
                    .attr("fill", "#A64C38");
                    