var TrackAction = window.TrackAction = {};


TrackAction.save = function (track) {
  var payload = {actionType: "saveTrack", track: track};

  AppDispatcher.dispatch(payload);
};

TrackAction.load = function (tracks) {
  var payload = {actionType: "loadTracks", tracks: tracks};

  AppDispatcher.dispatch(payload);
};
