//define functions here
function getIt() {
  $("p").on("click", function(e) {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on("load", function(e){
    $(this).addClass("tasty");
  })
}

function pressIt() {
  
}
  
$(document).ready(function(){
  getIt(); 
  frameIt();
  
});
