window.TONES = {
  A: 880,
  B: 988,
  C: 1046.5,
  D: 1175,
  E: 1318.5,
  F: 1397,
  G: 1568
};

window.createToneArray = function() {
  var tones = [];
  for (var tone in window.TONES) {
    tones.push(tone);
  }
  return tones;
};
