// the business logic
var numbers=[];
function pingpong(number) {
  for (var index = 1; index <=number; index++)
        if (index %15===0) {
    numbers.push("ping pong");
    }else if (index % 5===0) {
      numbers.push("pong");
    } else if (index %3===0) {
      numbers.push("ping");
    }else {
      numbers.push(index);
    }
    }
// #user interface

$(document).ready(function() {
  $("#button").click(function() {
    var number = parseInt($("#Input").val());
    pingpong(number);
    numbers.forEach(function(number){
      $("#results").append("<li>" +number + "</li>");
    });

  });
});
