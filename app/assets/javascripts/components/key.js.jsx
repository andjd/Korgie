var OrganKey = React.createClass({
  getInitialState: function (){
    return {
      note: new Note(TONES[this.props.tone]),
      activeTones: NoteStore.all()
    };
  },

  componentDidMount: function () {
    NoteStore.addChangeListener(this.getActiveTones);
  },

  getActiveTones: function() {
    this.setState({activeTones: NoteStore.all()});
    if (this.toneIsActive()) {
      this.state.note.start();
    } else {
      this.state.note.stop();
    }
    console.log(this.state.activeTones);
  },

  toneIsActive: function () {
    return (this.state.activeTones.indexOf(this.props.tone) !== -1);
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
