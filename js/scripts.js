function  numberArray(userNo) {
  var numbers = [];
  for (var index1= 1; index1<= userNo; index1++) {
    if (( index1 % 3 === 0) && ( index1 % 5 === 0)) {
      numbers.push("ping pong")
    } else if ( index1 % 5 === 0) {
      numbers.push("pong")
    } else if ( index1 % 3 === 0){
      numbers.push("ping")
    } else {
        numbers.push(index1)
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
