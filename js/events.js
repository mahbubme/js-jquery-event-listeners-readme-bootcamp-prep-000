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
  $('input').on('keydown', function(e){
    if( e.key = '71' ){
      alert("G was pressed!");
    }
  })
}
  
$(document).ready(function(){
  getIt(); 
  frameIt();
  pressIt();
});
