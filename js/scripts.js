var pingPong = function(inputNum) {
  var result = ""
  for (var i =1; i <= inputNum; i ++) {
    if (i % 3 === 0) {
      n = "ping";
    } else {
      var n = i;
    };
    result += n;
  };
  return result;
};

//
// var pingPong = function(inputNum) {
//   var result = ""
//   for (var i =1; i <= inputNum; i ++) {
//     if (i % 3 === 0) {
//       i = i"ping";
//     }
//     result += i;
//   };
//   return result;
// };
