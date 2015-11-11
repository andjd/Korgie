
var Track = function (opts) {
  this.name = opts.name;
  this.roll = opts.roll || [];
  this.startTime = null;
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function (currentNotes) {
  this.roll.push({timeslice: Date.now() - this.startTime, notes: currentNotes});
  console.log(this.roll[this.roll.length -1]);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (this.interval) {
    clearInterval(this.interval);
  }
  var playbackStartTime = Date.now();
  var currentRollIdx = 0;

  var _playNotes = function () {
    if (currentRollIdx === this.roll.length) {
      clearInterval(this.interval);
      return;
    }

    var elapsedTime = Date.now() - playbackStartTime,
        currentTimeSlice = this.roll[currentRollIdx].timeslice;

    if (elapsedTime > currentTimeSlice) {

      var currentNoteArray = this.roll[currentRollIdx].notes;

      if (currentRollIdx > 0) {

        // is reading from NoteStore here OK?;
        var filteredOldNotes = NoteStore.all().filter(function (tone){
          return (currentNoteArray.indexOf(tone) === -1);
        });
        filteredOldNotes.forEach(function(tone){
          KeyActions.keyLifted(tone);
        });

      }

      currentNoteArray.forEach(function(tone){
        KeyActions.keyPressed(tone);
      });
      currentRollIdx += 1;
    }
  };

  this.interval = setInterval(_playNotes.bind(this), 10);
};
