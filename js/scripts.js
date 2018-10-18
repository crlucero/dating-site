$(document).ready(function() {
  $(".formOne").submit(function(event) {
  event.preventDefault();

  var age = $("#age").val();
  var gender = $("#gender").val();
  var movie = $("#movie").val();


  if ( gender === "male" && movie === "action" ) {
    $(".celeb4").show();
  }
  else if (gender === "male" && movie === "comedy" ) {
    $(".celeb3").show();
  }
  if (gender === "female" && movie === "action") {
    $(".celeb2").show();
  }
  else if (gender === "female" && movie === "comedy") {
    $(".celeb1").show();
  }

});

});
