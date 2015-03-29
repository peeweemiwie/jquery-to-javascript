//
// Function expression from codeschool
// http://javascript-roadtrip-part3.codeschool.com/levels/1/challenges/13?__utma=1.464696720.1425245541.1427596781.1427637186.4&__utmb=1.1.10.1427637186&__utmc=1&__utmk=50635817&__utmv=-&__utmx=-&__utmz=1.1425245541.1.1.utmcsr%3D%28direct%29%7Cutmccn%3D%28direct%29%7Cutmcmd%3D%28none%29
// =====================
var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;
var applyAndEmpty = function (start, puzzlers){
  var size=puzzlers.length;
  for(var i=0;i<size;i++){
      var func=puzzlers.shift();
      start=func(start);
  }
  return start;
};

console.log(applyAndEmpty(start, puzzlers));
