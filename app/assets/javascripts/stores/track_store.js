(function (root){

    var _tracks = [];

    var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototype, {

      all: function () {
        return _tracks.slice();
      },

      addTrack: function (track) {
        _tracks.push(track);
        this.emit("change");
      },

      dispatcherIndexId: root.AppDispatcher.register(function(payload) {

        if (payload.actionType == "saveTrack") {
          TrackStore.addTrack(payload.track);
        }
        return true;
      })

  });
}(this));
