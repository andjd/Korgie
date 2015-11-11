var TrackAPI = window.TrackAPI = {};

TrackAPI.fetch = function () {
  $.ajax("/tracks", {
    type: "GET",
    dataType: "json",
    success: function (tracks) {
      TrackAction.load(tracks);
    }
  });
};
