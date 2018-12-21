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
  $('input').on('keydown', function(key){
    if( key.which == '71' ){
      alert("G was pressed!");
    }
  })
}

function submitIt() {
  $('form').on('submit', function(e){
    alert();
  })
}
  
$(document).ready(function(){
  getIt(); 
  frameIt();
  pressIt();
});
