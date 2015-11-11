var TrackPlayer = React.createClass({
    handlePlay: function () {
      this.props.track.play();
    },

  render: function() {
    return (

      <li>
        <h3>{this.props.track.name}</h3>
        <button onClick={this.handlePlay}>Play</button>
      </li>
    );
  }
});
