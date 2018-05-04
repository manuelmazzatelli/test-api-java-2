
/*


*/


jQuery(function() {
  jQuery.getJSON(
  "https://api.themoviedb.org/3/search/person?api_key=855d0f27ac90850576cebfa7bc46b9f6&query=Colin%20Farrell",
  function(actors) {
  console.log(actors.results[0].id)
 
   for(let i = 0; i < actors.results[0].id; i++){
    document.getElementById("place").innerHTML = "<li>" + actors.results[0].id + "</li>"
   
  }
  
  
  ;



  jQuery.getJSON(
  "https://api.themoviedb.org/3/discover/movie?api_key=855d0f27ac90850576cebfa7bc46b9f6&with_cast=" + actors.results[0].id + "&sort_by=release_date:desc",
  function(movies) {
  console.log(movies)
  
  for(let i = 0; i < movies; i++){
    document.getElementById("place").innerHTML = "<li>" + movies + "</li>"
   
  }

  
  
  ;
  }
  );
  }
  );
  });
  
  

 
 