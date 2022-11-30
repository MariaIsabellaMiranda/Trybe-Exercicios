function tripleTheChances(chances) {
  var multiplicandoPor3 = [];
  for (var index = 0; index < chances.length; index ++) {
    multiplicandoPor3.push(chances[index]*3);
  }
  return multiplicandoPor3;
}

// console.log(tripleTheChances());