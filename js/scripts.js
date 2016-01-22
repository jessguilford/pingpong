var pingPong = function(inputNum) {
  var result = "";
  var n = "";
    if (inputNum > 0) {
      for (var i = 1; i <= inputNum; i ++) {
        if (i % 15 === 0) {
          n = "pingpong";
        } else if (i % 3 === 0) {
          n = "ping";
        } else if (i % 5 === 0) {
          n = "pong";
        } else {
          n = i;
        };
        result = result += n += " ";
      };
    } else if (inputNum < 0) {
        for (var i = -1; i >= inputNum; i --) {
          if (i % 3 === 0) {
            n = "ping";
          } else if (i % 5 === 0) {
            n = "pong";
          } else if (i % 15 === 0) {
            n = "pingpong";
          } else {
          n = i;
          };
          result = result += n += " ";
        };
    } else if (isNaN(inputNum) === true) {
      result = result += "Sorry, Ping Pong needs a number to play";
    } else if (inputNum === 0) {
      result = "Give me a break.";
    } else {
      result = result += "Something went terribly awry, please try again";
    };
  return result;
};

$(document).ready(function() {
  $("form#numberentry").submit(function(event) {
    var inputNum = parseInt($("input#inputNum").val());
    var result = pingPong(inputNum);

  $("#result").show();
  $("#output").text(result);

  event.preventDefault();
  });
});
