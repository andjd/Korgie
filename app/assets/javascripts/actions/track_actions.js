var TrackAction = window.TrackAction = {};


TrackAction.save = function (track) {
  var payload = {actionType: "saveTrack", track: track};

  AppDispatcher.dispatch(payload);
};
