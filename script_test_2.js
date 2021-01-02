
var diameter = 850;

var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = diameter,
    height = diameter;
    
var i = 0,
    duration = 350,
    root;
let colour = d3.scale.category20()
function findColour(d) {

  let c = "";

    if (d.depth == 0 || d.depth == 1) {
        c = colour(d.id);
    }
    else {
        c = findColour(d.parent);
    }

  return c;

}

var tree = d3.layout.tree()
    .size([360, diameter / 2 - 220])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

var diagonal = d3.svg.diagonal.radial()
    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });


var svg = d3.select("#graph").append("svg")
    .attr("width", diameter)
    .attr("height", diameter - 60)
    .append("g")
    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

// Add tooltip div
var div = d3.select("body").append("div")
.attr("class", "tooltip")
.style("opacity", 1e-6);


root = trees[0];
root.x0 = height / 2;
root.y0 = 0;

//root.children.forEach(collapse); // start with all children collapsed
update(root);

d3.select(self.frameElement).style("height", "800px");

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root),
      links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth * 130; });
  
  /*var link = svg.selectAll(".link")
    .data(links)
    .enter().append("path")
    .attr("class", "link")
    .attr("d", diagonal);*/

 

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });
      //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      //.attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", "yellow")
      .on("mouseover", mouseover)
      .on("mousemove", function(d){mousemove(d);})
      .on("mouseout", mouseout);
    
  nodeEnter.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      /*.attr("transform", function(d) {
        if (!d.x) {
          console.log("called");
          return "rotate(0)";
        } else {
          return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5) + ")";
        }
      })*/
      .text(function(d) {
        return d.name;
      })
      .style("fill-opacity", 1e-6)
      .call(wrap, 10); // wrap the text in <= 30 pixels*/;

  /*nodeEnter.append("text")
      .attr("x", 1)
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      //.attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
      //.attr("transform", function(d) { return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length * 8.5)  + ")"; })
      //.text(function(d) { return d.name; })
      .style("fill-opacity", 1e-6)
      .call(wrap, 10); // wrap the text in <= 30 pixels*/


  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

  nodeUpdate.select("circle")
      .attr("r", function(d){
           //console.log(d)
           if(root.name==d.name){
               return 25
           }
           else if (d.depth==1) {
                 return 16
           }
           else{
               return 8
           }

      })
      .style("fill",findColour);

     /* node.append("text")
      .attr("dy", ".31em")
      //.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      //.attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
      .text(function(d) { return d.name; })
      .call(wrap, 10); // wrap the text in <= 30 pixels;*/

    nodeUpdate.select("text")
      .style("fill-opacity", 1)
      //.attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      //.attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
      .attr("transform", function(d) {
          return d.x < 180 ? "translate(0)" : "rotate(180)translate(-" + (d.name.length + 50) + ")";
        
      })
     



  // TODO: appropriate transform
  var nodeExit = node.exit().transition()
      .duration(duration)
      //.attr("transform", function(d) { return "diagonal(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

function mouseover() {
    div.transition()
    .duration(300)
    .style("opacity", 1);
}

function mousemove(d) {
    div
    .text( d.name)
    .style("left", (d3.event.pageX ) + "px")
    .style("top", (d3.event.pageY) + "px");
}

function mouseout() {
    div.transition()
    .duration(300)
    .style("opacity", 1e-6);
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  
  update(d);
  //open_url(d.name)
  regenerate(d.name);
}

// Collapse nodes
function collapse(d) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
}

// regenerate graph 

function regenerate(root){

    this.trees.forEach((tree , index)  => {
        if(tree.name == root){
            console.log(index)
            //$( "svg" ).remove();
            $("#graph").empty();
            svg = d3.select("#graph").append("svg")
            .attr("width", width )
            .attr("height", height )
            .append("g")
            .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
            this.root = this.trees[index]
            update(this.root)
            // refresh summary
            //$( "#text" ).remove();
            print_summary(this.root.name)
            leaflet_layer(this.root.name);
  
        }
       
       });

       this.tree_map_data.forEach((tree , index)  => {
        if(tree.name == root){
            console.log(index)
            //$( "svg" ).remove();
            $("#table").empty();
            tabulate(this.tree_map_data[index].children,['project - similarity','tags']);
           // $("#chart").empty();
           // this.generate_treemap(this.tree_map_data[index]);
            
            return;
  
        }
       
       });
    
  }
  
  function open_url(root){
    if(this.root.name==root){
      this.web_links.forEach((link , index)  => {
        if(link.name==root){
          window.open(link.link);
          return;
        }
      })
      
    }
  }

  function print_summary(root){
    this.web_links.forEach((link , index)  => {
        if(link.name==root){
            $('#summary').find('*').not('#link').remove();
            $("#tags").empty();
            $("#link").empty();
            $("#participants").empty();
            $("#status").empty();
            //$("#summary").empty();
            $("#tags").append(link.name+":  "+link.tags)
            $("#link").append('For full project description <a href='+link.link+ ' target="_blank">Click Here</a>')
            $("#summary").append('<br><p id="text">' + link.summary+ '</p>');
            $("#participants").append(link.participants);
            $("#status").append('<strong>Status : </strong> '+ link.status);
            return;
          }

    })

  }
  
  
  function wrap(text, width) {
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 0.3, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }