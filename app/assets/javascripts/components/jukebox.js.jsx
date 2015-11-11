var Jukebox = React.createClass({

  componentDidMount: function () {
    window.TrackStore.on("change", this.getAllTracks);
    TrackAPI.fetch();
  },

  getAllTracks: function() {
    this.forceUpdate();
  },

  render: function () {
    //key on something else?
    return (
      <ul>
        {
          window.TrackStore.all().map(function(track, idx){
            console.log(track);
            return < TrackPlayer key={idx} track={track} />;
          })
        }
      </ul>
    );
  }

});
