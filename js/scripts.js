function  numberArray(userNumber) {
  var numbers = [];
  for (var i = 1; i <= userNumber; i++) {
    if (( i % 3 === 0) && ( i % 5 === 0)) {
      numbers.push("pingpong")
    } else if ( i % 5 === 0) {

      numbers.push("pong")

    } else if ( i % 3 === 0){

      numbers.push("ping")

    } else {

        numbers.push(i)

      }
  }
  return numbers;
}

  //front end logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var  number1 = parseInt($("input#number1").val());
    var result = numberArray(number1);
    for (var index = 0; index < result.length; index += 1) {
        $("ul#result").append("<li>" + result[index] + "</li>")
      }

  });
});
