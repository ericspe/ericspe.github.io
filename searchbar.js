

// add the search bar 
$( document ).ready(function() {
    // code for minimising table
    $("#button").click(function(){
      if($(this).html() == "Hide Table"){
        $(this).html("Show Table");
      }
      else{
          $(this).html("Hide Table");
      }
      $("#table").slideToggle();
  });
    populate_search()
    
    print_summary(root.name)
    $('.search-2').on("select2:selecting", function(e) { 
          console.log(e.params.args.data.text)
          regenerate(e.params.args.data.text)
        // what you would like to happen
     });
});


function populate_search(){
    var options = [];
    projects_list.forEach(function (item, index) {
        options.push(Object.keys(item)[0])
      });
    var options_obj = []
    
    options.forEach(function(element,key) {
        var opt_obj = new Option(element,key);
        options_obj.push(opt_obj);
    });
    
    
    $(".search-1").append(options_obj);
    
    $(".search-1").select2({
      placeholder: 'Select Project type',
      allowClear: true,
     
    });
    // populate default project list for second search 

    var default_options_obj = []


    projects_list.forEach(function (item, index) {
      //options.push(Object.keys(item)[0])
      var key = Object.keys(item)[0];
      if(key=='-- All'){
          //sec_options_obj = []
          projects_list[index][key].forEach(function(element,key) {
            default_options_obj.push( new Option(element,key));
             
          });
          return;
      }
    });
    $(".search-2").append(default_options_obj);
    // end default
    
    $(".search-2").select2({
      placeholder: 'Select project',
      allowClear: true
    });
    
    $(".search-1").on("change", function () {
      var rangeStart = +$(this).val();
      console.log(options[rangeStart])
      var proj_type = options[rangeStart]
      var sec_options_obj = []


      projects_list.forEach(function (item, index) {
        //options.push(Object.keys(item)[0])
        var key = Object.keys(item)[0];
        if(proj_type==key){
            sec_options_obj = []
            projects_list[index][key].forEach(function(element,key) {
                sec_options_obj.push( new Option(element,key));
               
            });
            return;
        }
      });

     
      
      
      $(".search-2 option[value]").remove();
      
      $(".search-2").append(sec_options_obj).val("").trigger("change");
    });
}



