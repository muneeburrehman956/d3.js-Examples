

var xScale = d3.scaleLinear()
               .domain([0, 6])
               .range([0, 600]);
var yScale = d3.scaleLinear()
               .domain([0, 80])
               .range([150, 0]);

var lineGenerator = d3.line()
	.x(function(d, i) {
		return xScale(i);
	})
	.y(function(d) {
		return yScale(d.value);
	});

    var data = [
        {value: 10}, 
        {value: 30}, 
        {value: 20}, 
        {value: 70}, 
        {value: 60}, 
        {value: 70},
        {value: 50}
    ];

var line = lineGenerator(data);

// Create a path element and set its d attribute
// d3.select("svg")
//    .append("g");
d3.select('g')
	.append('path')
	.attr('d', line);


//    javascript
 
 var data= [80, 100, 56, 120, 180, 30, 40, 120, 160];

 var svgWidth = 550, svgHeight = 350;
  
  var svg = d3.select("svg")
              .attr("width" , svgWidth)
              .attr("height" , svgHeight);
  var  xScale = d3.scaleLinear()
                  .domain([0,d3.max(data)])   //here we show which number can on here
                  .range([0,svgWidth]);   //number shows in width size here we define         
  var yScale = d3.scaleLinear()
                 .domain([0 , d3.max(data)])
                 .range([svgHeight , 0]);
  var x_axis = d3.axisBottom()
                 .scale(xScale);
  var y_axis = d3.axisLeft()
                 .scale(yScale);
       svg.append("g")
          .attr("transform" , 'translate(50 , 10)')
          .call(y_axis);

          var xAxisTranslate = svgHeight- 20;
       svg.append("g")
          .attr("transform" , "translate(50 ," + xAxisTranslate + ")")
          .call(x_axis) ;        
          
