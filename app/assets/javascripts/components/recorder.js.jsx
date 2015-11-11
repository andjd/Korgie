var Recorder = React.createClass({

  getInitialState: function() {
    return {
        track: new Track({name: "track"}),
        isRecording: false,
        prevNotes: []
      };
  },

  componentDidMount: function () {
    NoteStore.addChangeListener(this.handleNoteChange);
  },

  handleNoteChange: function () {
    if (this.state.isRecording &&
      this.state.prevNotes.toString() !== NoteStore.all().toString()) {
      this.addNotesToTrack();
    }
    this.setState({prevNotes: NoteStore.all()});
  },

  addNotesToTrack: function (){
    this.state.track.addNotes(NoteStore.all());
  },

  handleStart: function () {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  handleStop: function () {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  handlePlay: function () {
    if (this.state.isRecording) {
      this.handleStop();
    }
    this.state.track.play();
  },

  handleSave: function () {
    TrackAction.save(this.state.track);
    var newName = prompt("Please name your next track");
    this.setState({track: new Track({name: newName})});
  },

  render: function() {
    return (
      <div>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }

});
