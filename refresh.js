var regenerate = function(root){

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
            
  
        }
       
       });

       this.tree_map_data.forEach((tree , index)  => {
        if(tree.name == root){
            console.log(index)
            //$( "svg" ).remove();
            $("#table").empty();
            tabulate(this.tree_map_data[index].children,['project - similarity','tags']);
            
            return;
  
        }
       
       });
    
  }