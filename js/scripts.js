function cupsToOunces(number1) {
  return number1 * 8;
}

function teaToTable(number2) {
  return number2 * 3;
}

function ounceToGram(number3) {
  return number3 * 29;
}

$(document).ready(function() {
  $("form#cupToOunce").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const result1 = cupsToOunces(number1);
    $("#output1").text(result1);
  });
  $("form#teaToTable").submit(function(event) {
    event.preventDefault();
    const number2 = parseInt($("#input2").val());
    const result2 = teaToTable(number2);
    $("#output2").text(result2);
  });
  $("form#ounceToGram").submit(function(event) {
    event.preventDefault();
    const number3 = parseInt($("#input3").val());
    const result3 = ounceToGram(number3);
    $("#output3").text(result3);
  });
});