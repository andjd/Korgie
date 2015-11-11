(function(root){
var AudioContext = root.AudioContext || root.webkitAudioContext;

  var ctx = new AudioContext()
  var createOscillator = function (freq) {
    var osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  var createGainNode = function () {
    var gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };

  window.Note = function (hz) {
    this.oscillatorNode = createOscillator(hz);
    this.gainNode = createGainNode(hz);
    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function() {
    this.gainNode.gain.value = 0.35;
  };

  Note.prototype.stopxw = function() {
    this.gainNode.gain.value = 0;
  };

}(this));
