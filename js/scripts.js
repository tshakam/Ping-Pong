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
  //front end logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var  number = parseInt($("input#userNumber").val());
    var result = numberArray(number);
    for (var index = 0; index < result.length; index += 1) {
        $("ul#result").append("<li>" + result[index] + "</li>")
      }

  });
});
