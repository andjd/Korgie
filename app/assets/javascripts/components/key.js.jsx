var OrganKey = React.createClass({
  getInitialState: function (){
    return {
      note: new Note(TONES[this.props.tone])
    };
  },

  componentDidMount: function () {
    NoteStore.addChangeListener(this.getActiveTones);
  },

  getActiveTones: function() {
    if (this.toneIsActive()) {
      this.state.note.start();
    } else {
      this.state.note.stop();
    }
    this.forceUpdate();
  },

  toneIsActive: function () {
    return (NoteStore.all().indexOf(this.props.tone) !== -1);
  },

  render: function() {
    var className = "organ-key";
    if (this.toneIsActive()) {
      className += " active";
    }

    return (
      <span className={className}>{this.props.tone}</span>
    );
  }

});
