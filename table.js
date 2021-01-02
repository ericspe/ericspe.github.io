var tabulate = function (data=tree_map_data[0].children, columns=['project - similarity','tags']) {
    console.log('hello')
    // sort the values 
    data.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    var table = d3.select('#table').append('table')
    var thead = table.append('thead')
    var	tbody = table.append('tbody');

    // append the header row
    thead.append('tr')
      .selectAll('th')
      .data(columns).enter()
      .append('th')
      .text(function (column) { return column; });
    
    var new_data = [];
    for(x of data){
      var tags = x.tags.join("\n");
      var child_new = {"project - similarity":x.project + "\n"+x.index , "tags":tags}
      new_data.push(child_new)
    }

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
      .data(new_data)
      .enter()
      .append('tr')
     

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return {column: column, value: row[column]};
        });
      })
      .enter()
      .append('td')
      .text(function (d) { console.log(d) ; return d.value; })
      .on("click", function(d) { 
           // console.log(d.column)
            if(d.column=="project - similarity"){
            //console.log(d.value);
            var value = d.value.split("\n")
            regenerate(value[0])
            }
            });;

  return table;
}


var generate_table = function(){
  
  // render the table(s)
  tabulate()
  // get values from second column and set row width according to it 
  $('table tr').each(function() {
    
    var index = parseInt($(this).find("td:nth-child(2)").html());
    $(this).height(index)
       
    //$(this).height(index*2)
    console.log($(this).height(),typeof index); 
  });


}

tabulate()