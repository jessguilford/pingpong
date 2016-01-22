var pingPong = function(inputNum) {
  var result = ""
  for (var i =1; i <= inputNum; i ++) {
    if (i % 15 === 0) {
      n = "pingpong";
    } else if (i % 3 === 0) {
      n = "ping";
    } else if (i % 5 === 0) {
      n = "pong";
    } else {
      var n = i;
    };
    result = result += n += " ";
    console.log(result)
  };
  return result;
};
