//define functions here
function getIt() {
  $("p").on("click", function(e) {
    alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", function(e){
    
  })
}
  
$(document).ready(function(){
  getIt(); 
  
});
