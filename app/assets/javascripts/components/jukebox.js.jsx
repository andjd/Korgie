var Jukebox = React.createClass({

  componentDidMount: function () {
    TrackStore.on("change", this.getAllTracks);
  },

  getAllTracks: function() {
    this.forceUpdate();
  },

  render: function () {
    //key on something else?
    return (
      <ul>
        {
          TrackStore.all().map(function(track, idx){
            console.log(track);
            return < TrackPlayer key={idx} track={track} />;
          })
        }
      </ul>
    );
  }

});
